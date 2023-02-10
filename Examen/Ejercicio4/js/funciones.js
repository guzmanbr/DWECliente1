const SERVER = 'http://localhost:4000';

let Jug1=document.getElementById('divJug1').textContent;
let Jug2=document.getElementById('divJug2').textContent;
let Jug3=document.getElementById('divJug3').textContent;
let Jug4=document.getElementById('divJug4').textContent;

//metodo get
async function selectNipe(idNaipe){
    const dato = await fetch(SERVER+'/naipes?id='+idNaipe);
    const dato1= await dato.json();
    return dato1;
}
//put
async function putNipe(idNaipe, naipe){
    const dato = await fetch(SERVER+'/naipes/'+idNaipe, {
        method:'PUT',
        body:JSON.stringify(naipe),
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const dato1= await dato.json();
    return dato1;
}
//Funcion numRandom
function numRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
//Funcion para repartir cartas
async function repartirNaipe(nomJugador, numCartas){ 
    //recorro todas las cartas
    for (let i=0; i< numCartas; i++){
        let cartasSuf=false;
        let carta=0;
        while (!cartasSuf){
            //genero id aleatorio para la carta
            carta = numRandom(1, 40);
            //Seleciono la carta con el id generado
            const naipes=await selectNipe(carta);
            //si la carta se encuentra en el mazo la reparte
            if (naipes[0].lugar==="mazo"){
                console.log(carta);
                naipes[0].lugar=nomJugador;
                switch (nomJugador) {
                    case 'jugador1':
                        Jug1+= naipes[0].carta+"-> de -> " + naipes[0].palo + "|";
                        break;
                    case 'jugador2':
                        Jug2+= naipes[0].carta+"-> de -> " + naipes[0].palo + "|";
                        break;
                    case 'jugador3':
                        Jug3+= naipes[0].carta+"-> de -> " + naipes[0].palo + "|";
                        break;
                    case 'jugador4':
                        Jug4+= naipes[0].carta+"-> de -> " + naipes[0].palo + "|";
                        break;
                    default:
                        break;
                }
                await putNipe(carta,naipes[0]);
                cartasSuf=true;
            }
        }
    }
}
// Asigno el evento al boton repartir
document.getElementById('repartirId').addEventListener('click', async (event)=>{
    event.preventDefault();
    //Reparto las cartas a los jugadores llamando al metodo repartir con cada jugador
    await repartirNaipe('jugador1',3);
    await repartirNaipe('jugador2',4);
    await repartirNaipe('jugador3',4);
    await repartirNaipe('jugador4',4);
    //Escribo en cada div las cartas que ha recibido cada jugador
    document.getElementById('divJug1').innerText=Jug1;
    document.getElementById('divJug2').innerText=Jug2;
    document.getElementById('divJug3').innerText=Jug3;
    document.getElementById('divJug4').innerText=Jug4;
})
