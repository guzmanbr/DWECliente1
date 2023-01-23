const SERVER ="http://localhost:3000";

window.addEventListener('load', function(){
    document.getElementById('addProduct').addEventListener('submit',(event)=>{
        event.preventDefault(); // anula lo traía por defecto
        let idProd=document.getElementById('id-prod').value;
        if(isNaN(idProd) || idProd==''){
            alert ('Pon un número!!');
        } else {
            // obtenemos los datos de otra función
            const datos= getProd(idProd);
            // pintamos los datos
            console.log(datos);
            document.getElementById('p1').innerHTML=datos;
        }
    })
});

function getProd(idProd){
    const peticion= new XMLHttpRequest();
    peticion.open('GET', SERVER + '/productos?id=' + idProd);
    peticion.send();
    peticion.addEventListener('load', function(){
        if(peticion.status===200) {
            const resultado = JSON.parse(peticion.responseText);
            console.log(resultado);
            return resultado;
        } else {
            console.error('Error '+ peticion.status+ " "+ peticion.statusText+ " en la petición")
        }
    })
    //opcional
    peticion.addEventListener('error', ()=> console.log("Error en la petición HTTP"));
}