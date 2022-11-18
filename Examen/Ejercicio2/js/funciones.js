document.body.style.backgroundColor="#550b1b";

const diametrosArray=[80,34,50,120,8,62,17];
const coloresArray=[
                        'linear-gradient(to bottom, #2196f3, #009688)', 'linear-gradient(to left, #D196f3, #539688)',  
                        'linear-gradient(to top, #5196f3, #709688)','linear-gradient(to right, #4196f3, #909688)', 
                        'linear-gradient(to right, #2196f3, #D09688)' 
                    ];
let contColor= 0; 
let contDiametro = 0; 
let arrayBolas = [];

let boton=document.createElement('input');

//creo el boton
boton.type='button';
boton.value='Boola';
boton.style.background="grey";
boton.style.position='absolute';
boton.style.left="50%";
boton.style.top='80%';
boton.style.width="90px";
boton.style.height="50px";
boton.setAttribute('id','idBoton');
document.body.appendChild(boton);

//Inicializo las variables que voya utilizar
let idBola=0;
let conta=0;
let diametro=0;
let color;

function crearNuevaBola(){
    let bolaNueva=document.createElement('div');
    bolaNueva.id=`id${idBola}`;
    idBola++;
    diametro=diametrosArray[conta];
    color=coloresArray[conta];
    bolaNueva.style.position='relative';
    bolaNueva.style.textAlign='center';
    bolaNueva.style.margin='15px';
    bolaNueva.style.borderRadius='50%';
    bolaNueva.style.borderStyle='1px solid black';
    bolaNueva.style.width=`${diametro}px`;
    bolaNueva.style.height=`${diametro}px`;
    bolaNueva.style.background = `${coloresArray[conta]}`;
    bolaNueva.style.float='left';
    bolaNueva.innerHTML=idBola;
    conta++;
    if (conta == 6) {
        conta=0;
    }
    document.body.appendChild(bolaNueva);
}

boton.addEventListener('click',crearNuevaBola);



