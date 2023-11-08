//Crear unha función que devolva a táboa de multiplicar do número que recibe por parámetro.

let numero = Number(prompt("Escribe un numero"));

var multiplicar = 1;

function tablaMultiplicar(numero ,multiplo){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${multiplicar} = ${numero * multiplo}`);
        multiplicar++;
    }
}

tablaMultiplicar(numero, multiplicar);