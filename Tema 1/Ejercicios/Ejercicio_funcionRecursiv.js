/*
Escribe una funcion recursiva que dado un numero entero n, retorne un array con todos los 
numeros enteros en orden descendente desde n a 1
*/

let numero = Number(prompt("Escribe un numero"));

let final = 1;

let array = [];

const cuentAtras = (numero, final, array) =>{
    if(numero == final){
        array.push(final);
        console.log(array);
    }else{
        array.push(numero);
        return cuentAtras((numero - 1), final, array);
    }
}

cuentAtras(numero, final, array);