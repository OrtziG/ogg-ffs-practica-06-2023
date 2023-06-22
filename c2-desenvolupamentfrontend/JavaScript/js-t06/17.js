// Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos los números pares desde 2 hasta ese número utilizando un bucle `while`.
let numero = prompt('Inserta un numero para mostrar todos los pares hasta el numero.');
let i = 1;

while (i*2 < numero) {
    console.log(`${i} x 2 = ${i*2}`);
    i++;
}