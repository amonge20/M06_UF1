function letra2(){
    var text = prompt("Escriu text");
    var letraCogida = prompt("Escriu caracter: ");

    var apariciones = 0;
    for (var i = 0; i < text.length; i++){
        if (text[i] === letraCogida){
            apariciones++;
        }

        if (apariciones >= 2 && apariciones <= 4){
            console.log("Caracter " + letraCogida + " Apareix entre 2 y 4 caracters ");
        } else {
            console.log("NO!!!!!!");
        }
    }
}