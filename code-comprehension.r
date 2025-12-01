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

head(data) # see what all of the variables are called, and see what beginning of data looks like
table(data$pid) # make sure that everybody did the same number of trials.  They didn't.  We'll get rid of them in a bit
length(unique(data$pid))

# Throw out data for block 4, and one of the types


# Survey responses
resp <- filter(data, trial_type == "survey-multi-choice")
survey_data <- do.call(rbind, apply(resp, 1, function(x) data.frame(fromJSON(x[c('response')]), pid=x[c('pid')])))


# Look at response times on the whole
trials <- filter(data, !is.na(len))
byseveral <- group_by(trials, pid, len)

subjectSummary <- summarize(byseveral, count=n(), accuracy=sum(correct=='true')/n(), rt=mean(rt))

plot(subjectSummary$len, subjectSummary$rt)

responseTimes<-filter(trials, correct=="true" ) # don't include incorrect trials for response time analysis
hist(responseTimes$rt,breaks=2000,xlab="RT",ylab="Frequency") # get an overall feel for the RT distribution


# Pretty clear learning / warmup effect
#For looking at whether and how percent correct is influenced by word type and block
byseveral<-group_by(trials,pid,code_type,block) #break data down by subject, block, and word/nonword type
pcaverages<-summarize(byseveral,percentCorrect=sum(correct=="true")/n()) #gives average accuracy broken down by block and stimulus type. % correct = count of correct trials divided by total number of trials n()
model<-ezANOVA(data=pcaverages,dv=percentCorrect,within=c(code_type,block),wid=pid) # conduct a repeated measures ANOVA - dv = dependent variable.  within = a list of all of the within subject variables.  wid = variable that is used to group data by subject
model # show results of the ANOVA model
table1 <- tapply(X=pcaverages$percentCorrect,INDEX=list(pcaverages$code_type,pcaverages$block),FUN=mean) #apply mean function to RT broken down by block and type of stimulus
table1 # show means so that one can begin to interpret the data

ggplot(pcaverages,aes(x=block,y=percentCorrect,fill=code_type,color=code_type))+ stat_summary(fun=mean,geom="bar",position=position_dodge(width=0.9))+stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9))+coord_cartesian(ylim=c(0.7,1))+ xlab("Block") + ylab("Probability Correct") +guides(fill=guide_legend("Kind of Context")) + guides(color="none")

ezANOVA(data=trials, dv=rt, within=c(program_name, block), wid=pid)
ggplot(trials, aes(x=block, y=rt,fill=program_name, color=program_name))+stat_summary(fun=mean, geom="bar",position=position_dodge(width=0.9))

# 
pcaverages<-summarize(byseveral,percentCorrect=sum(correct=="true")/n()) #gives average accuracy broken down by block and stimulus type. % correct = count of correct trials divided by total number of trials n()
model<-ezANOVA(data=pcaverages,dv=percentCorrect,within=c(code_type,block),wid=pid) # conduct a repeated measures ANOVA - dv = dependent variable.  within = a list of all of the within subject variables.  wid = variable that is used to group data by subject
model # show results of the ANOVA model
table1 <- tapply(X=pcaverages$percentCorrect,INDEX=list(pcaverages$code_type,pcaverages$block),FUN=mean) #apply mean function to RT broken down by block and type of stimulus
table1 # show means so that one can begin to interpret the data

ggplot(pcaverages,aes(x=block,y=percentCorrect,fill=code_type,color=code_type))+ stat_summary(fun=mean,geom="bar",position=position_dodge(width=0.9))+stat_summary(fun.data=mean_cl_normal,geom="errorbar",position=position_dodge(0.9))+coord_cartesian(ylim=c(0.7,1))+ xlab("Block") + ylab("Probability Correct") +guides(fill=guide_legend("Kind of Context")) + guides(color="none")

