// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.

//Funciones
const aleatorios = (minimo, maximo) => {
    let cuantosnums = parseInt(prompt("Ingresa la cantidad de números aleatorios que neceitas:"));
    let numeroaleatorios = [];
    
    for (let i = 0; i < cantidad; i++) {
        let numeroaleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        numeroaleatorios.push(numeroaleatorio);
    }
    
    return numeroaleatorios;
}

//Código
let numerominimo = parseInt(prompt("Ingresa el numero mínimo:"));
let numeromaximo = parseInt(prompt("Ingresa el numero máximo:"));
let numerosobtenidos = aleatorios(numerominimo, numeromaximo);

console.log("Números aleatorios:");
console.log(numerosobtenidos);