//EN ESTA FUNCIO EN LO QUE FA ES ESCOLLIR 2 NUMEROS I DESPRES ES MOSTRARA EL NUMERO MÉS PROXIM A 100
function aproximacion(){
    //Usuari introduïra el numero que vol
    let numero1 = parseInt = prompt("Introdueix numero 1: ");
    let numero2 = parseInt = prompt("Introdueix numero 2: ");

    //Fem les condicions en les que si el numero 1 s'aproximi més de 100 que el numero 2 o que el numero 2 s'aproximi més de 100 que el numero 1
    if (numero1 >= 100 && numero2 <= 100) {
        console.log(numero1 + " S'aproxima més de 100");
    } else {
        console.log(numero2 + " S'aproxima més de 100");
    }
}
//EN ESTA FUNCIO EN LO QUE FA ES ESCOLLIR 3 NUMEROS I DESPRES ES MOSTRARA L'HORA AMB AQUEST FORMAT (HH:MM:SS)
function tiempo(){
    //Usuari introduïra l'hora que vol
    let hora = parseInt = prompt("Escull l'hora: ");
    let minut = parseInt = prompt("Escull els minuts: ");
    let segon = parseInt = prompt("Escull els segons: ");

    // Calcula l'hora amb el date
    const date = new Date();
    date.setHours(hora);
    date.setMinutes(minut);
    date.setSeconds(segon);
 
    // Declarem getters
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
 
    // Incrementa un segon més en el setter
    date.setSeconds(date.getSeconds() + 1);
 
    // Declarem els setters actualizats
    let hs = date.getHours();
    let ms = date.getMinutes();
    let ss = date.getSeconds();

    /*Si els numeros que poses son per exemple 1,2,3,4,5,6,7,8,9. Es afegira de forma automatica un 0 al davant del numero 
    depent si es l'hora, minuts o segons*/
    h = h.toString().padStart(2, '0');
    m = m.toString().padStart(2, '0');
    s = s.toString().padStart(2, '0');
    hs = hs.toString().padStart(2, '0');
    ms = ms.toString().padStart(2, '0');
    ss = ss.toString().padStart(2, '0');
 
    //Es mostrara el resultat amb l'hora actual introduïda i despres l'hora amb un segón més
    console.log(`Hora actual: ${h}:${m}:${s}`);
    console.log(`Hora actual +1 segon: ${hs}:${ms}:${ss}`);
}

//EN ESTA FUNCIO EN LO QUE FA ES ESCOLLIR 3 NUMEROS I DESPRES ES MOSTRARA LA DATA AMB AQUEST FORMAT (YYYY:MM:DD)
function fecha(){
    let any = parseInt = prompt("Escull any: ");
    let mes = parseInt = prompt("Escull el mes: ");
    let dia = parseInt = prompt("Escull el dia: ");

    // Verificar si la data es correcte
    if (mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
        // Es crea la data relacionant 
        const fecha = new Date(any, mes - 1, dia); // Mes se resta en 1 ya que los meses en JavaScript van de 0 a 11

        // Obtenir les dades dela data
        let yyyy = fecha.getFullYear();
        let mm = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Sumen el mes i li fiquem els 2 digits
        let dd = fecha.getDate().toString().padStart(2, '0'); // El dia es convertira en 2 digits

        console.log(`Fecha válida: ${yyyy}/${mm}/${dd}`); //resultat dela data
    } else {
        console.log("La fecha no es válida."); //o sino torna a ficar-hi
    }
}