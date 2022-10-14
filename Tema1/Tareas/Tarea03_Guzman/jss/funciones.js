let factorial = 1;
let operacion = "";
let num = prompt("Introduce un numero positivo");


for (let i = num; i > 0; i--){
    factorial*=i;

    if (i>1) {
        operacion+=i + "x";
    }else{
        operacion+=i;
    }

}
alert(num+"!="+operacion+"="+factorial);