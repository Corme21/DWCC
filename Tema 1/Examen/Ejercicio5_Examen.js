/*
Crea un mapa con cidades e distancias a esas cidades dende o punto de orixe recibido.
Imprime a distancia máis lonxana, a distancia máis preto do punto de orixe a distancia media
a calquera punto.
*/

//Pedimos por pantalla un lugar
let lugar = prompt("Introduce una ubicación");

//Creo un mapa con ciudades y distancias
let mapa = new Map([
    ["A Coruña", 120],
    ["Murcia", 150],
    ["La Rioja", 60],
    ["Leon", 90],
    ["Cordoba", 50]
]);

let lejos = 0;

let cerca = 0;

for(let distancia of mapa.values()){
    if(distancia > lejos){
    lejos = distancia;
    }

    if(distancia > 0 && distancia < cerca){
        cerca = distancia;
    }
}



document.write(`La distancia mas lejana es de ${lejos} km</br>`);

document.write(`La distancia mas cercana es de ${cerca} km</br>`);

