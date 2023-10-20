function letra(){
    var lletra = prompt ("Escriu un text");

    var letraA = lletra.split('a').length - 1;
    var letraB = lletra.split('b').length - 1;

    if (letraA == letraB) {
        console.log("Lletra a = " + letraA + "\n" + "Lletra b = " + letraB);
    } else {
        console.log("Lletra a = " + letraA + "\n" + "Lletra b = " + letraB);
    }
}