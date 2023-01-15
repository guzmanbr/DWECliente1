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






