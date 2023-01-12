/*
    Escribe el código para guardar automáticamente el contenido de un campo de texto y, si se actualiza el 
    navegador, restaurar el contenido del campo de texto para que no se pierda lo que ya tiene escrito.
*/

//Si hay valor guardado entra (para evitar un error si no hubiera nada guardado aun)
if(sessionStorage.texto){
    //Le asigno al input el valor almacenado asi se mantendra lo escrito
    document.getElementById("idtexto1").value=sessionStorage.texto;
}

//Le asigno evento al input con la funcion de almacenar el valor en la sesion
document.getElementById("idtexto1").addEventListener("change", function(){
    sessionStorage.texto=this.value;//Guardo el valor del input en la sesion con la clave texto
})



