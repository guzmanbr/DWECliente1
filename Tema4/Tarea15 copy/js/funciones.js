import { Producto } from "./clases/Productos.js";

let listaProductos=document.getElementById('listaProductos');

//Añado evento a los botones
document.getElementById('guardar').addEventListener('click',guardar)
document.getElementById('eliminar').addEventListener('click',eliminarTodo)
document.getElementById('limpiar').addEventListener('click',limpiarLista)

document.getElementById("form1").addEventListener('submit',function (p) {
    p.preventDefault();
    let valido = true;
    let arrayInputs=document.querySelectorAll('input[required]');
    arrayInputs.forEach((elem)=>{
        if(!elem.value){
            valido=false;
        }
    });
    if (!valido) {
        alert("Rellena los campos");
    }else{
        guardar();
    }
});

function guardar() {
    //Creo el array de productos
    let arrayProductos=[];
    //
    if (localStorage.arrayProductos) {
        arrayProductos = JSON.parse(localStorage.arrayProductos);
    }
    //Creo un nuevo producto y le asigno los valores
    let nuevoProd = new Producto();
    nuevoProd.nombre=document.getElementById("idnombre").value;
    nuevoProd.precio=document.getElementById("idprecio").value;
    arrayProductos.push(nuevoProd);
    //Almaceno en localStorage
    localStorage.arrayProductos=JSON.stringify(arrayProductos);
    //Llamo a ver lista
    verLista();
}

function verLista() {
    //array temporal de objetos
    let arrayTemporalProductos= JSON.parse(localStorage.arrayProductos);  
    let cadena="";
    //Recorremos el array y vamos escribiendo sus valores en cadena
    arrayTemporalProductos.forEach((elemento)=>{
        let productoTemporal = new Producto();//Creo un producto temporal que pasa a valer lo que el elemento
        productoTemporal._idProducto=elemento._idProducto;
        productoTemporal.nombre = elemento._nombre;
        productoTemporal.precio = elemento._precio;
        cadena+="<br>"+productoTemporal.toString();
    });
    //Pasa a valer cadena 
    document.getElementById("listaProductos").innerHTML= cadena;
}
function eliminarTodo() {
    listaProductos.innerHTML="Eliminado";
    Producto.ContaProducto=0;
    arrayProductos = [];
    sessionStorage.removeItem('productosAlmacenados');
}
function limpiarLista() {
    listaProductos.innerHTML="Lista vacia. Permanece almacenado.";
}






