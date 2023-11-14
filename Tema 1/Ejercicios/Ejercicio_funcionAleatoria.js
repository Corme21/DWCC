/*
Insertar en un array número aleatorios. El numero minimo de elementos del array se debe pedir
desde teclado.
Facer co funcions frecha e recursividade.
*/

let minimo = Number(prompt("Escribe el minimo de elementos"));

let contador = 0;

let arrayRandom = [];

const aleatorioArray = (minimo, arrayRandom, contador)=>{
    if(contador == minimo){
        console.log(arrayRandom);
    }else{
        var numRandom = Math.floor(Math.random() * 100);
        arrayRandom.push(numRandom);
        return aleatorioArray(minimo, arrayRandom, (contador+1))
    }
}

aleatorioArray(minimo, arrayRandom, contador);