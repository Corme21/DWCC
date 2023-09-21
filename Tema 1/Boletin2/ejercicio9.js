//Pedir un ano e indicar que competición de seleccións masculinas de balonmán se disputa ese ano
let ano = prompt("Escribe un año");

if(Number(ano) % 4 == 0){
    document.write(`El año ${ano} se celebran los Juego Olímpicos`);
}else if(Number(ano) % 2 == 0){
    document.write(`El año ${ano} se celebran los Campeonatos de Europa de balonmano`);
}else if(Number(ano % 1 == 0)){
    document.write(`El año ${ano} se celebran los Munduales de balonmano`);
}