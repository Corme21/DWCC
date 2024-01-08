/*
Crea un prototipo para almacenar informacion sobre traballos realizados por unha empresa de 
fontaneria
Inicialmente:
Descripcion do traballo
Nº de horas
Precio das horas
IVA
Funcion que calcule o precio final do traballo realizado
Crear un traballo con valores solicitados por pantalla
Imprimir datos completos do traballo co precio final
Engadir un novo atributo para engadir a data de pago
Imprimir o novo resultado
*/

function Informacion(descrip, numHoras, precioHoras, IVA){
    this.descrip = descrip;
    this.numHoras = numHoras;
    this.precioHoras = precioHoras;
    this.IVA = IVA;

    //Mostramos la informacion
    this.mostrar = function(){
        console.log(`El trabajo es ${this.descrip}`);
        console.log(`Trabajo ${this.numHoras} horas`);
        console.log(`Cobra ${precioHoras} por hora`);
        console.log(`El IVA es del ${IVA}%`);
    };

    //Calculamos el precio total de las horas
    this.calcular = function(){
        let total = (this.numHoras * this.precioHoras) * this.IVA / 100;
        console.log(`O prezo final e ${total}€`);
    };
};

//Se pide por pantalla los valores
let descripcion = prompt("Cual es su trabajo");

let horas = prompt("Cuantas horas trabaja");

let precio = prompt("Cuanto cobra por horas");

let iva = prompt("Cuanto es el IVA");

//Mostramos toda la informacion
let miIformacion = new Informacion(descripcion, horas, precio, iva);
miIformacion.mostrar();
miIformacion.calcular();

//Creamos un prototipo para introducir la fecha de pago
Informacion.prototype.dataPago = new Date(2024, 2, 21, 18, 30);

//Creamos una funcion para que escriba la fecha
Informacion.prototype.verData = function(){
    console.log(`La fecha de pago es el ${this.dataPago}`);
}

//Mostramos la fecha de pago
miIformacion.verData();

