// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

//FUNCIONES
/**
 * Función para decidir qué figura es
 * @param quefigura
 */
const quefigura = () => {
    figura = prompt("El área de qué figura quieres calcular? (circulo, triangulo o cuadrado)");
    
    return figura;
}

/**
 * Función para calcular el area del circulo
 * @param areacirculo
 */
const areacirculo = () => {
    let radio = parseInt(prompt("Especifica el radio del círculo el cuál quieres calcular el area."));
    let pi = 3.141592;
    area = (radio^2)*pi;
    return area;
}

/**
 * Función para calcular el area del triangulo
 * @param areatriangulo
 */
const areatriangulo = () => {
    base = parseInt(prompt("Especifica la base del triangulo."));
    altura = parseInt(prompt("Especifica la altura del triangulo."));
    area = (base * altura) / 2;
    return area;
}

/**
 * Función para calcular el area del cuadrado
 * @param areacuadrado
 */
const areacuadrado = () => {
    lado = parseInt(prompt("Especifica el lado del cuadrado."));
    area = lado * lado;
    return area;
}

//Variables
let resultado = 0;

//Código
let forma = quefigura();

switch (forma) {
    case "circulo":
        resultado = areacirculo();
        console.log(`El área del círculo es: ${resultado}`);
        break;
    
    case "triangulo":
        resultado = areatriangulo();
        console.log(`El área del triangulo es: ${resultado}`);
        break;

    case "cuadrado":
        resultado = areacuadrado();
        console.log(`El área del cuadrado es: ${resultado}`);
        break;

    default:
        break;
}