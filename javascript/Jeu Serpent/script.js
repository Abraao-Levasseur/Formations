
//fonction javascript onload dans la fenetre 
//Utilisation de la fonction creatElement
// Création d'un element de type canvas
// width = largeur
// height = hauteur
// style est une propriété du canvas


window.onload = function()
{
    // ici on met les variables en dehors des fonctions pour qu'elles
    // soient disponibles pour les deux fonctions
    // canvas est un élement html5
    var canvaswidth = 900;
    var canvasheight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 1000;
    var xcoord = 0;
    var ycoord = 0;
    
    init();

    function init()
    {
        var canvas;
        canvas = document.createElement('Canvas');
        canvas.width = canvaswidth;
        canvas.height = canvasheight;
        canvas.style.border = "1px solid";
        // rattachement du canvas à la page html
        // tag body
        // fonction javascript appenChild
        // Permet d'accrocher un tag au body de la page html, le tag convas
        document.body.appendChild(canvas);
        // Pour dessiner dans le canvas on a besoin du contexte
        // création d'un variable contexte
        // ensuite on attrape le contexte de notre canvas
        ctx = canvas.getContext('2d'); 
        refrechCanvas();    
    }
    // Fonction refreshCanvas va rafraichier le canvas après un délai passé
    function refrechCanvas()
    {
        // Faire changer la position du x et du y
        xcoord += 10;
        ycoord += 10;
        // remise à zéro du canvas
        ctx.clearRect(0, 0, canvaswidth, canvasheight);
        // récupération attribut du contexte fillStyle
        ctx.fillStyle = "#ff0000";
        // fonction fillRect 4 arguments
        // le x ( distance horitontale) et le y (distance verticale) à partir du quel on veut dessiner
        // la largeur du rectangle qu'on veut dessiner et la hauteur
        ctx.fillRect(xcoord ,ycoord ,100 ,50);
        // Utilisation de la fonction setTimeout 2 arguments : pour appeler 1 /une fonction 2/ après un délai
        setTimeout(refrechCanvas,delay);
    }
    // la fonction constructeur snake prend le corps du body
    function snake(body)
    {
        this.body = body;
        // création d'une méthode pour créer le corps à l'écran
        this.draw = function()
        {
            //sauvegarder le contexte du canvas tel qu'il était avant
            ctx.save();
            ctx.fillStyle = "#ff0000";
            //on va mettre chaque bloc composant le corps du serpent dans un array
            //for();
            


        }


    }
}
