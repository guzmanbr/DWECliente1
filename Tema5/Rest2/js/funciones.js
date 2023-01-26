const SERVER = "http://localhost:3000";



window.addEventListener('load', function(){
    document.getElementById('addProduct').addEventListener('submit',(event)=>{
        event.preventDefault(); // anula lo traía por defecto
        const producto={
            name:"silla",
            descrip: "Azul"
        };
        let idProd=document.getElementById('id-prod').value;
        if(isNaN(idProd) || idProd.trim()==''){
            alert ('Pon un número!!');
        } else {
          fetch(`${SERVER}/productos?id=${idProd}`,{
                method:'POST',
                body: JSON.stringify(producto),   
                headers: {
                    'Content-Type': 'application/json'
                }
          })
          .then((response)=>{
                if(!response.ok){
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }
            return response.json();
          })
          .then((datos)=>{
            console.log(datos);
            document.getElementById('p1').innerHTML=datos[0].name;
          })
          .catch();
        }
    })
});






//4 Forma Fetch
// window.addEventListener('load', function(){
//     document.getElementById('addProduct').addEventListener('submit',(event)=>{
//         event.preventDefault(); // anula lo traía por defecto
//         let idProd=document.getElementById('id-prod').value;
//         if(isNaN(idProd) || idProd.trim()==''){
//             alert ('Pon un número!!');
//         } else {
//           fetch(`${SERVER}/productos?id=${idProd}`)
//           .then((response)=>{
//                 if(!response.ok){
//                     throw `Error ${response.status} de la BBDD: ${response.statusText}`;
//                 }
//             return response.json();
//           })
//           .then((datos)=>{
//             console.log(datos);
//             document.getElementById('p1').innerHTML=datos[0].name;
//           })
//           .catch();
//         }
//     })
// });




//1 Forma

// const SERVER = "http://localhost:3000";
// window.addEventListener('load', function () {
//     document.getElementById('addProduct').addEventListener('submit', (event) => {
//         event.preventDefault(); // anula lo traía por defecto
//         let idProd = document.getElementById('id-prod').value;
//         if (isNaN(idProd) || idProd.trim() == '') {
//             alert('Pon un número!!');
//         } else {
//             // obtenemos los datos de otra función
//             getProd(idProd);
//         }
//     })
// });

// function getProd(idProd) {
//     const peticion = new XMLHttpRequest();
//     peticion.open('GET', SERVER + '/productos?id=' + idProd);
//     peticion.send();
//     peticion.addEventListener('load', function () {
//         if (peticion.status === 200) {
//             const resultado = JSON.parse(peticion.responseText);
//             // pintamos los datos
//             console.log(resultado);
//             document.getElementById('p1').innerHTML = resultado[0].nombre+" "+resultado[0].descripcion;
//         } else {
//             console.error('Error ' + peticion.status + " " + peticion.statusText + " en la petición")
//         }
//     })
//     //opcional
//     peticion.addEventListener('error', () => console.log("Error en la petición HTTP"));
// };



//2 Forma callback

// const SERVER = "http://localhost:3000";
// window.addEventListener('load', function(){
//     document.getElementById('addProduct').addEventListener('submit',(event)=>{
//         event.preventDefault(); // anula lo traía por defecto
//         let idProd=document.getElementById('id-prod').value;
//         if(isNaN(idProd) || idProd.trim()==''){
//             alert ('Pon un número!!');
//         } else {
//             // obtenemos los datos de otra función
//             getProd(idProd,renderProd);
//             //aqui pintamos los datos
            
            
//         }
//     })
// });

// function renderProd(datos){
//     // pintamos los datos   
//     console.log(datos);
//     document.getElementById('p1').innerHTML=datos[0].name+ " "+datos[0].descrip;  
// }

// function getProd(idProd,callback){
//     const peticion= new XMLHttpRequest();
//     peticion.open('GET', SERVER + '/productos?id='+idProd);
//     peticion.send();
//     peticion.addEventListener('load', function(){
//         if(peticion.status===200) {
//             const resultado = JSON.parse(peticion.responseText);
//             callback (resultado);
//         } else {
//             console.error('Error '+ peticion.status+ " "+ peticion.statusText+ " en la petición")
//         }
//     })
//     //opcional
//     peticion.addEventListener('error', ()=> console.log("Error en la petición HTTP"));
// }


//3 Forma Promesa

// window.addEventListener('load', function(){
//     document.getElementById('addProduct').addEventListener('submit',(event)=>{
//         event.preventDefault(); // anula lo traía por defecto
//         let idProd=document.getElementById('id-prod').value;
//         if(isNaN(idProd) || idProd.trim()==''){
//             alert ('Pon un número!!');
//         } else {
//             // obtenemos los datos de otra función
//             getProd(idProd)
//             .then((datos)=>{
//                 document.getElementById('p1').innerHTML=datos[0].name+ " "+datos[0].descrip;  
//             })
//             //.then()
//             .catch((error)=>{
//                 console.log(error);
//             });
//             // aquí pintamos los datos
//         }
//     })
// });

// function getProd(idProd){
//     return new Promise((resolve, reject)=>{
//         const peticion= new XMLHttpRequest();
//         peticion.open('GET', SERVER + '/productos?id='+idProd);
//         peticion.send();
//         peticion.addEventListener('load', function(){
//             if(peticion.status===200) {
//                 const resultado = JSON.parse(peticion.responseText);
//                 resolve(resultado);
//             } else {
//                 reject(`Error ${peticion.status} ${peticion.statusText} en la petición`)
//             }
//         })
//         //opcional
//         peticion.addEventListener('error', ()=> console.log("Error en la petición HTTP"));
//     });
// }
