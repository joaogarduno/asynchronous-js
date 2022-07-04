// sumar 2 elementos utilizando callback

// La primera funcion que va a sumar los valores es decir va a realizar algo
function sum(num1, num2){
    return num1 + num2;
}
// Ya tenemos la funcion que se encarga de sumar valores


function calc(num1, num2, callback){
    return callback(num1, num2);
}
console.log(calc(2, 2, sum));


// ------------------------------------------------------------------------



// setTimeOut

// El setTimeout por si misma ya es una callback, la cual recibe una funcion con la logica que nosostros queremos
setTimeout(() => {
    console.log('Estamos en la ejecucion de una funcion "setTimeout"');
}, 2000);
// ---------------------

// mandamos a llamar una funcion para no mandar a llamar una funcion anonima
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Joao');

// RESUMEN: Con estos ejemplos podemos entender que tenemos una serie de elementos dentro del lenguaje de programacion que usan por si mismos el concepto de "callbacks"
// Lo que significa es... tener una funcion que recibe otra funcion para ser ejecutada segun sea el caso.
