// un autre type de variable : les arrays
// syntaxe
//var name [valeur1, valeur2, valeur3];
// exemple d'une liste de fruits
var fruits = ["banane","peche", "orange"];
// syntaxe pour récupérer la taille du array
// console.log(fruits.length);
// syntaxe pour récupérer la valeur de la position dans un array ici la position 0
// console.log(fruits[0]);

// on ajoute une boucle for

// for (var i = 0; i <= fruits.length; i++)
// {
//     console.log(fruits[i])
// }

// fonction push dans la variable fruits pour ajouter 1 element

fruits.push("kiwi");
console.log(fruits);
// fonction pop enleve dernière valeure
fruits.pop();
console.log(fruits);

// fonction slice : un index de début un index de fin et retourne le sous array

var agrumes = fruits.slice(2,4);
console.log(agrumes);

// Dans les array on peut mélanger des chiffres et strings

//var myarray = ["orange",1,"true"]

// dans les array on peut avoir des array

var myarray = [[0,1],[2,3,6]];
// pour imptimer le 3
// il faut donner la place du 3 dans le array du array
console.log(myarray[1][1]);


