// Crea un programa que solicite al usuario ingresar un número y determine si es divisible entre 3.

let numero = prompt('Ingresa un numero para verificar si es divisible entre 3');
numero = +numero;

if (numero % 3 === 0) {
    alert('El número escrito es divisible entre 3.');
} else {
    alert('El número escrito no es divisible entre 3.');
}