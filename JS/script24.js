function calcularDigitoControlEAN(digitos) {
    // Verifica si el número de dígitos es válido
    if (digitos.length !== 7 && digitos.length !== 12) {
      return "Número de dígitos no válido";
    }
  
    // Convierte los dígitos en un arreglo
    const digitArray = digitos.split("").map(Number);
  
    // Calcula la suma de los dígitos según la regla
    let suma = 0;
    for (let i = 0; i < digitArray.length; i++) {
      suma += i % 2 === 0 ? digitArray[i] : digitArray[i] * 3;
    }
  
    // Calcula el dígito de control restando la suma del próximo múltiplo de 10
    const digitoControl = (10 - (suma % 10)) % 10;
  
    return digitoControl;
  }
  
  function calcularDCCodigoDeBarras() {
    // Solicita al usuario que ingrese el número de dígitos
    const digitos = prompt("Ingresa los dígitos (7 para EAN-8 o 12 para EAN-13):");
  
    // Calcula el dígito de control
    const digitoControl = calcularDigitoControlEAN(digitos);
  
    // Muestra el resultado
    if (digitoControl !== "Número de dígitos no válido") {
      console.log("Dígito de control calculado: " + digitoControl);
    } else {
      console.log("Número de dígitos no válido. Ingresa 7 para EAN-8 o 12 para EAN-13.");
    }
  }  