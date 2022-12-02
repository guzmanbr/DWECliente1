/*
    EJERCICIO: Crea una clase Productos con las propiedades y métodos del ejercicio anterior (el de la TV). 
    Además tendrá un método getInfo que devolverá: 
    ‘Nombre (categoría): unidades uds x precio € = importe €’. 
    Crea 3 productos diferentes y prueba getInfo.
*/

//Funcion para devolver euros
Number.prototype.moneda = function (){
    return this.toLocaleString('de-DE', {style:'currency', currency:'EUR'});
}

//Creamos la clase producto
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
}

let pro1 = new Producto('Philips','TV',4,126.75);
let pro2 = new Producto('Asus','PC',10,689.0);
let pro3 = new Producto('Reflex Camera','Camara',16,199.99);


let arrayProductos = [pro1, pro2, pro3];//creo array con los objetos

//recorro el array de objetos y los muestro
arrayProductos.forEach(producto => {
    console.log(producto.getInfo()); 
});