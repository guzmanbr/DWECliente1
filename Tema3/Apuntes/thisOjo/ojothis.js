class Alumno {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    getInfo() {
        // //Forma incorrecta corregida (mas complicada)
        // function nomAlum() {
        //     return this.nombre + " " + this.apellidos; // Aquí this no es el objeto Alumno
        // }

        // let funcionNombreAlumno = nomAlum.bind(this);
        // return "El alumno " + funcionNombreAlumno() + " tiene " + this.edad + " años";


        ////1ª Forma, a la funcion le paso un alumno y uso este para sacar sus propiedades, luego llamo a this en el return de la funcion
        // function nombAlumn(alumno) {
        //     return `${alumno.apellidos} ${alumno.nombre}`;
        // }
        // return `El alumno ${nombAlumn(this)} es de esta clase.`;

        //2ª Forma, mediante la funcion flecha this no se ve afectado
        // let nombAlumn = ()=> {
        //     return `${this.apellidos} ${this.nombre}`;
        // };
        // return `El alumno ${nombAlumn()} es de esta clase.`;

        //return `El alumno ${this.nombre} ${this.apellidos} es de esta clase.` ;
    }

    //Funcion para convertir nombe a mayusculas
    imprimeMayus(){
        return this.nombre.toLocaleUpperCase() + ' ' + this.apellidos;
    }
}


// Creo alumnos
let alumno1 = new Alumno('Carlos' , 'Perez Ortiz', 19);
let alumno2 = new Alumno('Ana' , 'Cifuentes Olivas', 18);

//LLamo a funciones sobre los alumnos
console.log(alumno1.getInfo());
console.log(alumno2.getInfo());

console.log(alumno1.imprimeMayus());