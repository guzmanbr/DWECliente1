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
    //1 opcion
    let lista = document.getElementsByTagName('UL')[0];
    let li=lista.getElementsByClassName('important');
    console.log(li);
    //2 opcion
    li = document.querySelectorAll('li.important');
    console.log(li);
    //3 opcion
    li = document.querySelectorAll('ul li.important');
    console.log(li);

    console.log("-----------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------");
    console.log("-----------------------------------------------------------------------------");

   //EJERCICIO: Siguiendo con la página de ejemplo obtén desde la consola, al menos de 2 formas diferentes:
   // 1. El primér párrafo que hay dentro del div ‘lipsum’
        console.log("**** 1");
        //1 opcion creando el parrafo que pide y llamandolo
        let p1 = document.getElementById('lipsum').firstElementChild;
        console.log(p1);
        //2 opcion creando div y luego llamando el primer elemento
        let lipsumDiv = document.getElementById('lipsum');
        console.log(lipsumDiv.firstElementChild);
        //3 opcion creo variable con el array de parrafos y llamo la primera posicion
        let parr1 = lipsumDiv.getElementsByTagName('P')[0];
        console.log(parr1);
    // 2. El segundo párrafo de ‘lipsum’
        console.log("**** 2");
        // siguiente elemento del parrafo 1
        console.log(p1.nextElementSibling);
        console.log(p1.nextElementSibling.innerHTML);// innerHTML para sacar contenido
        
   // 3. El último item de la lista
        console.log("**** 3");
        //1 opcion creamos  lista con el array de parrafos
        let listaParrafos = lipsumDiv.children;
        console.log(listaParrafos);
        // llamamos el ultimo elemento de parrafos
        console.log(lipsumDiv.lastElementChild);
        //llamamos la ultima posicion de la lista
        console.log(listaParrafos[listaParrafos.length-1]);

   // 4. El elemento label de ‘Escoge sexo’
        console.log("**** 4");
        //1 opcion creamos un array con los elementos label y llamamos la ultima posicion
        let arrayEtiqueta = Array.from(document.getElementsByTagName('label'));
        console.log(arrayEtiqueta[arrayEtiqueta.length-1]);
        console.log(arrayEtiqueta[3].innerHTML);// TODO CONTENIDO
        console.log(arrayEtiqueta[3].textContent);// SOLO TEXTO
        console.log(arrayEtiqueta[3]);




    

