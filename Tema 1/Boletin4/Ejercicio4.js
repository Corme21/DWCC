/*Escribe un programa que tome unha cadea, un carácter para buscar e un carácter 
de substitución, e substitúa todas as ocorrencias do carácter de busca polo carácter
 de substitución.
*/
var texto = prompt("Escribe un texto");

document.write(texto);

var caracter = prompt("Escribe el caracter que quieres buscar");

var contador = 0;

for(let i = 0; i < texto.length; i++){
    if(texto[i] === caracter){
        contador++;
    }
}

document.write(`</br>El caracter\"${caracter} \" aparece ${contador} veces</br>`);

var sustituto = prompt("Escribe o caracter con el que se sustituira el anterior");

for(let i = 0; i < texto.length; i++){
    if(texto[i] == caracter){
        var textoCambiado = texto.replace(caracter, sustituto);
    }
}
document.write(textoCambiado);