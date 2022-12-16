
//Clase producto

export class Producto {

    //idProducto
    static ContaProducto = 000;

    //Constructor
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._id = Producto.ContaProducto++;
    }


    toString(){
        return `${this._nombre}     ${this._precio}`;
    }
}