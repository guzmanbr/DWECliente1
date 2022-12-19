//Clase Orden
export class Orden {

    static contadorOrdenes = 0;//Contador de ordenes
    static contadorProductosAgregados = 0;//Contador de los produtos del orden
    static MAX_PRODUCTOS =5;//Maximo de productos por orden

    constructor(){
        this._id = ++Orden.contadorOrdenes;//Id de cada orden
        this.productos = [];//Aray de productos
        this.contadorProductosAgregados+=0;//Productos agregados a la orden

        //Aviso de maximo alcanzado de productos
        if (Orden.contadorOrdenes >= Orden.MAX_PRODUCTOS) {
            console.log('AVISO: Hay más de '+Orden.MAX_PRODUCTOS);
        }
    }
    //Get id
    get id(){
        return this._id;
    }
    //Funcion para añadir productos a una orden
    agregarProducto(producto){
        this.productos.push(producto);
    }
    //Funcion para obtener el total de los productos
    calcularTotal(){
        return this.productos.reduce((total,prod)=>total+=prod.precio,0);//Hago una funcion para ir sumando los precios de los productos, y inicializo a 0 el reduce
    }

    //Funcion para mostrar una orden
    mostrarOrden(){
        return `________________________________________
    Orden ${this.id}:
            ${this.productos.reduce((todos,prod)=>todos+=prod.toString())}
    ---------------------------------
            Total:     ${(this.calcularTotal()).moneda()}`;
    }
}


//Funcion para devolver euros
Number.prototype.moneda = function (){
    return this.toLocaleString('de-DE', {style:'currency', currency:'EUR'});
}