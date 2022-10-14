let frutas = ['Peras', 'Manzanas', 'Kiwis', 'Platanos', 'Mandarinas'];

//Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
frutas.splice(1,1)// desde la posicion 1 elimino 1
console.log(frutas);
//Añade detrás de los Plátanos, Naranjas y Sandía. (Debe quedar: Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
frutas.splice(3,0,'Naranjas', 'Sandias');//a partir de la posicion 3, elimino 0 elementos, añado dos strings a continuacion de la posicion 3
console.log(frutas);
/*Otra ----creo variable que es array para guardar lo que elimino
let frutaEliminada = frutas.splice(3,1,'Naranjas', 'Sandias' + );//a partir de la posicion 3, elimino 1 elementos"mandarinas y lo guardo en la variable que es array", añado dos strings y el elemento eliminado que guarde en ultimo lugar
console.log(frutas);
console.log(frutaEliminada);
*/
//Quita los Kiwis y pon en su lugar Cerezas y Nísperos. (Debe quedar: Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)
frutas.splice(1,1,'Cerezas', 'Nisperos');
console.log(frutas);

