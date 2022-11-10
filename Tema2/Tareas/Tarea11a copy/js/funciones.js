'use strict';
let diametroDiana=40;
let velocidadDiana=10;
let xDiana=0;
//Flecha
const flecha = document.getElementById('contenedorFlecha');
let velocidadFlechaX=20;
let velocidadFlechaY=20;
let xFlecha=0;
let yFlecha=500;

function dibujarDiana(){
  document.getElementById('contenedorDiana').style.position='absolute';
  document.getElementById('contenedorDiana').style.width=`${diametroDiana}px`;
  document.getElementById('contenedorDiana').style.height=`${diametroDiana}px`;
  document.getElementById('contenedorDiana').style.backgroundColor='yellow';
  document.getElementById('contenedorDiana').style.border=`${diametroDiana/5}px`;
  document.getElementById('contenedorDiana').style.borderColor='red';
  document.getElementById('contenedorDiana').style.borderStyle='solid';
  document.getElementById('contenedorDiana').style.borderRadius='50%';

  document.getElementById('centroDiana').style.position='absolute';
  document.getElementById('centroDiana').style.width=`${diametroDiana/2}px`;
  document.getElementById('centroDiana').style.height=`${diametroDiana/2}px`;
  document.getElementById('centroDiana').style.backgroundColor='red';
  document.getElementById('centroDiana').style.left=`${diametroDiana/4}px`;
  document.getElementById('centroDiana').style.top=`${diametroDiana/4}px`;
  document.getElementById('centroDiana').style.borderRadius='50%';
}

function dibujarFlecha(ancho, alto, color){
  document.getElementById('contenedorFlecha').style.width=`${ancho}px`;
  document.getElementById('contenedorFlecha').style.height=`${alto}px`;
  document.getElementById('contenedorFlecha').style.backgroundColor=color;
  document.getElementById('contenedorFlecha').style.position= 'absolute';
  document.getElementById('contenedorFlecha').style.left=`${document.documentElement.clientWidth /2}px`;
  xFlecha=document.documentElement.clientWidth /2;//POSICION DE LA FLECHA EN EL INICIO
}

const desplazarDiana=() => {
  xDiana+=velocidadDiana;
  document.getElementById('contenedorDiana').style.left=`${xDiana}px`;
  if((xDiana+diametroDiana) >= document.documentElement.clientWidth -20){ //da la vuelta
    velocidadDiana= velocidadDiana * (-1);
  }
  if(xDiana <= 0 ) { //da la vuelta
    velocidadDiana= velocidadDiana * (-1);
  }
}
function desplazarFlecha() {
  if(yFlecha<=100){
    yFlecha=500;
  }
  yFlecha-=velocidadFlechaY;
  flecha.style.top=`${yFlecha}px`;
}

function disparar() {
  flecha.style.backgroundColor='brown';
  if (yFlecha <=100) {
    let intervalFlecha=setInterval(desplazarFlecha, 50);
  }
}

function acertar() {
  if (yFlecha ==yDiana && xFlecha) {
    
  }
}

function escucharTeclas(evento) {
  console.log('tecla: '+ evento.key);

  switch (evento.key) {
    case 'ArrowLeft':
        xFlecha-=velocidadFlechaX;
        flecha.style.left=`${xFlecha}px`
      break;
    case 'ArrowRight':
      xFlecha += velocidadFlechaX;
      flecha.style.left=`${xFlecha}px`
    break;

    case ' ':
      disparar();
    break;

    case 'ArrowUp':
      disparar();
    break;
  
    default:
      break;
  }
}

function comenzar(){
  console.log('comenzar');
  document.getElementById('contenedorHueco').style.height='400px';
  document.getElementById('contenedorHueco').style.backgroundColor='pink';
  document.getElementById('contenedorHueco').style.borderRadius = '10px'
  dibujarDiana();
  dibujarFlecha(5,35,'yellow');
  flecha.style.top = `${yFlecha}px`;
  console.log('Flecha1=' + flecha.style.y);
  console.log('Flecha1=' + parseInt(flecha.style.top));
  const intervalDiana=setInterval(desplazarDiana, 50);
  document.body.addEventListener('keydown',escucharTeclas);
}


document.addEventListener('load', comenzar());