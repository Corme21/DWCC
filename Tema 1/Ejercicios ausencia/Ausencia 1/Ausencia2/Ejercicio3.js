/*
Escribe un algoritmo que oculte as vocales nun texto recibido. Cada vez que apareza unha, 
substituira esta por un espazo en branco. 
*/

let texto = prompt("Escribe un texto");

let textoCambiado = ""; 

for(let i = 0; i < texto.length; i++){

    var caracter = texto[i];
    
    if("AEIOUaeiou".indexOf(caracter) !== -1){
        textoCambiado += " ";
    }else{
        textoCambiado += caracter;
    }
    
}

document.write(textoCambiado);
