/*
Solicita por pantalla os datos dunha casa (prompt):

Direccion, valor catastral, ano de construccion.

Converter o obxecto casa a un JSON. Gardalo coa API Storage.

Recuperalo e amosalo.
*/

let direccion = prompt("Introduzca la direccion de la casa");

let valor = prompt("Introduzca el valor de la casa");

let anoConstr = prompt("Introduzca el año de construccion de la casa");

let datosReco = new Object({"Direccion": direccion, "Valor": valor, "Año_Contruccion": anoConstr});

var json = {datos};

localStorage.setItem("clave", json);

var datos= JSON.parse(localStorage.getItem("clave"));

document.write(datos.Direccion +"<br>");
document.write(datos.Valor +"<br>");
document.write(datos.Año_Contruccion);