
let conta=0;
function pintar() {
  const arrayColores=['pink','red','blue','green','black','purple'];
  this.style.backgroundColor=arrayColores[conta];
  conta++;
  if (conta==6) {
    conta=0;
  }
}

const arrayTd = Array.from(document.getElementsByTagName('td'));
  arrayTd.forEach(element =>{
  element.addEventListener('dblclick',pintar);
})

let conta2=1;
function escribir() {
  //el if controla que solo controle el orden de las 4 primeras posiciones.
  if (conta2<5) {
    this.innerHTML=conta2+"-"+this.innerText;
    conta2++;    
  }
}

document.getElementsByTagName('td')[0].addEventListener('dblclick',escribir);
document.getElementsByTagName('td')[1].addEventListener('dblclick',escribir);
document.getElementsByTagName('td')[2].addEventListener('dblclick',escribir);
document.getElementsByTagName('td')[3].addEventListener('dblclick',escribir);





