let arrayParrafos =  Array.from(document.getElementsByTagName('p'));


function colorRojo() {
    this.style.color="pink";
}

function crearTitulo(texto) {
    let titulo = document.createElement('h1');
    let contenido = document.createTextNode(texto);
    titulo.appendChild(contenido);
    document.body.appendChild(titulo);
    /*Estilo titulo*/
    titulo.style.textAlign = "center";
    titulo.style.color = "white";

}

function crearParrafos(texto) {
    let parrafo = document.createElement('p');
    let contenido = document.createTextNode(texto);
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    /*Estilo parrafo*/
    parrafo.style.color="white";
}





function comenzar() {
    crearTitulo("Repaso Javascrí");
    for (let i = 1; i < 6; i++) {
        crearParrafos("Esto es el parrafo numero " +i);
    }
}

addEventListener('load',comenzar);