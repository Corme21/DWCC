/*
Crea unha funcion que valide unha paxina web http ou https://www.laxe.org pasado por pantalla,
a pase por parametro a esta funcion e envie unha mensaxe de que a direccion e correcta ou non.
*/

let pagina = prompt("Escriba la pagina web");

document.write(`${pagina} <br>`)

let erPagina = /^https?+\:+\/\/+w{3}+\.+[A-Za-z]+\.+[a-z]{2,4}$/;

function validar(pagina, expresion){
    if(expresion.test(pagina)){
        return true;
    }else{
        return false;
    }
}

if(validar(pagina, erPagina) == true){
    document.write("La direccion es correcta");
}else{
    document.write("La direccion no es correcta");
}

