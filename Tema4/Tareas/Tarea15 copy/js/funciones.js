class Productos{

    static contadorProductos=0;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this.idProducto=++Productos.contadorProductos; 
    }

    get nombre(){
        return this._nombre.toUpperCase();
    }

    set nombre(nombre){
        this._nombre=nombre.toUpperCase();
    }

    set precio(precio){
        this._precio=precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
    }

    get precio(){
        return this._precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
    }

    toString(){
        return ` ${this.idProducto}.${this.nombre} ${this.precio.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'})}€`;
    }
}
let lista=document.getElementById('lista');
let nombre=document.getElementById('idNombre');
let precio=document.getElementById('idPrecio');
let arrayProductos=[];

document.getElementById('btnGuardar').addEventListener('click',guardar)
document.getElementById('btnLimpiar').addEventListener('click',limpiar)
document.getElementById('btnEliminar').addEventListener('click',eliminar)

function guardar() {
    lista.innerHTML="";
    arrayProductos.push(new Productos(nombre.value,precio.value))
    sessionStorage.almacen= JSON.stringify(arrayProductos);

    arrayProductos.forEach(producto => {
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(producto.toString()));
        lista.appendChild(li);
    });
}

function limpiar() {
    lista.innerHTML="Lista limpiada";
}

function eliminar() {
    if (confirm('¿Quieres borrar los productos almacenados?')) {
        sessionStorage.removeItem('almacen');
        lista.innerHTML="";
        Productos.contadorProductos=0;
    } 
}