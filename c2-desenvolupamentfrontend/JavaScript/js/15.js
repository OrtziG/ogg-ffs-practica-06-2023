// Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible entre 400).

let año = prompt('Introduzca el año para saber si es bisiesto');
año = +año;

if ((año % 4 == 0 || año % 400 == 0) && año % 100 != 0) {
    alert('Es bisiesto');
} else if (año % 4 != 0 || año % 400 != 0){
    alert('No es bisiesto');
} else {
    alert('Esto no tiene pinta de ser un año eh');
}