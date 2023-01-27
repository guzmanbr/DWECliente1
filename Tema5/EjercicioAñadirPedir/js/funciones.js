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

