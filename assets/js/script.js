function ordenarNumeros() {
  let numUno = parseInt(prompt("Ingresa el primer número"));
  let numDos = parseInt(prompt("Ingresa el segundo número"));
  let numTres = parseInt(prompt("Ingresa el tercer número"));

  if (numUno < numDos && numUno < numTres) {
    if (numDos < numTres) {
      console.log("el orden es Menor a mayor: ", numUno, numDos, numTres);
    } else {
      console.log("el orden es Menor a mayor: ", numUno, numTres, numDos);
    }
  } else if (numDos < numUno && numDos < numTres) {
    if (numUno < numTres) {
      console.log("el orden es Menor a mayor: ", numDos, numUno, numTres);
    } else {
      console.log("el orden es Menor a mayor: ", numDos, numTres, numUno);
    }
  } else if (numTres < numUno && numTres < numDos) {
    if (numUno < numDos) {
      console.log("el orden es Menor a mayor: ", numTres, numUno, numDos);
    } else {
      console.log("el orden es Menor a mayor: ", numTres, numDos, numUno);
    }
  }
  if (numUno > numDos && numUno > numTres) {
    if (numDos > numTres) {
      console.log("el orden es mayor a menor: ", numUno, numDos, numTres);
    } else {
      console.log("el orden es mayor a menor: ", numUno, numTres, numDos);
    }
  } else if (numDos > numUno && numDos > numTres) {
    if (numUno > numTres) {
      console.log("el orden es mayor a menor: ", numDos, numUno, numTres);
    } else {
      console.log("el orden es mayor a menor: ", numDos, numTres, numUno);
    }
  } else if (numTres > numUno && numTres > numDos)
    if (numUno > numDos) {
      console.log("el orden es mayor a menor: ", numTres, numUno, numDos);
    } else {
      console.log("el orden es mayor a menor: ", numTres, numDos, numUno);
    }
}
