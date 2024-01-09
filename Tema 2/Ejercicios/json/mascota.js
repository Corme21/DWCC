/*
Crea un obxecto mascota cos seguintes atributos:
Nome:
Direccion:
NIM:
Idade:
Convertese a json e imprimese o obxecto json 
*/

class Mascota {
    nome;
    direccion;
    NIM;
    idade;
    constructor(nome, direccion, NIM, idade){
        this.nome = nome;
        this.direccion = direccion;
        this.NIM = NIM;
        this.idade = idade;
    }
}

let nome = "Lila";
let direccion = "Calle Sol 2";
let NIM = 1221;
let idade = 4;

let miMascota = new Mascota(nome, direccion, NIM, idade);

document.write(JSON.stringify(miMascota));

