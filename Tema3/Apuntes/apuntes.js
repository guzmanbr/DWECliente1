/* typeof -> Indica el tipo de dato */
console.log(typeof(alumna.edad));


console.log(alumna.notas); /* -> Undefined: la propiedad del objeto no está definida */
console.log(alumna.notas.primera); /* -> Error: no se pueden leer las propiedades de otra propiedad que no está definida */

console.log(alumna.notas?.primera); /* -> Undefined: se comprueba si existe primero la propiedad nota antes de buscar su propiedad primera*/