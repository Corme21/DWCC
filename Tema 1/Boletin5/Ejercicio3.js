/*Lee un vector numérico de dimensión 10 e determina cantos elementos son positivos, 
negativos e ceros, imprimindo por pantalla cada un deles, para finalmente imprimir os contadores por pantalla.
*/

var vector = [2,-8,9,0,-12,21,0,8,31,-15];

var contadorPosit = 0;

var contadorNegat = 0;

var contadorCero = 0; 

for(let i = 0;i < vector.length; i++){
    if(vector[i] > 0){
        contadorPosit ++;
    } else if(vector[i] < 0){
        contadorNegat ++;
    } else if(vector[i] == 0){
        contadorCero ++;
    }
}

document.write(`Hay ${contadorPosit} numeros positivos</br>`);

document.write(`Hay ${contadorNegat} numeros negativos</br>`);

document.write(`Hay ${contadorCero} ceros`);