// Realiza un programa que solicite al usuario ingresar el día de la semana (como número del 1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1 corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let dia = prompt('Escriba el día de la semana');
switch (dia) {
    case 1:
        alert('Hoy es Lune');
        break;

    case 2:
        alert('Hoy ez Martez');
        break;

    case 3:
        alert('Pensando ya en el finde, ¿eh?, pues aún no que estás a media semana');
        break;

    case 4:
        alert('Juebe');
        break;

    case 5:
        alert('POR FIN VIERNEEEEEEEEEEEEEEEEEEE');
        break;

    case 6:
        alert('Amono de fiesta que es: Saturday Night nararaninananana');
        break;
    
    case 7:
        alert('Dio mio, el domingo se está haciendo corto, mañana ya es Lunes 🤮');
        break;

    default:
        alert('No es un día de la semana nen, váyase y repita conmigo, ' + dia + ' no es un número válido ya que la semana sólo tiene 7 días. De vuelta a primaria');
        break;
}