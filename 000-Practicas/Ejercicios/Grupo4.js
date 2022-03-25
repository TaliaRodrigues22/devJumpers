
/* //EJERCICIO 1
 
let nombre = prompt ("Inserte su nombre aquí");
let edad = parseInt( prompt(` Hola ${nombre} coloca tu edad`));

if (edad>=18) {
alert (`${nombre} Podes entrar.`);
}

else if(edad<18){
    alert (` ${nombre} No podes entrar.`);
    }

else {
alert(`Por favor ${nombre} ingrese solo números.`)
} 



// EJERCICIO 2
 
let nombre = prompt ("Inserte su nombre aquí");
alert (`${nombre} tu nombre tiene ${nombre.length} letras`);

let numero = parseInt (prompt(`Inserte un número para hacer una suma`));
alert(`${(nombre.length+numero)}`)



// EJERCICIO 3
 
let n1 = parseFloat(prompt("Ingrese un número"));
let n2 = parseFloat (prompt("Ingrese otro número"));

if (n1>n2) {
    document.write (`El número ${n1} es mayor a ${n2}.`);
}
else if (n2>n1) {
    document.write (`El número ${n1} es menor a ${n2}.`);
}
else if (n1==n2) {
    document.write (`${n1} Y ${n2} son iguales.`);
}
else {
    document.write(`ERROR! Por favor, Ingrese un número.`);
}



// EJERCICIO 4

let categorias = parseInt (prompt("Ingrese alguna de las siguientes categorias 1-repositos, 2 cajero, 3-supervisor"));

let repositores = 15890+(15890*(10/100));
let cajeros = 25630.39;
let supervisores = (35560.20 -((35560.20)*(11/100))) .toFixed(2);

if(categorias==1){
    document.write (`Repositor su categoria es ${categorias} y su sueldo es de $${repositores}.`);
}

else if(categorias==2){
    document.write(`Cajero su categoria es ${categorias} y su sueldo es de $${cajeros}.`);
}

else if(categorias==3){
    document.write(`Supervisor su categoria es ${categorias} y su sueldo es de $${supervisores}.`);
}

else{
    document.write(`Ingresa un número que este dentro de las categorias.`);
} */


// CLASE 5 (25/03/2022)
// Ejercicio 1: Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseFloat(prompt(`Ingrese un numero.`));
let num2 = parseFloat(prompt(`Ingrese un numero por segunda vez.`));
let num3 = parseFloat(prompt(`Ingrese un numero por tercera vez.`));

if (num1 > num2 && num1 > num3){
    document.write(`El ${num1} es el mayor de los tres numeros ingresados.`);
} else if (num2 > num1 && num2 > num3){
    document.write(`El ${num2} es el mayor de los tres numeros ingresados.`);
} else if (num3 > num2 && num3 > num1){
    document.write(`El ${num3} es el mayor de los tres numeros ingresados.`);
} else if (num1==num2 && num1>num3){
    document.write(`El primer y segundo número ingresados son los mayores.`);
} else if (num1==num3 && num1>num2){
    document.write(`El primer y tercer número ingresados son los mayores.`);
} else if (num2==num3 && num2>num1){
    document.write(`El segundo y tercer ingresados son los mayores.`);
} else if (num1==num2 && num2==num3){
    document.write(`Los tres números ingresados son iguales.`);
} else {
    document.write(`ERROR! Por favor, ingrese en todos los campos un número.`)
}
 
//Ejercicio 2: Escribe un programa que pida un número y diga si es divisible por 2

let numero = parseInt(prompt(`Ingrese un número.`));
let resto = numero%2;

if (resto==0){
    document.write(`El número ingresado es divisible por 2.`);
} else{
    document.write(`El número ingresado NO es divisible por 2. Pruebe con otro.`);
}

//Ejercicio 3: Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

let numero = parseInt(prompt(`Ingrese un número.`));

let resto2 = numero%2;
let resto3 = numero%3;
let resto5 = numero%5;
let resto7 = numero%7;


if (resto2==0){
    document.write(`El número ingresado es divisible por 2.`);
}  else if(resto3==0){
    document.write(`El número ingresado es divisible por 3.`);
}  else if(resto5==0){
    document.write(`El número ingresado es divisible por 5.`);
}  else if(resto7==0){
    document.write(`El número ingresado es divisible por 7.`);
}  else{
    document.write(`El número no es divisible por ninguno. Pruebe con otro.`);
}