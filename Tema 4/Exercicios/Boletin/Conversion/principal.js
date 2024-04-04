import {celsius, farenhait, metros, pies, kilogr, libras} from "./modulos.js";

console.log("1.Pasar a grados Celsius");
console.log("2.Pasar a grados Farenheit");
console.log("3.Pasar a metros");
console.log("4.Pasar a pies");
console.log("5.Pasar a kg");
console.log("6.Pasar a libras");
console.log("7.Salir");

let opcion = prompt("Elige una opcion")

switch (Number(opcion)) {
    case 1:
        let farenht = prompt("Introduce los grados Celsius");

        celsius(farenht);
        break;

    case 2:
        let celsi = prompt("Introduce los grados Farenhait");

        farenhait(celsi);
        break;
    
    case 3:
        let metr = prompt("Introduce los pies");

        metros(metr);
        break;

    case 4:
        let pie = prompt("Introduce los metros");

        pies(pie);
        break;

    case 5:
        let kilos = prompt("Introduce las libras");

        kilogr(kilos);
        break;
    
    case 6:
        let libra = prompt("Introduce los kilos");

        libras(libra);
        break;
    
    case 7:
        console.log("Saliendo");
        break;
}
