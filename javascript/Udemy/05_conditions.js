/* Le if*/
// La syntaxe
// if(condition1)
// {
// console.log("execute ce code")    
// }
// else if(condition2)
// {
// console.log("la condition 1 n'est pas vrai mais la 2 oui")

// }
// else
// {
// console.log("alors execute ce code")    
// }

// var speed = 110;

// if (speed > 80)
// {
//     if (speed < 50)
//     console.log("vous roulez trop lentement");
//     else
//     console.log("Vous roulez trop vite")
// }

// else if (speed < 70)
// {
//     console.log("Vous pouvez accelerer");   
// }
// else
// {
//     console.log("Vous roulez à la bonne vitesse");
// }

// Le switch syntaxe

// switch (variable)
// {
//     case 1:
//         break;
//     case 2:
//         break;
//     default
// }

var favoritecolor = "blue";

switch(favoritecolor)

{
    case "yellow":
    case "blue":
        console.log("Ouaou le bleu et le jaune c'est trop beau");
        break;
    case "red":
        console.log("j'aimerai bien une voiture rouge");
        break;
    default:
        console.log("je en connais pas ta couleur");
}
