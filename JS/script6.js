function binari(){
  //Demana a l'usuari el numero que vol
  const decimal = parseInt(prompt("Ingresa un número en base 10: "));

  // Converteix a binari
  const binari = decimal.toString(2);

  //Es mostrara el resultat final
  console.log(`Número en binario: ${binari}`);
}

function octadecimal(){
  //Demana a l'usuari el numero que vol
  const decimal = parseInt(prompt("Ingresa un número en base 10: "));

  // Converteix a binari
  const octal = decimal.toString(8);

  //Es mostrara el resultat final
  console.log(`Número en octal: ${octal}`);
}

function hexadecimal(){
  //Demana a l'usuari el numero que vol
  const decimal = parseInt(prompt("Ingresa un número en base 10: "));

  // Converteix a binari
  const hexadecimal = decimal.toString(16);

  //Es mostrara el resultat final
  console.log(`Número en hexadecimal: ${hexadecimal}`);
}