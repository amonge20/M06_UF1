function tabla() {
    let files = parseInt = prompt("Numero de filas: ");
    let columnes = parseInt = prompt("Numero de columnas: ");

    const taula = document.getElementById("taula");
    taula.innerHTML = ""; 

    for (let i = 1; i <= files; i++) {
        const fila = document.createElement("tr");
        for (let j = 1; j <= columnes; j++) {
            const celda = document.createElement("td");
            celda.textContent = (i * j);
            fila.appendChild(celda);
        }
        taula.appendChild(fila);
    }
}