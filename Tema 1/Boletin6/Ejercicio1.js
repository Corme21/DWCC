/*
Calcula se gañaches a porra dos partidos da Champions League, sabendo que as apostas eran sobre 
cinco partidos e só se podía apostar 1, X ou 2 en cada partido.
*/

let partidos = new Map([
    ["Sevilla - Celta", 1],
    ["Valencia - CastLeon", 2],
    ["Barca - Madrid", "X"],
    ["Betis - PSJ", 1],
    ["Deportivo - Murcia", 2]
]);

console.log("Sevilla - Celta");
console.log("Valencia - CastLeon");
console.log("Barca - Madrid");
console.log("Betis - PSJ");
console.log("Deportivo - Murcia");


let apuesta1 = prompt("Introduce tu apuesta para el Sevilla - Celta");

let apuesta2 = prompt("Introduce tu apuesta para el Valencia - CastLeon");

let apuesta3 = prompt("Introduce tu apuesta para el Barca - Madrid");

let apuesta4 = prompt("Introduce tu apuesta para el Betis - PSJ");

let apuesta5 = prompt("Introduce tu apuesta para el Deportivo - Murcia");



// if(Number(apuesta1) == partidos.get(1)){
//     console.log("Has ganado");
// }else{
//     console.log("Has perdido.");
// }

