/*
Crea un obxecto chamado ordenador que teña os seguintes atributos:
marca, un texto
modelo, un texto
memoria RAM, un numero que indica GB de capacidade.
Capacidad del disco duro, un numero que indica GB de capacidades
Pulgadas de pantalla, un numero que indica as pulgadas.
Método para este obxecto:
toString, sirve para obter de forma textual todos os datos das especificacións.
Ao crearun ordenador pódense indicar todos os valores por defecto da seguinte forma:
17 pulgadas, 512 GB de disco duro, 4 GB de RAM. A marca e o modelo son necesarios.
*/

class ordenador {
    ram = 4;
    hhd = 512;
    pantalla = 17;
    constructor(marca, modelo, ram, hhd, pantalla){
        if(ram != undefined && hhd != undefined && pantalla != undefined){
            this.marca = marca;
            this.modelo = modelo;
            this.ram = ram;
            this.hhd = hhd;
            this.pantalla = pantalla
        }
    }

    toString(){
        console.log(`Marca del ordenador: ${this.marca}`);
        console.log(`Modelo del ordenador: ${this.modelo}`);
        console.log(`Memoria RAM: ${this.ram} GB`);
        console.log(`Capacidad del disco duro: ${this.hhd} GB`);
        console.log(`Pulgadas de la pantalla: ${this.pantalla} pulgadas`);
    }
}

let marca = prompt("Introduce la marca del ordenador");
while(marca == "" || marca == undefined){
    marca = prompt("Es necesario introducir la marca del ordenador");
}

let modelo = prompt("Introduce el modelo del oredenador");
while(modelo == "" || modelo == undefined){
    modelo = prompt("Es necesario introducir el modelo del ordenador");
}

let ram = prompt("Introduce la capacidad de la memoria RAM");

let hhd = prompt("Introduce la capacidad del disco duro");

let pantalla = prompt("Introduce las pulgadas de la pantalla");

let miOrdenador = new ordenador(marca, modelo, ram, hhd, pantalla);

miOrdenador.toString();
