#!/usr/bin/bash
# bash for loops
#------basic construt

# for arg in [list]
# do
# commands...
# done

# For each pass through the loop, arg takes on the value of each successive value in the list. Then the command(s) are executed.

# ------Loop on array menber

# NAMES=(Joe Jenny Sara Tony)
# for N in " ${NAMES[@]} "; do
#     echo "My name is $N"
# done

# # Loop on outpout results
# for f in $(ls decision_makinghh.sh /home/abraao/); do 
#     echo "File is : $f"
# done


#-----bash while loop
# Basic construct
# while [condition]
# do
# command...
# done
# The while construct tests for a condition, and if true, executes commands. It keeps looping as long as the condition is true.
# COUNT=10
# while [ $COUNT -gt 0 ]; do
# echo "The value of count is : $COUNT"
# COUNT=$(($COUNT-1))
# done

#------bash until loop

# basic construct
# until [condition]
# do
# commands
# done

# The until construct tests for a condition, and if false, executes commands. It keeps looping as long as the condition is false (opposite of while construct)
# COUNT=5
# until [ $COUNT -gt 5 ]; do
# echo "Value of count is :$COUNT"
# COUNT=$(($COUNT + 1))
# done

# ------"Break" and "continue" statements

# Prints out 0,1,2,3,4

# COUNT=0
# while [ $COUNT -ge 0 ]; do
#     echo "Value of count is : $COUNT"
#     COUNT=$((COUNT+1))
#     if [ $COUNT -ge 5 ]; then
#     break
#     fi 
# done


# Prints out only odd numbers - 1,3,5,7,9

# COUNT=0
# while [ $COUNT -lt 10 ]; do
#     COUNT=$((COUNT+1))
#     if [ $(($COUNT % 2)) = 0 ] ; then
#         continue
#     fi
#     echo $COUNT
# done

#In this exercise, you will need to loop through and print out all even numbers from the numbers list in the same order they are received. 
#Don't print any numbers that come after 237 in the sequence.

NUMBERS=(951 402 984 651 360 69 408 319 601 485 980 507 725 547 544 615 83 165 141 501 263 617 865 575 219 390 237 412 566 826 248 866 950 626 949 687 217 815 67 104 58 512 24 892 894 767 553 81 379 843 831 445 742 717 958 609 842 451 688 753 854 685 93 857 440 380 126 721 328 753 470 743 527)

for N in ${NUMBERS[@]}; do    

    if [ $N == 237 ] ; then
        break;
    elif [ $(($N % 2)) == 0 ]; then
        echo $N
    fi
done
