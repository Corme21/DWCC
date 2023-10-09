/*
Solicitar unha cadena por teclado e convertir a cadena en outra onde as vocales pasen a ter
letra "x"
*/

let cadena = prompt("Escribe una frase");

document.write(`${cadena}</br>`);

for(let i = 0; i < cadena.length; i++){
    var caracter = cadena.charAt(i);
    if(cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "o" || cadena[i] == "u"){
        var cadenaCambiada += "x";
    }
}

document.write(cadenaCambiada);
