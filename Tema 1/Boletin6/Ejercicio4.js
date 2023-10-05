/*
Converter un número romano introducido no seu equivalente arábigo.
*/

let numeroArab = prompt("Introduce un numero del 1 al 10 en numeros romanos");

switch(numeroArab){
    case "I":
        console.log("1");
        break;
    case "II":
        console.log("2");
        break;
    case "III":
        console.log("3");
        break;
    case "IV":
        console.log("4");
        break;
    case "V":
        console.log("5");
        break;
    case "VI":
        console.log("6");
        break;
    case "VII":
        console.log("7");
        break;
    case "VIII":
        console.log("8");
        break;
    case "IX":
        console.log("9");
        break;
    case "X":
        console.log("10");
        break;
    default:
        console.log("Opción incorrecta");
}

