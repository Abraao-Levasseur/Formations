var fs = require('fs');
let fichier_source =  fs.readFileSync('./' + process.argv[2], 'utf8').split(['\n']);
let mot_acomparer = process.argv[3].split(['']).sort().join('');
//console.log(mot_acomparer);
fichier_source_ = [];
fichier_source_ordre = [];
fichier_source_ordre_final = [];

for (let i = 0 ; i < fichier_source.length; i++){
    fichier_source__ = fichier_source_.push(fichier_source[i].split(''));
    fichier_source___ = fichier_source_ordre.push(fichier_source_[i].sort());
    fichier_source____ = fichier_source_ordre_final.push(fichier_source_[i].join(''));
    if(mot_acomparer === fichier_source_ordre_final[i]){
        console.log(fichier_source[i]);
    }
}

 
