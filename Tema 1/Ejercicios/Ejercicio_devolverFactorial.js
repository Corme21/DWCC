/*
Pasar un factorial y devolver el doble
*/

var numero = Number(prompt("Escribe un numero"));

let factor = 1;

function dobleFactor(valor, factor){
    factor *= valor;
    console.log(doble(factor));
}

dobleFactor(numero, factor);
