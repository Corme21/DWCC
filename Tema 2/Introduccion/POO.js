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

console.log("");

//Herencia

class Miembro {
    nombre = "nombre apellido1 apellido2";
    alta = "01/01/2022";
    estado = "vigente"
    constructor(nombre, alta, estado){
        this.nombre = nombre;
        this.alta = alta;
        this.estado = estado;
    }
    cobrar(){console.log(`El Miembro ${this.nombre} ha cobrado`);}
}

class Profesor extends Miembro {
    nAlumnos = 0;
    constructor(nombre, alta, estado, nAlumnos){
        super(nombre, alta, estado);
        this.nAlumnos = nAlumnos;
    }
    cobrar(){console.log(`El Profesor ${this.nombre} ha cobrado`);}
}

class Alumno extends Miembro {
    nAsignaturas = 0;
    constructor(nombre, alta, estado, nAsignaturas){
        super(nombre, alta, estado);
        this.nAsignaturas = nAsignaturas;
    }
    cobrar(){console.log(`El Alumno ${this.nombre} ha cobrado`);}
}

let unMiembro = new Miembro("Pepe Ruíz", "12/02/2021", "finalizado");
unMiembro.cobrar();
let unProfesor = new Profesor("Samuel Orta", "25/06/2021", "finalizado", 30);
unProfesor.cobrar();
let unAlumno = new Alumno("Elena Sánchez", "06/03/2022", "finalizado", 11);
unAlumno.cobrar();

//Recorrer
// let miViaje = new Viaje("Barcelona", "Ibiza", 2, 112);
// atributos = [];

// let i = 0;

// for(elemento in miViaje){
//     atributos[i] = elemento;
// }

// valores = Object.values(miViaje);
// for(i = 0; i < atributos.length; i++){
//     document.write(atributos[i]+" : "+valores[i]);
// }

//Date
let fechaSinParametros = new Date();
let fechaTodosParametros = new Date(2022,8,17,13,59,49,0);
let fechaTresParametros = new Date(2022,8,17);
let fechaUnParametros = new Date(1000);

console.log(fechaSinParametros);
console.log(fechaTodosParametros);
console.log(fechaTresParametros);
console.log(fechaUnParametros);

//Prototipos
function Viaje(origen, destino, dias, precio){
    this.origen = origen;
    this.destino = destino;
    this.dias = dias;
    this.precio = precio;
    this.mostrar = function(){
        console.log(`${this.origen} / ${this.destino}`);
        console.log(`durante ${this.dias} dias: EUR${this.precio}`);
    };
};

let viaje1 = new Viaje("Barcelona", "Ibiza", 2, 112);
console.log(viaje1);

//---------------------------------------------------------------------

let miviaje = new Viaje("Barcelona", "Ibiza", 2, 112);
console.log(Viaje.prototype);

Viaje.prototype.costeDiario = function(){
    return this.precio / this.dias; 
};

Viaje.prototype.descuento = "20%";
console.log(Viaje.prototype);

//Expresiones regulares
let erObjeto = new RegExp('[0-9]');

console.log(erObjeto.test("a"));//False
console.log(erObjeto.test("almamia"));//False
console.log(erObjeto.test("alma66mia"));//True
console.log(erObjeto.test("987"));//True
//modificador i
let er = /a/;
console.log(er.test("pizza"));//True
console.log(er.test("TACO"));//False

let er2 = /a/i;
console.log(er2.test("pizza"));//True
console.log(er2.test("TACO"));//True

//modificador ^
let er3 = /^a/;
console.log(er3.test("pizza"));//False
console.log(er3.test("TACO"));//False
console.log(er3.test("armario"));//True

//modificador$
let er4 = /pon$/;
console.log(er4.test("ponderado"));//False
console.log(er4.test("posicion"));//False
console.log(er4.test("tapon"));//True

//Modificador .
let er5 = /ar.on/;
console.log(er5.test("arcon"));//True
console.log(er5.test("arpon"));//True
console.log(er5.test("Aaron"));//False
//Modificador []
let er6 = /aeiou/;
console.log(er6.test("SOS"));//False
console.log(er6.test("col"));//True
console.log(er6.test("Pfff!"));//False
//Modificador [^expresión]
let erObjeto2 = new RegExp('[^0-9]');

console.log(erObjeto2.test("a"));//True
console.log(erObjeto2.test("almamia"));//True
console.log(erObjeto2.test("alma66mia"));//True
console.log(erObjeto2.test("987"));//False

//Modificador de cardinalidad
let dni = /^[0-9]{8}[A-Z]{1}$/i;
console.log(dni.test("23955733Z"));//True

let cif = /^[A-Z]{1}[0-9]{7}[A-Z0-9]$/;
console.log(cif.test("G1234567K"));//True

let cp = /^[0-9]{5}$/;
console.log(cp.test("15114"));//True

