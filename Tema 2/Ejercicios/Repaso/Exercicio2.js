/*
Crear unha función que recibe dous parámetros x e y e xere dentro da función un array de x
X y elementos que deberán ser impresos. 
*/

let dimension = prompt("Introduce dimension do array");
let elemento = prompt("Introduce os elementos que vai ter o array");

function crearArray(dimension, elemento){
    let array= [];

    for(let i = 0; i < dimension; i++){
        array[i] = [];
        for(let a = 0; a < elemento; a++){
            array[i][a] = 0;
        }
    }

    return array;
}

console.log(crearArray(dimension, elemento));