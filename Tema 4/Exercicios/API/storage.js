let dni = prompt("Introduce o dni");
let nombre = prompt("Introduce o nome");

localStorage.setItem(dni, nombre);

console.log(localStorage.getItem(dni));

// localStorage.setItem(“unha clave”, JSON.stringfy(cadeaJSON));
// obxetoJSON= JSON.parse(localStorage.getItem(“unha clave”));
