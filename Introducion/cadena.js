//Comillas y barras
document.write("El acceso a la ruta C:\\\\usuario\\ tarda 1\`23\", algo considerado \"lento\" en la actualidad");

//Resultados de numeros Binarios, Hexadecimales y Octales
var numBinrio = 0b1111;

var numHexa = 0x26a;

var numOctl = 0o111;

console .log(numBinrio);

console .log(numHexa);

console .log(numOctl);

//Numero infinito
DivisionPorCero = 23/0;

outraOp = DivisionPorCero + 12;

console.log(outraOp);

//Maximo, minimo, typeof 
var max = Number.MAX_SAFE_INTEGER;

var min = Number.MIN_SAFE_INTEGER;

console.log(max);

console.log(typeof(min));

var prueba = 7 * "5";

console.log(typeof(prueba));

//Desplazamiento
var a = 0b111;

var b = 0b010;

a ^= b;

console.log(a);

/*
let num1 = prompt("Escribe un numero:");

let num2 = prompt("Escribe otro numero:");

let num3 = prompt("Escribe otro numero:");

const num1 = 5;

const num2 = 10;

const num3 = 7;

//Comprobación
if(num1 >= num2 && num1 >= num3){
    console.log(`${num1} es mayor`);
}else if(num2 >= num1 && num2 >= num3){
    console.log(`${num2} es mayor`);
}else{
    console.log(`${num3} es mayor`);
}
*/

//Prueba de switch
/*
switch(Number(num1)){
    case 1:
        if (Number(num1) == 1){
          console.log("Recibí el numero uno");  
        }
        break;
    case 2:
        if (Number(num1) == 2){
        console.log("Recibí el numero dos");
        }
        break;
    case 3:
        if (Number(num1) == 3){
        console.log("Recibí el numero tres");
        }
        break;
    case 4:
        if (Number(num1) == 4){
        console.log("Recibí el numero cuatro");
        }
        break;
    case 5:
        if (Number(num1) == 5){
        console.log("Recibí el numero cinco");
        }
        break;
    case 6:
        if (Number(num1) == 6){
        console.log("Recibí el numero seis");
        }
        break;
    case 7:
        if (Number(num1) == 7){
        console.log("Recibí el numero siete");
        }
        break;
}
*/

//While y Do while
/*
let pases = 0;

while(pases<10){
    console.log(`Pase numero ${pases}`);
    pases++;
}

do{
    console.log(`Pase numero ${pases}`);
    pases++;
}while(pases<10)

let numero = 0;
do{
    if(numero %2 != 0)
    console.log(`Numero ${numero}`);
    numero++;
}while(numero <= 1000)
*/

/*
a) imprime a suma de dos numeros pedidos por pantalla
b) imprime el factorial do numero por pantalla
c) imprime la division dos numeros pedidos por pantalla
*/
let num1 = prompt("Escribe un numero:");

let num2 = prompt("Escribe otro numero:");

let opcion = prompt("Elije opcion: a, b, c");

switch(opcion){

    case "a":
        var suma = Number(num1) + Number(num2);
        console.log("La suma de los numeros pedidos es " + suma);
        break;
    case "b":
        var factorial = Number(num1)
        while(){
            
        }

        console.log("El factorial del primer numero es ");
        break;
    case "c":
        var division = Number(num1) / Number(num2);
        console.log("La división de los numeros pedidos es " + division);
        break;
}