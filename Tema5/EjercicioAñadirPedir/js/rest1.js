const peticion = new XMLHttpRequest();
console.log("Petición Creada -> " + peticion.readyState);

peticion.open('GET', 'http://localhost:3000/peliculas');
console.log('Servidor Escuchando: ' + peticion.readyState);

// peticion.setRequestHeader('propiedad', 'valor');

peticion.send();
console.log("Petición Enviada: " + peticion.readyState);

peticion.addEventListener('readystatechange', function() {
    console.log('Estado de la petición: ' + peticion.readyState);

    if (peticion.readyState === 4) {
        if (peticion.status === 200) {
            console.log('Datos Recibidos:');
            
            let datosRecibidos = JSON.parse(peticion.responseText);

            console.log(datosRecibidos);
        }
    }
})

console.log('Petición acabada');
