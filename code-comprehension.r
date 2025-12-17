library(ez) #for doing the ANOVAs
library(dplyr) # great library for massaging data
library(ggplot2) # a great package for making pretty plots
library(car) # to use recode function 
library(reshape2) #To convert "long format" in R (all dependendent variables in one column/variable) to wide format (different groups in different columns)
library(jsonlite) # To read the survey response as a json object


load_file <- function(f) {
  d <- read.csv(f, stringsAsFactors = FALSE)
  v <- unlist(strsplit(f, "[/.]")) # split the path
  pid <- v[length(v) - 1]
  d$pid <-  pid
  return(d)
}

# I put the data file in a specific folder. 
file_list <- list.files(path="/home/calvin/Documents/CogSci/code-comprehension/data", full.names = TRUE)
data <- do.call(rbind, lapply(file_list, load_file))

# Survey responses
resp <- filter(data, trial_type == "survey-multi-choice")
survey_data <- do.call(rbind, apply(resp, 1, function(x) data.frame(fromJSON(x[c('response')]), pid=x[c('pid')])))



# Looking for patterns in survey responses, but couldn't find any
table(survey_data$programmingYears, survey_data$programmingSkill)
table(survey_data$pythonYears, survey_data$pythonSkill)
table(survey_data$pythonSkill, survey_data$programmingSkill)
table(survey_data$pythonYears, survey_data$programmingYears)


# Look at response times on the whole
# Throw out data for block 4, and one of the types - due to design changing
data <- filter(data, block != 3)
data <- filter(data, code_type != 'single')
trials <- filter(data, !is.na(len))


table(data$pid) # Make sure everyone does the same number of trials


# Add correct responses (oops)
a <- read_json("/home/calvin/Documents/CogSci/code-comprehension/trials.json")
b <- as.data.frame(do.call(rbind, a$list))
colnames(b) <- c("i", "correct_ans", "len", "program_name", "code_type")
b$len <- unlist(b$len)
b$correct_ans <- unlist(b$correct_ans)
b$code_type <- unlist(b$code_type)
b$i <- unlist(b$i)
b$program_name <- unlist(b$program_name)


trials <- trials %>%
  left_join(b %>% select(correct_ans, len, program_name, code_type), by=c("len", "program_name", "code_type"))

trials$response <- as.numeric(trials$response)
trials$correct_ans <- as.numeric(trials$correct_ans)

plot(trials$correct_ans, trials$response)
differ <- trials$response - trials$correct_ans
hist(differ, breaks=seq(min(differ) - 0.5, max(differ) + 0.5), 
     main="Distribution of errors",
     xlab="Difference from correct response")

# How many errors were off by one
wrong <- filter(trials, correct_ans != response)
nrow(wrong) / nrow(trials)
off_by_one <- filter(trials, abs(correct_ans - response) == 1)
nrow(off_by_one) / nrow(wrong)
plot(table(wrong$len))

# Lowkey just add  the survey response
trials <- trials %>% left_join(survey_data %>% select(pid, pythonYears, pythonSkill, programmingYears, programmingSkill), by = "pid")

# ANOVA is weird for within, but genuinely nothing anyway...
ezANOVA(trials, dv=rt, wid=pid, between=c(programmingSkill, len, code_type))
table(trials$len, trials$code_type, trials$programmingSkill)

# Thank you LLMs
# subjectSummary <- trials %>%
#   left_join(survey_data %>% select(pid, pythonYears, pythonSkill, programmingYears, programmingSkill), by = "pid") %>%
#   group_by(pid) %>%
#   summarise(
#     py_yrs = first(pythonYears),   # or max(), or unique(), depending on data
#     prog_yrs = first(programmingYears),
#     py_skill = first(pythonSkill),
#     prog_skill = first(programmingSkill),
#     rt  = mean(rt),
#     .groups = "drop"
#   )
# ggplot(subjectSummary, aes(x=py_skill, y=rt)) +  
#   stat_summary(fun = mean, geom = "point", color = "red", size = 3) +
#   stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9)) +
#   geom_point()


# Were the


byseveral <- group_by(trials, pid, len)
subjectSummary <- summarize(byseveral, count=n(), accuracy=sum(correct=='true')/n(), rt=mean(rt))
plot(subjectSummary$len, subjectSummary$rt)

# First analyze percent correct as the indep variable
byseveral <- group_by(trials, pid, code_type, block, len)
pcaverages<-summarize(byseveral,percentCorrect=sum(correct=="true")/n(), avgRt=mean(rt)) #gives average accuracy broken down by block and stimulus type. % correct = count of correct trials divided by total number of trials n()

