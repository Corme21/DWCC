/*Crea un vector de números dun tamaño introducido por teclado, éncheo con 
números aleatorios primos menores que 100 e indica cal é o maior de todos eles.
*/

let cantidad = prompt("Introduce el tamaño del vector");

var vectorRandom = [];

var contador = 0;

for(let i = 0; i < cantidad; i++){
    vectorRandom.push(Math.random() *100);
}

console.log(vectorRandom);
