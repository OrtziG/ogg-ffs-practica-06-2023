// Realiza un programa que solicite al usuario ingresar un número y determine si es par o impar.
let numero = prompt('Ingresa un numero para verificar si es par o impar');
numero = +numero;

if (numero % 2 === 0) {
    alert('El número escrito es par');
} else {
    alert('El número escrito es impar');
}
