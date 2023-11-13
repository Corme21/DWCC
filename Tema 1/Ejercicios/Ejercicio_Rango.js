/*
Imprimir un rango de numeros
*/

let num1 = Number(prompt("Escribe un numero"));

let num2 = Number(prompt("Escribe ortro numero"));

const rango = (primero, segundo)=> {
    if(primero == segundo){
        return console.log(primero);
    }else{
        console.log(primero);
        return rango((primero+1), segundo);
    }
}

rango(num1, num2);