//Determina e dous numeros son iguais ou diferentes, e se son diferentes indicar cal deles é maior.
let num1 = prompt("Introduce el primer numero");

let num2 = prompt("Introduce el segundo numero");

if(num1 == num2){
    document.write("Los numeros son iguales.");
}else{
    document.write("Los numeros son diferentes.");
    if(num1 > num2){
        document.write(`</br>El primer numero es mayor.`);
    }else{
        document.write(`</br>El segundo numero es mayor.`);
    }
}