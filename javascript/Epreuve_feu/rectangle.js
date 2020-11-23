var fs = require('fs');
let tableau1 =  fs.readFileSync('./' + process.argv[2], 'utf8').split(['\n']);
let tableau2 =  fs.readFileSync('./' + process.argv[3], 'utf8').split(['\n']);
tableau1_ = [];
tableau2_ = [];
for (let i = 0; i < tableau1.length; i++){
    tableau1__ = tableau1_.push(tableau1[i].split(''));
}
for (let i = 0; i < tableau2.length; i++){
    tableau2__ = tableau2_.push(tableau2[i].split(''));
}

function correspondance2(tableau1_, tableau2_, ligne, colonne){
    for( let ligne_ = 0; ligne_ < tableau1_.length; ligne_++){
        for( let colonne_ = 0; colonne_ < tableau1_[ligne_].length; colonne_++){
            if(ligne + ligne_ < tableau2_.length && colonne + colonne_ < tableau2_[1].length 
            && tableau1_[ligne_][colonne_] === tableau2_[ligne + ligne_][colonne + colonne_]){
                // ici on vérifie si on trouve bien le tableau 1 dans le tableau 2
                console.log(tableau2_[ligne + ligne_][colonne + colonne_]);
                // ici on trouve les positions dans le tableau 2 correspondant au tableau 1
                //console.log(ligne + ligne_ + "|" + (colonne + colonne_ )+ "\n");
            }else{
                return 0;
            }
        }
    }
    return 1;
}
function correspondance1(tableau1_, tableau2_){
    for (let ligne = 0; ligne < tableau2_.length; ligne++){
        for ( let colonne = 0; colonne < tableau2_[ligne].length; colonne++){
           if(tableau1_[0][0] === tableau2_[ligne][colonne]){
                if(correspondance2(tableau1_, tableau2_, ligne, colonne)){
                    return 1
                }
           }
        }
    }
    return 0;  
} 
correspondance1(tableau1_, tableau2_)
    




