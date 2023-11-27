/*
Crear un obxecto pelicula que conteña os seguintes atributos:
Director, un string
Data de lanzamento, enteiro
Actores, un string
Titulo, un string
Presuposto, decimal
Permitense os seguintes costructores:
Completo, sen presuposto e sen data de lanzamento (3 tipos).
Implementar un metodo observador.
Implementar un metodo que comprobe a "idade da pelicula".
O programa principal debe permitir recoller os datos por teclado ao usuario e imprimir todos 
os datos co observador. Tamen debemos imprimir a idade da pelicula.
*/

class pelicula{
    constructor(directr, lanz, actrs, title, dinero){
        if(lanz == undefined){
            this.director = directr;
            this.dataLanz = "";
            this.actores = actrs;
            this.titulo = title;
            this.presuposto = dinero;
        }
        if(dinero == undefined){
            this.director = directr;
            this.dataLanz = lanz;
            this.actores = actrs;
            this.titulo = dinero;
            this.presuposto = "";
        }
        if(lanz != undefined && dinero != undefined){
            this.director = directr;
            this.dataLanz = lanz;
            this.actores = actrs;
            this.titulo = title;
            this.presuposto = dinero;
        }
    }

    mostrar(){
        console.log(`El director de la pelicula se llama ${this.director}`);
        console.log(`La fecha de lanzamiento de la pelicula es ${this.dataLanz}`);
        console.log(`El actor que participa en la pelicula se llama ${this.actores}`);
        console.log(`La pelicula se llama ${this.titulo}`);
        console.log(`El presupuesto de la pelicula es de ${this.presuposto}`);
    }

    edad(){
        let edad = 2023 - this.dataLanz;
        
        console.log(`La pelicula tiene ${edad} años`);
    }

}

let director = prompt("Introduce el nombre del director");

let lanzamento = prompt("Introduce el año de lanzamento");

let actores = prompt("Introduce el nombre del actor");

let nombre = prompt("Introduce el titulo de la pelicula");

let presupuesto = prompt("Introduce el presupuesto");

let miPelicula = new pelicula(director, lanzamento, actores, nombre, presupuesto);

miPelicula.mostrar();

miPelicula.edad();