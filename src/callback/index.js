// Callbacks

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
// ------------------------------------------------------------------------


// RETO orden restaurante utilizando una funcion callback
function makingOrder(order){
    console.log(`Su orden esta lista... aqui tiene su ${order}`);
}

function prepareOrder(order, orderWork){
    console.log(`Tomando orden... espere... el pedido es... ${order}`);

    setTimeout(() => {
        orderWork(order);
    }, 5000);
    console.log(`Preparando la orden ${order}`);
}
prepareOrder('1 burger, 2 fries and 2 sodas', makingOrder);



// ------------------------------------------------------------------------
// RETO - Crear un callback que realice las operacion de cada tipo de operador (basico)

// SUMA
function suma(num1, num2){
    return num1 + num2;
    console.log(`Estoy haciendo la operacion`);
}

// RESTA
function resta(num1, num2){
    return num1 - num2;
}

// MULTIPLICACION
function multi(num1, num2){
    return num1 * num2;
}

// DIVISION
function divide(num1, num2){
    return num1 / num2;
}

// 
function calcNum(num1, num2, obtenerNumero){
    console.log(`Preparando la operacion de ${num1} y ${num2}`);
    
    setTimeout(() => {
        obtenerNumero(num1, num2)
        // obtenerNumero = suma(num1, num2);
        // obtenerNumero(num1, num2);
    }, 5000);
    console.log(`Realizando la operacion de los numeros: ${num1} y ${num2}`);
}
calcNum(22, 22, suma);




// -------------------------------------------------

// function calcNum(num1, num2){
//     // console.log(``);

//     setTimeout(function (){

//     })
// }


// -------------------------------------------------
// function calcNum(num1, num2, obtenerNumero){
//     console.log(`Preparando la operacion de ${num1} y ${num2}`);

//     setTimeout(() => {
//         obtenerNumero(num1, num2);
//     }, 5000);
//     console.log(`Realizando la operacion ${num1} ${num2}`)
// }
// calcNum(22, 22, suma);

// -------------------------------------------------

// function calcNum(num1, num2){
//     // let obtenNumero = Suma();

//     setTimeout(() => {
//         Suma(num1, num2)
//     }, 5000);
// }
// calcNum(1, 4, Suma);
// -------------------------------------------------

// REALIZAMOS EL CALLBACK
// function calcNum(num1, num2, build){
//     console.log(`operacion suma...`);

//     setTimeout(() => {
//         build(num1, num2);
//     }, 3000);

//     console.log(`el resultado es: ${num1, num2}`)
// }
// calcNum(5, 8, Suma);


// function calcNum(num1, num2, build){
//     console.log(`La operacion suma...`);

//     setTimeout(() => {
//         Suma(num1, num2);
//     }, 5000);
//     console.log(`El resultado es: ${num1} ${num2}`);
// }
// calcNum(2, 3, Suma);
// ------------------------------------------------------------------------


function calc(first, second, callback) {
    return callback(first, second);
  }
  function sum(first, second) {
    return first + second;
  }
  function multiply(first, second) {
    return first * second;
  }
  function objectify(first, second){
    return {first, second, sum: sum(first, second), multiply: multiply(first, second)}
  }
  
  calc(5, 6, sum);
  calc(5,6,multiply)
  calc(5,6, objectify)
// ------------------------------------------------------------------------



  function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};