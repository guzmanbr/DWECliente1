/*
Se pide crear una página web que visualice y guarde en localStorage una lista de productos con su nombre y su precio 
en euros.
Utiliza una clase Producto con métodos set para:
• Almacenar el nombre en formato “todo mayúsculas”.
• Almacenar el precio como un número con dos decimales.
Cada producto tendrá un id autoincremental.
Habrá un método get para recuperar el nombre del producto con la primera en mayúscula y las demás minúsculas.
Habrá un método get para recuperar el precio como un string con formato local y símbolo euro.
Deberá haber 4 botones:
• Para guardar el producto (cuando sus dos propiedades sean correctas)
• Para borrar el contenido de los inputs. (restablecer)
• Para borrar la vista de la lista de productos (sin eliminar del almacenamiento)
• Para eliminar la lista de productos del almacenamiento local. Exigir confirmación a esta destrucción de datos.
En la parte derecha se verá el listado de productos, o un mensaje de lista vacía.
Ejemplo de visualización en vídeo adjunto.
NOTA: en el vídeo observarás que el método SET para almacenar los nombres de productos (en formato todo
mayúsculas) no ha sido implementado
*/

class Producto {
    //idProducto
    static ContaProducto = 0;
    //Constructor
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.ContaProducto;
    }
    //Get Id
    get idProducto(){
        return this._idProducto = this._idProducto;
    }
    //Get Set Nombre
    get nombre(){
        return this._nombre = this._nombre.toUpperCase();
    }
    set nombre(nombre){
        return this._nombre = nombre.toUpperCase();
    }
    //Get Set Precio
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }
}



let listaProductos=document.getElementById('listaProductos');
let arrayProds=[];
document.getElementById('guardar').addEventListener('click',guardar)
document.getElementById('eliminar').addEventListener('click',eliminarTodo)
document.getElementById('limpiar').addEventListener('click',limpiarLista)

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

function eliminarTodo() {
    listaProductos.innerHTML="Eliminado";
    Producto.ContaProducto=0;
    arrayProds = [];
    sessionStorage.removeItem('productosAlmacenados');
}

function limpiarLista() {
    listaProductos.innerHTML="Lista vacia. Permanece almacenado.";
}






