//Funcion para devolver euros

class Persona{

    static get MAX_AFORO(){
        return 106;
    }

    static ContaPersonas = 100;

    //Creo un constructor con sus atributos
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id = ++Persona.ContaPersonas; //creo un id autoincremental
    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._nombre;
    }

    //Creo funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString(){
        return `${this._id}: \n\t\t ${this._nombre} ${this._apellido} \n\t\t Edad:${this._edad}`;
    }
}

let nombre = "noMbre";
nombre = nombre.charAt(0).toUpperCase()+nombre.substring(1,nombre.length).toLowerCase();
console.log(nombre);



let persona1 = new Persona ('JUAN','PEREZ',19);
let persona2 = new Persona ('federica','lopez',25);
console.log(persona1.toString());
console.log(persona2.toString());
persona2.nombre = 'peneke';//cambia nombre
console.log(persona2.toString());
console.log(persona1.nombre);;



let hoy = new Date();
console.log(hoy.toLocaleString());


class Empleado extends Persona{
    //creo un constructor con sus propiedades
    constructor(nombre,categoria,unidades,precio,tamano){
        super(nombre,categoria,unidades,precio);
        this.tamano = tamano;
    }
    getInfo() {
        return super.getInfo() +" y su tamaño es: " + this.tamano + "\"" ;
    }
}


class Cliente extends Persona{
    //creo un constructor con sus propiedades
    constructor(nombre,categoria,unidades,precio,tamano){
        super(nombre,categoria,unidades,precio);
        this.tamano = tamano;
    }
    getInfo() {
        return super.getInfo() +" y su tamaño es: " + this.tamano + "\"" ;
    }
}


