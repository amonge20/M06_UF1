function todoJunto(){
    var textoTodo = prompt("Escriu un text: ");

    document.write(textoTodo.toUpperCase() + "\n");

    document.write(textoTodo.toLowerCase() + "\n");

    var longitudTexto = textoTodo.length - 1;

    document.write(" tiene " + longitudTexto + " Caracteres" + "\n");

}