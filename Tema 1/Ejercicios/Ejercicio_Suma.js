/*
Suma de numeros desde 0 hasta N (numero que se pide por pantalla). Usando recursividad.
*/

let cero = 0;

let numero = Number(prompt("Escribe un numero"));

const suma = (cero, numero) =>{
    if(cero == numero){
        return console.log(numero);
    }else{
        console.log(cero);
        cero = cero + cero;
        return suma((cero +1), numero);
    }
}

suma(cero, numero);