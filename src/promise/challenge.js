import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// funcion que recibe como argumento la URL de la API que queremos llamar y esto retornara el llamado consecuente de fetch.
// No es mas que una promesa por lo tanto vamos a poder utilizar las palabras reservadas de "the", "catch" o "finally"

// hacemos multiples elemetos para el llamado del primer recurso "productos", "un producto en particular", "categoria a la que pertenece el segundo elemento de la peticion"

function fetchData(urlApi){
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hi!!!');
//     })
//     .catch(error => console.log(error));

// -----------------------------------------------------------------




fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(products => {
        console.log(products.title)
        return fetchData(`${API}/categories/${products.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));