//Solicitar os datos dunha matriz 3x4 e amosala trasposta.

var matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

var matrizTransp = [];

for(let i = 0; i < matriz[0].length; i++){
    matrizTransp.push([]);
}

for(let i = 0; i < matriz.length; i++){
    for(let o = 0; o < matriz[i].length; o++){
        matrizTransp[o].push(matriz[i][o]);
    }
}

console.log(matrizTransp);