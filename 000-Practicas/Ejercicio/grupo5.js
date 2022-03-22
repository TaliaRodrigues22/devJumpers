/*Ejercicio 1
let nombre = prompt("Deje su nombre");

let numeroNombre = nombre.length;

let number = parseInt(prompt("Deje un número"));

let number2 = parseInt(prompt("Deje otro número"));

let resultado = number + number2;

alert("Hola " + nombre + " bienvenid@ a la pagina");

alert("El resultado de los dos numeros ingresados es: " + resultado);

document.write("El resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: " + (numeroNombre+resultado)); */

//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga «Hello Arbi».
//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello Arbi».
//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba en pantalla un texto que diga «Hola (AcavaNombreQueIngresoElUsuarix)»
//5.- Escribe un programa de dos lineas que pida el nombre al usuario con un prompt y escriba en pantalla un texto que diga «Hola (nombre) tu nombre tiene (cantidaddeletras) letras» 
/*Ejercicio 2 */
alert("Hello Arbi"); 
let nombre=prompt("Introducir nombre");
let nombre2=prompt("Introducir otro nombre");
document.write("Hello Arbi <br> ");
document.write(` ${3+5} <br>`);
document.write(` Hola ${nombre} <br>`);
//document.write(" Hola "+ nombre2 + " tu nombre tiene " + (nombre2.length)+ " letras.");
document.write (` Hola ${nombre2} tu nombre tiene ${nombre2.length} letras`)

