import { Orden } from "./clases/claseOrden";
import { Producto } from "./clases/claseProducto";


//Creo los productos
let p1 = new Producto('Camisa',19.5);
let p2 = new Producto('Chaqueta',214.99);
let p3 = new Producto('Pantalon',67);
console.log(p1.toString());

let o1 = new Orden();
o1.agregarProducto(p1);
o1.agregarProducto(p2);
o1.agregarProducto(p3);
