//Funcion

function calcularCuadrado(numero){
    let resultado = 0;
    resultado = numero ** 2;
    return resultado;
}

console.log(calcularCuadrado(2));

function raizCuadrada(numero){
    return(Math.sqrt(numero));
}

//console.log(raizCuadrada(4));

function calcularMayor(vector){
    let mayor = raizCuadrada(vector[0]);
    for(let i = 0; i < vector.length; i++){
        if(raizCuadrada(vector[i]) > mayor){
            mayor = raizCuadrada(vector[i]);
        }
        return mayor; 
    }   
}

console.log(calcularMayor([64, 128, 4, 1024, 16]));

/*
Crea unha funcion que comprobe se un numero é primo.
O numero pasase por parámetros.
Debe evaluarse se é primo ou non, dependendo de que devolva (true ou false) a funcion, no programa
principal .
*/

function esPrimo(numero){
    let contador = 0;

    for(let a = 0; a <= numero; a++){
        if(numero%1 == 0){
            contador++;
        }
    }

    if(numero == 1){
        contador++;
    }

    if(contador == 2){
        return true;
    }else{
        return false;
    }
}

if(esPrimo(4) == true){
    console.log("Es primo");
}else{
    console.log("No e primo");
}

//Ambito

var mensaje = "Fuera de la funcion";

function mostrarAnuncio(){
    var mensaje = "Dentro de la función";
    console.log(mensaje);
}

mostrarAnuncio();
console.log(mensaje);

//Paso por valor

var numero1 = 7;

var numero2 = 6;

function menor(primero, segundo){
    var elmenor = primero;
    if(segundo < primero){
        elmenor = segundo;
    }
    return elmenor;
}
console.log(menor(numero1, numero2));

//Por referencia

var vector = [6,2,9,5,3];

function menor2(elarray){
    var elmenor2 = elarray[0];
    var posicion = 0;
    for(let i = 0; i < elarray.length; i++){
        if(elarray[i] < elmenor2){
            elmenor2 = elarray[i];
            posicion = i;
        }
    }
    elarray[posicion] = -1;
    return elmenor2;
}
console.log(menor2(vector));
console.log(vector);

//Por defecto

function dividir(numerador, denominador = 3){
    return(numerador / denominador);
}
console.log(dividir(4));
console.log(dividir(4,2));
console.log(dividir());

//Por declaracion

let resultado = multiplicar(7,5);

function multiplicar(a,b){
    return a * b;
}
console.log(resultado);

//Por expresion

const bienvenido = function sesionIniciada(){
    console.log("Bienvenido de nuevo");
}
bienvenido();

/*
Ejercicio votar
*/

var edad = prompt("Pon tu edad");

function votar(años){
    if(años > 18){
        console.log("Puedes votar");
    }else{
        console.log("No puedes votar");
    }
}

votar(edad);

/*
Funcion que recib grados Farenheit a Celsius
*/

var Farenheit = prompt("Introduce la temperatura en Farenheit");

function cambioTemperatura(temperatura){
    var Celsius = (temperatura - 32) * 5 / 9;
    return Celsius;
}

console.log(cambioTemperatura(Farenheit));

