//Try Catch

/*
try {
    jajaja
    //console.log("Hola");
} catch (error) {
    console.log(error.name);
    console.log(error.message);// me indica el error 
}
console.log("Fin del scrip");
*/

//Funcion para retirar dinero
/*
// Opcion1-----------------------
function retirar (saldo,cantidad) {
    if(saldo<cantidad){
        return false;
    }
    return saldo-cantidad;
}

let nuevoSaldo = retirar(1000, 5000);
console.log(`Saldo nuevo : ${nuevoSaldo}`);

// Opcion2-----------------------
let nuevoSaldo=0;
function retirar (saldo,cantidad) {
    if(saldo<cantidad){
        throw "Saldo insuficiente";// un error al que yo le indico el mensaje
    }
    return saldo-cantidad;
}
//sin error
try {
    nuevoSaldo = retirar(1000, 500);
    console.log(`Saldo nuevo : ${nuevoSaldo}`);
} catch (error) {
    console.log(error)
}
//con error
try {
    nuevoSaldo = retirar(1000, 5000);
    console.log(`Saldo nuevo : ${nuevoSaldo}`);
} catch (error) {
    console.log(error)
}
*/




