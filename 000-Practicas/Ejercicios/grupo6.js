//Ejercicio 1

/* let nombre = prompt("¿Cual es tu nombre?");

let numero1 = parseInt(prompt("ingresa un numero"));
let numero2 = parseInt(prompt("ingresa otro numero"));

alert ("Hola " + nombre + " bienvenid@ a la pagina");

let suma = numero1 + numero2;
alert ("La suma de los numeros que elegiste es esta: " + suma);

let total = suma + (nombre.length);
document.write ("El resultado total es: " + total); */

//Ejercicio 2

/*alert('hello arbi')

document.write (`<br>hello arbi`)

document.write (3+5)

let nombreDos = prompt("ingrese nombre de usuario")
document.write (`<br>Hola" ${nombreDos}`)

let nombre2 = prompt("ingresa tu nombre de nuevo")
document.write(`<br> Hola ${nombre2} tu nombre tiene ${nombre2.length} letras`)*/

//Ejercicios 23-03:

//Ejercicio 1

/*let nombre = prompt("Cual es tu nombre?");
let edad = parseInt(prompt ("Cual es tu edad?"));

if(edad>=18){ 
    alert(`${nombre} podes entrar`);
}else if(edad<18){
    alert(`${nombre} no podes entrar`);
}else {
    alert (`${nombre} no ingresaste un numero`);
}*/

/*Ejercicio 2
// Crear un programa que:
// pida el nombre
// mostrar un alerta que le diga la cantidad de letras que tiene su nombre al usuario/a
// que pida el nombre
// mostrar un alerta que le muestre al usuario/a la suma del numero ingresado + la cantidad de caracteres de su nombre.*/

/*let nombre = prompt(`Ingrese su nombre`);

alert(nombre.length);

let num = parseInt(prompt(`Ingrese un numero: `));

let suma = num + nombre.length;
alert(` la suma del numero ingresado + la cantidad de caracteres del nombre es: ${suma}`);*/

/* Ejercicio 3 
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/

/*let num1 = parseInt(prompt('ingresa un numero'))
let num2 = parseInt(prompt('ingresa otro numero'))

if(num1<num2){
    document.write(`El numero mas grande es ${num2}`)
} else if(num1>num2){
    document.write(`El numero mas grande es ${num1}`)
} else if(num1=num2){
    document.write(`${num1} es igual a ${num2}`)
}
}*/

/* Ejercicio 4: Condicionales
1) Una pequeña despensa desea calcular los sueldos de sus empleados. Los puestos
de los mismos pueden tener 3 categorías: 1- repositor, 2-cajero y 3-supervisor.
a) Los repositores cobran $15.890 + un bono de 10%.
b) Los cajeros cobran $25.630,89 fijos.
c) Los supervisores cobran $35.560,20 en bruto al cual se les descuenta un 11%
de jubilación.
Se necesita un programa que, dependiendo el tipo de empleado del que se trate,
calcule y muestre en pantalla el correspondiente sueldo.*/

/*let puesto = parseInt(prompt(`Bienvenid@ Indique cual es su Puesto: \n 1-Repositor 2-Cajero 3-Supervisor`));

let bono=15890 *(10/100);
let jubilacion= parseFloat(35560.20 * (11/100));

let salUno= 15890 + bono;
let salDos = parseFloat(25630.89);
let salTres = parseFloat(35560.20 - jubilacion);

if(puesto == 1){
    document.write(`<h1>tu salario es de $${salUno.toFixed(2)}</h1>`);
} else if(puesto == 2){
    document.write(`<h1>tu salario es de $${salDos.toFixed(2)}</h1>`);
} else if(puesto == 3){
    document.write(`<h1>tu salario es de $${salTres.toFixed(2)}</h1>`);
} else {
    alert('no elegiste una categoria valida');
}*/