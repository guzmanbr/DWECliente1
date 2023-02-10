 // Comprueba si las cookies están habilitadas
   if (navigator.cookieEnabled) {
    // Obtiene la fecha actual
    let now = new Date();
    // Define la fecha de caducidad de la cookie
    let expirationDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    // Crea la cookie
    document.cookie = "contVisitas=1; expires=" + expirationDate.toUTCString();
    // Verifica si la cookie ya existe
    if (document.cookie.indexOf("contVisitas") >= 1) {
      // Obtiene el valor de la cookie
      let valorCookie = parseInt(document.cookie.split("contVisitas=")[1].split(";")[0]);
      console.log(valorCookie);
      // Incrementa el valor de la cookie
      valorCookie++;
      // Actualiza la cookie
      document.cookie = "contVisitas=" + valorCookie + "; expires=" + expirationDate.toUTCString();
      // Muestra la cantidad de visitas y los días restantes hasta la caducidad
      document.getElementById("visitas").innerHTML = "Ha visitado esta página " + valorCookie + " veces. La cookie caducará en " + Math.round((expirationDate - now) / (24 * 60 * 60 * 1000)) + " días.";
        // Mostrar un mensaje de advertencia sobre la fecha de caducidad
        document.querySelector(".expiracion").innerHTML = "Esta cookie desaparecerá en 30 días después de ser creada.";
    
    } 
  } else {
      // Mostramos un mensaje de error si las cookies están deshabilitadas
      document.getElementById("contadorVisitas").innerHTML = "Las cookies están deshabilitadas en su navegador. No se pueden contar las visitas a esta página.";
    }

