#!/usr/bin/bash
#STRING LENGTH
STRING="this is a string"
#echo ${#STRING}

#----INDEX : INDIQUER LA POSITION NUMERIQUE DU PREMIER CARACTERE DE STRING QUI MATCH AVEC SUBSTRING
#SUBSTRING="hat"
#expr index "$STRING" "$SUBSTRING"

#----SUBSTRING EXTRACTION
#POS=1
#LEN=3
#echo ${STRING:$POS:$LEN}
#echo ${STRING:1}
#echo ${STRING:12}

#----SIMPLE DATE EXTRACTION EXAMPLE
#----CODE TO EXTRACT THE FIRST NAME FROM THE DATA RECORD

#DATARECORD="last=Clifford,first=Johnny Boy,state=CA"
#COMMA1=`expr index "$DATARECORD" ','`
#echo $COMMA1
#CHOP1FIELD=${DATARECORD:$COMMA1}
#echo ${CHOP1FIELD}

#COMMA2=`expr index "$CHOP1FIELD" ','`
#echo ${COMMA2}
#LENGTH=`expr $COMMA2 - 6 - 1`
#echo ${LENGTH}
#FIRSTNAME=${CHOP1FIELD:6:$LENGTH}
#echo ${FIRSTNAME}

#----SUBSTRING REPLACEMENT
STRING="to be or not to be"
#----replace the first occcurence of substring with replacement
#echo ${STRING[@]//be/eat}
#echo ${STRING//not/}
#echo ${STRING/#to be/eat now}
#echo ${STRING[@]/%be/eat}
#echo ${STRING[@]/%be/ be on $(date +%Y-%m-%d)}

#EXERCICE

BUFFETT="Life is like a snowball. The important thing is finding wet snow and a really long hill."
ISAY=${BUFFETT}
#echo ${ISAY}
#First change : repalce the first occurence of snow with foot
ISAY1=${ISAY[@]/snow/foot}
#echo ${ISAY1}
#Second change : delete the second occurence of snow
ISAY2=${ISAY1[@]//snow/}
#echo ${ISAY2}
#third change : replace finding with getting
ISAY3=${ISAY2[@]//finding/getting}
echo ${ISAY3}
#FOURTH CHANGE:delete all characters following wet
# on cherche la position du premier w

POS=`expr index "$ISAY3" 'w'`
ISAY4=${ISAY3::$POS+2}
echo ${ISAY4}

