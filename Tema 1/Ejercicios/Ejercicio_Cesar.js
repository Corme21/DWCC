/*
Dada unha cadena cifrala con algoritmo César.
Teremos que pedir a clave de desplazamento dos caracteres e
substituír todos os caracteres polos desplazadas.
Exemplo: Ana
Clave: 1
Desplázase unha posicion os caracteres, o resultado sería:
BmB
*/

let cadena = prompt("Escribe una frase");

document.write(`${cadena}</br>`);

var cadenaCambiada= "";

for(let i = 0; i < cadena.length; i++){
    var caracter = cadena.charCodeAt(cadena.charAt(i))+1;
    cadenaCambiada += String.fromCharCode(caracter);
    
}

document.write(cadenaCambiada);