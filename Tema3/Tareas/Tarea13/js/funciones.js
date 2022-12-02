/*
Tarea 13: 
Crea 5 productos y guárdalos en un array. 
Crea las siguientes funciones (todas reciben ese array como parámetro):
 + prodsSortByName: devuelve un array con los productos ordenados alfabéticamente.
 + prodsSortByPrice: devuelve un array con los productos ordenados por precio.
 + prodsTotalPrice: devuelve el importe total de los productos del array, con 2 decimales.
 + prodsWithLowUnits: además del array recibe como segundo parámetro un número, y devuelve un array con todos 
   los productos de los que quedan menos de las unidades indicadas.
 + prodsList: devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un producto del array.
*/

//Funcion para devolver euros
Number.prototype.moneda = function (){
    return this.toLocaleString('de-DE', {style:'currency', currency:'EUR'});
}

class Producto{

    //creo un constructor con sus propiedades
    constructor(nombre,categoria,unidades,precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }
    //Creo funcion para mostrar la informacion de cada objeto en el formato que quiero.
    getInfo(){
        return `${this.nombre} (${this.categoria}): ${this.unidades} uds x ${this.precio.moneda()} = ${(this.unidades*this.precio).moneda()}`;
    }

    prodsSortByName(array){

        let arrayOrdenado = array.nombre.sort();
        return arrayOrdenado;

    }

    prodsSortByPrice(){

    }
    prodsTotalPrice(){

    }
    prodsWithLowUnits(){

    }
}

function prodsSortByName(array){
    let arrayOrdenado = this.array.nombre.sort();
    return arrayOrdenado;

}

//Creo los productos
let pro1 = new Producto('Philips','TV',4,126.75);
let pro2 = new Producto('Asus','PC',10,689.0);
let pro3 = new Producto('Reflex','Camara',16,199.99);
let pro4 = new Producto('Samsung','TV',2,450.0);
let pro5 = new Producto('ASUS','PC',8,480.99);

let arrayProductos = [pro1, pro2, pro3, pro4 , pro5];//Creo array con los objetos

console.log(prodsSortByName(arrayProductos));

arrayProductos.forEach(producto => {
    console.log(producto.nombre.sort());
});





