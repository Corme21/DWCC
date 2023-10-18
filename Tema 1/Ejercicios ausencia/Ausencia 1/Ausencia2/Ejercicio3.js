/*
Escribe un algoritmo que oculte as vocales nun texto recibido. Cada vez que apareza unha, 
substituira esta por un espazo en branco. 
*/

let texto = prompt("Escribe un texto");

let textoCambiado = ""; 

for(let i = 0; i < texto.length; i++){
    if(texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u" ||
    texto[i] == "A" || texto[i] == "E" || texto[i] == "I" || texto[i] == "O" || texto[i] == "u" ){
        textoCambiado += texto[i].replace(" ");
    }
    
}

document.write(textoCambiado);
