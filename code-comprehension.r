library(ez) #for doing the ANOVAs
library(dplyr) # great library for massaging data
library(ggplot2) # a great package for making pretty plots
library(car) # to use recode function 
library(reshape2) #To convert "long format" in R (all dependendent variables in one column/variable) to wide format (different groups in different columns)

library(jsonlite) # To read the survey response as a json object
data <- read.csv("/home/calvin/Downloads/d6jqu2scxw.csv")

resp <- filter(data, trial_type == "survey-multi-choice")
fromJSON(resp$response)