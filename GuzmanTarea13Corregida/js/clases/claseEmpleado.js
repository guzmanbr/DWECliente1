//Importo clase persona
import {Persona} from './clasePersona.js';

//Exportamos Empleado
export class Empleado extends Persona{
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