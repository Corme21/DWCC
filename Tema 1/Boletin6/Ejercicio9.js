/*
Recoller unha frase mediante un formulario e sacar despois unha estatística por pantalla onde 
se indique, por separado, cantas letras, números e outro tipo de caracteres hai na frase 
introducida.
*/

let cadena = prompt("Escribe algo");

var contadorLetrs = 0;

var contadorNumrs = 0;

var contadorCaract = 0;

for(let i = 0; i < cadena.length; i++){

    contadorLetrs++;
}

for(let a = 0; a < cadena.length; a++){
    
    contadorNumrs++;
}

for(let e = 0; e < cadena.length; e++){
    
    contadorCaract++;
}

console.log(`En la frase hay ${contadorLetrs} letras`);

console.log(`En la frase hay ${contadorNumrs} numeros`);

console.log(`En la frase hay ${contadorCaract} caracteres especiales`);

