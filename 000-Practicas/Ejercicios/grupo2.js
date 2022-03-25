
/* let nombre = prompt ("Escribe tu nombre");

alert ("Hola " + nombre + " bienvenido/a a la página")

let number1 = parseInt  (prompt  ("Ingresa un número")) ;

let number2 = parseInt (prompt ("Ingresa otro número"));

let resultado  = (number1 + number2);

alert ("El resultado de los dos numeros ingresados es " + resultado );

document.write ("El resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es " + (nombre.length + resultado)) ; */


//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga «Hello Arbi».

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello Arbi».

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba en pantalla un texto que diga «Hola (AcavaNombreQueIngresoElUsuarix)»

//5.- Escribe un programa de dos lineas que pida el nombre al usuario con un prompt y escriba en pantalla un texto que diga «Hola (nombre) tu nombre tiene (cantidaddeletras) letras»


// 1,2,3 ejercicios

/* alert ("Hello Arbi") ;  document.write (" Hello Arbi") ; let suma = (3 + 5) ; document.write ( "   " + suma ) ; */

/* let nombre = (prompt ("Hola")) ; 

document.write ("Hola " + nombre) ; */

// 4,5 ejercicios

//let nombre = prompt ("Hola, escribe tu nombre de usuario") ;

//document.write ("Hola " + nombre + " tu nombre tiene " + nombre.length + " letras") ;


//Ejercicio 23-03

 /* let nombre = prompt (`Ingresa tu nombre`), edad = parseInt (prompt (`Ingresa tu edad`));

if (edad>=18) {
    alert (` ${nombre} podes entrar`)
 }

 else if (edad<=18)   {
     alert  (`${nombre} no podes entrar`)
 }

 else {
     alert (` Error `)
 }  */

 //Ejercicio 2

 /* let nombre = prompt (`Ingresa tu nombre`);
  
  alert (`La cantidad de letras de tu nombre es ${nombre.length}`);

  let numero = parseInt(prompt(`Ingresa número`));

  let suma = nombre.length + numero;
  
  alert (` ${suma}`); 
  */


 //Ejercicio 3 

/*  let numero1 = parseInt (prompt (`Introduce un número`)), numero2 = parseInt(prompt (`Intoduce otro número`));

 if (numero1>numero2) {
     document.write (` Este número es el mayor: ${numero1}`);
 }

 else {
    document.write (` Este numero es el mayor: ${numero2}`);
}  */

//Ejercicio 4

let nombre = prompt(`Ingresa tu nombre:`), categorías = prompt(`Hola ${nombre}, por favor indica tu categoría: Repositor - Cajero - Supervisor`), repositor = (15890 * 0.10) + 15890 , cajero = 25630.89 , supervisor = Math.round( 35560.20 - (35560.20 * 0.11) );
 if ( categorías == "repositor" || categorías == "Repositor") {
document.write (` ${nombre}, tu sueldo como repositor es de: $${repositor}`)
}else if (categorías == "cajero" || categorías == "Cajero") {
    document.write (` ${nombre}, tu sueldo como cajero es de: $${cajero}`)
}else if  (categorías == "supervisor" || categorías == "Supervisor") {
    document.write (` ${nombre}, tu sueldo como supervisor es de: $${supervisor}`)
} else{
      document.write (`Por favor introduzca alguna de las categorías anteriormente mencionadas.`)} 






