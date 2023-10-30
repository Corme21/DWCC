//Funcion

function calcularCuadrado(numero){
    let resultado = 0;
    resultado = numero ** 2;
    return resultado;
}

console.log(calcularCuadrado(2));

function raizCuadrada(numero){
    return(Math.sqrt(numero));
}

//console.log(raizCuadrada(4));

function calcularMayor(vector){
    let mayor = raizCuadrada(vector[0]);
    for(let i = 0; i < vector.length; i++){
        if(raizCuadrada(vector[i]) > mayor){
            mayor = raizCuadrada(vector[i]);
        }
        return mayor; 
    }   
}

console.log(calcularMayor([64, 128, 4, 1024, 16]));

/*
Crea unha funcion que comprobe se un numero é primo.
O numero pasase por parámetros.
Debe evaluarse se é primo ou non, dependendo de que devolva (true ou false) a funcion, no programa
principal .
*/

function esPrimo(numero){
    let contador = 0;

    for(let a = 0; a <= numero; a++){
        if(numero%1 == 0){
            contador++;
        }
    }

    if(numero == 1){
        contador++;
    }

    if(contador == 2){
        return true;
    }else{
        return false;
    }
}

if(esPrimo(4) == true){
    console.log("Es primo");
}else{
    console.log("No e primo");
}