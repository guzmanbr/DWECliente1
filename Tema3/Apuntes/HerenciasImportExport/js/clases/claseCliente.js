import {Persona} from './clasePersona.js';

export class Cliente extends Persona {
    
    static contadorClientes = 300;

    constructor (nombre, apellido, edad, registro = new Date()) {
        super(nombre, apellido, edad);
        this._registro = registro;
        this._id = ++Cliente.contadorClientes;
    }

    get registro() {
        return this._registro.toLocaleDateString();
    }

    set registro(registroCadena) {
        this._registro.setFullYear(registroCadena[0], registroCadena[1] - 1, registroCadena[2]);
    }

    toString() {
        return `Cliente ${super.toString()}
                Registro: ${this.registro}`;
    }
}