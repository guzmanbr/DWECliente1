
function rombo() {
    let filas = parseInt(document.getElementById("idFilas").value);
    let result=document.getElementById('resultado');
    let conta =0;

    if(conta == 0){
        result.innerHTML = "";
    }
    for(let i = 1; i <= filas/2; i++){
        for(let blanco = 1; blanco <= filas - i; blanco++){
            result.innerHTML+='&nbsp;';
            result.innerHTML+='&nbsp;';
        }

        for(let astericos=1; astericos <= (i*2) - 1; astericos++){

            if(astericos == 1 || astericos == (i*2)-1){
                result.innerHTML+="*";


            } else {
                result.innerHTML+='&nbsp;';
                result.innerHTML+='&nbsp;';
            }
        }
        result.innerHTML+="<br></br>";
    }

    if (filas % 2 != 0){
        for(let i = filas/2 + 0.5; i >= 1; i--){
            for(let blanco = 1; blanco <= filas - i; blanco++){
                result.innerHTML+='&nbsp;';
                result.innerHTML+='&nbsp;';
            }
            for(let astericos = 1; astericos <= (i*2)-1; astericos++){
                if(astericos == 1 || astericos == (i*2)-1){
                    result.innerHTML+="*";
                } else {
                    result.innerHTML+='&nbsp;';
                    result.innerHTML+='&nbsp;';
                }
            }
            result.innerHTML+="<br></br>";
        }
    } else {
        for(let i = filas/2; i >= 1; i--){
            for(let blanco = 1; blanco <= filas - i; blanco++){
                result.innerHTML+='&nbsp;';
                result.innerHTML+='&nbsp;';
            }
            for(let astericos = 1; astericos <= (i*2)-1; astericos++){
                if(astericos == 1 || astericos == (i*2)-1){
                    result.innerHTML+="*";
    
                } else {
                    result.innerHTML+='&nbsp;';
                    result.innerHTML+='&nbsp;';
                }
            }
            result.innerHTML+="<br></br>";
        }
    }
}
    