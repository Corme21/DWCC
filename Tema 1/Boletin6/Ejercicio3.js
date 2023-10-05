/*
Saber se un alumno está aprobado ou suspenso na materia, tendo en conta que para aprobar 
debe ter unha nota maior ou igual a 4 nos exames parciais teóricos e prácticos, 
sempre e cando a nota media dos exames sexa superior ou igual a 5.
*/

let materia = prompt("Introduce el nombre de la materia");

let practico = prompt("Introduce la nota del examen practico");

let teorico = prompt("Introduce la nota del examen teorico");

if(practico >= 4){
    console.log("El examen practico esta aprobado");
}else{
    console.log("El examen practico esta suspenso");
}

if(teorico >= 4){
    console.log("El examen teorico esta aprobado");
}else{
    console.log("El examen teorico esta suspenso");
}

let notaMedia = (Number(practico) + Number(teorico)) / 2;

if(notaMedia >= 5){
    console.log(`La materia de ${materia} esta aprobada`);
}else{
    console.log(`La materia de ${materia} esta suspensa`);
}
