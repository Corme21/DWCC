//Ejercicio 1
var num1 = 20;
var num2 = 1;
var suma = num1 + num2;

document.write(suma);

//Ejercicio 2
var mes = 0;

var capital = 4546;

while(mes!=3){
    var resto = capital * 2 / 100;
    resto *= mes;
    mes ++;
}
console.log(resto);

//Ejercicio 3
var compra = 42;

var descuento = 15;

var total = compra - (compra*descuento/100);

console.log(total);

//Ejercicio 4
var homes = 10;

var mulleres = 1;

var clase = homes + mulleres;

var porcentaxeHomes = homes / clase * 100;

var porcentaxeMulleres = mulleres / clase * 100;

console.log(porcentaxeHomes);
console.log(porcentaxeMulleres);

//Ejercicio 5
var euros = 21;

var dolares = euros * 0.07;

var pesetas = euros *166.386;

console.log(pesetas);
console.log(dolares);

//Ejercicio 6
var comision = 10;

var soldoBase = 1000;

var venda1 = 1200;
var venda2 = 350;
var venda3 = 5600;

var totalVendas = venda1 + venda2 + venda3;

console.log(totalVendas);

comisionTotal = totalVendas * comision /100;
console.log(comisionTotal);

var soldoTotal = soldoBase + comisionTotal;
console.log(soldoTotal);

//Ejercicio 7
let fahrenheit = prompt("Introduce la temperatura en grados Fahrenheit: ");

let celsius = (Number(fahrenheit) -32)*5/9;

console.log(celsius);

//Ejercicio 8
let peso = prompt("Introduce su peso: ");

let altura = prompt("Introduce a altura: ");

let edad = prompt("Introduce a idade");

var indicMasCorp = (10 * peso) + (6.25 * altura) - (5 * edad);

document.write(`
    </br><table border="1"> 
        <tr> 
            <th>Peso</th>
            <th>Altura</th>
            <th>Edad</th>
            <th>IMC</th>
        </tr>
        <tr>
            <td>` + peso + `</td>
            <td>` + altura + `</td>
            <td>` + edad + `</td>
            <td>` + indicMasCorp + `</td>
        </tr>
    </table>`);

//Ejercicio 9
var numero = 1234;

var millares = numero/1000;
var centenas = numero%1000/100;
var decenas = numero%1000/10;
var unidades = numero%1000/1;

document.write(`</br>` + numero);

document.write(`</br>O numero introducido ten ${millares}millares, ${centenas}centenas, ${decenas}decenas e ${unidades}unidades`);
