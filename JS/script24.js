function CodigoDeBarras(barcode) {
    let odd = 0;
    let even = 0;

    for (let i = barcode.length - 2; i >= 0; i -= 2) {
        odd += parseInt(barcode[i]);
    }

    for (let i = barcode.length - 1; i >= 0; i -= 2) {
        even += parseInt(barcode[i]);
    }

    let total = odd + even * 3;
    let check = (10 - (total % 10)) % 10;
    return check;
}

function checkDigit(barcode) {
    let check = CodigoDeBarras(barcode);
    return check;
}

let barcode = prompt("Introduïu el codi de barres (EAN8 o EAN13):");

if (barcode.length === 8 || barcode.length === 13) {
    let check = checkDigit(barcode);
    console.log("El dígit de control calculat és: " + check);
} else {
    console.log("El codi de barres introduït no té la longitud correcta (8 o 13 dígits).");
}