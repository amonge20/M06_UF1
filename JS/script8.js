function calcularCanvi() {
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
    let dineroPagado = parseFloat(prompt("Ingrese el dinero entregado: "));

    // Convert prices and paid money to cents for easier calculations.
    precioProducto = precioProducto * 100;
    dineroPagado = dineroPagado * 100;

    // Calculate the difference between the paid money and the product price.
    let diferencia = dineroPagado - precioProducto;

    // Array of available denominations (in cents and euros).
    const denominations = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    console.log("Precio del producto: " + (precioProducto / 100).toFixed(2) + " euros");
    console.log("Dinero pagado: " + (dineroPagado / 100).toFixed(2) + " euros");
    console.log("Cambio a devolver: " + (diferencia / 100).toFixed(2) + " euros");

    const cambio = {};
    const billetes = {};

    for (let i = 0; i < denominations.length; i++) {
        const denominacion = denominations[i];

        if (diferencia >= denominacion) {
            const cantidad = Math.floor(diferencia / denominacion);
            cambio[denominacion / 100] = cantidad;
            diferencia -= cantidad * denominacion;

            // If the denomination is a bill (greater than or equal to 100), record the number of bills returned.
            if (denominacion >= 100) {
                billetes[denominacion / 100] = cantidad;
            }
        }
    }

    console.log("Número de billetes devueltos:");
    for (const denominacion in billetes) {
        console.log(denominacion + " euros: " + billetes[denominacion]);
    }
}