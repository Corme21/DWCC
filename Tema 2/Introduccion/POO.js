//Xestion de obxetos
let vector = [4, 2, 7, 9];

console.log(vector.length);
console.log(typeof(vector));
console.log(typeof(console));

//Intanceof
let vector2 = [4, 2, 7, 9];
console.log(vector2 instanceof Array);

let conjunto = new Set();
console.log(conjunto instanceof Map);

//Object
let notas = new Object();
notas.valores = [7, 5, 3, 2, 3, 9, 6];
notas.cantidad = notas.valores.length;
notas.media = notas.valores.reduce((a,b)=>a+b,0)/notas.cantidad;
notas.verMedia = function(){
    console.log(notas.media);
}
notas.verMedia();

/*
Crea un obxecto chamado persoa que conteña os seguintes atributos
Nome:
Apellido:
Ideda:
Ano de nacemento: 
*/

let persoa = new Object();

persoa.nombre = prompt("Escribe tu nombre");
persoa.apellidos = prompt("Escribe tus apellidos");
persoa.edad = Number(prompt("Escribe tu edad"));
persoa.dataNace =  - persoa.edad;


