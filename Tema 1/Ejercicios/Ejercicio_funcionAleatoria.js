/*
Insertar en un array número aleatorios. El numero minimo e maximo de elementos del array se 
debe pedir desde teclado.
Facer co funcions frecha e recursividade.
*/

let maximo = Number(prompt("Escribe el maximo de elementos"));

let minimo = Number(prompt("Escribe el minimo de elementos"));

let arrayRandom = [];

const aleatorioArray = (maximo, arrayRandom, minimo)=>{
    if(minimo == maximo){
        console.log(arrayRandom);
    }else{
        var numRandom = Math.floor(Math.random() * 100);
        arrayRandom.push(numRandom);
        return aleatorioArray(maximo, arrayRandom, (minimo+1));
    }
}

aleatorioArray(maximo, arrayRandom, minimo);