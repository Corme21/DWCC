/*
Crear un array de obxectos que conteña poboacións e códigos postais. Percorrer as propiedades
de cada un dos obxectos cargados previamente por pantalla.

Pídese:
Definir o obxecto e array.
Cargar os datos.
Imprimir as propiedades usando un for, sin observadores. 
*/

class mundo{
    poblacion;
    CP;

    constructor(poblacion, CP){
        this.poblacion = poblacion;
        this.CP = CP;
    }

}
let lugar = [];
let nombre = "";
let CP = "";

for(let a = 0; a <2 ; a++){
    poblacion = prompt("Escribe el nombre de la poblacion");
    CP = prompt("Introduce el codigo postal");

    let pueblos = new mundo(poblacion, CP);

    lugar.push(pueblos);
}

let array = [];
let e = 0;

for(let o = 0; o < lugar.length; o++){
    e = 0;
    for(elemento in lugar[o]){
        array[e] = elemento;
        e++;
    }
}

let i = 0;
let u = 0;
let valores = [];

valores = Object.values(lugar[i]);
for(u = 0; u < array.length; u++){
    document.write(array[u]+" : "+valores[u]+" <br>");
}