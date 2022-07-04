const XMLHttpRequest = require('xmlhttprequest');

// API con la variable
const API = 'https://api.escuelajs.co/api/v1';

// funcion que nos permite recibir la URL (en este caso la API) y el callback que va a ser una funcion anonima para recibir la solicitud que nos esta entregando el llamado a esta API
function fetchData(urlApi, infoReturnData){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){
                // pasamos el callback
                infoReturnData(null, JSON.parse(xhttp.resposeText));
            }
        } else{
            const error = new Error('Esto es un Error' + urlApi);
            return infoReturnData(error, null);
        }
    }

    // hacemos el llamado al xhttp.send
    xhttp.send();
}