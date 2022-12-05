/*
Ejercicio Funciones: 
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

//Clase producto
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



// function prodsSortByName(array){
//     let arrayOrdenado = this.array.nombre.sort();
//     return arrayOrdenado;
// }

//Creo los productos
let pro1 = new Producto('Philips','TV',4,126.75);
let pro2 = new Producto('Asus','PC',10,689.0);
let pro3 = new Producto('Reflex','Camara',16,199.99);
let pro4 = new Producto('Samsung','TV',2,450.0);
let pro5 = new Producto('ASUS','PC',8,480.99);

//Creo el array de productros.
let arrayProductos = [pro1, pro2, pro3, pro4 , pro5];//Creo array con los objetos
//Muestro array
arrayProductos.forEach(producto => {
    console.log(producto.nombre);
});



// prodsSortByName: devuelve un array con los productos ordenados alfabéticamente.
function prodsSortByName(array){
    let arrayNuevo=Array.from(array);//Duplico el array 
    arrayNuevo.sort((p1,p2)=>p1.nombre.localeCompare(p2.nombre));//Ordeno alfabeticamente los nombres.
    return arrayNuevo;//Devuelvo el array
}

let arrayOrdNombreProductos=prodsSortByName(arrayProductos);//creo array de ordenado igualandolo a la funcion.
console.log(arrayOrdNombreProductos);



// prodsSortByPrice: devuelve un array con los productos ordenados por precio.
function prodsSortByPrice(array){
    let arrayNuevo=Array.from(array);//duplico el array
    arrayNuevo.sort((p1, p2) => p1.precio-p2.precio);//lo ordeno de forma ascendente
    return arrayNuevo;
}
let arrayOrdPrecioProductos=prodsSortByPrice(arrayProductos);
console.log(arrayOrdPrecioProductos);



// prodsTotalPrice: devuelve el importe total de los productos del array, con 2 decimales.
function prodsTotalPrice(array) {
    //reduce no modifica nada reduce todo para sacar un solo valor.
    let importeTotal = array.reduce((total,producto) => total += producto.precio,0);//se le pasa parametro donde lo acuymulara, y el elemento que queremos acumular
    return importeTotal;
}
console.log(prodsTotalPrice(arrayProductos));




// //prodsWithLowUnits:recibe array y segundo parámetro un número, y devuelve un array con todos los productos de los que quedan menos del numero pasado.

// let arrayUnidades = [];//array de productos con pocas unidades
// let numMin = 2;//numero minimo de productos
// //Funcion precio total
// function prodsWithLowUnits(array,numMinimo) {
//     let arrayNuevo=[];
//     array.forEach(producto => {
//        if (producto.unidades <= numMinimo) {
//         arrayNuevo.push(producto);
//        }
//     });
//     return arrayNuevo;
// }
// let arrayUnidadesBajas = prodsWithLowUnits(arrayProductos,numMin);
// console.log(arrayUnidadesBajas);


// prodsList: devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un producto del array.
function prodsList(array){
    const cadenaListado= array.reduce(function(valorAnterior, valorActual){
        return `${valorAnterior} \n ${valorActual}`;
    }, 'Listado de productos:');
    return cadenaListado;
}
console.log(prodsList(arrayProductos));


