//Importo clase persona
import {Persona} from './clasePersona.js';

//Exportamos Cliente
export class Cliente extends Persona{
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