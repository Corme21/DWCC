//Crear unha función que devolva a letra do DNI do número que recibe por parámetro.

let DNI = Number(prompt("Escribe el DNI sin letra"));

let tabla = new Map([
    [0, "T"],
    [1, "R"],
    [2, "W"],
    [3, "A"],
    [4, "G"],
    [5, "M"],
    [6, "Y"],
    [7, "F"],
    [8, "P"],
    [9, "D"],
    [10, "X"],
    [11, "B"],
    [12, "N"],
    [13, "J"],
    [14, "Z"],
    [15, "S"],
    [16, "Q"],
    [17, "V"],
    [18, "H"],
    [19, "L"],
    [20, "C"],
    [21, "K"],
    [22, "E"],
]);

function letraDNI(dni, letras){
    let resto = dni % 23;

    for(let [numero, letra] of letras){
        if(resto == numero){
            console.log(`La letra de tu DNI es ${letra}`);
        }
    }
}

letraDNI(DNI, tabla);