// Repaso Variables
// Podemos Crear multiples variables (separándolas por coma) 
/* 
let nombre = "jose", apellido = "pepe", edad = 22, saludo = prompt ("ingresa tu saludo");


document.write (`<b>${nombre} </b> <br>  <strong> ${apellido} </strong> <br> ${edad} <br> ${saludo}`)

 */
// Operadores Logicos

/* let num1 =21;
let num2= 7;
let num3= 14;
let num4 = 15;

let suma = num1+num2;
let resta = num1-num2;
let multiplica = num1*num2;
let divide = num1/num2;
let modulo = num1%num2;
let incremento= ++num1;
let decremento = --num2;
let invierte = -num3;

document.write(suma + "<br>");
document.write(resta+ "<br>");
document.write(multiplica+ "<br>");
document.write(divide+ "<br>");
document.write(modulo+ "<br>");
document.write(incremento + "<br>");
document.write(decremento + "<br>");
document.write(invierte + "<br>"); */

//Operadores de comparacion

/* let num1=23;
let num2=24;
let num3 = "23";
let num4 = 24;
let str = "23"; */
/* 
document.write(`${num1==num3}<br>`); // true
document.write(`${num1===num3}<br>`); // false
document.write(`${num1!=num3}<br>`);//  false
document.write(`${num1!==num3}<br>`);//  true
document.write(`${num2!=num4}<br>`); // false
document.write(`${num1<num2}<br>`) // true
document.write(`${num4>num1}<br>`) //true
document.write(`${num4>=num2}<br>`) // true */

/* document.write(`${num3===str && num1<num4}<br>`) // */
                     //true &&  true
                         // true

/* document.write(`${num3==str || num1<num4}<br>`) // */
                     //true ||  false */
                         //true
//Ejercicio
/* let num1 =12;
let num2 =24;
let num3 =25;
let num4 =92;
let num5= 91;

let operacion = (num1<num2||num2<num3) && (!(num1!=num2)&& num5!=num3); */
                      //true || true   &&  (! true   &&     true     )     
                           // true      &&  (false      &&  true                )    
                              // true  &&     false
                                      //false

                                      //Operador not. El operador not devuelve el valor opuesto la valor booleano. Si la expresión es True el valor devuelto es False , de lo contrario si la expresión es False el valor devuelto es True .
/* document.write(operacion) */

let nombre = prompt ("ingresa tu nombre");
let num = parseInt(prompt (`Hola ${nombre}  decime tu edad`));

// si (esta condicion es true )

if (num>=18) {  // evalua la condicion
  alert ( ` ${nombre} puede tomar alcohol`) ; // respuesta

 } else if (num<18) {
    alert ( ` ${nombre}  no podes tomar alcohol`);

 } else {
    alert ( ` ${nombre} no ingresaste un numero`) ; 
}

