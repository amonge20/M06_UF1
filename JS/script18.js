function todoJunto(){ //EN CASA
    //TEXT EN MAJUSCULES I MINUSCULES
    var textoTodo = prompt("Escriu un text: ");
    document.write(textoTodo.toUpperCase() + "\n");
    document.write(textoTodo.toLowerCase() + "\n");

    //LONGITUD DEL TEXT
    var longitudTexto = textoTodo.length - 1;
    document.write(" tiene " + longitudTexto + " Caracteres" + "\n");

    //SEPARA LES PARAULES DEL TEXT
    var separaPalabras = " - ";
    document.write("Separando letras: " + textoTodo.split(separaPalabras) + "\n");
    
    //VOCALS QUE CONTÉ 
    var vocales = textoTodo["a","e","i","o","u"];
    var cuentaVocales = vocales.length - 1;

    document.write("Contiene " + cuentaVocales);

    //NUMERO DE VOCALS QUE CONTÉ EL TEXT


    //LA FRASE EN Nº DE LINES PERO PER CADA LINEA LI FALTA UNA LLETRA AL DAVANT
    var saltoLinea = textoTodo.split("\n");
    for (var i = 0; i < saltoLinea.length; i++){
        document.write(saltoLinea[i].substring(1) + "\n");
        saltoLinea++;
    }
}