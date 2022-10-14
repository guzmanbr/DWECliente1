'use strict';//nos  daria errores cuando no hay variables declaradas, definimos varias veces propiedades o duplicamos parametro en funcion... nos hace definir todo correctamente

let notasCristian=[10,8];

function calcularMedia(notas) {
    if (notas.length < 1 ){
        throw "Array vacio";
    }
    let suma =0;
    for (const nota of notas) {
        suma+=nota;
    }
    return suma/notas.length;
}

try {
    console.log(calcularMedia([5,4,2]));
} catch (error) {
    console.log(error);
    
}

try {
    console.log(console.log(calcularMedia([])));
} catch (error) {
    console.log(error);
    
}

try {
    console.log(calcularMedia(notasCristian));
} catch (error) {
    console.log(error);
    
}
