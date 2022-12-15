'use strict';
console.log('funciona');
let arrayParrafos=Array.from(document.getElementsByTagName('P'));

function ponerRojo(){
    this.style.color='red';
}
function ponerAzul(){
    this.style.color='blue';
}


for (const parrafo of arrayParrafos) {
    parrafo.addEventListener('mouseover',ponerRojo);
    parrafo.addEventListener('mouseout',ponerAzul);
}
