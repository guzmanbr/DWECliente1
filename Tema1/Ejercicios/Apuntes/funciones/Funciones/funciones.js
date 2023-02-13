
// FUNCIONES
/*
function mostrarMensaje(){
    let mensaje = window.prompt("Escribe algo");
    window.alert("Has escrito "+ mensaje);
}

//mostrarMensaje();

//       potencia(base,exponente=3) si no ponemos exponente coge el valor por defecto
//       potencia(base=2,exponente=3) si no ponemos alguno coge el valor por defecto para evitar el NaN
function potencia(base=2,exponente=3) {
 //   base = base || 4; se le puede dar un valor variable y otro ya por defecto
    console.log(base);
    console.log(exponente);
    return base**exponente;

}

// console.log(potencia(3,2)); //directamente

let variable = potencia(3,2); // guardandolo en variable
//let variable = potencia(3); 3*por defecto
//let variable = potencia(); defecto*defecto
console.log(variable);

// --------------------------------------------------------------
function sumar() {
    //console.log(arguments);
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result = result+arguments[i];        
    }
    return result;
}

let resultado = sumar(3,5,6);
console.log(resultado);

//-----
const cuadrado = function(valor) {
    return valor*valor;
}

const cubo = function(valor) {
    return valor*valor*valor;
}

function aplicarFuncion(dato,nombre_funcion) {
    return nombre_funcion(dato);// devolver nombre de la funcion al que se le aplica el dato
}

let num1 = aplicarFuncion(3,cuadrado);// esto devuelve 3 al cuadrado
let num2 = aplicarFuncion(3,cubo);// devuelve 4 al cubo

const holaMundo = function(){
    alert("Hola mundo");
}

//holaMundo();

let nuevaVariable = holaMundo;
nuevaVariable();

*/

//const potencia =  (base,exponente) => base**exponente;
const potencia = (base, exponente) => {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
console.log(potencia(2, 3));

const cuadrado = (valor) => valor * valor;
let resultado = cuadrado(2);

console.log(`el cuadrado de 34 es ${resultado}`);

let num = 17;
console.log(`El cuadrado de ${num} es el ${cuadrado(num)} `);
