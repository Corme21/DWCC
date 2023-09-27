/*
Dado un array que se cargará con 5 elementos que se introducen
por pantalla, indicar cantas veces aparece un elemento que tamen
se pide por pantalla
*/

let array = [1, 1, 2, 3, 4];
document.write(array);

let buscar = prompt("Introduce o elemento a buscar");

let resultado = array.indexOf(buscar);

var contador = 0; 

while(resultado !== -1){
    contador++;
    resultado = array.indexOf(buscar, resultado + 1);
}

document.write(resultado);

