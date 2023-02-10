/*Ej3*/

//Array de lugares y palos
let lugares = ["Baraja", "Jugador 1", "Jugador 2", "Jugador 3", "Jugador 4"];
let palos = ["OROS", "COPAS", "ESPADAS", "BASTOS"];

//creo las opciones de palos
for (const palo of palos) {
    let opcion = document.createElement('option');
    opcion.innerHTML = palo;
    opcion.value = palo;
    document.getElementById("palos").appendChild(opcion);
}
//creo las opciones de lugares
for (const lugar of lugares) {
    let opcion = document.createElement('option');
    opcion.innerHTML = lugar;
    opcion.value = lugar;
    document.getElementById("lugar").appendChild(opcion);
}

//Creo el evento para validar y mostrar
document.getElementById('formID').addEventListener('submit', function (evento) {
    evento.preventDefault();

    //Si esta completado muestra lo seleccionado sino muestra un alert
    if (document.getElementById("palos").value == "1" || document.getElementById("lugar").value == "1") {
        alert("Debe rellenar todos los campos");
    } else {
        document.getElementById('resultado').textContent = "Ha elegido " + document.getElementById("palos").value + " de la mano de " + document.getElementById("lugar").value + ".";
    }
    console.log(document.getElementById("palos").value);
    console.log(document.getElementById("lugar").value);
})



