//Funcion para devolver euros
Number.prototype.moneda = function (){
    return this.toLocaleString('de-DE', {style:'currency', currency:'EUR'});
}
class Persona{

    static get MAX_PER(){
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
        return this._nombre = this._nombre.charAt(0).toUpperCase()+ this._nombre.substring(1,this._nombre.length).toLowerCase();
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido = this._apellido.charAt(0).toUpperCase()+ this._apellido.substring(1,this._apellido.length).toLowerCase();
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this._edad = edad;
    }

    //Creo funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString(){
        return `${this._id}: \n\t\t ${this.nombre} ${this.apellido} \n\t\t Edad:${this._edad}`;
    }
}
//poner nombre en Formato
// let nombre = "noMbre";
// nombre = nombre.charAt(0).toUpperCase()+nombre.substring(1,nombre.length).toLowerCase();
// console.log(nombre);


let persona1 = new Persona ('JUAN','PEREZ',19);
let persona2 = new Persona ('federica','lopez',25);
console.log(persona1.toString());
console.log(persona2.toString());
persona2.nombre = 'peneke';//cambia nombre
console.log(persona2.toString());
console.log(persona1.nombre);
console.log(persona1.edad);

//Fehca de hoy
let hoy = new Date();
console.log(hoy.toLocaleString());


class Empleado extends Persona{

    static get MAX_EMPL(){
        return 206;
    }
    static ContaEmpleados = 200;

    //creo un constructor con sus propiedades
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);//propiedades heredadas
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.ContaEmpleados; //creo un id autoincremental
    }
    toString() {
        return "Empleado " + `${this._idEmpleado}: \n\t\t ${this.nombre} ${this.apellido} \n\t\t Edad:${this._edad}`+ "\n\t\t Sueldo:" + this._sueldo.moneda() ;
    }
}

let empleado1 = new Empleado (persona1.nombre,persona1.apellido,persona1.edad,1500);
console.log(empleado1.toString());


class Cliente extends Persona{

    static get MAX_CLI(){
        return 306;
    }

    static ContaCliente = 300;    
    //creo un constructor con sus propiedades
    constructor(nombre,apellido,edad,registro){
        super(nombre,apellido,edad);//propiedades heredadas
        this._registro = registro;
        this._idCliente = ++Cliente.ContaCliente; //creo un id autoincremental
    }
    toString() {
        return "Cliente " + `${this._idCliente}: \n\t\t ${this.nombre} ${this.apellido} \n\t\t Edad:${this._edad}`+ "\n\t\t Registro:" + this._registro;
    }
}

let cliente1 = new Cliente ('federica','lopez',25,"22-20-2021");
console.log(cliente1.toString());



