'use strict';
let arrayCuadrados=[];

function crearCuadrado(idCuadrado, lado, fondo ){
    let nuevoCuadrado=document.createElement('div');
    // nuevoTexNode=document.createTextNode('Palabras...');
    // nuevoCuadrado.appendChild(nuevoTexNode);
    nuevoCuadrado.setAttribute('id',idCuadrado);
    nuevoCuadrado.setAttribute('style',`width: ${lado}px; background-color: ${fondo}`);
    nuevoCuadrado.style.height=`${lado}px`;
    nuevoCuadrado.style.margin= '10px';
    nuevoCuadrado.draggable='true';
    nuevoCuadrado.setAttribute('style', `${nuevoCuadrado.getAttribute('style')};cursor: pointer;`);
    nuevoCuadrado.setAttribute('style', `${nuevoCuadrado.getAttribute('style')} ; float: left `);
    document.body.appendChild(nuevoCuadrado);
    return nuevoCuadrado
}

//crearCuadrado('cuadrado1', 50, 'blue');

for (let i=0;i<25; i++){
   //arrayCuadrados.push(crearCuadrado(`cuadrado${i}`, 50, 'blue'));
   arrayCuadrados[i]= crearCuadrado(`cuadrado${i}`, 50, 'blue');
}

for (let index = 0; index < arrayCuadrados.length; index++) {

    if (index % 2 ==0 ){
        arrayCuadrados[index].style.backgroundColor='red';
        console.log(arrayCuadrados[0]);
    }
    //agrega funcion en la que cambia el color al pasar el raton x encima
    arrayCuadrados[index].addEventListener('mousemove',function(){
        this.style.backgroundColor='green';
    } );
    //agrega duncion qu ehace que al salir del cuadrado vuelva a su funcion
    arrayCuadrados[index].addEventListener('mouseleave',function(){
        this.style.backgroundColor='orange';
        if (index % 2 ==0 ){
            arrayCuadrados[index].style.backgroundColor='red';
            console.log(arrayCuadrados[0]);
        }else{
            arrayCuadrados[index].style.backgroundColor='blue';
        }
    } );
}
