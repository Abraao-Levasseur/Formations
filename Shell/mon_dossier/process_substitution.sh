#!/usr/bin/bash
# ------Output
# Imagine you've two files for which you want to compare the content. Using diff file1 file2 could generate false positives in the case lines are not ordered. So if you want to compare those files you could create two new files, ordered, and compare those. It would look like:

# sort file1 > sorted_file1
# sort file2 > sorted_file2
# diff sorted_file1 sorted_file2
# With process substitution you can do it in one line:

# diff <(sort file1) <(sort file2)

# diff <(sort file_1.txt) <(sort file_2.txt)
# echo $diff

# ------Input
# Imagine you want to store logs of an application into a file and at the same time print it on the console. 
# A very handy command for that is tee.

# echo "Hello, world!" | tee /tmp/hello.txt

# Now let say you want to have only lower case characters in the file but keep the regular 
# case on the output. You could use process substitution that way:

echo "Hello, world!" | tee >(tr '[:upper:]' '[:lower:]' > /tmp/hello.txt)