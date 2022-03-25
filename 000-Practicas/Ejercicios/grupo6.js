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

//Ejercicios 25-03

//Ejercicio 1

/*let num1 = parseInt(prompt(`Ingrese un numero`));
let num2 = parseInt(prompt(`Ingrese un segundo numero`));
let num3 = parseInt(prompt(`Ingrese un tercer numero`));

if(num1>num2 && num1>num3){
    document.write(`<h1>El numero mayor es ${num1}</h1>`);
}else if(num2>num1 && num2>num3){
    document.write(`<h1>El numero mayor es ${num2}</h1>`);
}else if(num3>num1 && num3>num2){
    document.write(`<h1>El numero mayor es ${num3}<h1>`);
}else if (num1 == num2 && num2 == num3 && num1 == num3){
    document.write(`<h1>Los numeros on iguales</h1>`);
} else{
    alert(`Error: Debe ingresar numeros`);
}*/

//Ejercicio 2: Escribe un programa que pida un número y diga si es divisible por 2

/*let num = prompt(`Ingrese un numero`);

if(num%2 === 0){
    document.write(`<h1>El numero es divisible por dos</h1>`);
} else if(num%2 ==! 0){
    document.write(`<h1>El numero no es divisible por dos</h1>`);
} else{
    alert(`Error: Debe ingresar un numero`);
}*/

//Ejercicio 3:

/*let num = parseInt(prompt("Ingresa un numero"));

if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 ===0){
    document.write(`<h1>El numero ${num} es divisible por alguno de estos numeros: 2, 3, 5 o 7.</h1>`);
} else if(num % 2 ==! 0 || num % 3 ==! 0 || num % 5 ==! 0 || num % 7 ==! 0){
    document.write(`<h1>El numero ${num} NO es divisible por ninguno de estos numeros: 2, 3, 5 o 7.</h1>`);
} else{
    alert(`Error: Debe ingresar numeros`);
}*/