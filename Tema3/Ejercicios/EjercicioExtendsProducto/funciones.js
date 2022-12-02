

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
}





class Television extends Producto{
    //creo un constructor con sus propiedades
    constructor(nombre,categoria,unidades,precio,tamano){
        super(nombre,categoria,unidades,precio);
        this.tamano = tamano;
    }
    getInfo() {
        return super.getInfo() +" y su tamaño es: " + this.tamano + "\"" ;
    }
}

let pro1 = new Television('Philips','TV', 4, 126.75, 45);
let pro2 = new Television('Samsung','PC',10,689.0, 32);


console.log(pro1.getInfo());
console.log(pro2.getInfo());

