function AdivinaNumero(){
    var numeroAleatori = Math.floor(Math.random() * 101);

    var intents = 0;
    var endevinar = false;

    while (!endevinar) {
        var numeroUsuari = parseInt(prompt("Endevina un nombre entre 0 i 100:"));
        intents++;

        if (isNaN(numeroUsuari)) {
            continue;
        } else if (numeroUsuari === 0) {
            console.log("Game Over");
            break;
        } else if (numeroUsuari === numeroAleatori) {
            console.log("Obtingut en " + intents + " intents");
            endevinar = true;
        } else if (numeroUsuari < numeroAleatori) {
            console.log("Major");
        } else {
            console.log("Menor");
        }
    }
}