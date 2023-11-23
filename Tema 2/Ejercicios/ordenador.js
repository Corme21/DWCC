/*
Crea un obxecto chamado ordenador que teña os seguintes atributos:
marca, un texto
modelo, un texto
memoria RAM, un numero que indica GB d ecapacidade.
Capacidad del disco duro, un numero que indica GB de capacidades
Pulgadas de pantalla, un numero que indica as pulgadas.
Método para este obxecto:
toString, sirve para obter de forma textual todos os datos das especificacións.
Ao crearun ordenador pódense indicar todos os valores por defecto da seguinte forma:
17 pulgadas, 512 GB de disco duro, 4 GB de RAM. A marca e o modelo son necesarios.
*/

class ordenador {
    constructor(marca, modelo, ram, hhd, pantalla){
        if(ram == undefined){
            this.marca = marca;
            this.modelo = modelo;
            this.ram = 4;
            this.hhd = hhd;
            this.pantalla = pantalla;
        }
        if(hhd == undefined){
            this.marca = marca;
            this.modelo = modelo;
            this.ram = ram;
            this.hhd = 512;
            this.pantalla = pantalla;
        }
        if(pantalla == undefined){
            this.marca = marca;
            this.modelo = modelo;
            this.ram = ram;
            this.hhd = hhd;
            this.pantalla = 17;
        }
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