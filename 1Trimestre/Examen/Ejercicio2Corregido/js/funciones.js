'use strict';
let contadorBolas=0;
let cuentaClicks=0;
const diametrosArray=[
    80,34,50,120,8,62,17
];

const coloresArray=[
    'linear-gradient(to bottom, #2196f3, #009688)',
    'linear-gradient(to left, #D196f3, #539688)',
    'linear-gradient(to top, #5196f3, #709688)',
    'linear-gradient(to right, #4196f3, #909688)',
    'linear-gradient(to right, #2196f3, #D09688)'
];
// parte A1
function crearBoton(){
    let boton=document.createElement('button');
    boton.style.position='absolute';
    boton.style.left='50%';
    boton.style.top='90%';
    boton.innerText='Booola';
    boton.id="botonBoola";
    document.body.appendChild(boton);
}

crearBoton();
// parte B
function crearBola(){
    let nuevaBola=document.createElement('div');
    nuevaBola.style.borderRadius='50%';
    nuevaBola.style.float='left';
    nuevaBola.style.width=`${diametrosArray[contadorBolas % diametrosArray.length]}px`;
    nuevaBola.style.height=`${diametrosArray[contadorBolas % diametrosArray.length]}px`;
    nuevaBola.style.background=coloresArray[contadorBolas % coloresArray.length];
    nuevaBola.style.margin='10px';
    document.body.appendChild(nuevaBola);
    contadorBolas++;
    //parte C
    nuevaBola.addEventListener('click',ponerNumero);
    nuevaBola.style.textAlign='center';
    //parte D
    nuevaBola.addEventListener('dblclick', eliminarBola);
}
document.getElementById('botonBoola').addEventListener('click',crearBola);

//parte C
function ponerNumero(){
    cuentaClicks++;
    this.innerText=cuentaClicks;
}

//parte D

function eliminarBola(){
    this.remove();
}