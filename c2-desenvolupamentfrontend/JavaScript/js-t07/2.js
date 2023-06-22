// Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola.

//Funciones
//Función de mostrar planetas
const mostrarplanetas = (array) => {
    for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
    }
}

//Variables
let planetas = ["mercurio","venus","LaTierra","marte","jupiter","saturno","urano","neptuno","pluton"];

//Código
mostrarplanetas(planetas);