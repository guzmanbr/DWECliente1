//1. El elemento con id ‘input2’
    //1 forma
    let in2 = document.getElementById('input2');// creamos varable y guardamos en ella el elemento con id input2
    console.log(in2);
    //2 forma
    in2 = document.querySelector("#input2");
    console.log(in2);

    //3forma
    let todosInputs = document.getElementsByTagName('INPUT');//lo busco por el tipo de elemento. y una vez selecionado por el index dentro del array de ese tipo de elemento
    let arrayInput = Array.from(todosInputs);// lo transformo en array para luego elegir posicion
    console.log(arrayInput[1]);

// 2. La colección de párrafos
    //1 forma
    let parrafos = Array.apply(document.getElementsByTagName('P'));//creo una variable en la que transformo en array todos los elementos parrafo, que busco segun tipo elemento
    console.log(parrafos);//muestro todos los elementos parrafo
    //2 forma
    parrafos = document.querySelectorAll('P');//selecciono todos los parrafos 'all'
    console.log(parrafos);

// 3. Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
    //1 forma
    let nodoDivIpsum = document.getElementById('lipsum');
    parrafos = nodoDivIpsum.getElementsByTagName('P');
    console.log(parrafos);
    //2 forma
    parrafos = nodoDivIpsum.querySelectorAll('P');//selecciono todos los parrafos 'all'
    console.log(parrafos);

// 4. El formulario (ojo, no la colección con el formulario sino sólo el formulario)
    //1 forma
    let formulario = document.forms[0];// para ver el formulacio exacto usamos su indice
    console.log(formulario);
    //1 forma
    formulario = Array.from(document.forms)[0];// convertimos el formulario a array y elegimos la posicion
    console.log(formulario);
    
// 5. Todos los inputs
    //1 forma
    todosInputs = document.getElementsByTagName('INPUT');
    console.log(todosInputs);

// 6. Sólo los inputs con nombre ‘sexo’
    todosInputs = document.getElementsByName('sexo');
    console.log(todosInputs);

// 7. Los items de lista de la clase ‘important’ (sólo los LI)
