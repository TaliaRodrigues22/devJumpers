 let nombre = prompt("¿Cual es tu nombre?");

 let numero1 = parseInt(prompt("ingresa un numero"));
 let numero2 = parseInt(prompt("ingresa otro numero"));

 alert ("Hola " + nombre + " bienvenid@ a la pagina");

 let suma = numero1 + numero2;
 alert ("La suma de los numeros que elegiste es esta: " + suma);

 let total = suma + (nombre.length);
 document.write ("El resultado total es: " + total); 