/*
-Hacer una página web que vaya añadiendo inputs tipo number hasta que se pulse la tecla ‘Escape’.

-Hacer una función que añada un nuevo input tipo number en el elemento del Dom que se pase como argumento.

-Todos los elementos input deberán tener el mismo evento para que el valor introducido se añada a un array de valores 
(o modifique el valor existente si ese elemento del array ya existe).

-Al pulsar escape dejarán de añadirse inputs y se verá el resultado: suma y promedio de los valores introducidos.
*/


let arrayValores = new Array();

document.addEventListener('keydown', comprobarTecla);
let id=0;
//Funcion para comprobar que teclas hemos pulsado
function comprobarTecla(even) {
    
    switch (even.key) {

        //Si pulso la tecla intro se creara un input nuevo
        case 'Enter':
            crearInputs(document.getElementById('inputs'),id);
            document.getElementById('inputs').lastElementChild.focus();
            id++;
            break;

        //Si pulso la tecla escape se muestra la media
        case 'Escape':
            mostrarResultados();
            break;

        default:
            break;
    }
}

//Crear funcion que añada un input tipo number al elemento pasado como argumento
function crearInputs(elementoPadre,id) {

    //creo los inputs y les doy estilo
    let input = document.createElement('input');
    input.setAttribute("type","number");
    input.setAttribute("id",id);
    input.style.margin="15px";
    input.style.width="300px";

    //le asigno a cada input creado el evento 
    input.addEventListener('input', guardarValor);

    //añado los inputs al elemento que pase por parametro
    elementoPadre.appendChild(input);
}



function guardarValor(evento) {
    let valor = parseInt(evento.target.value);
    let encontrado = false;
    if (!isNaN(valor)) {
      for (let i = 0; i < arrayValores.length; i++) {
        //Busco la id que se ha modificado en el array y si la encuentra la modifica
        if (arrayValores[i].id === evento.target.id) {
          arrayValores[i].valor = valor
          encontrado = true;
        }
      }
      //Si no se ha encontrado se añade al array
      if (encontrado == false) {
        arrayValores.push({ id: evento.target.id, valor: valor });
      }
    }
}



function mostrarResultados() {
    let resultados = document.getElementById('resultados');
    resultados.style.display = 'block';
    let suma = 0;
    for (let i = 0; i < arrayValores.length; i++) {
        suma += arrayValores[i].valor;
    }
    let promedio = suma / arrayValores.length;
    document.getElementById('suma').innerText = suma;
    document.getElementById('promedio').innerText = promedio;
}


