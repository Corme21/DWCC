//Imprime a serie 1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5...
var final = prompt("Escribe el numero final");

var numero = 1;

for(let i = 0; i <= final; i++){
    for(o = 1; o <= i; o++){
        console.log(o);
    }
}