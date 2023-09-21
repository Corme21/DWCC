//Dados tres numeros, indica cal é o maior
let num1 = prompt("Introduce el primer numero");

let num2 = prompt("Introduce el segundo numero");

let num3 = prompt("Introduce el tercer numero");

if(num1 > num2 && num1 > num3){
    document.write("El primer numero es mayor.");
}else if(num2 > num1 && num2 > num3){
    document.write("El segundo numero es mayor.");
}else{
    document.write("El segundo numero es mayor.");
}