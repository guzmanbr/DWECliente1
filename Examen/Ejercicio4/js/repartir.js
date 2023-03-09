const SERVER = 'http://localhost:4000';



let Jug1=document.getElementById('divJug1').textContent+"\n";
let Jug2=document.getElementById('divJug2').textContent+"\n";
let Jug3=document.getElementById('divJug3').textContent+"\n";
let Jug4=document.getElementById('divJug4').textContent+"\n";



async function selectNipe(idNaipe){
    const dato = await fetch(SERVER+'/cartas?id='+idNaipe);
    const dato1= await dato.json();
    return dato1;
}

async function putNipe(idNaipe, naipe){
    //console.log(naipe);
    const dato1 = await fetch(SERVER+'/cartas/'+idNaipe, {
        method:'PUT',
        body:JSON.stringify(naipe),
        headers: {
            'Content-Type': 'application/json'
          }
    });
    const dato2= await dato1.json();
    return dato2;
}

//Funcion numRandom
function numRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}





async function repartirNaipe(nomJugador, numCartas){ // asigna n cartas aleatorias al jugador jug
    for (let i=0; i< numCartas; i++){
        let cartasSuf=false;
        let carta=0;
        while (!cartasSuf){
            carta = numRandom(1, 40);
            const naipes=await selectNipe(carta);
            console.log(naipes[0]);
            if (naipes[0].lugar=="mazo"){
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



window.addEventListener('load', ()=>{
    document.getElementById('repartirId').addEventListener('click', async (event)=>{
        event.preventDefault();
        //reparto las cartas a los jugadores
        await repartirNaipe('jugador1',4);
        await repartirNaipe('jugador2',4);
        await repartirNaipe('jugador3',4);
        await repartirNaipe('jugador4',4);
        document.getElementById('divJug1').innerText=Jug1;
        document.getElementById('divJug2').innerText=Jug2;
        document.getElementById('divJug3').innerText=Jug3;
        document.getElementById('divJug4').innerText=Jug4;
    })
})