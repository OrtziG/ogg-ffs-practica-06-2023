// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.
let numero = prompt('Inserta un numero para mostrar todas las sumas hasta el numero.');
let i = 0;

do  {
    console.log(`${i} + 1 = ${i+1}`);
    i++;
} while (i+1 != numero)