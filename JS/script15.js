function letra1(){
    var longitud1 = prompt ("Escriu un text");
    var longitud2 = prompt ("Escriu un text");

    var longitudfinal1 = longitud1.length - 1;
    var longitudfinal2 = longitud2.length - 1;

    if (longitudfinal1 == longitudfinal2) {
        console.log("longitud 1 = " + longitudfinal1 + " Caracteres " + "\n" + " longitud 2 = " + longitudfinal2);
    } else {
        console.log("longitud 1 = " + longitudfinal1 + " Caracteres " + "\n" + " longitud 2 = " + longitudfinal2);
    }
}