/*
Dada unha frase, comprobar se é palíndromo.
*/

let frase = prompt("Escribe una frase");

let fraseRevs = "";

for(let i = frase.length -1; i >= 0; i--){
    fraseRevs += frase[i];
}

if(frase == fraseRevs){
    console.log("La frase es palíndroma");
}else{
    console.log("La frase no es palíndroma");
}
