/*
Utilizando una función callback concatena dous textos e amosa o resultado eliminando espazos en
branco e todo o texto resultante e convertendo o mesmo a minúsculas. 

RÚBRICA:
Implementa a función callback 1pto.
Fai a chamada de forma correcta dende o programa principal e utiliza unha terceira función
para imprimir o resultado, utilizada pola función callback. 1Pto.
*/

//Pedimos al usuario que escribe dos frases
let frase1 = prompt("Escribe un texto");

let frase2 = prompt("Escribe otro texto");

//Creamos unha funcion para concatenar os textos e pasar o resultado a minuscula
function concatenar(texto1, texto2){
    let fraseComplet = texto1 + texto2;

    return fraseComplet.toLowerCase();
}


//Creamos unha funcion para chamar a funcion anterior e quitarlle os espazos en branco o texto
function espacios(callback){
    return callback.trim(); 
}

//Creamos unha terceira funcion para imprimir o resultado
function resultado(callback2){
    document.write(callback2);
}
//Imprimimos o resultado
resultado(espacios(concatenar(frase1, frase2)));
