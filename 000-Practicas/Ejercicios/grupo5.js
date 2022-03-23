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
else {
    document.write("Los numeros ingresados son iguales");
}


/* Ejercicio 4. Ahora si
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
} */