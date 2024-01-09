/*
Crea un obxecto que represente especies de prantas cos seguintes atributos:
Nome:
Especie:
Orixe:
Estacion de xermen:
Estacion de poda:
Unha vez en js, crea un obxecto e imprimir os atributos.
Crea un obxecto array de 3 prantas.
*/

let obxecto = new String('{"nome":"Lavanda","especie":"Flor","orixe":"non sei","Estacion_de_xermen":"primavera","Estacion_de_poda":"inverno"}');

console.log(JSON.parse(obxecto));

let planta = JSON.parse(obxecto);

document.write(planta.nome + "<br>");
document.write(planta.especie + "<br>");
document.write(planta.orixe + "<br>");
document.write(planta.Estacion_de_xermen + "<br>");
document.write(planta.Estacion_de_poda + "<br>");

let array = [];

for(let i = 0; i < 3; i++){
    array.push(array.push(planta));
}

console.log(array);