let diametroDiana = 40;
let velocidadDiana = 10;
let xDiana = 0; // Posición x de la Diana
let yDiana = 0;

const flecha = document.getElementById('divFlecha');
let xVelocidadFlecha = 4; // Velocidad al mover la flecha con las teclas
let yVelocidadFlecha = 18; // Velocidad de la flecha cuando salga el disparo
let xFlecha = 0;
let yFlecha = 480;

let intervalFlecha;
let intervalDiana;

let disparoEfectuado = false;
let sonidoActivado = true;


function dibujarDiana() {
  document.getElementById('divDiana').style.position = 'absolute';
  document.getElementById('divDiana').style.width = `${diametroDiana}px`;
  document.getElementById('divDiana').style.height = `${diametroDiana}px`;
  document.getElementById('divDiana').style.backgroundColor = 'yellow';
  document.getElementById('divDiana').style.border = `${diametroDiana / 5}px`;
  document.getElementById('divDiana').style.borderColor = 'red';
  document.getElementById('divDiana').style.borderStyle = 'solid';
  document.getElementById('divDiana').style.borderRadius = '50%';

  //yDiana = parseInt(document.getElementById('divDiana').style.top);
  yDiana = document.getElementById('divDiana').getBoundingClientRect().top;
  yDiana += diametroDiana;

  document.getElementById('centroDiana').style.position = 'absolute';
  document.getElementById('centroDiana').style.width = `${diametroDiana / 2}px`;
  document.getElementById('centroDiana').style.height = `${diametroDiana / 2}px`;
  document.getElementById('centroDiana').style.backgroundColor = 'red';
  document.getElementById('centroDiana').style.left = `${diametroDiana / 4}px`;
  document.getElementById('centroDiana').style.top = `${diametroDiana / 4}px`;
  document.getElementById('centroDiana').style.borderRadius = '50%';

}

const desplazarDiana = () => {
  xDiana += velocidadDiana;
  document.getElementById('divDiana').style.left = `${xDiana}px`;

  if ((xDiana + diametroDiana) >= document.documentElement.clientWidth - 30) { // Hacer que la diana de la vuelta
    velocidadDiana = velocidadDiana * (-1);
  }

  if (xDiana <= 0) {
    velocidadDiana = velocidadDiana * (-1);
  }

  // let final = document.documentElement.clientWidth;
  // console.log(final);
}

function dibujarFlecha(ancho, alto, color) {
  document.getElementById('divFlecha').style.width = `${ancho}px`;
  document.getElementById('divFlecha').style.height = `${alto}px`;
  document.getElementById('divFlecha').style.backgroundColor = color;
  document.getElementById('divFlecha').style.position = 'absolute';
  document.getElementById('divFlecha').style.left = `${document.documentElement.clientWidth / 2}px`; // Centrar la Flecha
  
  xFlecha = document.documentElement.clientWidth / 2;
  document.getElementById('divFlecha').style.left = `${xFlecha}px`;
}

function desplazarFlecha() {
  yFlecha -= yVelocidadFlecha;

  if (yFlecha <= 90) {//cuando la flecha llega a la altura y de la diana
    yFlecha = 480;
    //yVelocidadFlecha = 0;
    clearInterval(intervalFlecha);
    clearInterval(intervalDiana);
    comenzar();
  }

  flecha.style.top = `${yFlecha}px`;

  if (yFlecha <= yDiana) { // Flecha llega a la altura de la Diana
    if ((xFlecha >= xDiana) && (xFlecha <= xDiana + diametroDiana)) {//
      if (sonidoActivado) {
        document.getElementById("audio_acierto").play();
      }
      clearInterval(intervalFlecha);
      clearInterval(intervalDiana);
    }

  }
}


const disparar = () => {
  disparoEfectuado = true;
  flecha.style.backgroundColor = 'brown';

  if (sonidoActivado) {
    document.getElementById("audio_cerca").play();
  }

  intervalFlecha = setInterval(desplazarFlecha, 50);
  //desplazarFlecha();
  console.log('yFlecha: ' + yFlecha);
}

function escucharTeclas(evento) {
  console.log('tecla: ' + evento.key);

  switch (evento.key) {

    case 'ArrowRight':
      xFlecha += xVelocidadFlecha;
      flecha.style.left = `${xFlecha}px`;
      break;

    case 'ArrowLeft':
      xFlecha -= xVelocidadFlecha;
      flecha.style.left = `${xFlecha}px`;
      break;

    case ' ':
      disparar();
      break;

    case 'ArrowUp':
      if (!disparoEfectuado) {
        disparar();
      }

      break;

    default:
      break;
  }
}

function comenzar() {
  document.getElementsByTagName('header')[0].style.backgroundColor = 'cyan';
  document.getElementById('divHueco').style.height = '400px';
  document.getElementById('divHueco').style.backgroundColor = 'bisque';

  dibujarDiana();
  dibujarFlecha(5, 35, 'blue');

  intervalDiana = setInterval(desplazarDiana, 50);

  flecha.style.top = `${yFlecha}px`;
  yFlecha = parseInt(flecha.style.top);

  document.body.addEventListener('keydown', escucharTeclas);

  //console.log(document.getElementById('divFlecha').style.left=`${document.documentElement.clientWidth/2}px`);
  //document.getElementById('divFlecha').addEventListener('keydown', escucharTeclas);
}

document.addEventListener('load', comenzar());