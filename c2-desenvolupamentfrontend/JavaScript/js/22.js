// Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola cada letra de la palabra en una línea diferente utilizando un bucle `for`.
let palabra = prompt('Inserte una palabra');

for (let i = 0; i < palabra.length; i++) {
    letra = palabra.substring(i,i+1)
    console.log(letra);
}