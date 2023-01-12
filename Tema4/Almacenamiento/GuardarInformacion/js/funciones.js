// Almacenamiento local

//clave -> valor
localStorage.setItem("uno","Primero");//1 forma de guardar
localStorage.dos="Segundo";//2 forma de guardar
localStorage['tres']='Tercero';//3 forma de guardar

//Array con valores
let array = [
    localStorage.uno,//1 forma
    localStorage['dos'],//2 forma
    localStorage.getItem("tres")//3 forma
]

console.log(array);//muestro los valores
localStorage.array=array;//guardo un array

localStorage.arrayJson=JSON.stringify(array);//Guardo un array en Json




