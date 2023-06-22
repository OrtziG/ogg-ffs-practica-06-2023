// Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor de ellos

let numero1 = prompt('Ingrese el Primer número de la comparación');
let numero2 = prompt('Ingrese el Segundo número de la comparación');
let numero3 = prompt('Ingrese el Tercer número de la comparación');

numero1 = +numero1;
numero2 = +numero2;
numero3 = +numero3;

if (numero1 > numero2 && numero1 > numero3) {
    alert(numero1 +' es mayor que ' + numero2 + ' y ' + numero3);
} else if (numero2 > numero1 && numero2 > numero3) {
    alert(numero2 +' es mayor que ' + numero1 + ' y ' + numero3);
} else {
    alert(numero3 +' es mayor que ' + numero2 + ' y ' + numero1);
}