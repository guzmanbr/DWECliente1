
let num = document.getElementById('idFilas').textContent;
console.log(num);
var f, c;

for(f=1;f<=6;f++){
    for(c=1;c<=6-f;c++)
        document.write("&nbsp");// espacio
    for (c=1;c<=f;c++){
        document.write("*");
        }
        document.write("</br>");
}
for(f=5;f>=1;f--){
    for(c=1;c<=6-f;c++)
        document.write("&nbsp");
    for (c=f; c>=1;c--){
        document.write("*");
        }
    document.write("</br>");   
}


/*
    let 
            for (let i=1; $i <= $lineasrombo ; $i++) { 
            for ($blanco=1; $blanco<=$lineasrombo-$i; $blanco++) { 
                echo "&nbsp;&nbsp";
            }
            for ($asterisco=1; $asterisco <=($i*2)-1; $asterisco++) {    
                if ($asterisco==1 || $asterisco==($i*2-1)) {
                    echo "*";
                }else {
                    echo "&nbsp;&nbsp;";
                }        
            } 
            echo "<br>";
        }
        for ($i=2; $i >= 1 ; $i--) { 
            for ($blanco=1; $blanco<=3-$i; $blanco++) { 
                echo "&nbsp;&nbsp";
            }
            for ($asterisco=1; $asterisco <=($i*2)-1; $asterisco++) {    
                if ($asterisco==1 || $asterisco==($i*2-1)) {
                    echo "*";
                }else {
                    echo "&nbsp;&nbsp;";
                }
            } 
            echo "<br>";
        }

*/