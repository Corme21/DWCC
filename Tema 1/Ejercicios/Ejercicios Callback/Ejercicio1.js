/*
Facer un programa que valide cunha funcion o estado de desenvolvemento dunha persona, segundo 
a sua idade:
    0-3 bebé
    3-11 neno
    12-18 adolescente
    19-99 adulto
Este programa debe chamar por parametro a unha funcion que, á sua vez, reciba unha funcion 
que valide a idade correcta, numero de 0-120
*/

let idade = Number(prompt("Escribe a idade"));

correcto = true;

function edadCorrecta(edad, valido){
    if(edad < 0 || edad > 120){
        valido = false;
    }else{
        valido = true;
    }
}

function estadoPersona(edadCorrecta, edad){
    if(edadCorrecta == false){
        console.log("Edad mal introducida");
    }else{
        if(edad == 0 || edad <= 3){
            console.log("La persona es un bebe");
        }else if(edad > 3 && edad <= 11){
            console.log("La persona es un niño/a");
        }else if(edad >= 12 && edad <= 18){
            console.log("La persona es un adolescente");
        }else if(edad >= 19 && edad <= 99){
            console.log("La persona es un adulto/a");
        }
    }
}

estadoPersona(edadCorrecta(idade, correcto), idade);