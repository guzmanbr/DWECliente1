import { Producto } from "./clases/Productos.js";

let listaProductos=document.getElementById('listaProductos');
let arrayProds=[];
document.getElementById('guardar').addEventListener('click',guardar)
document.getElementById('eliminar').addEventListener('click',eliminarTodo)
document.getElementById('limpiar').addEventListener('click',limpiarLista)

if(document.getElementById("")){

}

//Funcion para guardar los productos introducidos
function guardar() {
    listaProductos.innerHTML="";
    arrayProds.push(new Producto(document.getElementById('idnombre').value,document.getElementById('idprecio').value));
    arrayProds.forEach(prod=> {
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(prod.idProducto+". "+prod.nombre+" => "+prod.precio+" €"));
        listaProductos.appendChild(li);
    });
    sessionStorage.productosAlmacenados= JSON.stringify(arrayProds);
    console.log("Guardado");
}
//Funcion para eliminar permanentemente los datos
function eliminarTodo() {    
    if (confirm('¿Desea borrar todos los datos guardados?')){
    listaProductos.innerHTML="Eliminado";
    Producto.ContaProducto=0;
    arrayProds = [];
    sessionStorage.removeItem('productosAlmacenados');
    }
}
//Funcion para limpiar la lista, los datos siguen en el localStorage
function limpiarLista() {
    listaProductos.innerHTML="Lista vacia. Permanece almacenado.";
}






