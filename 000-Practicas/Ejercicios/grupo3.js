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

/* 1  */alert("Hello Arbi")
/* 2  */document.write("Hello Arbi"+"<br/>") 
/* 3  */document.write((3+5)) // opcion 2 document.write("La suma de los numeros es: "+(3+5))
/* 4  */ 
let nombreUsuario = prompt("Ingrese su nombre de usuario");
document.write("<br/>"+"Hola "+nombreUsuario)
/* 5  */
let NombreUser =prompt("Ingrese su nombre")
document.write("<br/>"+"Hola "+NombreUser+" tu nombre tiene "+NombreUser.length+" letras")
