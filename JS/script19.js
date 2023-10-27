function BonaNit(){
    var hora = prompt("Introdueix una hora en format HH:MM:");

    var partsHora = hora.split(":");
    var horaInt = parseInt(partsHora[0]);
    var minutsInt = parseInt(partsHora[1]);

    var minutsFinsMitjanit = 0;
    
    if (hora === "00:00") {
        console.log("Bon Any Nou");
    } else {
        minutsFinsMitjanit = (24 - horaInt) * 60 - minutsInt;
        console.log("Falten " + minutsFinsMitjanit + " minuts fins a mitjanit.");
    }
}

