
//Exportamos persona
export class Persona{
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