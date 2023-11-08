//Crear unha función que determine se un ano pasado por parámetro é bisesto.

let ano = Number(prompt("Escribe un ano"));

function anoBisiesto(año){
    if(año % 4 == 0 && año % 400 && año % 100 != 0){
        console.log("Es bisiesto");
    }else{
        console.log("No es bisiesto");
    }
}

anoBisiesto(ano);
