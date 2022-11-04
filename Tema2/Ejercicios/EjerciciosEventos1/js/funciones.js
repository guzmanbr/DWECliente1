/*
a) Pon un escuchador al botón 1 de la página de ejemplo de DOM para que al hacer click se muestre el un 
alert con ‘Click sobre botón 1
*/
function alertar() {
    alert('Click sobre el boton 1');
}
document.getElementById('button1').addEventListener('click',alertar);

/*
b) Pon otro escuchador al mismo botón para que se abra otra ventana nueva (de 200 px de ancho y 100 de 
alto) con un texto dentro que reze “Nueva ventana emergente”. Nota: Comprueba si hay diferencias si se 
abre la página desde “Live Server” o directamente como archivo local.
*/
function abrirVentana() {
    let nuevaVentana = window.open("","","width=200, height=200");
    nuevaVentana.document.body.innerHTML="<h1>Nueva ventana emergente</h1>";
}
document.getElementById('button1').addEventListener('click',abrirVentana);

/*
c) Pon otro listener al mismo botón para que al pasar el ratón sobre él se muestre debajo de los botones un 
párrafo en rojo con la frase “Se va a abrir una ventana nueva”.
*/
function mostrarParrafo() {
    const elemento = document.createElement('P');//se crea elemento
    const nodoTexto = document.createTextNode('Se va a abrir una nueva ventana');//se crea nodo
    elemento.appendChild(nodoTexto);//se asigna el nodo al elemento
    const Formulario = document.forms[0];
    Formulario.appendChild(elemento);
    elemento.style.color="red";
    elemento.setAttribute('id','idElemento');

}
document.getElementById('button1').addEventListener('mouseover',mostrarParrafo);

/*
d) Pon otro escuchador al mismo botón que al salir el cursor del ratón, desaparezca el párrafo del apartado 
anterior.
*/
function quitarAviso() {
    document.getElementById('idElemento').remove();
}
document.getElementById('button1').addEventListener('mouseout',quitarAviso);

/*
e) Pon un escuchador al botón 2 que desactive el escuchador del primer apartado.
*/
document.getElementById('button2').addEventListener('click',function () {
    document.getElementById('button1').removeEventListener('click',alertar);
})
