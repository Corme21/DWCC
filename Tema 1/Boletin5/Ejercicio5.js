//Dados 10 números, introducilos nun vector e amosar a media e a suma.

var serie = [1,2,3,4,5,6,7,8,9,21];

var media = 0;

var suma = 0;

for(let i = 0; i < serie.length; i++){
    media = serie[i] /2; 
}

for(let s = 0; s < serie.length; s++){
    suma += serie[s]; 
}

console.log(media);
console.log(suma);