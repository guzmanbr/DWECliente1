
//Ordenar array alfabeticamente *******************
let a = ['hola', 'adios', 'bien', 'mal'];
console.log(a);

let b = a.sort(function (elem1, elem2) {
    if (elem1.toLocaleLowerCase() < elem2.toLocaleLowerCase()) {
        return -1;
    }
    if (elem1.toLocaleLowerCase() > elem2.toLocaleLowerCase()) {
        return 1;
    }
    if (elem1.toLocaleLowerCase() == elem2.toLocaleLowerCase()) {
        return 0;
    }
});

console.log(a);
console.log(b);

//Oredenar array de numeros***********************
let numeros = [20,5,4];
console.log(numeros);
// ordernar numeros de forma ascendente
numeros.sort(function(num1,num2) {
    return (num1-num2);
});
console.log(numeros);

let numeros2 = [30,3,6];
console.log(numeros2);
/*console.log(numeros2.sort((num1,num2)  =>{ 
    return num1 - num2;
}));
console.log(numeros2.sort((num1,num2)  => num1 - num2));
*/