/*------> les strings entre double guillemet ou
simple guillemet*/
var name = "john";
console.log(name);

//----->Trouver la longueur d'une string
// avec la propriété length et non pas la fonction
// quand c'est une fonction il y a ()
// var namelength = name.length;

//----->Passer une string en number 'avec nombre entier'
// Utilisation de la fonction parseint
// var xstring = '12';
// var xnumber = parseInt(xstring);
// console.log(xnumber);

//----->Passer une string en number 'avec nombre décimaux'
// Utilisation de la fonction parsefloat

// var xstring2 = '12.56';
// var xnumber2 = parseFloat(xstring2);
// console.log(xnumber2);

/*---->Récupérer la position d'une sous string dans 
une string avec la fonction indexOf()*/

var mystringdedepart = 'Hello John'
var position = mystringdedepart.indexOf("John");
console.log(position);

/*---->Remplacer une string par une autre 
*/
var mystring ="Hello John";
var mynewstring=mystring.replace("john",">Tim");

console.log(mynewstring);

// additionner des strings
var string1 = "Hello"
var string2 = "John"
var mynewstring2 = string1 + "" + string2

console.log(mynewstring2)
//---Les nombres
var x = 12;
var y = 25.63;
var xtostring = x.toString();
// Fonctions toString pour passer un nombre en string
console.log(xtostring);


