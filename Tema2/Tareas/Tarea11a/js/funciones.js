 let velocidad=10;
 let xDiana=50;
 const element =document.getElementById('diana');
 let ancho = element.scrollWidth;
 console.log(ancho);

 function desplazarDiana() {
   if (xDiana >= 40) {
      xDiana+=velocidad;
      document.getElementById('div1').style.marginLeft =`${xDiana}px`;
   }else if(xDiana = ancho){
      velocidad=vlocidad*(-1);
   }
   

   
 }

let interval=setInterval(desplazarDiana,50);


//document.getElementById('div3').addEventListener('load',desplazarDiana);