import { Producto } from "./clases/Productos.js";

let listaProductos=document.getElementById('listaProductos');
let arrayProds=[];
document.getElementById('guardar').addEventListener('click',guardar)
document.getElementById('eliminar').addEventListener('click',eliminarTodo)
document.getElementById('limpiar').addEventListener('click',limpiarLista)

function guardar() {
    listaProductos.innerHTML="";
    arrayProds.push(new Producto(document.getElementById('idnombre').value,document.getElementById('idprecio').value));
    arrayProds.forEach(prod=> {
        let div=document.createElement('div');
        div.setAttribute('class','productosDiv');
        let li=document.createElement('p');
        li.appendChild(document.createTextNode(prod.idProducto+". "+prod.nombre+" - "+prod.precio+" €"));
        let boton=document.createElement('button');
        boton.innerHTML='Modificar';
        let boton2=document.createElement('button');
        boton2.innerHTML='Eliminar';
        boton2.addEventListener('click',eliminarProd());
        boton2.addEventListener('click',modificarProd());
        div.appendChild(li);
        div.appendChild(boton);
        div.appendChild(boton2);
        listaProductos.appendChild(div);
    });
    sessionStorage.productosAlmacenados= JSON.stringify(arrayProds);
    console.log("Guardado");
}

function eliminarTodo() {
    if (confirm('¿Desea borrar todos los datos guardados?')){
        listaProductos.innerHTML="Eliminado";
        Producto.ContaProducto=0;
        arrayProds = [];
        sessionStorage.removeItem('productosAlmacenados');
    }
}

function limpiarLista() {
    listaProductos.innerHTML="Lista vacia. Permanece almacenado.";
}

function eliminarProd() {
    arrayProds.forEach(prod => {
        if(prod.idProducto == boton.id){
            arrayProds.splice(prod);
            console.log("Coincide");
        }
    });
}

function modificarProd() {
    arrayProds.forEach(prod => {
        if(prod.idProducto == boton.id){
            prod.nombre;
        }
    });
}


<script>
    var mazo = {
        "palos": ["oros", "copas", "espadas", "bastos"],
        "naipes": [1, 2, 3, 4, 5, 6, 7, 10, 11, 12],
        "lugar": []
    };

    function iniciar() {
        var palo, naipe;
        for (var i = 0; i < mazo.palos.length; i++) {
            palo = mazo.palos[i];
            for (var j = 0; j < mazo.naipes.length; j++) {
                naipe = mazo.naipes[j];
                mazo.lugar.push({
                    "palo": palo,
                    "naipe": naipe
                });
            }
        }
        console.log(mazo);
        document.getElementById("div01").innerHTML = "Mazo de cartas:<br>" + JSON.stringify(mazo, null, 4);
    }
</script>

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
        <br><br>
        <button onclick="iniciar()">Iniciar</button>
    </div>
    <div class="divSquare" id="div04" style="background-color: rgb(25, 204, 144);">
            (04) TAPETE (Naipes descartados)
        </div>
    </body>
</html>


