//Imprime a serie 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5...


for(let i = 1; i <= numero; i++){
    numero = numero * i;
    console.log(numero);
    if(i == 5)
        break;
}