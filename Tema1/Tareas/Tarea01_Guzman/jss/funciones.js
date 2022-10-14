var min=1;
var max=20;
var num_al= 5;
var fin=false;
var cont=0;
window.alert("Bienvenido al juego de adivinanza");

var num=0;

    while (fin==false) {
        num = prompt("Introduce un numero del"+min+ " al "+max);

      
        if (num<num_al) {
            alert("El numero que has introducido es menor que el numero secreto");
        }
        if(num>num_al){
            alert("El numero que has introducido es mayor que el numero secreto");
        }
        if(num==num_al){
            alert("Has acertado en "+cont+" intentos");
                
             fin=true;
        }
        cont=cont+1; 
        
        
    }
    window.alert("Fin del juego");









