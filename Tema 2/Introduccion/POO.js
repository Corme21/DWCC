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
Metodo para ver a informacion
------------------------------------------------------------------

let persoa = new Object();

persoa.nombre = prompt("Escribe tu nombre");
persoa.apellidos = prompt("Escribe tus apellidos");
persoa.edad = Number(prompt("Escribe tu edad"));
persoa.dataNace = 2023 - persoa.edad;

persoa.verInfo = function(){
    console.log(`Nombre: ${persoa.nombre}`);
    console.log(`Apellidos: ${persoa.apellidos}`);
    console.log(`Edad: ${persoa.edad}`);
    console.log(`Fecha de nacimiento: ${persoa.dataNace}`);
}

persoa.verInfo();
*/

//Object con notación JSON
let viaje={
    origen:"Granada",
    destino:"El Cairo",
    dias:8,
    precio:750,
    mostrar:function(){
        console.log(`${viaje.origen} / ${viaje.destino}`);
        console.log(`durante ${viaje.dias} días: ${viaje.precio} €`);
    }
    /* Obxecto this
    mostrar:function(){
        console.log(`${this.origen} / ${this.destino}`);
        console.log(`durante ${this.dias} días: ${this.precio} €`);
    }
    */
}

viaje.mostrar();

//Constructores
class Viaje2{
    origen = "Granada";
    destino = "El Cairo";
    dias = 8;
    precio = 750;
    constructor(or, des, di, pre){
        this.origen = or;
        this.destino = des;
        this.dias = di;
        this.precio = pre;
    }
    mostrar(){
        console.log(`${viaje.origen} / ${viaje.destino}`);
        console.log(`durante ${viaje.dias} días: ${viaje.precio} €`);
    }
}

let miViaje = new Viaje2("Barcelona", "Ibiza", 2, 112);
miViaje.mostrar();

