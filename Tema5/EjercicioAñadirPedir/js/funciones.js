const SERVER = "http://localhost:3000";

const peticion = new XMLHttpRequest();


window.addEventListener('load', function() {
    document.getElementById('addProduct').addEventListener('submit', (event) => {
        event.preventDefault(); // anula lo que tenga por defecto
        let id = document.getElementById("id").value;
        if(isNaN(id) || id.trim() == '') {
            alert('introduce un numero');
        } else {
            fetch(`${SERVER}/${id}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((response) => {
                if(!response.ok) {
                    throw `Error ${response.status} de la BD: ${response.statusText}`;
                }
                return response.json();
            })
            .then((datos) => {
                document.getElementById("p1").innerHTML= Object.values(datos);
            })

            .catch((error) => {
                alert(`Error en la peticion: ${error.message}`);
            })
        }
    })
});
/*
<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jugando al mus - Guzmán Benito</title>
        <link rel="shortcut icon" href="#" type="image/x-icon">

    </head>

    <body>
        <style>
            .divSquare {
                width: 48%;
                height: 400px;
                margin: 4px;
                border: 1px solid black;
                float: left;
                font-family: Arial, Helvetica, sans-serif;
            }
        </style>
        <style>
            .divJugador {
                width: 48%;
                height: 190px;
                margin: 4px;
                border: 1px solid black;
                float: left;
                text-align: center;
                background-color: cornsilk;
            }
        </style>
        <h1 style="text-align: center;">Juego de Mus</h1>
        <div class="divSquare" id="div01" style="background-color: rgb(184, 246, 251);">
            (01) MAZO DE CARTAS (para repartir)
        </div>
        <div class="divSquare" id="div02">
            <div class="divJugador" id="divJug1">Cartas en la mano del Jugador 1</div>
            <div class="divJugador" id="divJug2">Cartas en la mano del Jugador 2</div>
            <div style="clear:both"></div>
            <div class="divJugador" id="divJug3">Cartas en la mano del Jugador 3</div>
            <div class="divJugador" id="divJug4">Cartas en la mano del Jugador 4</div>
        </div>
        <div style="clear:both"></div>
        <div class="divSquare" id="div03">
            (03) ACCIONES:
        </div>
        <div class="divSquare" id="div04" style="background-color: rgb(25, 204, 144);">
            (04) TAPETE (Naipes descartados)
        </div>
    </body>
</html>




En funcion al html anterior realiza
 una página web que presente en el apartado “ACCIONES” al pulsar un botón iniciar que complete el siguiente
fichero JSON  automaticamente
con las cartas de la baraja española en 
{
    "palos":[],
    "naipes":[],
    "lugar":[]
} .


Adjunta los comentarios que se necesiten para que se entienda el modelo de datos que propones.
b) Mostrar en el apartado “(01) MAZO DE CARTAS” el valor de todos los naipes ordenados por palo y 
valor. 
El orden de los palos es: OROS-COPAS-ESPADAS-BASTOS
El orden de los valores de las cartas es: 1-2-3-4-5-6-7-10-11-12


*/

window.addEventListener('load', function() {
    document.getElementById('nuevoProduct').addEventListener('submit', (event) => {
        event.preventDefault(); // anula lo que tenga por defecto
        const form = {
            id: '',
            nombre: document.getElementById("nombre").value,
            desc: document.getElementById("desc").value,
        }
            fetch(`${SERVER}`, {
                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => {
                if(!response.ok) {
                    throw `Error ${response.status} de la BD: ${response.statusText}`;
                }
                return response.json();
            })
            .then(datos => {
                alert("datos recibidos");
                console.log(datos);
            })

            .catch(error => {
                alert(`Error en la peticion: ${error.message}`);
            })
    })
});

