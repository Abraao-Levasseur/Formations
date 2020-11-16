// objects a des propriétés et des méthodes
// syntaxe
// var object = {
//     propertyName1:propertyValue1
//     propertyName2:propertyValue2
//     methode1: function()
//     {

//     }

// }

// Exemple

// var dog = {
//     name: "Choupette",
//     color: "Black",
//     age: "4",
// };

// console.log(dog.age);
// console.log(dog["name"]);


//boucle pour lister toutes les propriétés de notre objet

// for (var property in dog)
// {
//     console.log(dog[property]);
// }

// créer un objet avec le constructeur de la classe object

// var dog = new Object();
// dog.name = "choupette";
// dog.color = "color";
// dog.age = "4"; 
 

// for (var property in dog)
// {
//     console.log(dog[property]);
// }

// un objet a des proprietes et des méthodes
// on va créer une méthode

// méthode aboyer. Les méthodes sont des fonctions
// une fonction qui comprend aucun parametres et n'en renvoie aucune

// ci dessous on a une juste un déclaration de fonction
// j'ai attribué ma fonction à la méthode aboie de la var dog
// dog.aboie = function(){console.log("ouaf ouaf")};

// maintenant pour faire aboyer le chien
// les parenthese veulent dire execute la fonction
// dog.aboie();

// maintenant avec une fonction avec des paramétres
/* une fonction qui calcul ne nombre de ouaf en fonction des 
paramètres donnés*/

var dog = new Object();
dog.name = "choupette";
dog.color = "color";
dog.age = "4";
dog.aboie = function(number)
{
    while(number>0)
    {   
        console.log(number.toString() + "Wouaf");
        number --;     
    }
};

dog.aboie(4);



