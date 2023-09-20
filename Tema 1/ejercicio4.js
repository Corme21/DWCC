//Calcula o perímetro dunha figura xeometrica
let figura = prompt("Elige: triangulo, cadrado, rectangulo ou circulo");

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

