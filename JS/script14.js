function letra(){
    var lletra = prompt = ("Escriu un text");

    var letraA = lletra.split('a').length - 1;
    var letraB = lletra.split('b').length - 1;

    var contarA = letraA(lletra);
    var contarB = letraB(lletra);

    if (contarA == contarB) {
        console.log("Lletra a = " + letraA.length - 1 + "\n" + "Lletra b = " + letraB.length - 1);
    } else {
        console.log("No tenen la mateixa quantitat de lletres A i B")
    }
}