//Calcular a superficie dunha figura xeometrica
let figura = prompt("Elige: triangulo, cadrado, rectangulo ou circulo");
let figura2 = prompt("Elige otro: triangulo, cadrado, rectangulo ou circulo");

switch(figura){
    case "rectangulo":
        var altura = prompt("Introduce la altura");
        var base = prompt("Introduce el largo");
        var superficie1 = base * altura;
        document.write(superficie1);
        break;
        
    case "triangulo":
        var altura = prompt("Introduce la altura");
        var base = prompt("Introduce el largo");
        var superficie1 = base * altura / 2;
        document.write(superficie1);
        break; 
        
    case "cadrado":
        let lado = prompt("Introduce el lado");
        var superficie1 = lado * lado;
        document.write(superficie1);
        break;
    case "circulo":
        let radio = prompt("Introduce el radio");
        var superficie1 = 3.14 * (radio * 2) ;
        document.write(superficie1);
        break;
}

switch(figura2){
    case "rectangulo":
        var altura = prompt("Introduce la altura");
        var base = prompt("Introduce el largo");
        var superficie2 = base * altura;
        document.write(`</br>${superficie2}`);
        break;
        
    case "triangulo":
        var altura = prompt("Introduce la altura");
        var base = prompt("Introduce el largo");
        var superficie2 = base * altura / 2;
        document.write(`</br>${superficie2}`);
        break; 
        
    case "cadrado":
        let lado = prompt("Introduce el lado");
        var superficie2 = lado * lado;
        document.write(`</br>${superficie2}`);
        break;
    case "circulo":
        let radio = prompt("Introduce el radio");
        var superficie2 = 3.14 * (radio * 2) ;
        document.write(`</br>${superficie2}`);
        break;
}

if(superficie1 > superficie2){
    document.write(`</br>O ${figura} ten unha superficie maior`);
} else {
    document.write(`</br>O ${figura2} ten unha superficie maior`);
}