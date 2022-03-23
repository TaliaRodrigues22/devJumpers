   /* 

let nombre = prompt("Ingrese su nombre");
let numero1 = parseInt(prompt("Ingrese un número")); //parseInt toma como numero el valor que se ingresa, siempre que sea entero//


alert("Hola " + nombre + " bienvenid@ a la pagina");

let numero2 = parseInt(prompt("Ingrese otro número"));

let resultado = (numero1 + numero2);

alert("El resultado de los dos numeros ingresados es " + resultado);

document.write("el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: " + parseInt(nombre.length + resultado) ); 
*/





//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga «Hello Arbi».

//alert("Hello Arbi");
//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello Arbi».
//document.write ("Hello Arbi<br/>")
//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//document.write ("El resultado de 3 + 5 =" + (3 + 5) +"<br/>");
//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba en pantalla un texto que diga «Hola (AcavaNombreQueIngresoElUsuarix)»
//let nombre = prompt("Ingrese su nombre");
//document.write (`Hola ${nombre} <br/>`);

//5.- Escribe un programa de dos lineas que pida el nombre al usuario con un prompt y escriba en pantalla un texto que diga «Hola (nombre) tu nombre tiene (cantidaddeletras) letras»

//document.write (`Hola ${nombre} tu nombre tiene ${nombre.length}`)



// 23/3 
                                                             //Ejercicio 1 
// Crear un programa que:
//pida el nombre 
//let nombre= prompt ("ingresar nombre");
// pida la edad
//let edad= prompt ("ingrese edad");
// si la edad es igual o mayor a 18 = alerta que diga : "(nombre) podes entrar"
//if(edad>=18) { 
  //   alert(`${nombre} podes entrar` )
 // si la edad es menor a  18 = alerta que diga : "(nombre) no podes entrar"
//} else if (edad<18){
//alert(`${nombre} no podes entrar` )

//} else{
   //  alert(`${nombre} no ingresaste ningun numero`)// si el usuari/o ingresa una letra devolver un mensaje de error
//};



                                                           //Ejercicio 2
// Crear un programa que:
// pida el nombre
//let nombre= prompt("Ingresá tu nombre");
// mostrar un alerta que le diga la cantidad de letras que tiene su nombre
//alert (`Tu nombre tiene ${nombre.length} letras `);
// que pida un número
//let numero=parseInt (prompt("Ingresá un número"));
// Mostrar un alerta que le muestre al usuario/a el resultado de la suma del numero ingresado + la cantidad de caracteres de su nombre.
//let resultado= (nombre.length + numero);
//alert (`La suma de las letras de tu nombre más el número que ingresaste es ${resultado}`);

// Ejercicio 3
//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let number1 = parseInt(prompt("ingresa un número"));

// let number2 = parseInt(prompt("ingresa otro número"));

// if(number1>number2){
//     document.write(`El ${number1} es el número mas grande que ingresaste`)
// }else{
//     document.write(`El ${number2} es el número mas grande que ingresaste `)
// };

/* Ejercicio 4: Condicionales
1) Una pequeña despensa desea calcular los sueldos de sus empleados. Los puestos
de los mismos pueden tener 3 categorías: 1- repositor, 2-cajero y 3-supervisor.
a) Los repositores cobran $15.890 + un bono de 10%.
b) Los cajeros cobran $25.630,89 fijos.
c) Los supervisores cobran $35.560,20 en bruto al cual se les descuenta un 11%
de jubilación.
Se necesita un programa que, dependiendo el tipo de empleado del que se trate,
calcule y muestre en pantalla el correspondiente sueldo. */



let categoría = prompt("Ingresa el número correspondiente a tu categoría (1)repositor, (2)cajero o (3)supervisor");


let repositor = ((15.890/100 * 10) + 15.890);
let cajero= "$25.630,89";
let supervisor = Math.round(35560.20 -((35560.20)*(11/100)));

if (categoría=="1"){
        document.write (`Su sueldo de repositor es $${repositor}`)
}else if (categoría=="2"){
        document.write (`Su sueldo de cajero es ${cajero}`)
}else if (categoría=="3"){
    document.write (`Su sueldo de supervisor es $${supervisor}`)

}else{
    document.write (`No ingreso ninguna de las categorías correspondientes`)
};





















