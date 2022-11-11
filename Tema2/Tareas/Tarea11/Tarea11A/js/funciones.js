let diametroDiana = 40;
let velocidadDiana = 10;
const flecha = document.getElementById('divFlecha');
let xFlecha = 0;
let yFlecha = 500;


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

function dibujarFlecha(ancho, alto, color) {
  document.getElementById('divFlecha').style.width = `${ancho}px`;
  document.getElementById('divFlecha').style.height = `${alto}px`;
  document.getElementById('divFlecha').style.backgroundColor = color;
  document.getElementById('divFlecha').style.position = 'absolute';
  document.getElementById('divFlecha').style.borderRadius = "5px 5px 0px 0px";
  document.getElementById('divFlecha').style.left = `${document.documentElement.clientWidth / 2}px`; // Centrar la Flecha
  xFlecha = document.documentElement.clientWidth / 2;
  document.getElementById('divFlecha').style.left = `${xFlecha}px`;
}

function comenzar() {
  document.getElementsByTagName('header')[0].style.backgroundColor = '#1b0c10a5';
  document.getElementById('divHueco').style.height = '400px';
  document.getElementById('divHueco').style.backgroundColor = '#1b0c10a5';
  dibujarDiana();
  dibujarFlecha(12, 40, 'blue');
  flecha.style.top = `${yFlecha}px`;
  yFlecha = parseInt(flecha.style.top);
}

document.addEventListener('load', comenzar());