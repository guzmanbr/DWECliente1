   let velocidad=10;
   let xDiana=0;
   let diametreoDiana=60;
   const element = document.getElementById('diana');
   //let final = element.clientEidth;
   let final = (document.documentElement.clientWidth)-diametreoDiana;
   console.log(final);
   function desplazarDiana() {
      xDiana+=velocidad;
      document.getElementById('div1').style.marginLeft =`${xDiana}px`;
      //Cuando la diana llega al final da la vuelta
      if (xDiana >= final) {
         velocidad=velocidad*(-1);
      }
      //Cuando la diana llega al principio vuelve a girar
      if (xDiana <= 0) {
         velocidad=velocidad*(-1);
      }
   }
   

   function comenzar() {
      const intervalDiana = setInterval(desplazarDiana,20);
   }

   document.addEventListener('load',comenzar());