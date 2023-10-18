/*
Crea un algoritmo que resolva a serie de Fibonacci ata ese número
A serie de Fibonacci empeza en 0, 1 e a partir de aí os seguintes 
números son a súa dos dous anteriores. 0,1,1,2,3,5,8,13. Pon 
o límite de n elementos que che indiquen por pantalla. 
Na serie de exemplo hai 8 elementos.
*/

let numero = prompt("Escribe un numero");

let fibonacci = [0, 1];

for(let i = 2; i <= numero; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let a = 0; a <= numero; a++) {
    document.write(fibonacci[a]);
}