// Vamos a construir la lógica de como funciona Async y Await dentro de JavaScript

// La lógica de como funciona Async y Await dentro de JavaScript

// La función Async es una declaración que define una función "asíncrona" la cual devuelve un objeto

// Entonces entendemos que vamos a utilizar una palabra reservada llamada "async" y que también dentro del cuerpo de la lógica de esta función podemos utilizar la siguiente palabra reservada llamada "await" la cual nos va a permitir trabajar un formato asíncrono de las llamadas que nosotros estemos trabajando.

// Vamos a crear una nueva promesa donde vamos a implementar el flujo de async y await para ver como funciona esta lógica

// vamos a crear una Promesa que nos va a validar, que va a ser resuelta y luego haremos el llamado de esta misma para ver como se desenvuelve el concepto de await y como vamos a estar fluyendo el flujo de nuestra aplicación sin interrumpirla
const fnAsync = () => { // esta funcion nos va a permitir retornar esa promesa y con ella poderla utilizar dentro del concepto que estamos trabajando

    // recordar como utilizar una promesa, es tenerle que pasarle (en este caso) una función anónima, la cual nos envía o nos expone "resolve" y "reject", con los cuales vamos a poder manejar el flujo que suele tener una promesa
    return new Promise((resolve, reject) => {

        // Ahora podemos trabajar internamente dentro de su cuerpo para hacer una validacion, la cual queremos que nos regrese en este caso el "resolver" un <string>

        // utilizamos un "if" "ternario" es decir una condicion para saber si se cumple, regresa valor, y si no cumple, rechazarlo
        (true)
        ? setTimeout(() => resolve('Esto es Async!!'), 2000)
        : reject(new Error('Error!!'));
    });
}
// Ya tenemos la logica de la promesa que nosotros deseamos incorporar 

// Ahora queremos usar una funcion que va a utilizar el concepto de "Async" y con ello hace el llamado del "Await", pero tambien vamos a ejecutar otros console log para ver donde esta el proceso y el flujo de nuestra aplicacion y como podamos ver nos se interrumpe hasta cierto punto.

// generamos una nueva constante
const anotherFn = async () => {
    const something = await fnAsync();
    
    console.log(something);
    console.log('Hello!!!!');
}

console.log('Before')
anotherFn();
console.log('After');

// YA tenemos nuestra logica... entonces, no es mas que utilizar las palabras reservadas "Async" y "Await"
    // Async -> para el cuerpo de nuestra funcion
    // Await -> para dentro de la logica que vamos a implementar.
// Lo cual va hacer que este recuerso este en el concepto del "asincronismo", lo cual nos va a poder permitir dejar trabajar con multiples elementos que queramos llamar o ejecutar sin detener el flujo de nuestra implementacion.