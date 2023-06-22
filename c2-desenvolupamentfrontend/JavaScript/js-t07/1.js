// Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del
// array y lo saque por consola.

//Funciones
//Función de calculo de longitud
const longitud = (array) => {
    console.log("La longitud del Array es: " + array.length)
}

//Función de obtención de carácter aleatorio
const aleatorio = (array) => {
    let cantidadaleatorio = Math.floor(Math.random()*9);
    let caracteraleatorio = array[cantidadaleatorio];
    console.log(caracteraleatorio);
}

//Variables
let abcedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];


//Código
longitud(abcedario);

aleatorio(abcedario);
