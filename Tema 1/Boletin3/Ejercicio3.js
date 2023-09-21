//Suma dos numeros pares existentes entre o 0 eo 100;
for(let numero = 0; numero < 100; numero++){
    if(numero % 2 == 0){
        numero += numero;
        console.log(numero);
    }
}