/*Une lettre sur deux en majuscule sur une chaine de caractère 
en filtrant les caractères ponctuation et espaces
avec une boucle for*/

var phrase = process.argv[2];
var phrasemodifie;
var compteur = 0;

for ( i = 0 ; i <= phrase.length;i++){
    compteur ++ ;
    if (i == 0){
        phrasemodifie = phrase[i].toUpperCase();
    }
    if (phrase.charAt(i) === ' ',",",".","'"){
        compteur --;
    }
    if (i !== 0){
        if (i % 2 == 0){
        phrasemodifie += phrase.charAt(i).toUpperCase();    
        }
        else {
        phrasemodifie += phrase.charAt(i).toLowerCase();    
        }
    }
}
console.log(phrasemodifie);