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

let persona = [["98765432z", "Pepe Problemas"], ["12345678a", "Jose el Fumador"]];

let casa = new Object();
casa.numero = 21;
casa.poblacion = "Corme";

if(libros instanceof Map){
    console.log("Objeto tipo: Mapa");
    for(let [codigo, titulo] of libros){
        console.log(`${codigo} - ${titulo}`);
    }
    console.log("");
}

if(persona instanceof Array){
    console.log("Objeto tipo: Array");
    for(let i = 0; i < persona.length; i++){
        for(let a = 0; a < persona[i].length; a++){
            console.log(persona[i][a]);
        }
    }
    console.log("");
}

if(casa instanceof Object){
    casa.mostrar = function(){
        console.log("Objeto tipo: Objeto");
        console.log(`Numero: ${casa.numero}`);
        console.log(`Población: ${casa.poblacion}`);
    }

    casa.mostrar();
}
