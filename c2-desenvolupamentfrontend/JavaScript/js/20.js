// Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos los números pares desde ese número hasta 0 utilizando un bucle `while`.
let numero = prompt('Inserta un numero para mostrar todos los pares hasta el 0.');

while (numero > 0) {
    if (numero % 2 == 0) {
        console.log(numero);
        numero=numero-2;
    } else {
        numero = numero-1;
    }
}