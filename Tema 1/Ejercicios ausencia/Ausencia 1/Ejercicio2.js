/*
Escribe un algoritmo en Javascript que dado un número aleatorio 
de números do 1 ao 100, os meta a todos nun array e fágao o 
proceso de depuración nun conxunto para que non quede ningún 
repetido.
*/

let numeroRandm = 0;

let numeros = [];

let numerosNoRepe = [];

var repetido = false;

for(let i = 1; i < 100; i++){
    numeroRandm = Math.floor(Math.random() * 100);
    numeros.push(numeroRandm);
}

console.log(numeros);

for(let a = 0; a < numerosNoRepe.length; a++){
    if(numeroRandm == numerosNoRepe.length[a]){
        repetido = true;
        break;
    }
}

if(!repetido){
    numerosNoRepe.push(numeros);
}

console.log(numerosNoRepe);