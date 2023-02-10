const SERVER = "http://localhost:4000";

//creo el array de numeros
let numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
//creo el array de palos
let palos = ["OROS", "COPAS", "ESPADAS", "BASTOS"];
// array de posiciones en el tableor

//creo un boton iniciar
const boton = document.createElement("button");
boton.innerHTML = "Iniciar";
//Añado al fichero json las cartas
boton.addEventListener("click", async function () {
    // creo los objetos palo
    for await (const palo of palos) {
        let objeto = {
            id: "",
            name: palo,
        };
        const dato1 = await crearPalo(objeto);
    }
    //relleno cada palo con sus cartas
    for await (const palo of palos) {
        for (const numero of numeros) {
            let carta = {
                id: "",
                palo: palo,
                carta: numero,
                lugar: "mazo",
            };

            const dato2 = await crearCarta(carta);
        }
    }

});

async function crearCarta(carta) {
    fetch(`${SERVER}/naipes`, {
        method: "POST",
        body: JSON.stringify(carta),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw `Error ${response.status} de la BBDD: ${response.statusText}`;
            }

            return response.json();
        })
        .then((datos) => {
            alert("Carta insertados");
        })
        .catch((error) => console.error(error));
}

async function crearPalo(objeto) {
    fetch(`${SERVER}/palos`, {
        method: "POST",
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw `Error ${response.status} de la BBDD: ${response.statusText}`;
            }
            return response.json();
        })
        .then((datos) => {
            alert("Palo insertada");
        })
        .catch((error) => console.error(error));
}
//añado el boton
document.getElementById("div03").appendChild(boton);