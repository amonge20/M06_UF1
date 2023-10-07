function telefonica(){
    //Demana a l'usuari per el temps de la trucada
    var tempsTelefon = parseInt = prompt("Introdueïx la duració dela trucada: ");

    //Declarem les variables dela trucada 
    var tempsEstableciment = 10;
    var costMinuts = 5;

    //Agafem el temps total dela trucada en hores, minuts i segons
    var tempsTotal = tempsTelefon.split(":");
    var hores = parseInt(tempsTotal[0]);
    var minuts = parseInt(tempsTotal[1]);
    var segons = parseInt(tempsTotal[2]);

    //Calculem el temps dela trucada dels centims i euros
    var tempsCentims = tempsEstableciment + ((hores * 60 + minuts + segons / 60) * costMinuts);

    var tempsEuros = tempsCentims / 100;
    
    //El resultat seria el cost dela trucada
    console.log("El cost de la trucada seria: " + tempsEuros + "€");
}

function colores(){
    //Introduïm el numero del RGB
    var r = parseInt = prompt("Introdueix el valor r (0-255): ");
    var g = parseInt = prompt("Introdueix el valor r (0-255): ");
    var b = parseInt = prompt("Introdueix el valor r (0-255): ");

    //Funcio per crear el componentToHex
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    //Si els colors que introdueix l'usuari no formen part del RGB, es cancelara la peticio 
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        console.log("Té que estar dins del RGB");
    } else {
        //Convertir el colors del RGB
        var colorHexadecimal = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

        // Mostrar el color en format hexadecimal
        console.log("El color en format hexadecimal és: " + colorHexadecimal);
    }
}