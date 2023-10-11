function tabla() {
    let files = parseInt = prompt("Numero de filas: ");
    let columnes = parseInt = prompt("Numero de columnas: ");

    const taula = document.getElementById("taula");
    taula.innerHTML = ""; 

    for (let i = 1; i <= files; i++) {
        const row = document.createElement("tr");
        row.style.backgroundColor = "white";
        for (let j = 1; j <= files * 2; j++) {
            const cell = document.createElement("td");
            if (j >= files - i + 1 && j <= files + i - 1) {
                cell.style.backgroundColor = "red";
            }
            row.appendChild(cell);
        }
        taula.appendChild(row);
    }
}