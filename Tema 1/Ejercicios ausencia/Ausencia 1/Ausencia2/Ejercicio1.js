/*
Crea un algoritmo que reciba como argumento unha cadea de caracteres e devolva outra cadea 
con todas as vocales e o número de veces que aparece cada unha na cadea argumento. 
Procura usar prioritariamente os métodos do obxeto string. 
Exemplo: Introduzo "Hola soy Pepe"  deberá imprimir a:1, e:2, i:0, o:2, u:0
*/

let argumento = prompt("Escribe una frase");

var contadorA = 0;
var contadorE = 0;
var contadorI = 0;
var contadorO = 0;
var contadorU = 0;

for(let i = 0; i < argumento.length; i++){

    if(argumento.indexOf("a") == "a"){
        contadorA++;
        
    }
    if(argumento.indexOf("e") == "e"){
        contadorE++;
        
    }
    if(argumento.indexOf("i") == "i"){
        contadorI++;
        
    }
    if(argumento.indexOf("o") == "o"){
        contadorO++;
       
    }
    if(argumento.indexOf("u") == "u"){
        contadorU++;
        
    }
}

document.write(`a: ${contadorA}, e: ${contadorE}, i: ${contadorI}, o: ${contadorO}, u: ${contadorU}`);
