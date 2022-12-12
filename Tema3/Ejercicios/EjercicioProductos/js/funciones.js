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
class Producto {
    constructor(nombre, categoria, unidades, precio){
        this.nombre=nombre;
        this.categoria=categoria;
        this.unidades=unidades;
        this.precio=precio;
    }
  
    toString(){
        return `${this.nombre} (${this.categoria}): ${this.unidades} `+
        `uds x ${this.precio.moneda()}  = ${(this.unidades*this.precio).moneda()} `
    }
  }
  
  let arrayProductos=[];
  let p01 = new Producto('Teclado', 'Hardware', 2, 20.8);
  let p02 = new Producto('Monitor', 'Hardware', 1, 120);
  let p03 = new Producto('Lic. Windows 11', 'Software', 12, 84.35);
  let p04 = new Producto('Ratón', 'Hardware', 5, 20.2);
  let p05 = new Producto('Torre', 'Hardware', 3, 652.0);
  arrayProductos.push(p01);
  arrayProductos.push(p02);
  arrayProductos.push(p03);
  arrayProductos.push(p04);
  arrayProductos.push(p05);
  arrayProductos.forEach((producto, i)=>{
      console.log(producto.toString());
  } );
  
  // prodsSortByName: devuelve un array con los productos ordenados alfabéticamente.
  function prodsSortByName(array){
      let arrayNuevo=Array.from(array);
      arrayNuevo.sort((p1,p2)=>p1.nombre.localeCompare(p2.nombre));
      return arrayNuevo;
  }
  
  let arrayOrdNombreProductos=prodsSortByName(arrayProductos);
  console.log(arrayOrdNombreProductos);
  
  // prodsSortByPrice: devuelve un array con los productos ordenados por precio.
  function prodsSortByPrice(array){
      let arrayNuevo=Array.from(array);
      arrayNuevo.sort((p1, p2) => p1.precio-p2.precio);
      return arrayNuevo;
  }
  
  console.log(prodsSortByPrice(arrayProductos));
  
  // prodsTotalPrice: devuelve el importe total de los productos del array, con 2 decimales.
  function prodsTotalPrice(array){
      let importeTotal=array.reduce((total, producto) => 
                      total+=producto.unidades*producto.precio, 0);
      return importeTotal;
  }
  
  console.log(prodsTotalPrice(arrayProductos));
  
  // prodsWithLowUnits: además del array recibe como segundo parámetro un número, y 
  // devuelve un array con todos los productos de los que quedan menos de las unidades indicadas.
  function prodsWithLowUnits(arrayProductos, unidades){
      return arrayProductos.filter((producto)=>producto.unidades < unidades);
  }
  
  let arrayPedidos = prodsWithLowUnits(arrayProductos, 3);
  
  // prodsList: devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un 
  // guión y la información de un producto del array.
  function prodsList(array){
      const cadenaListado= array.reduce(function(valorAnterior, valorActual){
          return `${valorAnterior} \n ${valorActual}`;
      }, 'Listado de productos:');
      return cadenaListado;
  }
  
  console.log(prodsList(arrayProductos));
  console.log('Hay que pedir: '+prodsList(prodsWithLowUnits(arrayProductos, 5)));