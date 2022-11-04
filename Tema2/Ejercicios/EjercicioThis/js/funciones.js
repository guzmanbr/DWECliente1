const arrayInput = Array.from(document.getElementsByTagName('input'));

function pintar(e) {
    //console.log(e.target.id);
    this.style.backgroundColor='yellow';
}

function pintarRosa() {
    this.style.backgroundColor='pink';
}

arrayInput.forEach(element =>{
    element.addEventListener('focus',pintar);//al hacer click los pone amarillos
    element.addEventListener('blur',pintarRosa);//al salir de el lo deja rosa para siempre
})