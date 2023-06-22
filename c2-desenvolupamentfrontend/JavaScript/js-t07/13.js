// Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su
// nombre, tiempo de preparación e ingredientes. Haz una función que saque por consola
// el nombre, el tiempo y una lista de los ingredientes.

//Funciones
const mostrarreceta = (receta) => {
    console.log("Platillo: " + receta.platillo);
    console.log("Tiempo de preparación: " + receta.tiempodepreparacion);
    console.log("Ingredientes:");
    for (let i = 0; i < receta.ingredientes.length; i++) {
        console.log(`${i+1}.  ${receta.ingredientes[i]}`);
    }
}

//Variables
let receta = {
    platillo: "Cuartos traseros al jugo de limón",
    tiempodepreparacion: "1h",
    ingredientes: ["Cuartos traseros", "aceite", "limón", "avecrem en polvo", "vino blanco"]
};

//Código
mostrarreceta(receta);