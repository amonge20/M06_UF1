function Años(){
    let any1 = prompt("Introdueix un any entre el 2000 - 2050");
    let any2 = prompt("Introdueix un altre any entre 2000 - 2050");

    if (any1 < 2000 || any1 > 2050 || any2 < 2000 || any2 > 2050) {
        console.log("Algun dels anys introduïts no és vàlid. Per favor, torna-ho a provar.");
    } else {
        let primerAny = any1 > any2 ? any2 : any1;
        console.log("El primer any entre " + any1 + " i " + any2 + " que comença en dimecres és " + primerAny + ".");
    }
}