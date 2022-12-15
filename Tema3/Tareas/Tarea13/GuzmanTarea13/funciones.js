//Funcion para devolver euros ------------------------------
Number.prototype.moneda = function (){
    return this.toLocaleString('de-DE', {style:'currency', currency:'EUR'});
}

//Clase Persona ---------------------------------------------
class Persona{

    static get MAX_PER(){
        return 106;
    }
    static ContaPersonas = 100 // id de persona

    //Creo un constructor con sus atributos
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id = ++Persona.ContaPersonas; //creo un id autoincremental        
    }
    //Get Set Nombre
    get nombre(){
        return this._nombre = this._nombre.charAt(0).toUpperCase()+ this._nombre.substring(1,this._nombre.length).toLowerCase();
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    //Get Set Apellido
    get apellido(){
        return this._apellido = this._apellido.charAt(0).toUpperCase()+ this._apellido.substring(1,this._apellido.length).toLowerCase();
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
    //Get Set Edad
    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad = edad;
    }
    //Funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString(){
        return `${this._id}: \n\t\t ${this.nombre} ${this.apellido} \n\t\t Edad:${this._edad}`;
    }
}

// Clase Empleado ------------------------------------------------------------------
class Empleado extends Persona{
    static ContaEmpleados = 200;// Id de empleado
    //Creo un constructor con sus propiedades
    constructor(nombre,apellido,edad,sueldo,id){
        super(nombre,apellido,edad,id);//Propiedades heredadas
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.ContaEmpleados; //Creo un id autoincremental
    }
    toString() {
        return "Empleado " + `${this._idEmpleado}: \n\t\t ${this.nombre} ${this.apellido} \n\t\t Edad:${this._edad}`+ "\n\t\t Sueldo:" + this._sueldo;
    }
}

// Clase Cliente --------------------------------------------------------------------
class Cliente extends Persona{
    static ContaCliente = 300; // id de Cliente
    //creo un constructor con sus propiedades
    constructor(nombre,apellido,edad,registro,id){
        super(nombre,apellido,edad,id);//propiedades heredadas
        this._registro = registro.toLocaleDateString();
        this._idCliente = ++Cliente.ContaCliente; //creo un id autoincremental
    }
    toString() {
        return "Cliente " + `${this._idCliente}: \n\t\t ${this.nombre} ${this.apellido} \n\t\t Edad:${this._edad}`+ "\n\t\t Registro:" + this._registro;
    }
}

// Creo objetos ------------------
let persona1 = new Persona ('JUAN','PEREZ',19);
let empleado1 = new Empleado ('federica','lopez',25,22052.2);
let cliente1 = new Cliente ('AnTONio','Garcia',28,new Date());
console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());
let empleado2 = new Empleado (persona1.nombre,persona1.apellido,persona1.edad,30000);
console.log(empleado2.toString());
let persona2 = new Persona ('Alejandro','Muñoz',30);
console.log(persona2.toString());
console.log("Id del Empleado 2: "+ empleado2._idEmpleado);
console.log("Id del Cliente 1: "+ cliente1._idCliente);
console.log("Contador de personas: " + Persona.ContaPersonas);
let p23= new Persona();
console.log("Contador de personas: " + Persona.ContaPersonas);
let p24= new Persona();
console.log("Contador de personas: " + Persona.ContaPersonas);
let p25= new Persona();
console.log("Contador de personas: " + Persona.ContaPersonas);
let p26= new Persona();
console.log("Contador de personas: " + Persona.ContaPersonas);


