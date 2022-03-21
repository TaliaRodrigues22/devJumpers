    let nombre = prompt ("Ingrese su nombre");
    let numero1 = parseInt (prompt ("Ingrese un número")); //parseInt toma como numero el valor que se ingresa, siempre que sea entero//
    
    
    alert ("Hola "+ nombre + " bienvenid@ a la pagina");

    let numero2 = parseInt (prompt ("Ingrese otro número"));

    let resultado = (numero1 + numero2);

    alert ("El resultado de los dos numeros ingresados es " + resultado);

    document.write ( "el resultado de la suma de tus numeros mas la cantidad de las letras de tu nombre es: " + parseInt (nombre.length + resultado));


