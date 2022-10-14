
//Variables
const notas1 = [3,2,3,4,5,6,2];
const notas2 = [3,2];

//Funciones

// Funcion tipo function
function notaMediaForCont (notas){
    let suma =0;
    for (let i = 0; i < notas.length; i++) {
        suma+=notas[i];
    }
    console.log(suma);
    return suma/notas.length;
}

alert(notaMediaForCont(notas1));
media = notaMediaForCont(notas1);
console.log(media);


// Funcion tipo flecha
const notaMediaForIn = (notas) =>{
    let suma=0;
    for (const indice in notas) {
        suma+=notas[indice];
    }
    return suma/notas.length;
}


alert(notaMediaForIn(notas1));
media = notaMediaForIn(notas1);
console.log(media);


// Funcion tipo variable


let notaMediaForOf = function(notas){
    let suma= 0 ;
    for (const valor of notas) {
        suma += valor;
    }
    return suma/notas.length;
}

alert(notaMediaForOf(notas1));
media = notaMediaForOf(notas1);
console.log(media);
