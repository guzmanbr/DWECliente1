/*
    EJERCICIO: Haz que a los 2 segundos de abrir la página se abra un popup con un mensaje de bienvenida. 
    Esta ventana tendrá en su interior un botón Cerrar que permitirá que el usuario la cierre haciendo clic en él. 
    Tendrá el tamaño justo para visualizar el mensaje y no tendrá barras de scroll, ni de herramientas, ni de dirección… únicamente el mensaje.
*/


let nuevaVentana;

function cerrarVentana() {
    nuevaVentana.close();
}


function abrirVentana() {
    const ventanaNueva= window.open("","","width=500, height=200, left=200,top=100" );

    //creamos el texto y lo introducimos en la ventana
    let texto = ventanaNueva.document.createTextNode('Bienvenido ventana 1');
    let parrafo = ventanaNueva.document.createElement('h1');
    parrafo.appendChild(texto);
    ventanaNueva.document.body.appendChild(texto);

    //creamos el boton y lo insertamos en la ventana emergente
    let boton= ventanaNueva.document.createElement("input");
    boton.type="button";
    boton.value="Cierra esta ventana";
    function cerrarVentana() {
        ventanaNueva.close();
    }
    boton.addEventListener("click",cerrarVentana);
    ventanaNueva.document.body.appendChild(boton);
}

const Timeout = setTimeout(abrirVentana, 3000);

//************************************************************************** */
let idVentana2;
//cerrarVentana
function cerrar2(){
    idVentana2.close();
}

function abrirVentana2(){
    idVentana2 = window.open("","", "width=500, height=200, left=200,top=600");

 //creamos un párrafo de saludo
    let texoSaludo=idVentana2.document.createTextNode('Hola javascritos \n')
    let parrafo= idVentana2.document.createElement('h1');
    parrafo.appendChild(texoSaludo);
    idVentana2.document.body.appendChild(texoSaludo);

    
 //creamos un boton
    let boton = idVentana2.document.createElement('button')
    boton.innerHTML="Cerrar Ventana2";
    idVentana2.document.body.appendChild(boton);

 //Evento para clic
    boton.id="boton-cerrar2";
    idVentana2.document.getElementById('boton-cerrar2').addEventListener('click', cerrar2);
}

setTimeout(abrirVentana2,2000);



