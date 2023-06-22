//Ejemplo de uso de JS
// El script alert muestra un pop up con el texto dentro de los apóstrofes.
alert('Hello World');

// Las variables en ems5 > es var, y de ems6 < es let. También existen las const, un tipo de variable SIEMPRE en mayús que no se pueden modificar una vez seteadas.

// Variable de tipo String
var nombre = 'Ortzi';
// Variable de tipo numeric
let edad= 3892;
// Variable de tipo const
const IVA = 0.21;
// Variable de tipo Boolean
let ValorA = true;
// Variables no definidas, null guarda el espacio de memória para la variable mientras que undefined no tiene un espacio guardado para ella.
let ValorB = null;
let ValorC = undefined;

// Operadores: + - * / % ** ++ --
let res = 10 % 2;

// Otros operadores: && || == != === !==

// Pedir datos: promt('lo que se deba pedir');

// Condicionales
let age = prompt('Escriba su edad');
age = +age;
if (age >= 18) {
    console.log('Es mayor de edad');
} else if (age >= 16) {
    console.log('No es mayor de edad, pero puede cumplir condena');
} else {
    console.log('Baby alert')
}

// Switch
let dia = prompt('Escriba el día de la semana');
switch (dia) {
    case 'lunes':
        alert('Hoy es lune');
        break;

    case 'martes':
        alert('Hoy ez martez');
        break;

    case 'miercoles':
        alert('Hoy es miérda');
        break;

    case 'jueves':
        alert('Juebe');
        break;

    case 'viernes':
        alert('POR FIN VIERNEEEEEEEEEEEEEEEEEEE');
        break;

    default:
        alert('No es un día de la semana nen, váyase.');
        break;
}

// Bucles
// While
let saldo = 10;

while (saldo > 10) {
    console.log('Has consumido 1€');
    saldo -= 1; //Iterador
    console.log('Te quedan ' + saldo + '€');
}

// Do While
do {
    console.log('Has consumido 1€');
    saldo -= 1; //Iterador
    console.log('Te quedan ' + saldo + '€');
} while (saldo > 10)

// For
let tabla = prompt('Numero de tabla');

for (let i = 0; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla*i}`);
}


