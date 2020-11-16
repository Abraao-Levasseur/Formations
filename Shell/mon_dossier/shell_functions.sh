#!/usr/bin/bash

# ------ Basic Construct

# function_name { 
#     command .....
# }

#------ Functions are called simply by writing their names. A function call is equivalent to a command.
#------ "Les fonctions sont appelées simplement en écrivant leurs noms. Un appel de fonction équivaut à une commande."
#------ Parameters may be passed to a function, by specifying them after the function name. 
#------ "Les paramètres peuvent être passés à une fonction, en les spécifiant après le nom de la fonction"
#------ The first parameter is referred to in the function as $1, the second as $2 etc. // 
#------ "Le premier paramètre est désigné dans la fonction par $ 1, le second par $ 2, etc."

# function function_B {
#   echo "Function B."
# }
# function function_A {
#   echo "$1"
# }
# function adder {
#   echo "$(($1 + $2))"
# }

#------- EXERCICE
#------- In this exercise, you will need to write a function called ENGLISH_CALC which can process sentences such as:
#------- '3 plus 5', '5 minus 1' or '4 times 6' and print the results as: '3 + 5 = 8', '5 - 1 = 4' or '4 * 6 = 24' respectively.

# function ENGLISH_CALC {

# a=$1
# b=$3
# signe=$2

# if [ $signe == "plus" ]; then
#     echo "$a+$b = $(($a+$b))"
#     elif [ $signe == "minus" ]; then
#     echo "$a-$b = $(($a-$b))"
#     elif [ $signe == "times" ]; then
#     echo "$a*$b = $(($a*$b))"
#     fi
# }

# # testing code
# ENGLISH_CALC 3 plus 5
# ENGLISH_CALC 5 minus 1
# ENGLISH_CALC 4 times 6

# Faire un menu ou le choix entre plat dessert ou entrée plat ou plat dessert

function menu {

Entree=$1
Plat=$2
Choix=$3
Dessert=$4

if [ $Choix == "ou" ]; then
echo "$1" "$2"
echo "$2" "$4"
    elif [ $Choix == "et" ]; then
    echo "$1" "$2" "$4"
    #echo "script name : $0"
    #echo "Total count of arguments: $#"
    #echo "All arguments passed on the function: $@"  
fi

}
#test du code
menu Entree Plat ou Dessert
menu Entree Plat et Dessert