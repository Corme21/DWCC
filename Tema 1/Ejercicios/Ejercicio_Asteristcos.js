/*
Dado un array de longitud 9. Percorrer este array e imprimir en asteriscos o numero presente 
en cada posición.
Debe:
Cargarse o array con numeros que popden ser aleatorios.
Os numeros só derán ser 1 ao 50.
*/

let array = [];

let asteriscos = "*";

var random = Math.floor(Math.random() * 50);

for(let i = 0; i < 9; i++){
    array.push(Math.floor(Math.random() * 50));
}

console.log(array);

var contador = 0;

for(let numero of array){
    for(let a = 0; a != numero; a++){
        document.write(asteriscos);
    }
    document.write("</br>");
}