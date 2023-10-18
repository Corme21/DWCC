/*
Crea un programa que amose os números impartes que non sexan 
múltiplos de 3 nin de 7 que hai dende o 100 ao 1. Fai as 
versións usando bucles: while, do while e for.
*/

let contador = 0;

while(contador < 100){
    contador ++;
    if(contador !% 3 && contador !% 7){
        document.write(contador);
    }
}

do{
    contador ++;
    if(contador !% 3 && contador !% 7){
        document.write(contador);
    }
}while(contador < 100);