//Calcula o perímetro dunha figura xeometrica
let figura = prompt("Elige: triangulo, cadrado, rectangulo ou circulo");

switch(figura){
    case "rectangulo":
        var altura = prompt("Introduce la altura");
        var base = prompt("Introduce el largo");
        var perimetro = (base * 2) + (altura * 2);
        document.write(perimetro);
        break;
        
    case "triangulo":
        var lado1 = prompt("Introduce el lado1");
        var lado2 = prompt("Introduce el lado2");
        var base = prompt("Introduce la base");
        var perimetro = base + lado1 + lado2;
        document.write(perimetro);
        break; 
        
    case "cadrado":
        let lado = prompt("Introduce el lado");
        var perimetro = lado * 4;
        document.write(perimetro);
        break;
    case "circulo":
        let diametro = prompt("Introduce el radio");
        var perimetro = 3.14 * diametro;
        document.write(perimetro);
        break;
}

