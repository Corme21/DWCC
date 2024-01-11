/*
Dado o obxeto array de JS, engadirlle mediante patróns unha nova funcion chamada obterPares() 
que o que faga sexa imprimir os numeros pares que esten dentro dun obxeto do tipo array.

Exemplo:
Teño o array[1,2,3,4]
A funcion obterPares() imprime os numeros 2 e 4 por pantalla.

Para crear novas funcions sobre obxetos preferidos da linguaxe utilizandose a sintaxe 
Array.prototype.nomedafuncion = function(){corpo}
*/
let array = [1,2,3,4];
Array.prototype.obterPares = function() {
    for(let i = 1; i <= this.length; i++){
        if((this[i] % 2) == 0){
            document.write(`${this[i]} <br>`)
        }
    }
}



array.obterPares(array);

