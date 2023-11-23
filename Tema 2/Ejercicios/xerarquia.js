/*
Deseñar unha xerarquia de clases que permita modelar os obxectos telefono fixo e telefono movil
de maneira que Telefono sexa clase nai e telefono Fixo e Movil as clases derivadas.
Recoñecer atributos necesarios para todas as clases.
Deseñar un metodo para contrastar o polimorfismo.
*/

class Telefono {
    numero = 0;
    constructor(numero){
        this.numero = numero;
    }

    mostrar(){console.log(`El numero de tu telefono es ${this.numero}`);}
}

class Fijo extends Telefono{
    marca = "";
    prefijo = "";
    inalambrico = "";
    constructor(numero, marca, prefijo, inalambrico){
        super(numero);
        this.marca = marca;
        this.prefijo = prefijo;
        this.inalambrico = inalambrico;
    }

    mostrar(){
        if(this.inalambrico == "si"){
            console.log(`El numero de tu telefono fijo inalambrico ${this.marca} es ${this.numero} con prefijo ${this.prefijo}`);
        }else if(this.inalambrico == "no"){
            console.log(`El numero de tu telefono fijo ${this.marca} es ${this.numero} con prefijo ${this.prefijo}`);
        }
    }
}

class Movil extends Telefono{
    marca = "";
    memoria = 0;
    constructor(numero, marca, memoria){
        super(numero);
        this.marca = marca;
        this.memoria = memoria;
    }

    mostrar(){
        console.log(`El numero de tu telefono movil ${this.marca} es ${this.numero} y tiene una memoria de ${this.memoria}`);
    }
}

let arrayFijo = [];

let arrayMobil = [];

//Telefono
let unTelefono = new Telefono(654987321);
unTelefono.mostrar();

//Fijo
// for(let i = 0; i < 1; i++){
// numero = prompt("Escribe tu numero");
// marca = prompt("Marca del telefono");
// prefijo = 
// }

let unFijo = new Fijo(654321, "Misterioso", 981, "si");
unFijo.mostrar();

//Movil
let unMovil = new Movil(654987321, "Cualquiera", 8);
// for(elemento in Object.getOwnPropertyDescriptors(unMovil)){
//     arrayMobil.push(elemento);
// }
unMovil.mostrar();

console.log("");

for(let valor of arrayFijo){
    console.log(valor);
}

console.log("");

for(elemento of arrayMobil){
    console.log(elemento);
}