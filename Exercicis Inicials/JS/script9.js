function tabla(){
    let files = parseInt = prompt("Numero de files: ");
    let columnes = parseInt = prompt("Numero de columnes: ");

    let tabla = document.getElementById("tabla");
    let tbody = document.createElement('tbody');

    for (let i = 0; i < files; i++){
        let fila = document.createElement('tr');
        for (let j = 0; j < columnes; j++) {
            let celda = document.createElement('td');
            celda.textContext = "(" + i + "," + j + ")";
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
}