// construccion de una promesa

// La promesa es algo que va a pasar ¿Cuando?, puede ser AHORA, MAS TARDE o NUNCA (en caso de que sea rechazada la solicitud)

// La promesa tiene 3 estados
    // Pendiente -> en caso de que se este ejecutando
    // cumplido -> regresa la informacion deseada o cuando ha sido rechazada
    // rechazado -> 


    // funcion anonima que nos regresa 2 funciones
const promise = new Promise((resolve, reject) => {
    resolve(`Hola`)
});


// ----------------------------------------------------------------------------




const cows = 15;
// const  cows = 9;

// nuestra promesa
const countCows = new Promise((resolve, reject) => {
    if(cows < 10){
        resolve(`We have ${cows} cows on the Farm`);
    } else{
        reject(`There is no cows on the Farm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});
