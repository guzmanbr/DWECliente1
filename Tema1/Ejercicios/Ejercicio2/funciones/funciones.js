
//Variables
let nota="";
let suma= 0;
let cont= 0;

//Funciones
while(nota != null){
    nota = prompt("Pon nota: ");
    if (nota != null) {
        suma += parseFloat(nota);
        cont++;
    }
    console.log(suma);
}

alert("La media de estas "+cont+" notas es: "+parseFloat(suma/cont));



