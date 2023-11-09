/*
Crea unha función que reciba un array de 3x3 por parámetro e o devolva con todos os
elementos a 0 menos a diagonal principal.
*/

let array1 = [];
let array2 = [];
let array3 = [];

for(let i = 0; i < 3; i++){
    let numero = Number(prompt("Escribe un numero"));
    array1.push(numero);
}

for(let i = 0; i < 3; i++){
    let numero = Number(prompt("Escribe un numero"));
    array2.push(numero);
}

for(let i = 0; i < 3; i++){
    let numero = Number(prompt("Escribe un numero"));
    array3.push(numero);
}

let array = [array1, array2, array3];

console.log(array);

function diagonalCero(arrayPrincipal){
    for(let a = 0; a < arrayPrincipal.lenght; a++){
        for(let e = 0; e < arrayPrincipal[a].lenght; e++){
            if(arrayPrincipal[a] == 1){
                arrayPrincipal[1] = 0;
                arrayPrincipal[2] = 0;
            }
            if(arrayPrincipal[a] == 2){
                arrayPrincipal[0] = 0;
                arrayPrincipal[2] = 0;
            }
            if(arrayPrincipal[a] == 3){
                arrayPrincipal[0] = 0;
                arrayPrincipal[1] = 0;
            }
        }
        console.log(arrayPrincipal);
    }
    
}

diagonalCero(array);