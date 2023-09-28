/*Escribir un programa para ler 10 números por teclado e indicar cantos son maiores 
que a media.
*/

let primer = prompt("Escribe el primer numero");
let segund = prompt("Escribe el segundo numero");
let tercer = prompt("Escribe el tercer numero");
let cuart = prompt("Escribe el cuarto numero");
let quint = prompt("Escribe el quinto numero");

var elementos = [Number.primer, Number.segund, Number.tercer, Number.cuart, Number.quint];

var media = 0;

for(let i = 0; i < elementos.length; i++){
    media += elementos[i];
}
media = elementos.length;

contador = 0;

if(elementos[i] > media){
    contador++;
}
document.write(`${contador} son mayores a la media`);
console.log(media);