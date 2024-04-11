/*
Escribe un programa que solicite ó usuario introducir un número. Se o número introducido é
negativo, lanza un erro e captura ese erro usando try e catch. No bloque catch, mostra unha
mensaxe indicando que o número introducido é inválido. Utiliza un finally que indique que se
comprobou o número.
*/

let numero = prompt("Escribe un numero");

try {
    if(numero > 0){
        document.write("O numero e valido");
    }else{
        throw new RangeError;
    }
} catch (error) {
    document.write("O numero introducido é invalido");
}finally{
    document.write("Comprobouse o numero");
}