/*
Facer unha páxina que xere dous números do 0 ao 9 aleatoriamente que estarán colocados en dúas 
caixas. Terá que existir un botón para que os xere e outro para que os compare. Cando os 
compare terá que indicar se son iguais ou non, transferindo o maior dos dous a outra caixa.
*/

// let numerosRandm = Math.random(0,9);

// let caixa1 = [numerosRandm];

// let caixa2 = [numerosRandm];

console.log("1. Generar numeros aleatorios");
console.log("2. Comparar los numeros");
console.log("3. Salir");

let opcion = prompt("Elige una opcion");

bucle: while(opcion != 3){

    switch(opcion){
        case "1":
            let numerosRandm = Math.random(0,9);

            let caixa1 = [numerosRandm];
            console.log(caixa1);
        
            let caixa2 = [numerosRandm];
            console.log(caixa2);
            break bucle;
        case "2":
            if(caixa1 == caixa2){
                console.log("Los numeros son iguales");
            }else{
                if(caixa1 > caixa2){
                    console.log("El numero de la caja 1 es mayor");
                    var caixa3 = new Set([caixa1]);
                    console.log(caixa3);
                }else{
                    console.log("El numero de la caja 2 es mayor");
                    var caixa3 = new Set([caixa1]);
                    console.log(caixa3);
                }
            }
            break bucle;
        case "3":
            break;
    }
}