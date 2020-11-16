#!/usr/bin/bash
# Pipelines, often called pipes, is a way to chain commands and connect output from one 
# command to the input of the next. A pipeline is represented by the pipe character: |.
#  It's particularly handy when a complex or long input is required for a command.

# command1 | command2
# By default pipelines redirects only the standard output, if you want to include the standard 
# error you need to use the form |& which is a short hand for 2>&1 |.

# Imagine you quickly want to know the number of entries in a directory, you can use a pipe to 
# redirect the output of the ls command to the wc command with option -l.


# In this exercise, you will need to print the number of processors based on the information in 
# the cpuinfo file (/proc/cpuinfo)
# Hint: each processor has a unique number, for instance the first processor will contain 
# the line processor: 0

# cat /proc/cpuinfo | grep processor | wc -l