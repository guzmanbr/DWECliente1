const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Ocrubre", "Noviembre", "Diciembre"];
let conta = 0;
let avanza = true;
if (avanza==true) {
    document.getElementById('botonUnico').value=('Añadir'); 
    document.getElementById('botonUnico').style.backgroundColor='green';
}



/*
function iniciar() {
    meses.forEach(mes => {
        let liElement = document.createElement('li');
        let contenidoLi = document.createTextNode(mes);
        liElement.appendChild(contenidoLi);
        let olElement = document.getElementById('listaMeses');
        olElement.appendChild(liElement);
    });
}
function añadirMes() {
    if (conta < 12) {
        let mes = meses[conta];
        let liElement = document.createElement('li');
        let contenidoLi = document.createTextNode(mes);
        liElement.appendChild(contenidoLi);
        let olElement = document.getElementById('listaMeses');
        olElement.appendChild(liElement);
        conta++;
    }
}
function quitarMes() {
    if (conta > 0) {
        let olElement = document.getElementById('listaMeses');
        let liUltimo = olElement.lastElementChild;
        olElement.removeChild(liUltimo);
        conta--;
    }

}
*/

function anadirQitarMes() {

    if (avanza == true && conta < 12) {
        let mes = meses[conta];
        let liElement = document.createElement('li');
        let contenidoLi = document.createTextNode(mes);
        liElement.appendChild(contenidoLi);
        let olElement = document.getElementById('listaMeses');
        olElement.appendChild(liElement);
        conta++;
        if (conta == 12) {
            avanza = false;
            document.getElementById('botonUnico').value=("Quitar");
            document.getElementById('botonUnico').style.backgroundColor='red';
        }

    } else if (avanza == false && conta >= 0) {
        olElement = document.getElementById('listaMeses');
        let liUltimo = olElement.lastElementChild;
        olElement.removeChild(liUltimo);
        conta--;
        if (conta==0) {
            avanza = true;
            document.getElementById('botonUnico').value=('Añadir');
            document.getElementById('botonUnico').style.backgroundColor='green';
        }
    }
    
}

