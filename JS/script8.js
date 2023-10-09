function calcularCanvi() { //FALLA)
    let producte = parseFloat(prompt("Demana el preu del producte: "));
    let dinerPagat = parseFloat(prompt("Demana els diners lliurats: "));

    // Convierte los precios y el dinero pagado a centavos para facilitar los cálculos.
    producte = producte * 100;
    dinerPagat = dinerPagat * 100;

    // Calcula la diferencia entre el dinero pagado y el precio del producto.
    let diferencia = dinerPagat - producte;

    // Array de denominaciones disponibles (en centavos y euros).
    const denominacions = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    console.log("Preu del producte: " + (producte / 100).toFixed(2) + " euros");
    console.log("Diners pagats: " + (dinerPagat / 100).toFixed(2) + " euros");
    console.log("Canvi a tornar: " + (diferencia / 100).toFixed(2) + " euros");

    const canvi = {};
    const billets = {};

    for (let i = 0; i < denominacions.length; i++) {
        const denominacio = denominacions[i];

        if (diferencia >= denominacio * 100) {
            const quantitat = Math.floor(diferencia / (denominacio * 100));
            canvi[denominacio] = quantitat;
            diferencia -= quantitat * denominacio * 100;

            // Si la denominación es un billete (mayor o igual a 100), registra el número de billetes devueltos.
            if (denominacio >= 100) {
                billets[denominacio] = quantitat;
            }
        }
    }

    console.log("Número de billetes devueltos:");
    for (const denominacio in billets) {
        console.log(denominacio + " euros: " + billets[denominacio]);
    }
}