
// A) Abrir una nueva ventana de dimensiones 500x200px en la posición (200,100)
const nuevaVentana=window.open("","", "width= 500, height=200, left=200, top=400");

// B) Escribir en la nueva ventana (con document.write) un título H1 que diga ‘Hola javascritos del Claudio’.
nuevaVentana.document.write("Hola Javascriptos Claudio Moyano");

// C) Al hacer clic sobre un botón de la ventana inicial que la ventana se desplace 40 px a la izquierda y 50 hacia abajo
function desplazarNv() {
    nuevaVentana.moveBy(800, 100);
}

// D) Al hacer clic sobre otro botón de la ventana incicial, que se cierre la nueva ventana.
function cerrarVentana() {
    nuevaVentana.close();
}
document.getElementById('cerrar').addEventListener('dblclick', cerrarVentana);