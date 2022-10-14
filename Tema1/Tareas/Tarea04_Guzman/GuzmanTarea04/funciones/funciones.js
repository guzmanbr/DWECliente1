//Area Circulo--------------------------------------------------------------
/*Dejo esta funcion comentada, es la que mostraria la operecion unicamente en consola y con el try catch
function areaCircunferencia(radio) {
    if (radio <= 0) {
        throw "Error. El radio tiene que ser superior a 0"
    }
    return (Math.PI * Math.pow(radio, 2)).toFixed(2);//utiliz los metodos ya creados en math y con el fixed hago que me devuelva solo dos decimales
}
try {
    console.log(areaCircunferencia(2));
} catch (error) {
    console.log(error);
}
*/

//Area Circulo 
function areaCircunferencia() {
    let radio = parseFloat(forma1['radio1'].value);
    area_circulo = (Math.PI * Math.pow(radio, 2)).toFixed(2);//utiliz los metodos ya creados en math y con el fixed hago que me devuelva solo dos decimales
    if(isNaN(area_circulo)){
        area_circulo = 'La operación no incluye números';
    }
    if (radio<=0) {
        area_circulo='Radio no valido';
    }
    document.getElementById('area_circulo').value = `${area_circulo}`;
}

/* Dejo esta funcion comentada, es la que mostraria la operecion unicamente en consola y con el try catch
//Perimetro de circunferencia ------------------------------------------------------
function perimetroCircunferencia(radio) {
    if (radio <= 0) {
        throw "Error. El radio tiene que ser superior a 0"
    }
    return (Math.PI * 2 * radio).toFixed(2);
}
try {
    console.log(perimetroCircunferencia(2));
} catch (error) {
    console.log(error);
}
*/

//Perimetro de circunferencia
function perimetroCircunferencia() {
    let radio = parseFloat(forma2['radio2'].value);
    perimetro_circulo = (Math.PI * 2 * radio).toFixed(2);
    if(isNaN(perimetro_circulo)){
        perimetro_circulo = 'La operación no incluye números';
    }
    if (radio<=0) {
        perimetro_circulo='Radio no valido';
    }
    document.getElementById('perimetro_circulo').value = `${perimetro_circulo}`;
}

/* Dejo esta funcion comentada, es la que mostraria la operecion unicamente en consola y con el try catch

//Calcular perimetro poligono regular regular ---------------------------------------
function perimetroRegular(lados, longitud) {
    if (lados < 3) {
        throw "Error. Los lados tienen que ser 3 o mas";
    }
    return parseInt(lados) * longitud;
}
try {
    console.log(perimetroRegular(3, 5));
} catch (error) {
    console.log(error);
}
*/

//Calcular perimetro poligono regular regular 
function perimetroRegular() {
    let lados = parseInt(forma3['lados1'].value);
    let longitud = parseFloat(forma3['longitud1'].value);

    perimetro_regular = (parseInt(lados) * longitud).toFixed(2);

    if(isNaN(perimetro_regular)){
        perimetro_regular = 'La operación no incluye números';
    }
    if(lados <3 || longitud<=0){
        perimetro_regular = ' Numero de lados o longitud no valido'
    }
    document.getElementById('perimetro_regular').value = `${perimetro_regular}`;

}

/* Dejo esta funcion comentada, es la que mostraria la operecion unicamente en consola y con el try catch

//Calcular area poligono regular regular -----------------------------------------
function areaRegular(lados, longitud) {
    if (lados < 3) {
        throw "Error. Los lados tienen que ser 3 o mas";
    }
    let perimetro = lados * longitud;
    let alfa = 360/lados;
    let tang = Math.tan((alfa/2)*(Math.PI/180));
    console.log("Tangente"+tang);
    let apotema = (lados/2)/(tang);
    return (perimetro*apotema)/2;
}
try {
    console.log("Area"+areaRegular(3, 2));
} catch (error) {
    console.log(error);
}
console.log(Math.tan(1*(Math.PI/180)));
*/

//Calcular area poligono regular regular -------------------------------------------
function areaRegular() {
    let lados = parseInt(forma4['lados'].value);
    let longitud = parseFloat(forma4['longitud'].value);

    let perimetro = lados * longitud;
    let alfa = 360/lados;
    let tang = Math.tan((alfa/2)*(Math.PI/180));
    console.log("Tangente"+tang);
    let apotema = (lados/2)/(tang);
    area_regular = ((perimetro*apotema)/2).toFixed(2);

    if(isNaN(area_regular)){
        area_regular = 'La operación no incluye números';
    }
    if(lados <3 || longitud<=0){
        area_regular = ' Numero de lados o longitud no valido'
    }
    document.getElementById('area_regular').value = `${area_regular}`;
}
