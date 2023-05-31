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

function circunFerencia() {
  const pi = 3.1416;
  let radio = parseFloat(prompt("digite el radio "));
  let area;

  area = pi * radio * radio;

  console.log("el area de la circunferencia es: ", area);
}

function tipoTriangulo() {
  let ladoA = prompt("ingresar el lado A");
  let ladoB = prompt("ingresar el lado A");
  let ladoC = prompt("ingresar el lado A");
  if (ladoA == ladoB && ladoB == ladoC) {
    console.log("El triangulo es equilátero");
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("El triangulo es isósceles");
  } else {
    console.log("El triangulo es escaleno");
  }
}

function sumaDivisores(numero) {
  let suma_divisores = 0;
  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0) {
      suma_divisores += i;
    }
  }
  return suma_divisores;
}

function numerosAmigos() {
  const numero1 = prompt("digite el primer numero");
  const numero2 = prompt("digite el segundo numero");
  const suma_divisores1 = sumaDivisores(numero1);
  const suma_divisores2 = sumaDivisores(numero2);

  if (
    suma_divisores1 === numero2 &&
    suma_divisores2 === numero1 &&
    numero1 !== numero2
  ) {
    console.log(numero1 + " y " + numero2 + " son números amigos.");
  } else {
    console.log(numero1 + " y " + numero2 + " no son números amigos.");
  }
}

function compra() {
  const valorCompra = prompt("ingrese el valor de la compra");
  const cantidad = prompt("ingrese la cantidad");
  let totalCompra = valorCompra * cantidad;
  console.log("el total de la compra es", totalCompra);

  const iva = totalCompra * 0.19;
  console.log("el total del iva es: ", iva);

  if (totalCompra > 500000) {
    console.log("se le obsequia el valor del iva en total es: ", totalCompra);
  }
  if (totalCompra > 1000000) {
    let descuentoDiezPorciento = totalCompra * 0.1;
    console.log("se le hizo un desceunto del 10%: ", descuentoDiezPorciento);
  }
}

function calcularNotaFinal() {
  let notaUno = prompt("Digite la nota 1");
  if (notaUno > 5) {
    console.log("nota uno No valida");
    return;
  }
  let notaDos = prompt("Digite la nota 2");
  if (notaDos > 5) {
    console.log("nota dos No valida");
    return;
  }
  let notaTres = prompt("Digite la nota 3");
  if (notaTres > 5) {
    console.log("nota tres No valida");
    return;
  }
  let notaCuatro = prompt("Digite la nota 4");
  if (notaCuatro > 5) {
    console.log("nota cuatro No valida");
    return;
  }

  if (notaCuatro === 5) {
    notaUno += 1;
    notaDos += 1;
    notaTres += 1;
  }

  const notaFinal =
    notaUno * 0.1 + notaDos * 0.2 + notaTres * 0.3 + notaCuatro * 0.4;

  if (notaFinal > 3.5) {
    console.log("El estudiante ganó", notaFinal);
  } else {
    console.log("El estudiante perdió", notaFinal);
  }
}
