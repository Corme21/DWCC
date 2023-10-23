/*
Crea un programa que comprobe se unha contrasinal é complexa.
1. Deber ter unha lonxitude de máis de 8 caracteres.
2. Debe ter unha letra maiuscula, polo menos.
3. Debe ter un dos seguintes caracteres "-;,-:"
*/

let contrasinal = prompt("Escribe una contraseña");

let comprobadoLetra = false;
let comprobadoLongitud = false;
let comprobadoCaractr = false;

let letras = /A-Z/;


for(let i = 0; i < contrasinal.length; i++){
    if(contrasinal.length > 8){
        comprobadoLongitud = true;
    }else{
        comprobadoLongitud = false;
    }
    
    if(contrasinal[i] == letras){
        comprobadoLetra = true;
    }else{
        comprobadoLetra = false;
    }

    if(contrasinal[i] == "-" || contrasinal[i] == ";" || contrasinal[i] == "," || contrasinal[i] == "-" || contrasinal[i] == ":"){
        comprobadoCaractr = true;
    }else{
        comprobadoCaractr = false;
    }
}

if(comprobadoLetra == true && comprobadoLongitud == true && comprobadoCaractr == false){
    document.write("Tu contraseña es segura");
}else if(comprobadoLetra == false || comprobadoLongitud == false || comprobadoCaractr == false){
    document.write("Tu no contraseña es segura");
}

