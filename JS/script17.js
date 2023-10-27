function letra3(){ //en casa
    var palabra = prompt("Escribe una palabra: ");
    var posicion = prompt("Introduce la posición del caràcter que quieres eliminar: ");
    var numeroPosicion = parseInt(posicion);

    if (numeroPosicion >= 0 && numeroPosicion < palabra.length) {
        var palabraSinCaracter = palabra.slice(0, numeroPosicion) + palabra.slice(numeroPosicion + 1);
        console.log("Palabra del caracter eliminado és: " + palabraSinCaracter); 
    } else {
        console.log("NOPE");
    }
} 