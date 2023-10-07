function ConvierteDias(){
    //Demanar el dia l'usuari
    let dia = parseInt = prompt("Digues el dia: ");

    //Declarem les variables del any i del mes
    const diesAnys = 365;
    const diesMes = 30;

    //Calculara l'any, mes i els dies que resten per l'usuari que ha demanat el dia
    const any = Math.floor(dia / diesAnys);
    const mes = Math.floor((dia % diesAnys) / diesMes);
    const diesResta = dia % diesAnys % diesMes;

    //Es mostraria el resultat dels dies
    console.log(`${dia} es convertira en aquesta data ${any}/${mes}/${diesResta}`);
}


function temperatura(){
    //Demanar a l'usuari de quina opció escull
    const elegir = parseInt = prompt("CELCIUS O FARENGITES? ");

    //Depen si ha escullit Celcius o Farengites
    const temperatura = parseInt = prompt("Introdueïx temperatura: ");

    //Declarem les variables
    let resultat, unitatInicial, unitatConvertida;

    //Si l'opcio que hem escollit es CELCIUS o FARENGITES es mostrara el seu resultat segons els seus calculs
    if (elegir == "celcius") {
        resultat = (temperatura * 9/5) + 32;
        unitatInicial = "Celcius";
        unitatConvertida = "Fahrenheit";
      } else {
        resultat = (temperatura - 32) * 5/9;
        unitatInicial = "Fahrenheit";
        unitatConvertida = "Celcius";
      }

      //Resultat dela consola
      console.log(`${temperatura}ºC ${unitatInicial} equival a ${resultat}ºC ${unitatConvertida}.`);
}