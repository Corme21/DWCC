import { cargarMapa, buscar } from "./funcions.js";

let mapa = new Map();

let cantidad = prompt("Canta fruta");

cargarMapa(mapa, cantidad);

console.log(buscar(mapa));