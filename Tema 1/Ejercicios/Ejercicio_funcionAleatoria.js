/*
Insertar en un array número aleatorios. El numero minimo e maximo de elementos del array se 
debe pedir desde teclado.
Facer co funcions frecha e recursividade.
*/

let minimo = Number(prompt("Escribe el minimo de elementos"));

let arrayRandom = [];

const aleatorioArray = ()=>{
    var numRandom = Math.floor(Math.random() * 100);
    if(arrayRandom.length < minimo){
        arrayRandom.push(numRandom);
        aleatorioArray();
    }
}

aleatorioArray();

console.log(arrayRandom);