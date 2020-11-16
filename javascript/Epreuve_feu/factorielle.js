//Factorielle en récursif : calculer la factorielle du nombre passé en argument
var nbr = process.argv[2];
function factorielle (nbr){
// si le nombre est = 0 il retournera toujours 1

if (nbr === 0) {
    return 1
}
return nbr * factorielle(nbr-1);
}
console.log(factorielle(nbr));
