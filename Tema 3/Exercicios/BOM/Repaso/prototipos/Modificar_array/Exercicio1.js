/* 
Eliminar duplicados: escribe unha función que tome unha matriz e devolva unha nova
matriz sen elementos duplicados.
*/

let array = [1, 2, 3, 3, 4, 5, 5];

Array.prototype.sinDuplicar= function (){
    let arrayLimpio = [];

    for(let i = 0; i < this.length; i++){
        if(this[i] != this[i - 1]){
            arrayLimpio.push(this[i]);
        }
    }

    console.log(arrayLimpio);
}

console.log(array);
array.sinDuplicar(array);