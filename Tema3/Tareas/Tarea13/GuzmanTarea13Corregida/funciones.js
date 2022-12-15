class Persona{
    static get MAX_AFORO(){
        return 106;
    }
    static contadorPersonas=100;

    constructor(nombre, apellido, edad){
        if(Persona.contadorPersonas >= Persona.MAX_AFORO){
            console.error("AVISO: Hay más de " + (Persona.MAX_AFORO - 100) +" objetos creados.");
        } 
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
        this._id = ++Persona.contadorPersonas;
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return `${this._nombre[0].toUpperCase()}${this._nombre.toLowerCase().slice(1)}`;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return `${this._apellido[0].toUpperCase()}${this._apellido.toLowerCase().slice(1)}`;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return `${this.id}:
                ${this.nombre} ${this.apellido}
                edad: ${this.edad}`;
    }

}

class Empleado extends Persona{
    static contadorEmpleados=200;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido,edad);
        this._id = ++Empleado.contadorEmpleados;
        this._sueldo=sueldo;
    }
    get sueldo(){
        return this._sueldo.toLocaleString('de-De', {style: 'currency', currency: 'EUR'});
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return `Empleado ${super.toString()},
                Sueldo: ${this.sueldo}`
    }

}
class Cliente extends Persona{
    static contadorClientes=300;
    constructor(nombre, apellido, edad, fecha=new Date()){
        super(nombre, apellido, edad);
        this._fechaRegistro= fecha;
        this._id = ++Cliente.contadorClientes;
    }
    
    get fechaRegistro(){
        return this._fechaRegistro.toLocaleDateString();
    }
    set fechaRegistro(fechaCadena){54
        this._fechaRegistro.setFullYear(fechaCadena[0], fechaCadena[1]-1, fechaCadena[2]);
    }
    toString(){
        return `Cliente ${super.toString()}
                Registro: ${this.fechaRegistro}`;
    }
}

let persona1 = new Persona ('JUAN', 'PÉREZ', 19);
let empleado1 = new Empleado ('federica', 'lópez', 25, 22050.2);
let cliente1 = new Cliente ('AnTONio','García', 28);
console.log (persona1.toString());
console.log (empleado1.toString());
console.log (cliente1.toString());
cliente1.fechaRegistro=[1998,04,30];
let empleado2 = new Empleado ( persona1.nombre, persona1.apellido, persona1.edad, 30000 );
console.log (empleado2.toString());
let persona2 = new Persona ('Alejandro', 'Muñoz', 30);
console.log (persona2.toString());
console.log ("Id del Empleado2: "+empleado2.id);
console.log ("id del Cliente 1: "+cliente1.id);
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p23=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p24=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p25=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p26=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
