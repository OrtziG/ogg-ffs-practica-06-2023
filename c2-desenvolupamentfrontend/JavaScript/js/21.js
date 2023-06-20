// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la multiplicación de todos los números enteros positivos menores o iguales a ese número utilizando un bucle `do...while`

let numero = prompt('Inserta un numero');
let i = 1;

do {
    console.log(i*i);
    i++;
} while (i <= numero);