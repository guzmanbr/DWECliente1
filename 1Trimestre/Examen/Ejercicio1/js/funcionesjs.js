document.body.style.backgroundColor='grey';
document.getElementsByTagName('h1')[0].style

//creo div de las listas , y en el introduzco las listas y meto el div en el body
let contList= document.createElement('div');
contList.style.display="flex";
contList.style.justifyContent="center";
document.body.appendChild(contList);
let Ciudades=document.getElementById('idCiudades');
let Habitantes=document.getElementById('idHabitantes');
contList.appendChild(Ciudades);
contList.appendChild(Habitantes);

//creo el div de los botones y lo introduzco en el body
let contRadio= document.createElement('div');
contRadio.style.display="flex";
contRadio.style.justifyContent="center";
document.body.appendChild(contRadio);

//creo los botones radio
let desordenaodo = document.createElement('input');
desordenaodo.type='radio';
let labelDesordenado = document.createElement('label');
labelDesordenado.innerHTML='Sin ordenar';
let ordenadoNombre = document.createElement('input');
ordenadoNombre.type='radio';
let labelOrdenadoNombre = document.createElement('label');
labelOrdenadoNombre.innerHTML='Por nombre';
labelOrdenadoNombre.style.paddingLeft="5px";
labelOrdenadoNombre.style.borderLeft="solid 1px black";
let ordenadoHabitantes = document.createElement('input');
ordenadoHabitantes.type='radio';
let labeOrdenadoHabitantes = document.createElement('label');
labeOrdenadoHabitantes.innerHTML='Por habitantes';
labeOrdenadoHabitantes.style.paddingLeft="5px";
labeOrdenadoHabitantes.style.borderLeft="solid 1px black";

//introduzco los botones en el div 
contRadio.appendChild(labelDesordenado);
contRadio.appendChild(desordenaodo);
contRadio.appendChild(labelOrdenadoNombre);
contRadio.appendChild(ordenadoNombre);
contRadio.appendChild(labeOrdenadoHabitantes);
contRadio.appendChild(ordenadoHabitantes);


//creo array ciudades y lo relleno
let listaCiudades=[];
Ciudades.childNodes.forEach(element => {
    if(element.innerHTML!=undefined){
        listaCiudades.push(element.innerHTML);
   }
});
console.log(listaCiudades);

//creo array de habitantes y lo relleno
let listaHabitantes=[];
Habitantes.childNodes.forEach(element => {
    if(element.innerHTML!=undefined){
        listaHabitantes.push(element.innerHTML);
   }
});
console.log(listaHabitantes);
//array donde guardare los objetos ciudad
let objetosCiudades=[];
//funcion para rellenar el array
function crearArrays(nombres,habitantes){
    let ciudad;
    let conta=0;
    nombres.forEach(element => {
        ciudad={nombreCiudad:element,numHabitantes:habitantes[conta]};
        conta++;
        objetosCiudades.push(ciudad);
    });
}
crearArrays(listaCiudades,listaHabitantes);
console.log(objetosCiudades);






