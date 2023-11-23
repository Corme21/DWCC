/*
Crear un obxecto prototipo para barcos que conteña os seguintes atributos:
Motor.
Porto actual.
Seguinte destino.
Carga.
Carga maxima.
O barco pode ser cargado cun valor especifico de carga.
Podemos zarpar a un porto, dende un porto de orixen.
Debemos implementar un método observador para saber a carga, o porto de destino e o motor.
O barco non pode ser sobrecargado, debe comprobarse.
*/

class barco {
    constructor(motor, porto, destino, carga, cargaMax){
        if(motor == undefined){
            this.motor = "";
            this.porto = porto;
            this.destino = destino;
            this.carga = carga;
            this.cargaMax = cargaMax;
        }
        if(porto == undefined){
            this.motor = motor;
            this.porto = "";
            this.destino = destino;
            this.carga = carga;
            this.cargaMax = cargaMax;
        }
        if(destino == undefined){
            this.motor = motor;
            this.porto = porto;
            this.destino = "";
            this.carga = carga;
            this.cargaMax = cargaMax;
        }
        if(carga == undefined){
            this.motor = motor;
            this.porto = porto;
            this.destino = destino;
            this.carga = "";
            this.cargaMax = cargaMax;
        }
        if(cargaMax == undefined){
            this.motor = motor;
            this.porto = porto;
            this.destino = destino;
            this.carga = carga;
            this.cargaMax = "";
        }
        if(motor != undefined && porto != undefined && destino != undefined && 
            carga != undefined && cargaMax != undefined){
                this.motor = motor;
                this.porto = porto;
                this.destino = destino;
                this.carga = carga;
                this.cargaMax = cargaMax;
        }
    }

    cargar(carga){
        if(this.carga == 0 || this.carga == ""){
            console.log("No tiene ninguna carga");
        }else if(this.carga > this.cargaMax){
            this.carga = carga + this.cargaMax;
            console.log("Se a cargado hasta la cantidad maxima.");
        }else{
            console.log("La carga ya esta en el barco.");
        }
    }

    zarpar(){
        if(this.porto == "" || this.destino == ""){
            console.log("No puedes zarpar, necesitas un origen y un destino");
        }else{
            console.log("Ruta establecida, puede zarpar");
        }
    }

    mostrar(){
        console.log(" ");
        console.log(`Motor: ${this.motor}`);
        console.log(`Puerto de destino: ${this.destino}`);
        console.log(`Carga: ${this.carga}`);
    }
}

let motor = prompt("Introduzca el tipo de motor.");

let puerto = prompt("Introduzca el puerto de origen.");

let destino = prompt("Introduzca el puerto de destino.");

let carga = prompt("Introduzca la carga.");

let maximo = prompt("Introduzca la carga maxima.");

let miBarco = new barco(motor, puerto, destino, carga, maximo);

miBarco.cargar();

miBarco.zarpar();

miBarco.mostrar();
