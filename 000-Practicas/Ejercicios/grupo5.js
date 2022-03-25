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
// alert("Hello Arbi"); 
// let nombre=prompt("Introducir nombre");
// let nombre2=prompt("Introducir otro nombre");
// document.write("Hello Arbi <br> ");
// document.write(` ${3+5} <br>`);
// document.write(` Hola ${nombre} <br>`);
/*document.write(" Hola "+ nombre2 + " tu nombre tiene " + (nombre2.length)+ " letras."); */
// document.write (` Hola ${nombre2} tu nombre tiene ${nombre2.length} letras`)




//Ejercicio 1
// Crear un programa que:
//pida el nombre 
// pida la edad
// si la edad es igual o mayor a 18 = alerta que diga : "(nombre) podes entrar"
// si la edad es menor a  18 = alerta que diga : "(nombre) no podes entrar"
// si el usuari/o ingresa una letra devolver un mensaje de error

//Ejercicio 2
// Crear un programa que:
// pida el nombre
// mostrar un alerta que le diga la cantidad de letras que tiene su nombre al usuario/a
// que pida el nombre
// mostrar un alerta que le muestre al usuario/a la suma del numero ingresado + la cantidad de caracteres de su nombre.

// Ejercicio 4 
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/* Ejercicio 4: Condicionales
1) Una pequeña despensa desea calcular los sueldos de sus empleados. Los puestos
de los mismos pueden tener 3 categorías: 1- repositor, 2-cajero y 3-supervisor.
a) Los repositores cobran $15.890 + un bono de 10%.
b) Los cajeros cobran $25.630,89 fijos.
c) Los supervisores cobran $35.560,20 en bruto al cual se les descuenta un 11%
de jubilación.
Se necesita un programa que, dependiendo el tipo de empleado del que se trate,
calcule y muestre en pantalla el correspondiente sueldo. */

/* Ejercicio 1:
 let nom = prompt("Ingrese nombre");
let edad = parseInt(prompt("Ingrese edad"));

if (edad>=18){
    alert(`${nom} podes entrar`);
}
else if(edad<18){
    alert(`${nom} no podes entrar`);
}
else {
    alert("Escriba numero");
} */

/* Ejercicio 2
let nom = prompt(`Ingrese nombre`);
let num = parseInt(prompt(`Ingrese un número`));

alert(`La cantidad de caracteres de tu nombre es de: ${nom.length}`);
alert(`La suma de los caracteres de tus nombres mas el numero ingresado es de : ${nom.length + num}`);  */

/* Ejercicio 4? o 3 no se 
let num = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese otro numero"));

if (num>num2){
    document.write(`${num} es mayor que ${num2}`);
}
else if(num2>num){
    document.write(`${num2} es mayor que ${num}`);
}
else if (num===num2) {
    document.write("Los numeros ingresados son iguales");
}
else{
    document.write("Escribir numeros");
}
*/

/*
 // Ejercicio 4. Ahora si
let empl = prompt(`Ingresa: R (si sos repositor) - C (si sos cajero) - S (si sos supervisor)`);

if(empl === "R" || empl === "r"){

    document.write(`Hola repositor/a su sueldo es de un total de : $${15890*0.10+15890}`);
}
else if(empl === "C" || empl === "c"){
    document.write("Hola cajero/a su sueldo es de un total de : $25.630,89");
}
else if (empl === "S" || empl === "s"){
    document.write(`Hola supervisor/a su sueldo es de un total de : $${Math.ceil(35560.20-35560.20*0.11)}`);
}
else{
    alert("No pusiste los datos solicitados, vuelta a intentarlo.");
    window. location. reload(); // Esto refresca  la página luego de ingresar un dato no válido. Luana Crack.
<<<<<<< HEAD
}
switch(empl){
     case "R" , "r": 
        document.write(`Hola repositor/a su sueldo es de un total de : $${15890*0.10+15890}`);
        break;
     case "C" , "c":
        document.write("Hola cajero/a su sueldo es de un total de : $25.630,89");
        break;
     case "S" , "s" :
        document.write(`Hola supervisor/a su sueldo es de un total de : $${Math.ceil(35560.20-35560.20*0.11)}`);
        break; 
    default:
        document.write("Elegiste una opción que no existe");
        break;    
} // ejercicio 4 realizado con switch 
*/


//25/03/2022
//Ejercicio 1: Escribe un  programa que pida 3 números y escriba en la pantalla el mayor de los tres.



// Ejercicio 1: Escribe un  programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/* let num0 = parseInt(prompt("Ingrese un número")); //num0 buena practica para el uso de vectores/array
let num1 = parseInt(prompt("Ingrese otro número"));
let num2 = parseInt(prompt("Ingrese otro número"));
if(num0 > num1 && num0 > num2){
    document.write(`El primer numero digitado es ${num0} y es mayor que ${num1} y ${num2}`);
}
else if(num1 > num0 && num1 > num2){
    document.write(`El segundo numero digitado es ${num1} y es mayor que ${num0} y ${num2}`);
}
else if(num2 > num0 && num2 > num1){
    document.write(`El tercer numero digitado es ${num2} y es mayor que ${num0} y ${num1}`);
}
else if(num0===num1 || num0===num2 || num1===num2){
    alert("Hay números repetidos");
    window. location. reload();
}
else{
    alert("ERROR! Verifique los datos ingresados");
    window. location. reload(); 
}*/



//Ejercicio 2: Escribe un programa que pida un número y diga si es divisible por 2





//Ejercicio 3: Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) *
let num = parseFloat(prompt("Ingrese un numero para saber si es divisible por 2"));

if(num%2==0) {
    document.write(`Su numero ${num} es divisible por 2`);
}/*  else if(num%2!==0){
    document.write(`Su numero ${num} no es divisible por 2`);
} Preguntar por que no funciona con el signo de exclamacion adelante del igual */
    else if(num%2===!0){
    document.write(`Su numero ${num} no es divisible por 2`);
} else {
    alert("No ingreso ningún número.");
    window. location. reload();
} // Preguntarle a gabi sobre el resultado con coma



//Ejercicio 3: Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

/* let num = parseFloat(prompt("Ingrese un numero para saber si es divisible por 2, 3, 5 o 7"));

if(num%2==0 || num%3==0 || num%5==0 || num%7==0) {
    document.write(`Su numero ${num} es divisible por 2, 3, 5, o 7, adivina cual`);
} else if(!num%2==0 || !num%3==0 || !num%5==0 || !num%7==0){
    document.write(`Su numero ${num} no es divisible ni por 2 ni 3 ni 5 ni 7, adivina cual`);
} else {
    alert("No ingreso ningún número.");
    window. location. reload();
} */

