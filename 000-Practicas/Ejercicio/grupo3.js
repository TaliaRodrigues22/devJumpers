//Ejercicio (Investigar parseINT y ParseFLoat )

 // Crear un programa que haga lo siguiente:
 // pedir el nombre al usuario/a .
 // pedir un numero al usuario/a .
 // pedir otro numero

 //devolver un alerta que diga (Hola (nombre de usuario/a) bienvenid@ a la pagina);
 // otro alerta que diga el resultado de los dos numeros ingresados es (resultado); 
 // escribe en pantalla (document.write) "el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: (resultado de la suma + las letras de su nombre)"

let nombreUser = prompt("Ingrese su nombre");
let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let resultado = num1+num2;

alert("Hola "+nombreUser+" bienveni@ a la pagina")

alert(resultado)

document.write("El resultado de la suma de tus numeros es: "+resultado+" y la cantidad de letras de tu nombre es:"+nombreUser.length)