//Forma en la que se pinta cada cuadrado de distintos colores
let conta=0;
function pintar() {
  const arrayColores=['pink','red','blue','green','black','purple'];
  this.style.backgroundColor=arrayColores[conta];
  conta++;
  if (conta==arrayColores.length) {
    conta=0;
  }
}
const arrayTd = Array.from(document.getElementsByTagName('td'));
  arrayTd.forEach(element =>{
  element.addEventListener('dblclick',pintar);
})

//Forma en la que se pinta de un solo color cada td
// function pintarRosa() {
//   this.style.backgroundColor='pink';
// }
// function pintarRojo() {
//   this.style.backgroundColor='red';
// }
// function pintarAzul() {
//   this.style.backgroundColor='blue';
// }
// function pintarVerde() {
//   this.style.backgroundColor='green';
// }
// document.getElementsByTagName('td')[0].addEventListener('dblclick',pintarRojo);
// document.getElementsByTagName('td')[1].addEventListener('dblclick',pintarRosa);
// document.getElementsByTagName('td')[2].addEventListener('dblclick',pintarAzul);
// document.getElementsByTagName('td')[3].addEventListener('dblclick',pintarVerde);

