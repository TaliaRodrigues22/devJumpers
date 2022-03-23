
 //EJERCICIO 1

let nombre = prompt ("Inserte su nombre aquí");
let edad = parseInt( prompt(` Hola ${nombre} coloca tu edad`));

if (edad>=18) {
alert (`${nombre} Podes entrar`);
}

else if(edad<18){
    alert (` ${nombre} No podes entrar`);
    }

else {
alert(`Por favor ${nombre} ingrese solo números`)
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
    document.write (`El número ${n1} es mayor a ${n2}`);
}
else if (n2>n1) {
    document.write (`El número ${n1} es menor a ${n2}`);
}
else {
document.write (`${n1} Y ${n2} son iguales`);
}



// EJERCICIO 4

let categorias = parseInt (prompt("Ingrese alguna de las siguientes categorias 1-repositos, 2 cajero, 3-supervisor"));

let repositores = 15890+(15890*(10/100));
let cajeros = 25630.39;
let supervisores = (35560.20 -((35560.20)*(11/100))) .toFixed(2);

if(categorias==1){
    document.write (`repositor su categoria es ${categorias} y su sueldo es de ${repositores}`);
}

else if(categorias==2){
    document.write(`cajero su categoria es ${categorias} y su sueldo es de ${cajeros}`);
}

else if(categorias==3){
    document.write(`supervisor su categoria es ${categorias} y su sueldo es de ${supervisores}`);
}

else{
    document.write(`Ingresa un número o un número que este dentro de las categorias`);
}