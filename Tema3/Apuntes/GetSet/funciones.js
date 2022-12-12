class Alumno {
    constructor(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this.edad = edad;
    }

    get nombre() {
        return this._nombre.toUpperCase();
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let sac=new Alumno('Sergio', 'alVArez casasola', 27);

console.log(sac._nombre);
console.log(sac.edad);
console.log(sac.nombre);// llama al metodo get
sac.nombre='Pincho'; //set nombre
console.log(sac.nombre);//get nombre() -> modificado




