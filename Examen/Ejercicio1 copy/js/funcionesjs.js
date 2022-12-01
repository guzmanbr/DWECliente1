
'use strcit';
//parte 1º Poner bonito
function crearDivPrincipal(idDiv){
    //creo un div para meter ambas listas
    let nuevoDiv=document.createElement('div');
    nuevoDiv.setAttribute('style', `font-family: arial;`);
    //nuevoDiv.innerHTML='kk'
    nuevoDiv.id=idDiv;
    //inserto el div delante del primer OL
    let listaPrimera=document.getElementsByTagName('ol')[0];
    listaPrimera.parentElement.insertBefore(nuevoDiv,listaPrimera);

    // muevo las listas dentro del nuevo div, se eliminan de donde estaban
    let ListaSegunda=document.getElementsByTagName('ul')[0];
    nuevoDiv.appendChild(listaPrimera);
    nuevoDiv.appendChild(ListaSegunda);
    return nuevoDiv;
}

function ponerBonito(){
    //fondo del body
    document.body.setAttribute('style', `background-color: azure; text-align: center`);
    //otros formatos
    document.getElementById('idDivPpal').style.display='flex';
    document.getElementById('idDivPpal').style.justifyContent='center';
    let listaPrimera=document.getElementsByTagName('ol')[0];
    let ListaSegunda=document.getElementsByTagName('ul')[0];
    listaPrimera.style.textAlign='left';
    ListaSegunda.style.textAlign='right';
}


let divPpal= crearDivPrincipal('idDivPpal');

ponerBonito();

//parte 2ª Ordenar
function cargarArray(nodeList1, nodeList2){
    let ciudades=[];
    //arrayDestino será un array de objetos ciudades, 
    //ciudad={nombre: 'Burgos', habitantes:156325}
    for (let i=0; i< nodeList1.length; i++){
        let nuevaCiudad= {nombre: `${nodeList1[i].innerText}`,
                habitantes: `${parseFloat(nodeList2[i].innerText)}`}
        ciudades.push(nuevaCiudad);
    }
    return ciudades;
}

let nombres = document.getElementById('idCiudades').querySelectorAll('li');
let habitantes = document.getElementById('idHabitantes').querySelectorAll('li');
let ciudades = cargarArray(nombres, habitantes);
//no podemos hacer lo de abajo porque ambas variables apuntan al mismo array, 
// hay que hacer copia
let ciudadesOrdenNombre=ciudades.slice();
let ciudadesOrdenHabitantes=ciudades.slice();
ciudadesOrdenNombre = ciudadesOrdenNombre.sort((c1, c2)=>c1.nombre.localeCompare(c2.nombre));
ciudadesOrdenHabitantes = ciudadesOrdenHabitantes.sort((c1,c2)=>c1.habitantes-c2.habitantes);

/* parte final*/
function ponerListas(arrayObjetosCiudades){
    let listaPrimera=document.getElementsByTagName('ol')[0];
    let ListaSegunda=document.getElementsByTagName('ul')[0];
    let listaNombres=listaPrimera.querySelectorAll('li');
    let listaHabitantes=ListaSegunda.querySelectorAll('li');

    for (let i=0; i< listaNombres.length; i++){
        listaNombres[i].innerText=arrayObjetosCiudades[i].nombre;
    }

    for (let i=0; i< listaHabitantes.length; i++){
        listaHabitantes[i].innerText=arrayObjetosCiudades[i].habitantes;
    }
}

function reordenar(){
    if (document.getElementById('rb1').checked==true) {
        ponerListas(ciudades);
    }
    if (document.getElementById('rb2').checked==true) {
        ponerListas(ciudadesOrdenNombre);
    }
    if (document.getElementById('rb3').checked==true) {
        ponerListas(ciudadesOrdenHabitantes);
    }
}


function crearDivBR(){
    //creo un div delante de footer para meter los botones de radio (RB)
    let nuevoDiv=document.createElement('div');
    nuevoDiv.style='clear: both';
    //nuevoDiv.innerText='kk';
    document.body.insertBefore(nuevoDiv, document.getElementsByTagName('footer')[0]);
    return nuevoDiv;
}

//parte Botones de radio
function CrearRB(id, name, label, boolActivo){
    let nuevoRB=document.createElement('input');
    nuevoRB.id=`${id}`;
    nuevoRB.name=`${name}`
    nuevoRB.type='radio';
    nuevoRB.checked= boolActivo;
    nuevoRB.addEventListener('change',reordenar);
    let nuevoLabel=document.createElement('label');
    nuevoLabel.innerText=`${label}`;
    nuevoLabel.style='color: blue';
    divRB.appendChild(nuevoRB);
    divRB.appendChild(nuevoLabel);
}

let divRB=crearDivBR();
let rb1=CrearRB('rb1', 'orden', 'Sin ordenar |', true);
let rb2=CrearRB('rb2', 'orden', 'Por Nombre |', false);
let rb3=CrearRB('rb3', 'orden', 'Por Habitantes', false);