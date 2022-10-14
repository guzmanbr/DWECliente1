// let a = new Array();

    let a = [2, 5, "pepe", ['Georgi', 24, [5, 9, 7]]];

    console.log(a);
    console.log(a[2].length);
    a.push('Lucia');
    console.log(a);
    a.unshift('Daniel');
    console.log(a);

    // Mete una nota más en el array de notas dentro del array de 'Georgi'
    a[4][2].push(0);
    console.log(a);

    // Elimina el array de 'Georgi' completamente

    const eliminado1 = a.pop();
    a.pop();
    a.push(eliminado1);
    console.log(a);
    //para verlos con separacion
    let cadena = a.join(' - ');
    console.log(cadena);
    console.log(a.toString());//muestra el array en string
    

    let b = ['Lunes', 'Martes', 2, 4, 6];
    b.splice(2,0,'Miércoles');
    console.log(b);
    b.splice(2,1);
    console.log(b);
    

