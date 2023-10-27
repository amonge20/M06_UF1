function TodasVocales(){
    let palabra = prompt("Introdueïx una paraula que tingui 5 vocals: ");

    let vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vocales.length; i++){
        if (palabra.indexOf(vocales[i]) == -1){
            console.log("No té les 5 vocals");
            return;
        }
    }
    console.log("Té les 5 vocals");
}