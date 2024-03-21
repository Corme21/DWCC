import { cargarAlumno, imprimirAlumno } from "./funcions.js";

let mapa = new Map();

let cantidad = prompt("Cuantos alumnos");

cargarAlumno(mapa, cantidad);

imprimirAlumno(mapa);