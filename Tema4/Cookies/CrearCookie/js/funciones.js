// Creacion de cookie
// let testvalue = "Hola mundo!";
// document.cookie = "nombreCookie=" + encodeURIComponent( testvalue );

// let prueba1 = "cigüeña";
// document.cookie="cuqui1="+prueba1;//crea una cookie y le asigno un valor

// let prueba2 = "cigüeña";
// document.cookie = "cuqui2=" + encodeURIComponent(prueba2);//crea una cookie encriptada

// console.log(document.cookie);

// console.log("--------------------------------------------------");

// // Creacion de dos cookies Fecha, y texto y asignarlas a una sola
// //                         año/ mes/ dia/ hora/ min 
// let expiresdate = new Date(2068, 1, 02, 11, 20);
// let cookievalue = "Nueva";
// document.cookie = "testcookie=" + encodeURIComponent( cookievalue ) + "; expires=" + expiresdate.toUTCString();
// console.log(document.cookie);

document.cookie= "testcookie=vieja";
console.log(document.cookie);

// Eliminar cookie (poner una fecha de expiraion pasada)
