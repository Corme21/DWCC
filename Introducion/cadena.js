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
/*
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
*/

let texto3 = "Oso";

let texto4 = "Ñu";

console.log(texto3.localeCompare(texto4,"es"));

let texto = "casa";

console.log(texto.length)

console.log(texto3.toUpperCase());

let texto1 = "dime onde está o texto";

document.write(texto1.lastIndexOf("a"));

var texto5 = "Esta é unha estructura estatica";

console.log(texto5.slice(3,10));

/*
Pedir texto
texto a buscar
resultado de numero de veces salga
*/

/*
let texto6 = prompt("Introduce un texto:");

let caracter = prompt("Introduce un caracter:");

var conta = 0;

var posicion = texto6.indexOf(caracter);

while(posicion!=-1){
    conta++;
    console.log(conta);
    posicion = texto6.indexOf(caracter, posicion+1);
}
*/

//Array estatico
var arrayPrueba = [
    ["Manzana", 2],
    ["Naranja",4],
    ["Pera", 6]
];

document.write(`<table border="1" id="tab">
    <tr>
        <th>Fruta</th>
        <th>Precio</th>
    <tr>
    <tr>
        <td>${arrayPrueba[0][0]}</td>
        <td>${arrayPrueba[0][1]}</td>
    </tr>
    <tr>
        <td>${arrayPrueba[1][0]}</td>
        <td>${arrayPrueba[1][1]}</td>
    </tr>
    <tr>
        <td>${arrayPrueba[2][0]}</td>
        <td>${arrayPrueba[2][1]}</td>
    </tr>
</table>
`);

/*
nueva_fruta = prompt("Introduce la nueva fruta: ");
nuevo_precio = prompt(`Introduce el precio de ${nueva_fruta}: `);

arrayPrueba.push({nueva_fruta, nuevo_precio});

for(let i = 0; i < arrayPrueba.length; i++){
    for(var j = 0; j <= arrayPrueba[i].length; i++){
        document.write(<tr>);
    }
}
*/

let idades = Array(18, 21, 34, 12, 92);

for(let p = 0; p < idades.length; p++){
    document.write(`${idades[p]}</br>`);
}

document.write("------------------------------");

let precios = Array(69.99, 12.49, 35.20, 99.90);

for(let t = 0; t < precios.length; t++){
    console.log(`El precio ${t} es ${precios[t]}`);
}
/*
for(let t in precios){
    console.log(`El precio ${t} es ${precios[t]}`);
}

for(let precio of precios){
    console.log(precio);
}
*/

var empleados = [
    ["Jesus", "Allo"],
    ["Ana", "Castro"],
    ["Adrian", "Mendez"]
];

for(let j = 0; j < empleados.length; j++){
    for(k = 0; k < empleados[j].length; k++){
        console.log(`Empleado: ${empleados[j]} Apellidos: ${empleados[k]}`);
    }
}

