/*
Comprobar que tipo de obxecto temos e imprimir os seus valores. Previamente, crear:
Un mapa con 2 libros que conteñan, Código e título.
Un array con dous obxectos persoa. Atributos: dni, nome e apelidos.
Un obxecto chamado casa: Número e poboación.
A saída por pantalla debe ser:
Obxecto tipo: Mapa
Código-Título
1-La caza.
Obxecto tipo: Array
47350553w Juan Gómez Landa
32582241x Ana María Pérez Lema
Obxecto tipo: Object
Número: 3
Pobación: A Gudiña.
*/

let libros = new Map([
    [1,"Yo"],
    [2, "Lagrimas de Shiba"]
]);

class xente{
    nombre;
    dni;
    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
    }

    observar(){
        document.write(this.nombre);
        document.write(this.dni);
    }
};

let persona = [];
for(let e = 0; e < 2; e++){
    nombre = prompt("Escribe el nombre");
    dni = prompt("Escribe el DNI");

    let gente = new xente(nombre, dni);

    persona.push(gente);
}
// ["98765432z", "Pepe Problemas"], ["12345678a", "Jose el Fumador"]


let casa = new Object();
casa.numero = 21;
casa.poblacion = "Corme";

if(libros instanceof Map){
    document.write("<strong>Objeto tipo: Mapa</strong><br>");
    document.write("Codigo - Titulo<br>");
    for(let [codigo, titulo] of libros){
        document.write(`${codigo} - ${titulo}<br>`);
    }
    document.write("<br>");
}

if(persona instanceof Array){
    document.write("<strong>Objeto tipo: Array</strong><br>");
    for(let i = 0; i < persona.length; i++){
        document.write(`${persona[i].observar()}<br>`);
    }
    document.write("<br>");
}

if(casa instanceof Object){
    casa.mostrar = function(){
        document.write("<strong>Objeto tipo: Objeto</strong><br>");
        document.write(`Numero: ${casa.numero}<br>`);
        document.write(`Población: ${casa.poblacion}<br>`);
    }

    casa.mostrar();
}
