//Imprime os numeros primos existentes entre o 0 e o 100
for(let numero = 0; numero <= 100; numero++){
    if(numero % numero == 0 && numero % 1 == 0){
        console.log(numero);
    }
}