
//Suma
function sumar() {
    let num1 = parseFloat(form['num1'].value);
    let num2 = parseFloat(form['num2'].value);

    resultado = num1+num2;// resultado = (num1+num2).toFixed(2);

    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').value = `${resultado}`;
}



//Restar
function restar() {
    let num1 = parseFloat(form['num1'].value);
    let num2 = parseFloat(form['num2'].value);

    resultado = num1-num2;

    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').value = `${resultado}`;
}


//Multiplicar
function multiplicar() {
    let num1 = parseFloat(form['num1'].value);
    let num2 = parseFloat(form['num2'].value);

    resultado = num1*num2;

    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').value = `${resultado}`;
}

//Dividir
function dividir() {
    let num1 = parseFloat(form['num1'].value);
    let num2 = parseFloat(form['num2'].value);

    resultado = num1/num2;

    if(isNaN(resultado)){
        resultado = 'La operación no incluye números';
    }
    document.getElementById('resultado').value = `${resultado}`;
}

