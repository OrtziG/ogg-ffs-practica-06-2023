// Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2 corresponde a "Febrero", etc.).

let mes = prompt('Escriba el número del mes');
switch (mes) {
    case 1:
        alert('En enero, el que no se moja, se queda sin calzones');
        break;

    case 2:
        alert('Febrero loco y para marzo falta poco');
        break;

    case 3:
        alert('Para marzo no tengo nada pensado ya que los refranes que he encontrado son pochos, así qué: Es Marzo');
        break;

    case 4:
        alert('En abril, aguas mil');
        break;

    case 5:
        alert('Hasta el 40 de mayo no te quites el sayo');
        break;

    case 6:
        alert('Junio lluvioso, año copioso');
        break;
    
    case 7:
        alert('Por San Fermín, el calor entra y no tiene fin. Que asco por dio');
        break;

    case 8:
        alert('Agosto frío, trigo al granero');
        break;

    case 9:
        alert('Septiembre, mes de las manzanas y las uvas verdes');
        break;

    case 10:
        alert('Octubre, buen mes pero de mucho gastar');
        break;

    case 11:
        alert('En noviembre, la nieve en el tendal y la leña en el portal');
        break;

    case 12:
        alert('En diciembre, frío o calor, mete la mano en el cajón. Nunca entenderé este refrán.');
        break;

    default:
        alert('No es un Mes nen, váyase y repita conmigo, ' + mes + ' no es un número válido ya que el año sólo tiene 12 Meses. De vuelta a primaria. Sí, está reciclado del ejercicio de la semana.');
        break;
}