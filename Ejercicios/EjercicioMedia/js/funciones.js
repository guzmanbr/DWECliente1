/*
-Hacer una página web que vaya añadiendo inputs tipo number hasta que se pulse la tecla ‘Escape’.

-Hacer una función que añada un nuevo input tipo number en el elemento del Dom que se pase como argumento.

-Todos los elementos input deberán tener el mismo evento para que el valor introducido se añada a un array de valores 
(o modifique el valor existente si ese elemento del array ya existe).

-Al pulsar escape dejarán de añadirse inputs y se verá el resultado: suma y promedio de los valores introducidos.
*/
let salir = false;

let arrayValores = new Array();

document.addEventListener('keydown', comprobarTecla);
let todosInputs = document.querySelector('input');
todosInputs.addEventListener('change',guardarValor)



function comprobarTecla(even) {
    let id=0;
    console.log(even.key);

    switch (even.key) {

        //Si pulso la tecla intro se creara un input nuevo
        case 'Enter':
                crearInputs(id);
                document.getElementById('inputs').lastElementChild.focus();
                id++;   
            break;

        //Si pulso la tecla escape salir pasara a valer true
        case 'Escape':
                salir=true;
                console.log("Salir cambio a true");
            break;
  
        default:
          break;
      }

}

//Crear funcion que añada un input tipo number al elemento pasado como argumento
function crearInputs(id) {

    let input = document.createElement('input');
    input.setAttribute("id",id);
    input.setAttribute("type","number");
    input.style.margin="15px";
    input.style.width="300px";


    document.getElementById('inputs').appendChild(input);
}


function guardarValor() {
    console.log(this);
}

