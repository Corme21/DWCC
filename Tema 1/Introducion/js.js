let num1 = 2;
let num2 = 3;
let suma = num1 + num2;


//Para mandar mensajes
let nombre = prompt("Introduce el nombre:");

let apellidos = prompt("Introduce los apellidos:");

let edad = prompt("Introduce la edad:");

document.write(`<strong>Nombre: \"${nombre}\"</br>Apellidos: ${apellidos}</br>Edad: ${edad}</strong>`);

console.log(typeof(edad));

var ano = 2023;

document.write(`</br>Ano de nacemento:  ${ano-Number(edad)}`);

/*let mensaxe = "¿Estas seguro de querer eliminar?";
*
*let resposta = confirm(mensaxe);
*
*console.log(`Resposta do cadro de dialogo: ${resposta}`);
*/

let mesaxe = (edad>18) ? "Maior" : "Menor";

console.log(`O usuario é ${mesaxe} de idade`);
