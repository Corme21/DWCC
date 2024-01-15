/*
Utilizando o obxeto DATE solicita a data de nacemento por teclado e calcula o numero de dias
que pasaron dende a data de nacemento solicitada a actual. 
*/

let ano = prompt("Ano do nacemento");
let mes = prompt("Mes do nacemento");
let dia = prompt("Dia do nacemento");

let fechaNace = new Date(ano, mes, dia);

console.log(fechaNace);

let anoNace = fechaNace.getFullYear();
let mesNace = fechaNace.getMonth();
let diaNace = fechaNace.getDate();

let Actual = Date.now();

let fechaActual = new Date(Actual);

console.log(fechaActual);

let anoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth();
let diaActual = fechaActual.getDate();

// let tiempo = fechaActual - fechaNace;

// document.write(tiempo);