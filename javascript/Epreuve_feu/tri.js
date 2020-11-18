// créer un script qui affiche les valeurs qui lui sont passées en argument triées par ordre décroissant
// Bonus : implémenter plusieurs algorithme de tri ( à bulle , selectif, )

/* Tri selectif */
// var valeures = process.argv.slice(2);
// console.log(valeures.sort(
//     (a, b) => {
//     return (a-b);
//   }
//  ).toString(' ').replace(/,/g, ' ')
// );

/* Tri à bulles */
var valeures = process.argv.slice(2);
function triabulle(valeures){
    for (let i = 0 ; i < valeures.length; i++){
        for(let j = 0 ; j < valeures.length; j++){
            if (valeures[j]> valeures[j+1]){
                [valeures[j], valeures[j+1]] = [valeures[j+1], valeures[j]]
            }
        }
    }
    return valeures;
}
console.log(triabulle(valeures).toString(' ').replace(/,/g, ' '));


