//créer un script qui affiche la position du tableau passé en premier argument dans le tableau en second argument.
var fs = require('fs');
let tableau1 = fs.readFileSync('./'+ process.argv[2],'utf8').split(['\n']);
let tableau2 = fs.readFileSync('./'+ process.argv[3],'utf8').split(['\n']);

tableau1_ = [];
tableau2_ = [];

for (let i = 0 ; i < tableau1.length; i++){
        tableau1__= tableau1_.push(tableau1[i].split('')); 
    for(let i = 0; i < tableau2.length; i++){
        tableau2__= tableau2_.push(tableau2[i].split('')); 
    }
}
//console.log(tableau1_);
console.log(tableau2_);