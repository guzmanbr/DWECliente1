/*
EJERCICIO: Modifica la función de calcular la nota media para que devuelva la media con 1 decimal
EJERCICIO: Modifica la función que devuelve el cubo de un número para que compruebe si el parámetro 
pasado es un número entero. Si no es un entero o no es un número mostrará un alert indicando cuál es el 
problema y devolverá false.
*/

//Variables
const notas1 = [3,2,3,4,5,6,2];

//Funciones

// Funcion tipo function
function notaMediaForCont (notas){
    let suma =0;
    for (let i = 0; i < notas.length; i++) {
        suma+=notas[i];
    }
    console.log(suma);
    return (suma/notas.length).toFixed(1);
}

alert(notaMediaForCont(notas1));


//2 Parte

const cubo = function(valor) {

    if (valor==parseInt(valor)) {
        return valor*valor*valor;
    }else {
        alert("El valor introducido no es un entero");
        return false;
    }


}
console.log(cubo(3.5));
