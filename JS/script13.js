function fichero(fitxa, separa, extension){
    fitxa = prompt ("Posali nom al teu fitxer");
    separa = fitxa.split(".");

    extension = separa[separa.length - 1];

    if (separa.length > 1){
        console.log("Extension añadida " + extension);
    } else {
        console.log("Extension no añadida");
    }
}