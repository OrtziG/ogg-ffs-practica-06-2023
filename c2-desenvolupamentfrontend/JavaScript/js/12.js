// Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre en la consola si ha aprobado (calificación mayor o igual a 70) o no.

let nota = prompt('Ingresa un numero para verificar si has aprobado');
nota = +nota;

if (nota > 70) {
    alert('Felicidades, has aprobado en un sitio dónde un número vale más que una persona 🙃');
} else {
    alert('Al entregar tu examen, se fija en ti el profesor, lo lee un poco y te sonríe: Te veo en la revisión. Piensa que siempre queda setiembre por que si la intentes reclamar siempre te la podemos bajar');
}