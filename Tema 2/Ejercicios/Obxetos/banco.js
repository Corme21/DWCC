/*
Crear un obxeto chamado conta bancaria que conteña os atributos: propietario e saldo.
Metodos: sacar diñeiro, ingresar diñeiro.
Debe comprobarse que hai diñeiro suficiente para sacar cando se faga a retirada.
*/

class Banco{
    constructor(propiet, saldo){
        if(propiet == undefined){
            this.propiet = "";
            this.saldo = saldo;
        }
        if(saldo == undefined){
            this.propiet = propiet;
            this.saldo = "";
        }
        if(propiet != undefined && saldo != undefined){
           this.propiet = propiet;
            this.saldo = saldo; 
        }
    }

    sacarDinerio(){
        let cantidad = Number(prompt("Escribe la cantidad a sacar"));

        if(cantidad < this.saldo){
            this.saldo = this.saldo - cantidad;

            console.log("Operacion realizada");
            console.log(`La cuenta de ${this.propiet} le queda ${this.saldo}`);
        }else{
            console.log("Operacion no realizada");
            console.log("Estas pobre");
        }
    }

    ingresarDinero(){
        let cantidad = Number(prompt("Introduce la cantidad a ingresar"));
        if(cantidad > 0){
            this.saldo = this.saldo + cantidad;

            console.log("Operación realizada");
            console.log(`La cuenta de ${this.propiet} tiene ${this.saldo}`);
        }else{
            console.log("Operacion no realizada");
            console.log("Necesitas dinero");
        }
        
    }

    ver(){
        console.log(`Propietario: ${this.propiet}`);
        console.log(`Saldo: ${this.saldo}`);
    }


}

let propietario = prompt("Nombre del propietario");

let salario = prompt("Cantidad del salario");

let miBanco = new Banco(propietario, salario);

miBanco.sacarDinerio();

//miBanco.ingresarDinero();

miBanco.ver();