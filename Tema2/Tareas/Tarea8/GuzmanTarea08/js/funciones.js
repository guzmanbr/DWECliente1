//aplicar y quitar estilo al html
  function aplicarCSS() {
    document.getElementsByTagName('html')[0].classList.add('claseHtml');//selecionamos el html y le asignamos la clase del css
    //document.getElementsByTagName('html')[0].classList.toggle('claseHtml');
  }
  function quitarCSS() {
    document.getElementsByTagName('html')[0].classList.remove('claseHtml');//selecionamos el html y le asignamos la clase del css
  }
//aplicar y quitar al h1
  function aplicarH1() {
    document.getElementsByTagName('h1')[0].classList.add('claseH1');
    document.getElementsByTagName('h1')[1].classList.add('claseH1');
  }
  function quitarH1() {
    document.getElementsByTagName('h1')[0].classList.remove('claseH1');
    document.getElementsByTagName('h1')[1].classList.remove('claseH1');
  }
//aplicar y quitar al container
  function aplicarDivCont() {
    document.getElementById('container').classList.add('claseContainer');
  }
  function quitarDivCont() {
    document.getElementById('container').classList.remove('claseContainer');
  }
  //aplicar y quitar al div del rombo y al input
  function aplicarRombo() {
    document.getElementById('rombo').classList.add('claseDivRombo');
    document.getElementById('input').classList.add('claseInput');
  }
  function quitarRombo() {
    document.getElementById('rombo').classList.remove('claseDivRombo');
    document.getElementById('input').classList.remove('claseInput');
  }


  function escribe(i,nFilas) { //hemos añadido el argumento nFilas que recoge el nº de filas del rombo
    let resultado = "";
    let espaciosIzquierda = "";
    espacio = "&nbsp;";
    let espaciosCentro="";
          espaciosIzquierda=espacio.repeat(nFilas/2-i+1);
          resultado="";
          if(i==1){
              resultado=espaciosIzquierda+"*";
              espaciosCentro=""
          }else {
              espaciosCentro=espacio.repeat(2*(i-1)-1);
              resultado=espaciosIzquierda+"*"+espaciosCentro+"*";
          }
      return resultado;
  }
  function actualizarRombo() {
    //var filas=7; sustituimos las filas por el input number
    var filas=document.getElementById("idFilas").value; //número de filas del rombo
    var salida = ""; // string que almacenará todas las filas del rombo
    var filaCentral = filas / 2; // para saber cual es la fila del medio
    filaCentral = filaCentral.toFixed(); //para quitar los decimales
  
    for (let i = 1; i <= filaCentral; i++) {
      cadena = escribe(i,filas); //llamamos a escribe() para escribir una fila
      salida = salida + cadena + "<br>"; //añadimos la fila al string salida
    }
  
    if (filas % 2 == 0) {
      //console.log("Número de filas par");
      for (let i = filas / 2; i >= 1; i--) {
        // i contiene el total de espacios+asteriscos+espacios
        cadena = escribe(i,filas); //mandamos llamar a una función que es decladrada y definida al inicio de este script
        salida = salida + cadena + "<br>";
      }
    } else {
      //console.log("Impar número de filas");
      for (let i = filaCentral - 1; i >= 1; i--) {
        cadena = escribe(i,filas);
        salida = salida + cadena + "<br>";
      }
    }
    document.getElementById("resultado").innerHTML=salida;
    console.log(salida);
  }
  
  