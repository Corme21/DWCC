//Escribe un programa que conte cantas veces aparece un carácter específico nunha cadea.

var cadena = prompt("Escribe un texto");

document.write(cadena);

var caracter = prompt("Escribe el caracter que quieres buscar");

var contador = 0;

for(let i = 0; i < cadena.length; i++){
    if(cadena[i] === caracter){
        contador++;
    }
}

document.write(`</br>El caracter \"${caracter}\" aparece ${contador} veces`);
