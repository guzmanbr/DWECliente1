let contadorRojo=0;

let contadorVerde=0;

function sumarRojo(){

    let elementoRojo= document.getElementById('pRojo');
    contadorRojo++;
    elementoRojo.textContent=contadorRojo.toLocaleString(undefined, {minimumIntegerDigits:3});
}

function sumarVerde(){
    let elementoVerde= document.getElementById('pVerde');
    contadorVerde++;
    elementoVerde.textContent=contadorVerde.toLocaleString(undefined, {minimumIntegerDigits:3});
}
