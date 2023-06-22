// . Escribe un programa que solicite al usuario ingresar un número y determine si es positivo, negativo o cero.

let positivonegativo = prompt('Ingrese un número para la verificación de numero positivo, negativo o 0');
positivonegativo = +positivonegativo;

if (positivonegativo == 0) {
    alert('El número ingresado es 0');
} else if (positivonegativo > 0) {
    alert('El número ingresado es positivo: ' + positivonegativo);
} else {
    alert('El número ingresado es negativo: ' + positivonegativo);
}


