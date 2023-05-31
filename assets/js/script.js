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

let veces_ejecutado = 0;
let continuar = "si";
let ejercicioUno = 0;
let ejercicioDos = 0;
let ejercicioTres = 0;
let ejercicioCuatro = 0;
let ejercicioCinco = 0;
let ejercicioSeis = 0;

function ejercicioMasVecesEjecutados() {
  let variableNames = [
    ejercicioUno,
    ejercicioDos,
    ejercicioTres,
    ejercicioCuatro,
    ejercicioCinco,
    ejercicioSeis,
  ];
  let maxVariable = "";
  let minVariable = "";
  let maxValor = 0;
  let minValor = 0;

  for (var i = 1; i < variableNames.length; i++) {
    var variable = variableNames[i];

    if (variableNames[variable] > maxValor) {
      maxValor = variableNames[variable];
      maxVariable = variable;
    }

    if (variableNames[variable] < minValor) {
      minValor = variableNames[variable];
      minVariable = variable;
    }
  }

  console.log(maxVariable, "mas veces ejecutado: ", maxValor);
  console.log(minVariable, "menos veces ejecutado: ", minValor);
}

while (continuar == "si") {
  let opcion = Number(
    prompt(
      "elija una opcion\n1-ordenar numeros\n2-calcular el area de una circunferencia\n3-mostrar que tipo de triangulo es\n4-algoritmo de numeros amigos\n5-algoritmo valor de compra\n6-Notas de estudiante\n7-Cancelar"
    )
  );

  switch (opcion) {
    case 1:
      ordenarNumeros();
      ejercicioUno++;
      break;
    case 2:
      circunFerencia();
      ejercicioDos++;
      break;
    case 3:
      tipoTriangulo();
      ejercicioTres++;
      break;
    case 4:
      numerosAmigos();
      ejercicioCuatro++;
      break;
    case 5:
      compra();
      ejercicioCinco++;
      break;
    case 6:
      calcularNotaFinal();
      ejercicioSeis++;
      break;
    case 7:
      continuar = "no";
      console.log("total ejercicios ejecutados", veces_ejecutado);
      console.log("Ejercicio 1 se ejecuto", ejercicioUno, "veces");
      console.log("Ejercicio 2 se ejecuto", ejercicioDos, "veces");
      console.log("Ejercicio 3 se ejecuto", ejercicioTres, "veces");
      console.log("Ejercicio 4 se ejecuto", ejercicioCuatro, "veces");
      console.log("Ejercicio 5 se ejecuto", ejercicioCinco, "veces");
      console.log("Ejercicio 6 se ejecuto", ejercicioSeis, "veces");
      ejercicioMasVecesEjecutados();
      break;
  }
  veces_ejecutado++;
}
