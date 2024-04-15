let fecha = new Date();

let actual = fecha.toString();

let nombre = prompt("Escribe tu nombre");

localStorage.setItem(nombre, actual);

document.write(localStorage.getItem(nombre));


