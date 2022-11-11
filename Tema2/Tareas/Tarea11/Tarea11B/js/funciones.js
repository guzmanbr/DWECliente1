let diametroDiana = 40;
let velocidadDiana = 10;
let xDiana = 0; // Posición x de la Diana
let yDiana = 0;
let intervalDiana;

function dibujarDiana() {
  document.getElementById('divDiana').style.position = 'absolute';
  document.getElementById('divDiana').style.width = `${diametroDiana}px`;
  document.getElementById('divDiana').style.height = `${diametroDiana}px`;
  document.getElementById('divDiana').style.backgroundColor = 'yellow';
  document.getElementById('divDiana').style.border = `${diametroDiana / 5}px`;
  document.getElementById('divDiana').style.borderColor = 'red';
  document.getElementById('divDiana').style.borderStyle = 'solid';
  document.getElementById('divDiana').style.borderRadius = '50%';
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
}

function comenzar() {
  document.getElementsByTagName('header')[0].style.backgroundColor = '#1b0c10a5';
  document.getElementById('divHueco').style.height = '400px';
  document.getElementById('divHueco').style.backgroundColor = '#1b0c10a5';
  document.getElementById('divHueco').style.borderRadius="5px";
  dibujarDiana();
  intervalDiana = setInterval(desplazarDiana, 50);
}

document.addEventListener('load', comenzar());