## Here an ANOVA shows main effects of code_type, len, interaction of code_type and block, and 3 way
ezANOVA(data=pcaverages, dv=percentCorrect, within=c(code_type, len), wid=pid)
ggplot(pcaverages, aes(x=len, y=percentCorrect, color=code_type, shape=code_type))+
  stat_summary(fun=mean, geom="line")+
  stat_summary(fun=mean, geom="point", size=3)+
  # stat_summary(fun.data=mean_cl_normal, geom="errorbar", width=0.5)+
  xlab("List Length")+
  ylab("Accuracy")+
  theme(legend.text=element_text(size=rel(1.5)), title=element_text(size=rel(1.8)), axis.text=element_text(size=rel(1))) + 
  labs(title="Code Comprehension", colour="Program Type", shape="Program Type")


### nostate - the intentionally easiest problems, were the most correct
### Only accuracy on hard problems improves in later blocks
### Interestingly the count_state programs were the hardest to learn??

# Let's see if rt and percent correct seem related - hard to tell from this high level
byseveral <- group_by(data, pid, code_type)
subjectSummary <- summarize(byseveral,percentCorrect=sum(correct=="true")/n(), avgRt=mean(rt))
plot(subjectSummary$percentCorrect, subjectSummary$avgRt)
# Non-significant negative correlation
cor.test(subjectSummary$avgRt, subjectSummary$percentCorrect)

# Next, the response time as the dependent variable
responseTimes<-filter(trials, correct=="true") # don't include incorrect trials for response time analysis
hist(responseTimes$rt,breaks=2000,xlab="RT",ylab="Frequency") # get an overall feel for the RT distribution

fit <- lm(responseTimes$rt ~ responseTimes$len * responseTimes$block)
summary(fit)
plot(responseTimes$len, responseTimes$rt, main="List length vs. Response time")
abline(fit, )

responseTimes %>% 
  ggplot(aes(x=len,
             y=rt))+
  geom_point()+
  geom_smooth(method = "lm",
              se=T)+
  xlab("List Length")+
  ylab("Response Time")+
  theme(legend.text=element_text(size=rel(1.5)), title=element_text(size=rel(1.8)), axis.text=element_text(size=rel(1))) + 
  labs(title="Code Comprehension", color="Program Type", fill="Program Type")

# Resonse times for correct answers - Code type matters
ezANOVA(data=responseTimes, dv=rt, within=c(code_type),wid=pid)
ggplot(responseTimes, aes(x=code_type, y=rt,fill=code_type, color=code_type))+
  stat_summary(fun=mean, geom="bar",position=position_dodge(width=0.9), show.legend = FALSE)+
  stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9), show.legend = FALSE, color="black", width=0.5)+
  xlab("Program Type")+
  ylab("Response Time")+
  theme(legend.text=element_text(size=rel(1.5)), title=element_text(size=rel(1.8)), axis.text=element_text(size=rel(1))) + 
  labs(title="Code Comprehension", color="Program Type", fill="Program Type")


# Does length matter across blocks - yes! Longer programs are harder
ezANOVA(data=responseTimes, dv=rt, within=c(len, block), wid=pid)
ggplot(responseTimes, aes(x=block, y=rt,fill=as.factor(len), color=as.factor(len)))+
  stat_summary(fun=mean, geom="bar",position=position_dodge(width=0.9))+
  stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9), color="black", width=0.5)+
  xlab("Block Index")+
  ylab("Response Time")+
  theme(legend.text=element_text(size=rel(1.5)), title=element_text(size=rel(1.8)), axis.text=element_text(size=rel(1))) + 
  labs(title="Code Comprehension", color="List Length", fill="List Length")

# Looking at length for different code types
# The graph says that no-state has much less slope than the hard and count-state programs
# This makes intuitive sense to me
ezANOVA(data=responseTimes, dv=rt, within=c(len, code_type),  wid=pid)
ggplot(responseTimes, aes(x=as.factor(len), y=rt,fill=code_type, color=code_type))+
  stat_summary(fun=mean, geom="bar",position=position_dodge(width=.9))+
  stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9), color="black", width=0.5)+
  xlab("List Length")+
  ylab("Response Time")+
  theme(legend.text=element_text(size=rel(1.5)), title=element_text(size=rel(1.8)), axis.text=element_text(size=rel(1))) + 
  labs(title="Code Comprehension", color="Program Type", fill="Program Type")



# Is it really linear?
m1 <- lm(responseTimes$rt ~ responseTimes$len + I(responseTimes$len^2))

line_fit <- lm(responseTimes$rt ~ responseTimes$len)

m2 <- lm(responseTimes$rt ~ I(log(responseTimes$len)))
# Seems from this that nothing does significantly better than linear here


# Learning effects

# Negative correlation between rt and block
bfit <- lm(responseTimes$rt ~ responseTimes$block)
summary(bfit)
plot(jitter(responseTimes$block), responseTimes$rt)
abline(bfit)

