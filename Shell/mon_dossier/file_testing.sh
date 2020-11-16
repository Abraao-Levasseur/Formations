#!/usr/bin/bash

#------ Often you will want to do some file tests on the file system you are running. In this case, 
#------ shell will provide you with several useful commands to achieve it.

#------ The command looks like the following

# -<command> [filename]
# [filename1] -<command> [filename2]

#------ We will briefly introduce some common commands you might encounter in your daily life.
# ----- use "-e" to test if file exist
# filename="loops.sh"
# if [ -e "$filename" ]; then
#     echo "$filename exists as a file"
# fi

#------use "-d" to test if directory exists

# directory_name="loops.sh"
# if [ -d "$directory_name" ]; then
#     echo "$directory_name exists as a directory"
# fi


# use "-r" to test if file has read permission for the user running the script/test
filename="loops.sh"
if [ ! -f "$filename" ]; then
    touch "$filename"
fi
if [ -r "$filename" ]; then
    echo "you are allowed to read $filename"
else
    echo "you are not allowed to read $filename"
fi