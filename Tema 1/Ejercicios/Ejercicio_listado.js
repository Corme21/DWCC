/*
Listado de numeros con recursividad
*/

let numero = Number(prompt("Escribe un numero"));

const listado = (numero) =>{
    if(numero == 0){
        return console.log(0);
    }else{
        console.log(numero);
        return listado(numero - 1);
    }
};

listado(numero);