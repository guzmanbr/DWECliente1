/*
//----- OPERADOR TERNARIO ? -----//
let edad = 30;
let esMayorDeEdad = (edad > 18) ? true : false;//"Es un viejo" : "Acaba de nacer"; 0 : "Joven";    
console.log(esMayorDeEdad);


let esMayorDeEdad = (edad > 18) ? "Es un viejo" : "Acaba de nacer"; 
console.log(esMayorDeEdad);

let esMayorDeEdad = (edad > 18) ? 0 : "Joven";    
console.log(esMayorDeEdad);

*/
/*
//------ SWITCH -------//
let nota = 9;

switch (true) {
    case (nota < 5):
        console.log('Insuficiente');
        break;
    case (nota <7):
        console.log('Suficiente');
        break;
    case (nota < 9):
        console.log('Notable');
        break;
    case (nota <=10):
        console.log('Sobresaliente');
        break;
    default:
        console.log('Nota no valida');
}
*/
/*
//----- For ------//

let datos = [5, 23, 12, 85, 100];
//console.log(datos[1]);
let suma = 0;

// for (let i = 0; i < datos.length; i++) {
//     suma += datos[i];
// }

// console.log("La suma es " + suma);

// for (let i in datos) {
//     suma += datos[i]
// }
// console.log("Segunda suma " + suma);


for (const valor of datos) {
    suma+=valor;
    console.log(valor);
}
console.log("La suma es "+suma);


//----- Objetos y Funcion con objetos ------//

let alumno01 = { nombre: 'Georgi', apellido: 'Boris', edad: '24' };
let alumno02 = { nombre: 'Manuel', apellido: 'Hernandez', edad: '25' };

const escribir = (persona) => {
    console.log(persona.nombre+ " "+ persona.apellido+ " tiene "+ persona.edad+" años" );
} 
const escribir2 = (persona) => {
    console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`);
} 

escribir(alumno01);
escribir(alumno02);
escribir2(alumno01);

*/



//-----------------------------------------------------------------
let datos = [4,5,6];
let datos2 = " Hola majos";


for (const valor of datos) {
    console.log(valor);
}

for (const valor of datos2) {
    console.log(valor);
}