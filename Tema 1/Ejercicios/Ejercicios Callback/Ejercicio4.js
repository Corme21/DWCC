/*
Facer un programa que reciba cadeas de texto nunha funcion ata que o usuario decida para de 
envialas, e que estas cadeas se pase a outra función creando un texto final
*/
let cadena1 = prompt("Escribe una cadena");

while(sigue != false){
    function guardarCadenas(cadena1, cadena2){
        let cadena2 = prompt("Escribe otra cadena");
        let continuar = prompt("Quieres escribir mas cadenas?");

        if(continuar == "si"){
            sigue = true;
        }else{
            sigue = false;
        }
    }
}

function textoFinal(){
    
}
