// Escribe un programa que pida al usuario ingresar su edad y verifique si es mayor de edad (18 años o más).

let age = prompt('Escriba su edad');
age = +age;

if (age >= 18) {
    console.log('Es mayor de edad');
} else if (age < 18 && age >= 16) {
    console.log('No es mayor de edad, pero puede cumplir condena');
} else {
    console.log('Baby alert')
}