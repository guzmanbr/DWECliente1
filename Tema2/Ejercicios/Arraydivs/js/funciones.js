
let arrayCuadrados=[];

function crearCuadrado(idCuadrado,lado,fondo) {
    let cuadrado = document.createElement('div');
    //let texto = document.createTextNode('Palabras....');
    //cuadrado.appendChild(texto);
    cuadrado.setAttribute('id',idCuadrado);
    cuadrado.setAttribute('style',`width: ${lado}px; background-color: ${fondo}`);
    cuadrado.style.height=`${lado}px`;
    cuadrado.style.margin='10px';
    cuadrado.setAttribute('style',`${cuadrado.getAttribute('style')}; float: left;`)
    //añadimos al documento
    document.body.appendChild(cuadrado);
    return cuadrado;
}

// crearCuadrado('cuadrado1',25,'blue');



for (let i = 0; i < 25; i++) {
   arrayCuadrados[i] = crearCuadrado(`cuadrado${i}`,50,'blue');
}

for (indice of arrayCuadrados){
    if (indice % 2 === 0) {
        arrayCuadrados[indice].style.backgroundColor='red';
    }
}

for (let i = 0; i < arrayCuadrados.length; i++) {
    if (i % 2 === 0) {
        arrayCuadrados[i].style.backgroundColor='red';
    }
 }

 //arrayCuadrados[2].style.backgroundColor='red';
 