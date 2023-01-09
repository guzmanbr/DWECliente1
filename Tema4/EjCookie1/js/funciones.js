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
