/*Escribe un programa que tome unha cadea como argumento e devolva o número de 
palabras desa cadea.
*/

var cadena = prompt("Escribe un texto");

document.write(cadena);

var contador = 0;

for(let i = 0; i < cadena.length; i++){
    contador++;
}

document.write(`</br>La cadena tenia ${contador} caracteres`);