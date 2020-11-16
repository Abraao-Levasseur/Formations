// déclaration de la fonction
function multiply(number1,number2,number3)
{
    // ici on déclare une variable globale sans le var devant ** peu utilisé**
    resultmultiply = number1*number2*number3;
    return number1*number2*number3;
}
// maintenant comment l'utiliser
var a = 5;
var b = 10;
var result = multiply(a,b,a);
console.log(result)
// permet de renvoyer une valeure de cette variable
console.log(resultmultiply)

