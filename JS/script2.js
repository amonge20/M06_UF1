//EN ESTA FUNCIO EN LO QUE FA ES RESOLDRE EL FIBONACCI DE DIT NUMERO
function fibonacci(){
    //declarem les variables
    let fibonacciElegir = prompt("Elige un numero");
    let a = 1;
    let b = 1;

    //fem el bucle del fibonacci
    for (let n = 3; n <= fibonacciElegir; n++){
        let c = a+b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacci());

