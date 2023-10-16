/*
Comproba si duas palabras forman parte do anagrama.
Estanco
Acentos
Son anagramas porque se xeraron coas mesmas palabras
*/

let palabra = prompt("Escribe una palabra");

let palabra2 = prompt("Escribe otra palabra");

for(let i = 0; i < palabra.length; i++){
    if(palabra.indexOf(i) == palabra2.indexOf(i) ){
        console.log("Las palabras son anagramas");
    }else{
        console.log("Las palabras no son anagramas");
    }
}
