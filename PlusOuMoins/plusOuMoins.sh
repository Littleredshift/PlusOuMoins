#!/bin/bash

source config.txt

echo $nbEssai

let random=${RANDOM:0:2}

let count=1

echo "rentrer une valeur entre 1 et 99"

read value

while [ "$value" -ne "$random" -a $count -lt $nbEssai ]
do
	if [ "$value" -gt "$random" ]
	then
		echo " - "
	else
		echo " + "
	fi
	echo "rentrer une nouvelle valeur"
	read value
	count=$((count+1))
done

echo "la valeur a trouve etait $random vous l avez trouver en $count nombre de coup"

echo "rentrer votre nom"

read name

echo ${#name}

while [ ${#name} -gt $nbMaxCarac ]
do
	echo "votre nom est trop long il doit faire moins de $nbMaxCarac charactere"

	read name
done


if [ -e highScore.csv ]
then
	echo ""
else
	touch highScore.csv
fi

let nbLigne=$(grep "" -c highScore.csv)

if [ $nbLigne -eq $nbMaxScore ]
then
	sed -i "$ d" highScore.csv
	echo "$name $count" >> highScore.csv

else
	echo "$name $count" >> highScore.csv
fi

echo " "

sort -b -k 2,2 -n highScore.csv | head -n 5

sort -b -k 2,2 -n highScore.csv -o highScore.csv

echo "votre place dans les highscores est"

grep -n "$name $count" highScore.csv | head -n 1


