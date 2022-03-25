//Ejercicio (Investigar parseINT y ParseFLoat )

 // Crear un programa que haga lo siguiente:
 // pedir el nombre al usuario/a .
 // pedir un numero al usuario/a .
 // pedir otro numero

 //devolver un alerta que diga (Hola (nombre de usuario/a) bienvenid@ a la pagina);
 // otro alerta que diga el resultado de los dos numeros ingresados es (resultado); 
 // escribe en pantalla (document.write) "el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: (resultado de la suma + las letras de su nombre)"

/* let nombreUser = prompt("Ingrese su nombre");
let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let resultado = num1+num2; 

alert("Hola "+nombreUser+" bienveni@ a la pagina")

alert(resultado)

document.write("El resultado de la suma de tus numeros es: "+resultado+" y la cantidad de letras de tu nombre es:"+nombreUser.length)

 */
// Les dejo ejercicios complementarios para los grupos que terminaron . (Agregarlos en su archivo js )
//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga «Hello Arbi».
//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello Arbi».
//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba en pantalla un texto que diga «Hola (AcavaNombreQueIngresoElUsuarix)»
//5.- Escribe un programa de dos lineas que pida el nombre al usuario con un prompt y escriba en pantalla un texto que diga «Hola (nombre) tu nombre tiene (cantidaddeletras) letras»
/* 
/* 1  alert("Hello Arbi")
/* 2  document.write("Hello Arbi"+"<br/>") 
/* 3  document.write((3+5)) // opcion 2 document.write("La suma de los numeros es: "+(3+5))
/* 4   
let nombreUsuario = prompt("Ingrese su nombre de usuario");
document.write("<br/>"+"Hola "+nombreUsuario)
/* 5 
let NombreUser =prompt("Ingrese su nombre")
document.write("<br/>"+"Hola "+NombreUser+" tu nombre tiene "+NombreUser.length+" letras")
*/
//Ejercicio 1
// Crear un programa que:
//pida el nombre 
// pida la edad
// si la edad es igual o mayor a 18 = alerta que diga : "(nombre) podes entrar"
// si la edad es menor a  18 = alerta que diga : "(nombre) no podes entrar"
// si el usuari/o ingresa una letra devolver un mensaje de error
/* let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("ingrese su edad"));
if(edad>=18){
    alert(`Hola ${nombre} podes entrar`);
}
else if(edad<18){
    alert(`Hola ${nombre} no podes entrar`);
}
else{
    alert("Ha puesto un dato erroneo, ingrese un numero");
} */

//Ejercicio 2
// Crear un programa que:
// pida el nombre
// mostrar un alerta que le diga la cantidad de letras que tiene su nombre al usuario/a
// que pida un numero
// mostrar un alerta que le muestre al usuario/a la suma del numero ingresado + la cantidad de caracteres de su nombre.
/* let nombre = prompt("Ingrese su nombre");
let num = parseInt(prompt("Ingrese un numero"));
alert(`Hola ${nombre} su nombre tiene ${nombre.length} cantidad de letras`);
alert(`${nombre} la suma del numero ingresado + la cantidad de caracteres de su nombre es: ${nombre.length + num}`) */

// Ejercicio 3 
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
/* let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
num1 > num2 ? alert(`El numero mayor es ${num1}`) : alert(`El numero mayor es ${num2}`) */

/* Ejercicio 4: Condicionales
1) Una pequeña despensa desea calcular los sueldos de sus empleados. Los puestos
de los mismos pueden tener 3 categorías: 1- repositor, 2-cajero y 3-supervisor.
a) Los repositores cobran $15.890 + un bono de 10%.
b) Los cajeros cobran $25.630,89 fijos.
c) Los supervisores cobran $35.560,20 en bruto al cual se les descuenta un 11%
de jubilación.
Se necesita un programa que, dependiendo el tipo de empleado del que se trate,
calcule y muestre en pantalla el correspondiente sueldo. */
/* 
let sueldos;
let empleados = prompt("seleccione la opcion que corresponda 1-repositor 2-cajero 3-supervisor");

if(empleados==1){
    sueldos = 15890*1.10;
    alert(`Su sueldo de repositor es:$ ${sueldos}`)
}
else if(empleados==2){
    sueldos=25630*1,10; // lo tuve que hacer asi porque no me tomaba el 0 :(
    alert(`Su sueldo como cajero es:$ ${sueldos}`);
}
else if(empleados==3){
    sueldos=35560-35560*0.11; // lo tuve que hacer asi porque no me hacia bien el calculo :(
    alert(`Su sueldo como supervisor es:$ ${sueldos}`);
} */