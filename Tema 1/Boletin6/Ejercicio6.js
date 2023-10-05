/*
Indicar que tipo de triángulo é (equilátero, isósceles, escaleno ou non é un triángulo) 
a partir das medidas dos lados introducidas por teclado.
*/
let base = prompt("Introduce la medida de la base");

let lado1 = prompt("Introduce la medida de un lado");

let lado2 = prompt("Introduce la medida del otro lado");

let lado3 = prompt("Introduce la medida extra");

if(base == lado1 && base == lado2 && lado3 == 0){
    console.log("Es un triángulo equilátero");
} else if(lado1 == lado2 && lado1 != base && lado2 != base && lado3 == 0){
    console.log("Es un triángulo isósceles");
} else if(base !== lado1 !== lado2 && lado3 == 0){
    console.log("Es un triángulo escaleno");
} else if(lado3 >= 1){
    console.log("No es un triángulo");
}
