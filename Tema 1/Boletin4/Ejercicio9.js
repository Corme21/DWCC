/*
Escribe un programa que tome unha cadea e dous índices como 
argumentos e devolva a subcadea entre eses dous índices.
*/

let cadena = prompt("Escribe una frase");

let indice1 = prompt("Escribe el indice de inicio");

let indice2 = prompt("Escribe el indice del final");

console.log(cadena.slice(Number(indice1), Number(indice2)));