// La logica de como funciona Async y Await dentro de JavaScript
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Esto es Async!!'), 3000)
        : reject(new Error('Error!!'));
    });
}
// Ya tenemos la logica o esta funcion que va a ser tratada como la promesa.

// Ahora queremos usar una funcion que va a utilizar el concepto de "Async" y con ello hace el llamado del "Await", pero tambien vamos a ejecutar otros console log para ver donde esta el proceso y el flujo de nuestra aplicacion y como podamos ver nos se interrumpe hasta cierto punto

// generamos una nueva constante
const anotherFn = async () => {
    const something = await fnAsync();
    
    console.log(something);
    console.log('Hello!!!!');
}

console.log('Before')
anotherFn();
console.log('After');