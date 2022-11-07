 let velocidad=10;
 let xDiana=50;
 function desplazarDiana() {
    xDiana+=velocidad;
    document.getElementById('div1').style.left=`${xDiana}px`;
    // this.left=`$velocidad`
 }

let interval=setInterval(desplazarDiana,50);


 //document.getElementById('div3').addEventListener('load',mover);