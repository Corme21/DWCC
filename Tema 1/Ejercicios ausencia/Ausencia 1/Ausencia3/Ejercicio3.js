/*
Escribe un conversor de tempo. O programa debe pedirlle ao usuario 
os días, horas e minutos e calcular cantos segundos totais son.
*/

let dia = prompt("Escribe el dia");

document.write(`Dias: ${dia}</br>`);

let hora = prompt("Escribe la hora");

document.write(`Horas: ${hora}</br>`);

let minuto = prompt("Escribe los minutos");

document.write(`Minutos: ${minuto}</br>`);

var segundosD = 86400;

var segundosH = 3600;

var segundosM = 60;

let totalSecDia = dia * segundosD;

let totalSecHora = hora * segundosH;

let totalSecMinut = minuto * segundosM;

let segundosTotal = totalSecDia + totalSecHora + totalSecMinut;

document.write(`Los segundos totales son ${segundosTotal} segundos`);
