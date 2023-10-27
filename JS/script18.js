function todoJunto() {
    var textoTodo = prompt("Escriu un text: ");
    
    document.write("Text en majúscules: " + textoTodo.toUpperCase() + "<br>");
    document.write("Text en minúscules: " + textoTodo.toLowerCase() + "<br>");
    document.write("Té " + textoTodo.length + " Caràcters<br>");
    
    var palabras = textoTodo.split(" ");
    var separadas = palabras.join(" - ");
    document.write("Separant paraules: " + separadas + "<br>");
    
    var vocales = "aeiou";
    var cuentaVocales = 0;
    
    for (var i = 0; i < textoTodo.length; i++) {
        if (vocales.includes(textoTodo[i])) {
            cuentaVocales++;
        }
    }

    document.write("Conté " + cuentaVocales + " vocals<br>");
    
    var lineas = textoTodo.split("\n");
    
    for (var i = 0; i < lineas.length; i++) {
        document.write(lineas[i].substring(1) + "<br>");
    }
}