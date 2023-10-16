function tabla() {
    let filas = parseInt(prompt("Número de filas: "));
    let columnas = filas * 2 - 1;

    const taula = document.getElementById("taula");
    taula.innerHTML = "";

    for (let i = 0; i < filas; i++) {
        const row = document.createElement("tr");
        
        for (let j = 0; j < columnas; j++) {
            const cell = document.createElement("td");
            cell.style.backgroundColor = "white";

            if (j >= filas - i - 1 && j < filas + i) {
                cell.style.backgroundColor = "red";
            }
            row.appendChild(cell);
        }
        taula.appendChild(row);
    }

    for (let i = filas - 2; i >= 0; i--) {
        const row = document.createElement("tr");
        
        for (let j = 0; j < columnas; j++) {
            const cell = document.createElement("td");
            cell.style.backgroundColor = "white";

            if (j >= filas - i - 1 && j < filas + i) {
                cell.style.backgroundColor = "red";
            }
            row.appendChild(cell);
        }
        taula.appendChild(row);
    }
}