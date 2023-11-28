/*
Escribe unha función chamada addArray que tome unha matriz de numeros como primeiro argumento
e unha funcion de devolucion de chamada como segundo argumento. A funcion de devolucion de 
chamada empregarase para realizar unha operación en cada elemento da matriz e devolver a suma
total.
Por exemplo: function sumarArray(arr, callback)
*/


let array = [1, 2, 3, 4, 5];
var suma = 0;

const sumarArray = function(){
    
    for(let i = 0; i < array.lenght; i++){
        suma += array[i];
    }
    return suma;
};

function addArray(argumento1, callback){
    console.log(callback() + argumento1);
}

addArray(array, sumarArray);
