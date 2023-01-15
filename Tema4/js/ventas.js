import { Producto } from "./clases/claseProducto.js";
import { Orden } from "./clases/claseOrden.js";


//Creo los productos
let p1 = new Producto('Camisa',19.5);
let p2 = new Producto('Chaqueta',214.99);
let p3 = new Producto('Pantalon',67);
console.log(p1.toString());

let o1 = new Orden();
o1.agregarProducto(p1);
o1.agregarProducto(p2);
o1.agregarProducto(p3);
let orden2 = new Orden();
p3.precio=160;
orden2.agregarProducto(p3);
p2.nombre='Americana';
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
orden2.agregarProducto(p2);
console.log(o1.mostrarOrden());
console.log(orden2.mostrarOrden());


