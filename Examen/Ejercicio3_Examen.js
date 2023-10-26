/*
Dados dous conxuntos que cargues por teclado, calcular:
a) A unión. A suma dos dous conxuntos. 
b) A intersección de ambos. Os que se repiten en ambos. 
c) A resta de ambos conxuntos. Os que están no A e non está en B.
*/

//Creo dos conjuntos

let conjunto1 = new Set();

let conjunto2 = new Set();

//Creamos dos arrays para hacer luego la union
let array1 = [];

let array2 = [];

//Pido por pantalla valores para ambos conjuntos

let cantidad1  = prompt("Cantidad de valores para el primer conjunto");

let cantidad2  = prompt("Cantidad de valores para el segundo conjunto");

//Introduzco una cantidad de valores igual a la introducida en los conjuntos y en los arrays
for(let a = 0; a < cantidad1; a++){
    let valor1 = prompt("Escribe el valor para el primer conjunto")
    conjunto1.add(valor1);
    array1.push(valor1);
}

for(let o = 0; o < cantidad2; o++){
    let valor2 = prompt("Escribe el valor para el segundo conjunto")
    conjunto2.add(valor2);
    array2.push(valor2);
}

//Unimos los arrays en un solo conjunto y mostramos el resultado

var conjuntosUnidos = new Set([array1, array2]);

for(elemento of conjuntosUnidos){
    console.lo(`La union de los arrays es: ${elemento}</br>`);
}

//Realizamos a interseccion de los conjuntos e imprimimos el resultado

for(let e = 0; e < array1.length; e++){
    if(array1.length[e] == array2.length[e]){
        repetido = array1.length[e];
    }
    document.write(`Se repite en ambos arrays ${repetido}`);
}


//Realizamos la resta e imprimimos el resultado
let arrayResta = 0;

//Primero recorremos el conjunto
for(let i = 0; i < array1.length; i++){
       
}

document.write(`El resultado de la resta de los arrays es: ${arrayResta}`);
