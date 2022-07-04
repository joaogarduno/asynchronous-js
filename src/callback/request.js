const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// API con la variable
const API = 'https://api.escuelajs.co/api/v1';

// funcion que nos permite recibir la URL (en este caso la API) y el "callback" que va a ser una funcion anonima para recibir la solicitud que nos esta entregando el llamado a esta API
function fetchData(urlApi, infoReturnData){

    // Se crea objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){ 
                // pasamos el callback
                infoReturnData(null, JSON.parse(xhttp.responseText));
            }  else{
                const error = new Error('Esto es un Error' + urlApi);
                return infoReturnData(error, null);
            }
        }
    }

    // hacemos el llamado al xhttp.send
    xhttp.send();
}


// -------------------------------------------------------------------------------
// Fetch Data

// Vamos a llamar a productos
fetchData(`${API}/products`, (error1, data1) => {
    if (error1) return console.error(error1);
    
    // Products para obtenerlos todos
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if (error2) return console.log(error2);

        // Una categoria que se encuentra dentro de la llamada anterior
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);

        });
    });
});

// De esta forma estamos haciendo 3 peticion de forma encadenada con la logica de los callbacks ya el callback lo que hace es ejecutar dentro del llamado y retornarme estos valores y con eso obtener esta informacion segun sea el caso