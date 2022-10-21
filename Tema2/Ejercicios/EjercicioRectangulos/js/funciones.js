
conta = 0;
    document.querySelector("#boton1").addEventListener("click", verde);
    document.querySelector("#boton2").addEventListener("click", rojo);

let contaRojo=0;
function rojo(){
    contaRojo++;
    document.querySelector("#resultadoRojo").innerHTML =contaRojo;
}

let contaVerde=0;
function verde(){
    contaVerde++;
    document.querySelector("#resultadoVerde").innerHTML =contaVerde;
}
