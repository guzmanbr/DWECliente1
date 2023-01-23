//creo peticion
const peticion = new XMLHttpRequest();
console.log("Petición Creada -> " + peticion.readyState);

peticion.open('GET', 'http://localhost:3000/peliculas'); //abro peticion get
//peticion.open('GET', 'http://localhost:3000/peliculas/peliculas?nombre=Herculano')//puedo pasarle id, ovalor
console.log('Servidor Escuchando: ' + peticion.readyState);

//Peticion.setRequestHeader('propiedad', 'valor');

peticion.send();//envio la peticion
console.log("Petición Enviada: " + peticion.readyState);
//Evento para que 
peticion.addEventListener('load', function() {
    console.log('Estado de la petición: ' + peticion.readyState);
    //si la peticion es correcta sino muestra error
    if (peticion.status === 200) {
        console.log('Datos Recibidos:');
        let datosRecibidos = JSON.parse(peticion.responseText);
        console.log(datosRecibidos);
    } else {
        muestraError(peticion);
    }
})
console.log('Petición acabada');

peticion.addEventListener('error', muestraError);
peticion.addEventListener('abort', muestraError);
peticion.addEventListener('timeout', muestraError);

//Funcion para mostrar error
function muestraError(peticion) {
    if (peticion.status) {
        console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
    
    } else {
        console.log("Ocurrió un error o se abortó la conexión");
    }
}