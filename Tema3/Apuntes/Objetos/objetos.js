
let alumno = new Object();
    alumno.nombre = 'Carlos';
    alumno['apellidos'] = 'Pérez Ortiz';
    alumno.edad = 19;

let alumna = {
    nombre: 'Ana',
    apellidos: 'Cifuentes Martín',
    edad: 26,
    medidas: {
        altura: 1.7,
        pie: 32
    },
    getInfo2: () => {
        console.log(this);
        return this;
    }
    // getInfo2: function () {
    //     return `${this.nombre} mide ${this.medidas?.altura} metros`;
    // }
};

// console.log(alumna.edad);
// console.log(alumna['edad']);
// console.log(alumna.edad + 1);

alumna.edad = 40;

// console.log(alumna);
// console.log(typeof(alumna.edad));

// console.log(alumna['edad']);

// let edad = 'edad';
// console.log(alumna[edad]);
// console.log(alumna.altura);


console.log(alumna.medidas.altura);
console.log(alumna.notas?.primera);
console.log(alumna.medidas?.pie);


alumnos = ['Juan', 'Ana'];
// console.log(alumnos?.[7]);

console.log(Object.values(alumna));


// for (let propiedad in alumna) {
//     console.log(`${propiedad}: ${alumna[propiedad]}`);

    // if (typeof(`${alumna[propiedad]}` == Object))

    //     for (let medidas in `${alumna[propiedad]}`) {
            
    //     }
// }

alumna.colorGorro = 'verde';

alumna.getInfo = function () {
    return `${this.nombre} tiene ${this.edad} años`;
}

console.log(alumna.getInfo2());