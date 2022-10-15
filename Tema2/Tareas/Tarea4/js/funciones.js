let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Ocrubre", "Noviembre", "Diciembre"];
console.log(meses);

conta = 0;

    document.querySelector("#boton").addEventListener("click", mostrar);
    document.querySelector("#boton2").addEventListener("click", quitar);
    let listameses = document.querySelector("ul");


function mostrar(){
    if(conta<meses.length){
        document.querySelector("#resultado").innerHTML += "<li>"+meses[conta]+"</li>";
        conta++;
    }else{
        console.log("No hay mas meses en el array");
    }
}

function quitar(){
    if (conta <= 0){
        console.log("No hay ningun elemento para eliminar");
    }
    else if(conta<=meses.length){
        var list = document.getElementById('resultado');
        var ultimo = listameses.lastElementChild;
        list.removeChild(ultimo);
        conta--;
    }
}
