// Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// que introducirá el usuario a placer, pero con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array o sólo las que pida el usuario.


//Funciones
//Función para pedir las recetas y su elaboración.
const pedirreceta = (numerodereceta) => {


    //contenido de la receta.
    let platillo = prompt(`Nombre del platillo número ${numerodereceta + 1}:`);
    let tiempodepreparacion = prompt("Tiempo que se tarda en preparar el platillo:");
    let ingredientes = [];

    //Bucle para introducir los ingredientes en su variable correspondiente (ingredientes) según la cantidad especificada por el usuario.
    cantidadingredientes = parseInt(prompt(`¿Cuántos ingredientes existen en el platillo ${platillo}? (no se puede modificar)`));
    for (let i = 0; i < cantidadingredientes; i++) {
        ingredientepedido = prompt(`Introduzca el ingrediente número ${i + 1}:`);
        ingredientes.push(ingredientepedido)
    }

    //Añadir el contenido de la receta pedido a una receta.
    receta = {
        platillo: platillo,
        tiempodepreparacion: tiempodepreparacion,
        ingredientes: ingredientes
    };

    //Devolvemos la receta lista para ser añadida al libro de recetas.
    return receta;
}

// Funcion para preguntar si desea 1 o todas las recetas del libro
const querecetas = (libroderecetas) => {
    //En caso de no querer mostrar todas las recetas se le pedirá al usuario que especifique qué receta desea mostrar.
    for (let i = 0; i < libroderecetas.length; i++) {

        //Creamos la variable  "mostrar" para saber si desean mostrar la receta de ese platillo.
        let mostrar = prompt(`¿Desea mostrar la receta de ${libroderecetas[i].platillo}?`);

        //Según la respuesta seguiremos adelante mostrando mas nombres de platillos o mostrarenis la receta escogida, y así con todos los platillos.
        if (mostrar === "si" || mostrar === "Si" || mostrar === "sí" || mostrar === "Sí") {
            console.log(libroderecetas[i]);
        } else if (mostrar === "no" || mostrar === "No"){
            console.log(`Se ha decidido no mostrar la receta de ${libroderecetas[i].platillo}`);
        }
    }
}

//Variables
//Variable que contendrá todas las recetas.
recetalista = null;
libroderecetas = [];
cantidadrecetas = parseInt(prompt("¿Cuántas recetas vas a introducir en el libro de recetas?"));

//Código
//Bucle para poder obtener cada receta.
for (let i = 0; i < cantidadrecetas; i++) {
    recetalista = pedirreceta(i);
    //Añadir cada receta al libro de recetas para su posterior uso.
    libroderecetas.push(recetalista);
}

//Se pregunta al usuario si se quiere ver todas las recetas.
let mostrartodas = prompt("¿Desea ver todas las recetas añadidas al libro?");

 //Dependiendo de sí o no, el programa mostrará TODAS las recetas o sólo algunas, que el usuario especificará mas tarde.
if (mostrartodas === "no" || mostrartodas === "No") {
    //Llamada a la función que pedirá al usuario decidir que recetas mostrar.
    querecetas (libroderecetas);
} else if (mostrartodas === "si" || mostrartodas === "Si" || mostrartodas === "sí" || mostrartodas === "Sí"){
    //Mostrar todas las recetas del libro
    console.log(libroderecetas);
} else {
    console.log("Vaya, algo ha ido mal");
}






