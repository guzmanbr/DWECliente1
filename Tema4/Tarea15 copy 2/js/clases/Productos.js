export class Producto {
    // idProducto
    static ContaProducto = 0;
    // Constructor
    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.ContaProducto;
    }
    // Get Id
    get idProducto(){
        return this._idProducto = this._idProducto;
    }
    // Get Set Nombre
    get nombre(){
        return this._nombre = this._nombre.toUpperCase();
    }
    set nombre(nombre){
        return this._nombre = nombre.toUpperCase();
    }
    // Get Set Precio
    get precio(){
        return this._precio.toLocaleString('de-De', {style: 'currency', currency: 'EUR'});
    }
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        return `${this._idProducto}:  ${this._nombre}:    ${this._precio} \n \t\t\t`;
    }
}