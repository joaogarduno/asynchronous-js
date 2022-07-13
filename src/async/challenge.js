import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Creamos nuestra funcion de "fetchData" el cual va a utilizar la API y con esto retornamos la informacion ya transformada en un objeto
async function fetchData(urlApi){
    // con esto ya podemos construir el cuerpo de nuestra aplicacion
    // Y aqui internamente utilizar "await" segun sea el caso
    const response = await fetch(urlApi);

    // Continuamos con la estructura de los datos transformandolos en un objeto JSON
    // Entonces necesitamos hacer uso del Await que es la palabra reservada que podemos utilizar
    const data = await response.json()
    // con eso podemos hacer uso de esta logica para llamar a cada uno de estos elementos, hacer las transformaciones necesarias y al final retornar lo que serian los datos, es decir, la informacion que nos ha traido desde la API que estamos consumiendo
    return data;
}
// Con esto ya tenemos nuestra primera funcion que esta implementando la logica de "async". En ese caso seria ir por los datos y luego esperar por la transformacion para retornarlo hacia nuestro usuario.
// Recordar que "fetch" por debajo utiliza el concepto de las promesas.



// Una vez tenemos la logica anterior, vamos a crear una funcion que se va a encargar de hacer las solicitudes en este caso, a todos los productos, a un producto en particular y a la categoria de este producto para luego mostrarlos en consola

// Otra cosa que aprenderemos es sobre el concepto de "try" y "catch"
// Son palabras reservadas que se encuentran dentro de Javascript para manejar ERRORES en las funciones Asincronas

// ¿como utilizar Async en diferentes estructuras?
// Async resive los argumentos
const anotherFuncion = async(urlApi) =>{
    // Empezamos a trabajar las palabras reservadas con "try" y "catch"
    try{
        // Va a suceder todo lo que queremos que sea la logica de nuestra aplicacion y en cambio alguna de estas promesas llegue en un "reject" pasara a "catch" y es ahi donde tendriamos la logica consecuente a esto

        // se crea una serie de variables que van a tener la asignacion de nuestra función "fetchData" la cual va a hacer las llamadas segun sea el caso.

        // Primer llamada
        const products = await fetchData(`${urlApi}/products`);
        // Ya tenemos el primer llamado a todos los productos que tiene nuestra API

        // Ahora generamos la segunda llamada, pero este se dirije a un producto en particular
        const product = await fetchData(`${urlApi}/products/${products[8].id}`);

        // catergoria de la solicitud anterior
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);


    } catch (error){
        console.log(error);
    }
}

// Llamar a nuestra otra funcion
 anotherFuncion(API);