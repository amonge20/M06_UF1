function EuropaIBAN(palabra) {
    palabra = palabra.toLowerCase();
    let conteoA = 0;
    let conteoE = 0;
    let conteoI = 0;
    let conteoO = 0;
    let conteoU = 0;
    
    for (let i = 0; i < palabra.length; i++) {
      switch (palabra[i]) {
        case 'a':
          conteoA++;
          break;
        case 'e':
          conteoE++;
          break;
        case 'i':
          conteoI++;
          break;
        case 'o':
          conteoO++;
          break;
        case 'u':
          conteoU++;
          break;
      }
    }
    
    return (conteoA > 0 && conteoE > 0 && conteoI > 0 && conteoO > 0 && conteoU > 0);
  }
  
  const palabra = prompt("Introduce una palabra:"); // Solicitar entrada al usuario
  
  if (EuropaIBAN(palabra)) {
    console.log("La palabra es pentavocálica.");
  } else {
    console.log("La palabra no es pentavocálica.");
  }
  