# Get accuracy by subject by block
byseveral <- group_by(trials, pid, block)
pcaverages <- reframe(byseveral, percentCorrect=sum(correct=="true")/n())
plot(pcaverages$block, pcaverages$percentCorrect)


#
b0 <- filter(responseTimes, block==0)
summary(lm(b0$rt ~ b0$len))
# Intercept: 24211, m: 1680

b1 <- filter(responseTimes, block==1)
summary(lm(b1$rt ~ b1$len))
# Intercept: 14443, m: 864

b2 <- filter(responseTimes, block==2)
summary(lm(b2$rt ~ b2$len))
# Intercept: 11365, m: 722.9

corr_data <- data.frame(block=c(0, 1, 2), intercept=c(24211, 14443, 11365), slope=c(1680, 864, 722.9))
plot(corr_data$block, corr_data$intercept, ylim=c(0, 25000), type='l', col='blue', lwd=2, xaxp=c(0, 2, 2), xlab='', ylab='')
points(corr_data$block, corr_data$intercept, type='p', col='blue', bg='blue', pch=21, lwd=2)
points(corr_data$block, corr_data$slope, type='l', col='red', lwd=2)
points(corr_data$block, corr_data$slope, type='p', col='red', bg='red', pch=23, lwd=2)
legend( "topleft"
        , inset = c(0,0.2), 
        , cex = 1.5, 
        , bty = "n", 
        , legend = c("Intercept", "Slope"), 
        , text.col = c("blue", "red"),
        , col =  c("blue", "red"), 
        , pt.bg =  c("blue", "red")
        , pch = c(21, 23)
)
title(main="Response fits per block", xlab="Block Index", ylab='ms')


plot(jitter(responseTimes$len), responseTimes$rt, col=responseTimes$block + 1, pch=responseTimes$block + 21, type='p', bg=responseTimes$block + 1)
abline(lm(b2$rt ~ b2$len), col=3, lwd=2)
abline(lm(b1$rt ~ b1$len), col=2, lwd=2)
abline(lm(b0$rt ~ b0$len), col=1, lwd=2)
legend( "topleft"
        , inset = c(0,0), 
        , cex = 1.5, 
        , bty = "n", 
        , legend = c("Block 0", "Block 1", "Block 2"), 
        , text.col = c(1, 2, 3),
        , col = c(1,2, 3), 
        , pt.bg = c(1, 2, 3)
        , pch = c(21,22, 23)
)

#TODO: Stuff below here maybe reusable

# Pretty clear learning / warmup effect
#For looking at whether and how percent correct is influenced by word type and block
byseveral<-group_by(trials,pid,code_type,block) #break data down by subject, block, and word/nonword type
pcaverages<-summarize(byseveral,percentCorrect=sum(correct=="true")/n()) #gives average accuracy broken down by block and stimulus type. % correct = count of correct trials divided by total number of trials n()
model<-ezANOVA(data=pcaverages,dv=percentCorrect,within=c(code_type,block),wid=pid) # conduct a repeated measures ANOVA - dv = dependent variable.  within = a list of all of the within subject variables.  wid = variable that is used to group data by subject
model # show results of the ANOVA model
table1 <- tapply(X=pcaverages$percentCorrect,INDEX=list(pcaverages$code_type,pcaverages$block),FUN=mean) #apply mean function to RT broken down by block and type of stimulus
table1 # show means so that one can begin to interpret the data

ggplot(pcaverages,aes(x=block,y=percentCorrect,fill=code_type,color=code_type))+ stat_summary(fun=mean,geom="bar",position=position_dodge(width=0.9))+stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9))+coord_cartesian(ylim=c(0.7,1))+ xlab("Block") + ylab("Probability Correct") +guides(fill=guide_legend("Kind of Context")) + guides(color="none")



# 
pcaverages<-summarize(byseveral,percentCorrect=sum(correct=="true")/n()) #gives average accuracy broken down by block and stimulus type. % correct = count of correct trials divided by total number of trials n()
model<-ezANOVA(data=pcaverages,dv=percentCorrect,within=c(code_type,block),wid=pid) # conduct a repeated measures ANOVA - dv = dependent variable.  within = a list of all of the within subject variables.  wid = variable that is used to group data by subject
model # show results of the ANOVA model
table1 <- tapply(X=pcaverages$percentCorrect,INDEX=list(pcaverages$code_type,pcaverages$block),FUN=mean) #apply mean function to RT broken down by block and type of stimulus
table1 # show means so that one can begin to interpret the data

ggplot(pcaverages,aes(x=block,y=percentCorrect,fill=code_type,color=code_type))+ stat_summary(fun=mean,geom="bar",position=position_dodge(width=0.9))+stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9))+coord_cartesian(ylim=c(0.7,1))+ xlab("Block") + ylab("Probability Correct") +guides(fill=guide_legend("Kind of Context")) + guides(color="none")

