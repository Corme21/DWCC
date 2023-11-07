/*
Comprobar si un string é un anagrama
*/

let cadena = prompt("Escribe una palabra");


function palindroma(string){
    let frase = string;
    let palindroma = false;
    for(let i = frase.length -1; i >= 0; i--){
        fraseRevs += frase[i];
    }
    
    if(frase == fraseRevs){
        palindroma = true;
    }else{
        palindroma = false;
    }
}

if(palindroma(cadena) == false){
    console.log("No es palindroma");
}else{
    function contarLetras(){
        let contador = 0;

    }
}
