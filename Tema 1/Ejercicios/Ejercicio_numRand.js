/*
Facer un programa que implemente un xogo para encontrar un numero aleatorio baixo as seguintes
premisas.

1. O numero é do 1 o 100
2. Preguntaremos ao usuario sempre o numero co que xoga.
3. Se o numero do usuario é correcto, indica que se acertou e se non volta pedir o numero.
4. Debe dar pistas. Se o numero e maior ou menor que o que o usuario introduxo.
5. O usuario pode cancelar o xogo.
6. Ao final deberemos medir a tasa de acertos: Intentos do usuario.
*/

let numeroRand = Math.floor(Math.random() * 100) + 1;

console.log(numeroRand);

let contadorAcierts = 0;
let contadorFallos = 0;

var continuar = prompt("Quieres continuar?");

while(continuar == "si"){
    var numero = prompt("Elige un numero del 1 al 100");

    if(numero == numeroRand){
        document.write("<h1>Felicidades as acertado</h1>");
        contadorAcierts ++;
        continuar = prompt("Quieres continuar?");
    }else{
        document.write("<h1>Has fallado, vuelve a intertarlo</h1>");
        contadorFallos++;
        if(numero < numeroRand){
            document.write("<p>El numero a adivinar es mayor al tuyo</p>");
            continuar = prompt("Quieres continuar?");
        }else{
            document.write("<p>El numero a adivinar es menor al tuyo</p>");
            continuar = prompt("Quieres continuar?");
        }
    }
    if(continuar == "no"){
        document.write("<h1>Game Over, thanks for play</h1>");
        document.write(`<p>Has acertado ${contadorAcierts} veces</p>`);
        document.write(`<p>Has fallado ${contadorFallos} veces</p>`);
        break;
    }
}

