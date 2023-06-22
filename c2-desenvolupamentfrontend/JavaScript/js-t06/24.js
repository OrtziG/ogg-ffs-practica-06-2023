// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la suma de todos los dígitos del número utilizando un bucle `while`
numero = prompt('Ingrese el numero para la disección');
i = 0;

while (i <= numero.length) {
    suma = numero.substring(i);
    console.log(suma);
    i++;
}