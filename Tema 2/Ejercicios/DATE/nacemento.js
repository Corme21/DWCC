/*
Utilizando o obxeto DATE solicita a data de nacemento por teclado e calcula o numero de dias
que pasaron dende a data de nacemento solicitada a actual. 
*/

let anoNace = prompt("Ano do nacemento");
let mesNace = prompt("Mes do nacemento");
let diaNace = prompt("Dia do nacemento");

let fechaNace = new Date(anoNace, mesNace, diaNace);

let anoActual = getFullYear();
let mesActual = getMonth();
let diaActual = getDay();

let fechaActual = new Date(anoActual, mesActual, diaActual);

