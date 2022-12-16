import {Persona} from './clasePersona.js';

export class Empleado extends Persona {

    static contadorEmpleados = 200;

    constructor (nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._id = ++Empleado.contadorEmpleados;
    }

    get sueldo() {
        return this._sueldo.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    
    toString() {
        return `Empleado ${super.toString()},
                Sueldo: ${this.sueldo}`
    }
}