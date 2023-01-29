const SERVER = "http://localhost:3000";

const http = new XMLHttpRequest();



//Funcion para buscar por id
window.addEventListener('load', () => {
    $('#buscar').submit(function (params) {
        params.preventDefault();
        let idProducto = document.getElementById('id').value;

        if (isNaN(idProducto) || idProducto.trim() == "") {
            alert("Debes introducir un nº");
        } else {
            fetch(`${SERVER}/productos/${idProducto}`)
                .then((res) => {
                    if (!res.ok) {
                        throw `Error ${res.status} de la BBDD: ${res.statusText}`;
                    }
                    return res.json();
                })
                .then((datos) => {
                    document.getElementById('tablaDatos').innerHTML = "";
                    let fila = document.createElement('tr');
                    //Creo el id
                    let id = document.createElement('td');
                    id.appendChild(document.createTextNode(datos.id));
                    fila.appendChild(id);
                    //Creo el nombre
                    let nombre = document.createElement('td');
                    nombre.appendChild(document.createTextNode(datos.name));
                    fila.appendChild(nombre);
                    //Creo la descripcion
                    let descripcion = document.createElement('td');
                    descripcion.appendChild(document.createTextNode(datos.descrip));
                    fila.appendChild(descripcion);
                    //Creo el boton Modificar
                    let funcionMod = document.createElement('td');
                    let boton = document.createElement('button');
                    boton.innerHTML = 'Modificar'
                    boton.setAttribute('class', 'btn btn-dark m-1');
                    funcionMod.appendChild(boton);

                    fila.appendChild(funcionMod);

                    //Creo el boton Borrar
                    let funcionBorrar = document.createElement('td');
                    let boton2 = document.createElement('button');
                    boton2.innerHTML = 'Borrar'
                    boton2.setAttribute('class', 'btn btn-dark');
                    funcionBorrar.appendChild(boton2);
                    fila.appendChild(funcionBorrar);

                    document.getElementById('tablaDatos').appendChild(fila);

                })
                .catch((error) => console.error(error));
        }

    });

});


//Funcion mostrar tabla de datos
$('#mostrarTodo').click(function (params) {
    params.preventDefault();
    fetch(`${SERVER}/productos`)
    .then((res) => {
        if (!res.ok) {
            throw `Error ${res.status} de la BBDD: ${res.statusText}`;
        }
        return res.json();
    })
    .then((datos) => {
        document.getElementById('tablaDatos').innerHTML = "";

        datos.forEach(element => {

            let fila = document.createElement('tr');
            //Creo el id
            let id = document.createElement('td');
            id.appendChild(document.createTextNode(element.id));
            fila.appendChild(id);
            //Creo el nombre
            let nombre = document.createElement('td');
            nombre.appendChild(document.createTextNode(element.name));
            fila.appendChild(nombre);
            //Creo la descripcion
            let descripcion = document.createElement('td');
            descripcion.appendChild(document.createTextNode(element.descrip));
            fila.appendChild(descripcion);
            //Creo el boton Modificar
            let funcionMod = document.createElement('td');
            let boton = document.createElement('button');
            boton.innerHTML = 'Modificar'
            boton.setAttribute('class', 'btn btn-dark m-1');
            funcionMod.appendChild(boton);
            fila.appendChild(funcionMod);
            //Creo el boton Borrar
            let funcionBorrar = document.createElement('td');
            let boton2 = document.createElement('button');
            boton2.innerHTML = 'Borrar'
            boton2.setAttribute('class', 'btn btn-dark');
            funcionBorrar.appendChild(boton2);
            fila.appendChild(funcionBorrar);
            //Añado la fila a la trabla
            document.getElementById('tablaDatos').appendChild(fila);
        });
    })
    .catch((error) => console.error(error));
});


//Funcion crear
document.getElementById('crearProd').addEventListener('submit', function (params) {
    params.preventDefault();
    //Creamos un producto con los datos introducidos
    const producto = {
        id: '',
        name: document.getElementById('nombre').value,
        descrip: document.getElementById('descripcion').value
    }
    //Introducimos el preoducto creado en el fichero json
    fetch(`${SERVER}/productos`, {
        method: 'POST',
        body: JSON.stringify(producto),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        if (!res.ok) {
            throw `Error ${res.status} de la BBDD: ${res.statusText}`;
        }
        return res.json();
    })
    .then(datos => {
        alert("Se ha creado correctamente.");
    })
    .catch((error) => console.error(error));
});


//Funcion modificar
$('#modificar').submit(function (params) {
    params.preventDefault();
    let cont = 0;
    let idProducto = document.getElementById('modificarId').value;
    if ((idProducto == "") || (document.getElementById('idNombre').value == "") || (document.getElementById('idDesc').value == "") ) {
        alert("Rellena todos los campos");
    } else {
        fetch(`${SERVER}/productos`)
        .then((res) => {
            if (!res.ok) {
                throw `Error ${res.status} de la BBDD: ${res.statusText}`;
            }
            return res.json();
        })
        .then((datos) => {
            document.getElementById('tablaDatos').innerHTML = "";
            datos.forEach(eleme => {
                if(eleme.id == idProducto) {
                    console.log(eleme.name);
                    eleme.name = document.getElementById('nombre').value;
                    eleme.desc = document.getElementById('descripcion').value;
                    cont++;
                }else if(cont == 0){
                    console.log("La id introducida no existe");
                }
            });
        })
        .catch((error) => console.error(error));
    }
    cont=0;

});


// Funcion borrar


