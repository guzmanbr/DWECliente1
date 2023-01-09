//  Realiza y prueba una función que obtenga el valor de una cookie pasando su nombre como parámetro.

let cookiePrimera = "primera";
document.cookie="cookie1=" + cookiePrimera;

let cookieSegunda = "segunda";
document.cookie="cookie2=" + cookieSegunda;

let cookieTercera = "tercera";
document.cookie="cookie3=" + cookieTercera;

function valorCookie(nombre) {
    if (document.cookie == document.cookie[1]) {
        
    }
    return document.cookie;
}


function getCookie(nombre) {
  let name = nombre + "=";
  let todasCookies = decodeURIComponent(document.cookie);
  let arrayCookies = todasCookies.split(';');
  for(let i = 0; i <arrayCookies.length; i++) {
    let cookie = arrayCookies[i];
    while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "No Existe";
}

console.log(getCookie('cookie3'));

// let c1="uno";
// let c2= "dos";
// let c3="tres";
// document.cookie="c1="+encodeURIComponent(c1);
// document.cookie="c2="+encodeURIComponent(c2);
// document.cookie="c3="+encodeURIComponent(c3);
// console.log(document.cookie);

// function obtenerCookie(nombre){
//     let arrayC=document.cookie.split(";");
//     //console.log(arrayC);
//     let collecionC=new Map();
//     arrayC.forEach((c)=>{
//         let arr2=c.split("=");
//         //console.log(arr2);
//         //collecionC.set(clave, valor);
//         collecionC.set(arr2[0].trim(), arr2[1].trim());
//     })
//     console.log(collecionC);
//     //console.log(collecionC.get('nombre'));
//     return decodeURIComponent(collecionC.get(nombre));
// }
// console.log("resultado:");
// console.log(obtenerCookie('c2'));

