// Ejercicio 1: Escribe un  programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1 = parseFloat(prompt("Ingrese un número"));
let numero2 = parseFloat(prompt("Ingrese segundo número"));
let numero3 = parseFloat(prompt("Ingrese tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
    alert("El primer número ingresado es el mayor de los tres");
}else if (numero2 > numero1 && numero2 > numero3) {
    alert("El segundo número ingresado es el mayor de los tres");
}else if (numero3 > numero1 && numero3 > numero2) {
    alert("El tercer número ingresado es el mayor de los tres");
}else if (numero1===numero2 && numero2===numero3) {
    alert("Los tres números ingresados son iguales");
}else if (numero1===numero2 && numero1 > numero3) {
    alert("El número 1 y el número 2 son iguales y mayores que tercer número")
}else if (numero2===numero3 && numero2 > numero1) {
    alert("El segundo y tercer número ingresados son iguales y mayores que el primer número")
}else {
    alert("El primer número y el tercer número son iguales, y mayores que el segundo número ingresado")
} 




//Ejercicio 2: Escribe un programa que pida un número y diga si es divisible por 2

let num = parseInt (prompt("por favor ingrese un numero"));
if(num%2 === 0){
    alert(`el ${num} es divisible por 2`);

}
else {
    alert(`el ${num} no es divisible por 2`);
}


//Ejercicio 3: Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
let numero = parseInt(prompt("por favor ingrese un numero"))
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0 ) {
    alert(`El número ingresado ${numero} es divisible por 2, por 3, por 5 o por 7`);
}else {
    alert(`El número ingresado ${numero} no es divisible por 2, por 3, por 5 ni por 7`);
}