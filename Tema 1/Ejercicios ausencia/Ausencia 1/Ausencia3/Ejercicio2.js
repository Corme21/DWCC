/*
Escribe un programa que indique se dous arrays son iguales.
*/

let array1 = [];

let array2 = [];

let cantidad1 = prompt("Introduce a cantidade de numeros a escribir en el primer array");

for(let a = 0; a < cantidad1; a++){
    let numeros = prompt("Escribe el numero");
    array1.push(numeros);
}

let cantidad2 = prompt("Introduce a cantidade de numeros a escribir en el segundo array");

for(let e = 0; e < cantidad2; e++){
    let numeros = prompt("Escribe el numero");
    array2.push(numeros);
}

document.write(`${array1}</br>`);

document.write(`${array2}</br>`);

for(let i = 0; i < array1.length; i++){
    if(array1[i] == array2[i]){
        document.write("Los arrays son iguales");
        break;
    }else{
        document.write("Los arrays no son iguales");
        break;
    }
}

