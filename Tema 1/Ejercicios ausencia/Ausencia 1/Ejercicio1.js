/*
Escribe un algoritmo en Javascript que calcule o factorial dun número.
*/

var numero = 4;
var factor = 1;

for(let i = 1; i <= numero; i++){
    factor *= i;
}

console.log(`${factor} es el factorial de ${numero}`)