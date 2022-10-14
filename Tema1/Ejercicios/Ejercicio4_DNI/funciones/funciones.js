/*
EJERCICIO: Haz una función a la que se le pasa un DNI (ej. 12345678w o 87654321T) y devolverá si es 
correcto o no. La letra que debe corresponder a un DNI correcto se obtiene dividiendo la parte numérica 
entre 23 y cogiendo de la cadena ‘TRWAGMYFPDXBNJZSQVHLCKE’ la letra correspondiente al resto de la 
divisón. Por ejemplo, si el resto es 0 la letra será la T y si es 4 será la G. Prueba la función en la consola con 
tu DNI
*/

function validar_dni(dni) {
    const array_letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let n = parseInt(dni);
    let letra_dni = dni.substr(-1).toUpperCase();//con esto da la ultima posicion
    let resto = n % 23;// CALCULA LA LETRA QUE LE CORRESPONDE AL NUMERO DEL DNI
    let letra_resto = array_letras[resto];//ENCUENTRA LA LETRA QUE CORRESPONDO EN EL ARRAY

    //COMPRUEBA QUE LA LETRA DEL DNI ES LA QUE LE CORRESPONDE SEGUN EL NUMERO
    if (letra_dni == letra_resto) {
        return true;
    }else {
        return false;
    }
}
let dni="71039937k";

//Muestra en consola
console.log(`El Dni ${dni} es ${validar_dni(dni)}`);


//SI LA FUNCION VALIDAR ES FALSE MUESTRA QUE EL DNI ES INCORRECTO
if (!validar_dni(dni)) {
    alert("El DNI es incorrecto");
}else{
    alert ("El DNI es correcto");
}


/*
function validar_dni() {
    dni = parseInt(prompt('Introduce el número del DNI'));
    letra_in = prompt('Introduce la letra').toUpperCase();

    if ((dni >= 0) && (dni <= 99999999)) {
        letra_calculada = letras[dni % 23];
        if (letra_in == letra_calculada) {
            document.getElementById('resultado').innerHTML = "<p style='color:red;font-size:1.6em'>El dni es " + dni + " con letra " + letra_calculada + '</p>';
            alert('El dni es ' + dni + ' con letra ' + letra_calculada);
        } else {
            alert('La letra ' + letra_in + ' no coincide con la calculada → ' + letra_calculada);
        }
    } else {
        alert('No es correcto el valor introducido');
    }
}
input_dni();
*/
