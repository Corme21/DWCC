//Lee unha matriz de 5x6, e imprime a suma total da matriz.

var matriz = [
    [2,5,4,7,8,6],
    [9,10,58,75,31,4],
    [8,2,4,6,7,1],
    [64,12,32,48,50,37],
    [1,2,3,4,5,6]
];

var suma = 0;

for(let i = 0; i < 5; i++){
    for(let c = 0; c < 6; c++){
        suma += matriz[i][c];
    }
}

console.log(suma);