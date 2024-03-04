/* 
Eliminar duplicados: escribe unha función que tome unha matriz e devolva unha nova
matriz sen elementos duplicados.
*/

let numeros = [1, 2, 3, 4, 5, 5, 3];

Array.prototype.sinDuplicar= function (){
    let arrayLimpio = [];

    for(let i = 0; i < this.length; i++){
        var duplicado = false;

        for(let a = 0; a < i; a++){
            if(this[i] == this[a]){
                duplicado = true;
                break;
            }
        }
        
        if(!duplicado){
            arrayLimpio.push(this[i]); 
        }
    }

    console.log(arrayLimpio);
}

console.log(numeros);
numeros.sinDuplicar();