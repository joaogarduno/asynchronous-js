import fetch from "node-fetch";
// nuestra API
const API = 'https://api.escuelajs.co/api/v1';


// Post-data
// funcion que se va encargar de utilizar "fetch" y transformarlo a el llamado del metodo POST, con las configuraciones minimas que podemos agregar
function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response;
}


// se crea producto
const data = {
    "title": "JIGS New Product Course",
    "price": 1988,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}


// PROMESA
// utilizamos postData como una promesa para poder utilizar el .then donde transformamos la respuesta en un objeto .json, y despues podemos mostrarlo en la consola.
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));