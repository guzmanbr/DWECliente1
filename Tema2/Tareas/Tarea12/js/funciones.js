let diametroDiana = 40;
let velocidadDiana = 10;
console.log(velocidadDiana);
let xDiana = 0; // Posición x de la Diana
let yDiana = 0;

const flecha = document.getElementById('divFlecha');
let xVelocidadFlecha = 4; // Velocidad al mover la flecha con las teclas
let yVelocidadFlecha = 18; // Velocidad de la flecha cuando salga el disparo
let xFlecha = 0;
let yFlecha = 500;
//declaro los intervalos
let intervalFlecha;
let intervalDiana;
let disparoEfectuado = false;
let sonidoActivado = true;

//contador
let aciertos=0;
let fallos=0;
let conta=0;
let conta2=0;
function cambiarDiametro() {
  diametroDiana = parseInt(document.getElementById("diametroDiana").value);
  // console.log(diametroDiana);
}

function dibujarDiana() {
  document.getElementById('divDiana').style.position = 'absolute';
  document.getElementById('divDiana').style.width = `${diametroDiana}px`;
  document.getElementById('divDiana').style.height = `${diametroDiana}px`;
  document.getElementById('divDiana').style.backgroundColor = 'yellow';
  document.getElementById('divDiana').style.border = `${diametroDiana / 5}px`;
  document.getElementById('divDiana').style.borderColor = 'red';
  document.getElementById('divDiana').style.borderStyle = 'solid';
  document.getElementById('divDiana').style.borderRadius = '50%';
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

function cambiarVelocidad() {
  velocidadDiana = parseInt(document.getElementById("velocidadDiana").value);
  console.log(velocidadDiana);
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

function dibujarFlecha(ancho, alto, color) {
  document.getElementById('divFlecha').style.width = `${ancho}px`;
  document.getElementById('divFlecha').style.height = `${alto}px`;
  document.getElementById('divFlecha').style.backgroundColor = color;
  document.getElementById('divFlecha').style.borderRadius="5px 5px 0px 0px"
  document.getElementById('divFlecha').style.position = 'absolute';
  document.getElementById('divFlecha').style.left = `${document.documentElement.clientWidth / 2}px`; // Centrar la Flecha
  xFlecha = document.documentElement.clientWidth / 2;
  document.getElementById('divFlecha').style.left = `${xFlecha}px`;
}

function cambiarVelocidadFlecha() {
  xVelocidadFlecha = parseInt(document.getElementById("velocidadFlecha").value);
  // console.log(velocidadDiana);
}

function desplazarFlecha() {
  yFlecha -= yVelocidadFlecha;
  flecha.style.top = `${yFlecha}px`;
  if (yFlecha <= 105) {//cuando la flecha llega a la altura y de la diana
    yFlecha = 500;
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
      // aciertos++;
      clearInterval(intervalFlecha);
      clearInterval(intervalDiana);
    }
    marcador();
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
  // console.log('yFlecha: ' + yFlecha);
}

function escucharTeclas(evento) {
  console.log('tecla: ' + evento.key);
  switch (evento.key) {

    case 'ArrowRight':
      if (xFlecha <= document.documentElement.clientWidth - 50) {
        xFlecha += xVelocidadFlecha;
        flecha.style.left = `${xFlecha}px`;
      }
      break;

    case 'ArrowLeft':
      if (xFlecha >= 20) {
        xFlecha -= xVelocidadFlecha;
        flecha.style.left = `${xFlecha}px`;
      }
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

function crearMarcador() {
  document.getElementById("marcador").style.height="60px";
  document.getElementById("marcador").style.marginTop="50px"; 
  document.getElementById("marcador").style.display="flex"; 
  document.getElementById("marcador").style.fontSize="40px"; 
  document.getElementById("aciertos").style.height="60px"; 
  document.getElementById("aciertos").style.width="50%"; 
  document.getElementById("aciertos").style.backgroundColor="rgba(3, 205, 40, 0.805)"; 
  document.getElementById("fallos").style.height="60px";
  document.getElementById("fallos").style.width="50%"; 
  document.getElementById("fallos").style.backgroundColor=" rgba(255, 0, 0, 0.805)";
  document.getElementById("aciertos").style.textAlign="center"; 
  document.getElementById("fallos").style.textAlign="center";
}

function marcador() {
  if (yFlecha <= yDiana) { 
    if (xFlecha >= xDiana && xFlecha <= xDiana + diametroDiana) {//
      aciertos++;
    }
    else{
      fallos=fallos+1;
    }
  } 
  // console.log("falllllosss"+fallos);
  // console.log("aciertoooos"+aciertos);
  document.getElementById("aciertos").innerHTML=aciertos;
  document.getElementById("fallos").innerHTML=fallos;
}



function botonSonido() {
  document.getElementById("btnsonido").style.backgroundColor="#1b0c10a5";
  document.getElementById("btnsonido").style.color="white";
  document.getElementById("btnsonido").style.marginTop="20px";
  document.getElementById("btnsonido").style.height="50px";
  document.getElementById("btnsonido").style.width="120px";
}
function controlSonido() {
  if (sonidoActivado === true) {
    document.getElementById("btnsonido").value="Activar Sonido";
    sonidoActivado=false;
  }else{
    document.getElementById("btnsonido").value="Desactivar Sonido";
    sonidoActivado=true;
  }
}

function botonMarcador() {
  document.getElementById("btnmarcador").style.backgroundColor="#1b0c10a5";
  document.getElementById("btnmarcador").style.color="white";
  document.getElementById("btnmarcador").style.marginTop="20px";
  document.getElementById("btnmarcador").style.height="50px";
  document.getElementById("btnmarcador").style.width="120px";
}
function botones() {
  document.getElementById("velocidadDiana").style.backgroundColor="#1b0c10a5";
  document.getElementById("velocidadDiana").style.color="white";
  document.getElementById("velocidadDiana").style.marginTop="20px";
  document.getElementById("velocidadDiana").style.height="45px";
  document.getElementById("velocidadDiana").style.width="120px";

  document.getElementById("diametroDiana").style.backgroundColor="#1b0c10a5";
  document.getElementById("diametroDiana").style.color="white";
  document.getElementById("diametroDiana").style.marginTop="20px";
  document.getElementById("diametroDiana").style.height="45px";
  document.getElementById("diametroDiana").style.width="120px";

  
  document.getElementById("velocidadFlecha").style.backgroundColor="#1b0c10a5";
  document.getElementById("velocidadFlecha").style.color="white";
  document.getElementById("velocidadFlecha").style.marginTop="20px";
  document.getElementById("velocidadFlecha").style.height="45px";
  document.getElementById("velocidadFlecha").style.width="120px";

}
function reiniciarMarcador() {
  aciertos=0;
  fallos=0;
  conta=0;
  conta2=0;
  document.getElementById("aciertos").innerHTML=aciertos;
  document.getElementById("fallos").innerHTML=fallos;
}
function comenzar() {
  // console.log("POSICION DIANA   "+xDiana);
  document.getElementsByTagName('header')[0].style.backgroundColor = '#1b0c10a5';
  document.getElementById('divHueco').style.height = '400px';
  document.getElementById('divHueco').style.backgroundColor = '#1b0c10a5';
  document.getElementById('divHueco').style.borderRadius="5px";
  document.getElementById("aciertos").innerHTML=aciertos;
  document.getElementById("fallos").innerHTML=fallos;
  crearMarcador();
  dibujarDiana();
  dibujarFlecha(10, 35, 'grey');
  intervalDiana = setInterval(desplazarDiana, 50);
  flecha.style.top = `${yFlecha}px`;
  yFlecha = parseInt(flecha.style.top);
  document.body.addEventListener('keydown', escucharTeclas);
  document.getElementById("btnsonido").addEventListener('click', controlSonido);
  document.getElementById("btnmarcador").addEventListener('click', reiniciarMarcador);
  botonSonido();
  botonMarcador();
  botones();
  if (aciertos === 3 ) {
    document.getElementById("checkAciertos1").checked="checked";
  }
  if (aciertos === 6 ) {
    document.getElementById("checkAciertos2").checked="checked";
  }
  // //hacer que cambie el fondo y se reduzca la velocidad de la flecha cuando los aciertos son 3
  // if (aciertos === 3 && conta===0) {
  //   document.getElementById('divHueco').style.backgroundColor = 'rgba(255, 0, 0, 0.405)';
  //   yVelocidadFlecha=yVelocidadFlecha/2;
  //   conta++;
  // }
  // //hace que el fondo y la velocidad vuelvan a ser normales una vez pasas de 3 aciertos
  // if (aciertos === 4 && conta2 === 0){
  //   document.getElementById('divHueco').style.backgroundColor = '#1b0c10a5';
  //   yVelocidadFlecha=yVelocidadFlecha*2;
  // }

  
}

document.addEventListener('load', comenzar());