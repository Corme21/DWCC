/*
Xerar 500 números aleatorios do 1 ao 500 que serán volcados nun array. Pasar este array
por referencia a unha función e imprimir por cada un deses números se é par ou impar
*/

let array=[];
//Generamos os 500 numeros aleatorios
for(let i = 0; i < 500; i++){
    let numRandm = Math.floor(Math.random()*500);
    array.push(numRandm);
}
//Funcion
function comprobar(array){
    document.write("<strong>Numeros Pares</strong><br>");
    for(let e = 0; e < array.length; e++){
        if(array[e] % 2 == 0){
            document.write(`${array[e]} es un numero par<br>`);
        }else{
            document.write(`${array[e]} es un numero impar<br>`);
        }
    }
}

comprobar(array);
