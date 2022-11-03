const idTimeout = setTimeout(() => console.log('Timeout que se ejecuta al cabo de 3 seg.'), 3000);

let mensaje ="GolOusmaneVendele";
let i = 1; 

//En formade funcion flecha
// const idInterval = setInterval(() => { console.log('Interval cada 3 seg. Ejecución nº: '+ i++); 
//     if (i === 5) {
//         clearInterval(idInterval); 
//         console.log('Fin de la ejecución del Interval'); 
//     } 
// }, 3000);

//llamando a funcion normal
const idInterval = setInterval(ejecutarCada3,3000,mensaje);

function ejecutarCada3() {
    console.log('Interval cada 3 seg. Ejecución nº: ' + i);
    if (i === 5) {
        clearInterval(idInterval); 
        console.log('Fin de la ejecución del Interval'); 
    } 
    i++;
}

function showMessage() { 
    console.log('Timeout que se ejecuta al cabo de 1 seg.') 
}
 const idTimeout2 = setTimeout(showMessage, 1000);