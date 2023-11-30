/*
Constrúe un programa que valide unha páxina web co seguinte formato.
a) Debe comezar por www.
b) Debe ter un dominio de dúas ou tres letras. Ex: www.barcelona.com ou www.xardin.au
*/

//Pedimos por pantalla una pagina web
let paginaWeb = prompt("Introduce una pagina web");

//Estes son los aracteres por los que tiene que empezar la pagina
let caracter = "www.";

let dominio2 = /[a-z]{2}/;
let dominio3 = /[a-z]{3}/;

//Esta variable validara la condiciones de la pagina
let comienzoValido = true;

let dominioValido = true

//Recorremos la pagina
for(let i = 0; i < paginaWeb.length; i++){
    if(paginaWeb.startsWith(caracter)){  //Si comienza con www. , la variable "comienzoValido" sera true, si no empieza por www. sera false
        comienzoValido = true;
    }else{
        comienzoValido = false;
    }

    if(paginaWeb.endsWith(dominio2) || paginaWeb.endsWith(dominio3)){    //Si comienza con 2 o 3 letras de  , la variable "dominioValido" sera true, si no empieza por esa cantidad de letras sera false
        dominioValido = true;
    }else{
        dominioValido = false;
    }
}

if(comienzoValido == true && dominioValido == true){    //Si todas las variable son true, enviara el mensaje "la pagina es valida"
    document.write("La pagina es valida");
}else if(comienzoValido == false || dominioValido == false){    //Si una de las variables es false, enviara el mensaje "la pagina no es valida"
    document.write("La pagina no es valida");
}
