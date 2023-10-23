/*
Fai un algortimo que imprima as tablas de multiplizar do 1 ao 10. 
*/

let numero = 1;

let multiplicar = 1;

for(let i = 1; i <= 100; i++){
    document.write(`${numero} x ${multiplicar} = ${numero * multiplicar}</br>`);
    multiplicar++;
    if(multiplicar == 11){
        numero++;
        document.write("</br>");
        multiplicar = 1;
    }
}
