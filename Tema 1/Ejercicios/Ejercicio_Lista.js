/*
Crear unha utilizando un array.
Debe:
Insertar ao final do vector.
Insertar ao inicio do vector.
Insertar na posicións X do vector.
Debe permitir as accions anteriores mediante borrado.
*/

let array = [];


for(let i = 0; i < 6; i++){
    let relleno = prompt("Escribe numero");
    array.push(relleno);
}

document.write(`${array}</br>`);

console.log("1.Insertar ao final do vector.");
console.log("2.Insertar ao inicio do vector.");
console.log("3.Insertar na posicións X do vector.");
console.log("4.Borrar ao final do vector.");
console.log("5.Borrar ao inicio do vector.");
console.log("6.Borrar na posicións X do vector.");
console.log("7.Salir");

let opcion = prompt("Elige una opcion");

let caracter = 0;

let posicion = 0;

let borrarCaract = 0;

do {

    switch(opcion){
        case "1":
            caracter = prompt("Escribe el caracter a introducir");
            
            array.unshift(caracter);

            break;
        case "2":
            caracter = prompt("Escribe el caracter a introducir");

            array.push(caracter);

            break;
        case "3":
            caracter = prompt("Escribe el caracter a introducir");

            posicion = prompt("Introduce o numero da posición");



            break;
        case "4":
            borrarCaract = prompt("Escribe el caracter a introducir");

            array.shift(caracter);

            break;
        case "5":
            borrarCaract = prompt("Escribe el caracter a introducir");

            array.pop(caracter);

            break;
        case "6":
            borrarCaract = prompt("Escribe el caracter a introducir");

            posicion = prompt("Introduce o numero da posición");

            break;
    }
}while(opcion !== 7)


