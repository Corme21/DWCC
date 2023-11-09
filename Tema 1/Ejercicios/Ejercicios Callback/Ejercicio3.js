/*
Facer un programa que conteña unha función que contemple como válido ou non valido un salario
que pasamos por parámetro e no caso de que sexa válido farase unha tabla de incrementos para 
os vindeiros 5 anos do 1,05
O salario non vai ser superior a 1600 ao mes.
*/

let salario = Number(prompt("Introduce o teu salario"));

function salarioValido(salario){
    if(salario < 0 || salario > 1600){
        return false;
    }else{
        return true;
    }
}
;


function aumentoSalario(salarioValido, salario){
    if(salarioValido(salario) == false){
        console.log("O salario non recibe aumento");
    }else{
        let aumento = 1.05;

        for(let i = 1; i <= 5; i++){
            salario = salario * aumento; 
            console.log(`En ${i} año, el salario aumentara ${salario}`);
        }
    }
}

aumentoSalario(salarioValido, salario);
