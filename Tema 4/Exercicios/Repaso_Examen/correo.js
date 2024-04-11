/*
Escribe un programa que solicite ó usuario introducir un correo electrónico. O programa debe
verificar se o formato do correo electrónico é válido. Se non é válido, debe lanzar un erro 
usando try e catch. No bloque catch, mostra unha mensaxe indicando que o correo electrónico 
introducido non é válido. En todo caso, debe amosar unha mensaxe indicando que se comprobou 
o correo electrónico.
*/

let cadea = prompt("Escribe un correo electronico");

let ex = /^[A-Za-z0-9.]+@[a-z0-9.]+\.[a-z]{2,4}$/i;

try {
    if(ex.test(cadea)){
        document.write("O corroe introducido e valido");
    }else{
        throw new Error;
    }
} catch (error) {
    document.write("O corroe introducido non e valido");
}finally{
    document.write("Comprobouse o correo electronico");
}