// Realiza un programa que solicite al usuario ingresar dos números y determine si son iguales o diferentes.

let numero1 = prompt('Ingrese el Primer número de la comparación');
let numero2 = prompt('Ingrese el Segundo número de la comparación');

numero1 = +numero1;
numero2 = +numero2;

if (numero1 == numero2) {
    alert(numero1 +' es igual que ' + numero2);
} else {
    alert(numero1 +' es diferente a ' + numero2 + ' ¿que me intentas vender?');
}