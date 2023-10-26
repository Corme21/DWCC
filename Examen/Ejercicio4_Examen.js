/*
Dado un array que cargaremos con 5 nomes de persoas, xerar un mapa que almacene a
posición do array e o nome da persoa nese mapa. Imprimir o resultado do mapa
*/

//Creo el array donde almacenare las personas
let personas = [];

//Con este for, pido por pantalla hasta 5 nombres y los introduce en el array "personas"
for(let a = 0; a < 5; a++){
    let nombre = prompt("Escribe un nombre");
    personas.push(nombre);
}

//Creo el mapa donde almacenare la posicion del array y los nombres
let mapa = new Map([]);

//Recorro el array y guardo la posicion del array y los nombres en el mapa
for(let i = 0; i < personas.length; i++){
    mapa.set(i , personas[i]);
}

//Recorro el mapa e imprimo por pantalla el mapa
for(valor of mapa){
    document.write(`${valor}</br>`);
}
