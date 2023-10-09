// EN LA FUNCION QUE HEMOS HECHO CUANDO CLICKAMOS EL RATÓN EN LA ETIQUETA "BUTTON". APARECERA ESTA ALERTA"
function clica(){
    alert("hello world");
}

// EN LA FUNCION QUE HEMOS HECHO CUANDO PONEMOS EL RATON ENCIMA DEL TEXTO. APARECERA ESTA ALERTA"
function muestra(){
    alert("hello world");
}

//EN ESTA FUNCIÓN AL EJECUTARLA NOS SALDRA UN RESULTADO 
function resultado(){
    let resultadoFinal = document.getElementById("resuelto").value;
    alert(resultadoFinal);
}

//EN ESTA FUNCION AL EJECUTARLA HARA UN CONSOLE.LOG EN QUE SE MUESTRE LOS NUMERO DEL 1 AL 10 COMO SI FUERA UNA TABLA DE MULTIPLICAR
function numeroIntroducido(){
    const numero = parseInt(document.getElementById("IntroducirNumero").value);
        if (numero < 1 || numero > 10) {
            console.log("Por favor, ingrese un número del 1 al 10.");
        } else {
            for (let i = 1; i <= 10; i++) {
                console.log(`${i} x ${numero} = ${i * numero}`);
            }
        }
    }