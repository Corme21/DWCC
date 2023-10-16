/*
Xerar con math.random mil numeros. Comprobar con que frecuencia aparecen os numeros do 1 ao 10.
1 apareceu x veces
2 apareceu y veces
*/

let numRandm = 0;

let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let contador7 = 0;
let contador8 = 0;
let contador9 = 0;
let contador10 = 0;

for(let i = 0; i < 1000; i++){
    numRandm = Math.floor(Math.random() * 10 + 1);
    console.log(numRandm);
    if(numRandm == 1){
        contador1++;
    }else if(numRandm == 2){
        contador2++;
    }else if(numRandm == 3){
        contador3++;
    }else if(numRandm == 4){
        contador4++;
    }else if(numRandm == 5){
        contador5++;
    }else if(numRandm == 6){
        contador6++;
    }else if(numRandm == 7){
        contador7++;
    }else if(numRandm == 8){
        contador8++;
    }else if(numRandm == 9){
        contador9++;
    }else if(numRandm == 10){
        contador10++;
    }
}

document.write(`1 aparecio ${contador1} veces</br>`);
document.write(`2 aparecio ${contador2} veces</br>`);
document.write(`3 aparecio ${contador3} veces</br>`);
document.write(`4 aparecio ${contador4} veces</br>`);
document.write(`5 aparecio ${contador5} veces</br>`);
document.write(`6 aparecio ${contador6} veces</br>`);
document.write(`7 aparecio ${contador7} veces</br>`);
document.write(`8 aparecio ${contador8} veces</br>`);
document.write(`9 aparecio ${contador9} veces</br>`);
document.write(`10 aparecio ${contador10} veces</br>`);
