/*
Crea unha función que reciba un array de palabras. A función devolverá un mapa que
conteña como clave cada palabra e o valor do mapa será o número de veces que esa palabra
aparece no array. Debemos ler as plabras ata que o usuario cancele dunha forma que ti
decidas. Unha vez acabe de cargar, amosaremos as repeticións das palabras no array. 
*/

let palabras = [];

let frase = prompt("Ecribe una frase");

palabras.push(frase.split(" "));

console.log(palabras);

function contar(){
    let contador = 0;

    let mapa = new Map();

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i] == palabras[i]){
            contador++;
        }
        mapa.set(palabras[i], contador);
    }

    for(let[palabra, cuenta] of mapa){
        console.log();
    }
}

