// GENERATORS 
// Otra de las opciones que tenemos para poder seguir trabajando con el asincronismo dentro de Javascript son los Generator

// Una forma que nos va a permitir a nosotros trabajar con una funcion la cual nos va a permitir llamar o parar segun sea el caso las solicitudes que hagamos.

// El objeto Generator es retornado por una funcion generator y es conformado tanto el protocolo iterable como el protocolo iterador.

function* gen(){
    // Pasamos el bloque de informacion aqui dentro
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
}

// Ahora veremos como poder tener acceso a cada uno de esto y hacer el consecuente en cada uno de estos

// Ahora tenemos claro que tenemos 6 valores dentro de esta funcion pues ahora lo que queremos hacer es utilizarlos y como podemos llamar a cada uno de ellos, segun sea la necesidad.

// En este caso cuando yo desee llamarlo o llamar al consecuente o al consecuente
const g = gen(); // tenemos acceso a una palabra reservada "next"
// next me va a permitir ir iterando por cada uno de los elementos que se encuentran en la logica

console.log(g.next().value);

// ¿Qué pasa si repetimos el recurso una vez más?
console.log(g.next().value);

// Esto significa que nosotros podemos controlar cuando queremos acceder a cada uno de los elementos de la iteracion que estamos haciendo
console.log(g.next().value);
// ------------------




// OTRO EJEMPLO

// Iterando un Array

function* iterate(array){
    for (let value of array){
        yield value;
    }
}
// Esta funcion recibe un arreglo el cual lo vamos a iterar uno a uno recibiendo la informacion que tenemos

const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
// console.log(it.next());


// Ahora si quisieramos tener el valor del nombre
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Si llegamos al limite del array y al no encontrar un valor lo regresa como un "undefined"