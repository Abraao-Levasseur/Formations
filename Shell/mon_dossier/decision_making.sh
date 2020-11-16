#§/usr/bin/bash
# Utilisation du IF
#NAME="John"
#if [ "$NAME"="john" ]; then
#   echo "True - My name is endeed $NAME"
#fi

# NAME="Bill"
# if [ "$NAME" = "Bill" ]; then
#     echo "True Endeed my name is $NAME"
#     else
#         echo "False - My name is Gerard"
#         echo "You must mistaken me for $NAME "
# fi

# Utilisation du elif

#NAME="John"
#if [ "$NAME" = "John" ]; then
#    echo "John Lennon"
#    elif [ "$NAME" = "George" ]; then
#        echo "George Harrisson"
#        else
#        echo "It's someone else"
#fi

#Type of numeric comparaisons

#comparison    Evaluated to true when
#$a -lt $b    $a < $b
#$a -gt $b    $a > $b
#$a -le $b    $a <= $b
#$a -ge $b    $a >= $b
#$a -eq $b    $a is equal to $b
#$a -ne $b    $a is not equal to $b

# Types of string comparaisons

#"$a" = "$b" # a is equal b
#"$a" == "$b" # a is equal b
#"$a" != "$b" # a is non equal b
#-z "$a" # a is empty

# Logical combinations

#if <a href='/en/_%24VAR_A_-eq_1_%26%26_%28%24VAR_B_%3D_%22bee%22_'>| $VAR_T = "tee") </a> ; then
#    command...
#fi

# Case structure

# #case "$Variable" in
#     "$condition1"
#         command...
#     ;;
#     "$condition2"
#         command...
#     ;;
# esac

# # simple cash bash structure
# mycase=1
# case $mycase in
#     1) echo "You selected bash";;
#     2) echo "You Selected Perl";;
#     3) echo "You selected Python";;
#     4) echo "You selected c++";;
#     5) exit
# esac

# Change the variables in the first section, so that each if statement resolves as True.
NUMBER=16
APPLES=16
KING=LUIS
# modify above variables
# to make all decisions below TRUE
if [ $NUMBER -gt 15 ] ; then
  echo 1
fi
if [ $NUMBER -eq $APPLES ] ; then
  echo 2
fi
if [[ ($APPLES -eq 12) || ("$KING" = "LUIS") ]] ; then
  echo 3
fi
if [[ $(($NUMBER + $APPLES)) -le 32 ]] ; then
  echo 4
fi




