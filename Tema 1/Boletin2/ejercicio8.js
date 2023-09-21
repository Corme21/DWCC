//Pedir un ano e indicar se é ou non bisesto
let ano = prompt("Escribe un año");

var bisiest = Number(ano);

if(bisiest % 4 == 0){
    document.write("El año es bisiesto");
}else{
    document.write("El año no es bisiesto");
}