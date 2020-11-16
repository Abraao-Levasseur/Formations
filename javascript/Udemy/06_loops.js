// syntaxe while
var number =0;
while(number<3)
{
    console.log(number);
    // pour eviter une boucle infinie
    number++
}

// syntaxe du do while
var number = 0;

do
{
 console.log(number);
 number++;
}
while(number<3)

// la différence entre le while et le do while c'est que le do while a un tour gratuit au début
// le do while commence par faire le do 

// ici par exemple si je prends un while avec la condition ci dessous
// cela va rien retourner car ne rentre pas dans la boucle de suite car le test du while est fait de suite
var number = 0;

while(number>0 && number<3)

{
 console.log(number);
 number++;
}
// si je fais le meme code mais avec le do while le test du while sera fait apres le do
var number = 0;
do
{
 console.log(number);
 number++;
}

while(number>0 && number<3)

// Syntaxe du for

// for (partie1,partie2,partie3)
// partie 1 init d'une variable
// partie 2 la condition
// partie 3 valeur renvoyée
// {
//     code a executer
// }

for(var number = 0; number < 5; number++)
{
    console.log(number);
}

