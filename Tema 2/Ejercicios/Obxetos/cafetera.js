/*
Desarrolla una clase Cafetera con atributos _capacidadMaxima (la cantidad máxima
de café que puede contener la cafetera) y _cantidadActual (la cantidad actual de café
que hay en la cafetera). Implementa, al menos, los siguientes métodos:
Constructor predeterminado: establece la capacidad máxima en 1000 (c.c.)
y la actual en cero (cafetera vacía).
Constructor con la capacidad máxima de la cafetera; inicializa la cantidad actual de
café igual a la capacidad máxima.
Constructor con la capacidad máxima y la cantidad actual. Si la cantidad actual es
mayor que la capacidad máxima de la cafetera, la ajustará al máximo.
Métodos mutadores:
llenarCafetera(): pues eso, hace que la cantidad actual sea igual a la capacidad.
servirTaza(int): simula la acción de servir una taza con la capacidad indicada.
Si la cantidad actual de café “no alcanza” para llenar la taza, se sirve lo que quede.
vaciarCafetera(): pone la cantidad de café actual en cero.
agregarCafe(int): añade a la cafetera la cantidad de café indicada
*/

class Cafetera {
    capacidadMaxima = 0;
    capacidadActual = 0;
    constructor(max, min){
        this.capacidadMaxima = max;
        this.capacidadActual = min;

        if(this.capacidadMaxima == this.capacidadActual){
            this.capacidadActual = this.capacidadMaxima;
        } else if(this.capacidadActual == 0){
            this.capacidadActual = 0;
        }else if(){
            
        }
    }
    mostrar(){
        
        console.log(`La capacidad actual de la cafetera es ${this.capacidadActual}`);
        console.log(`La capacidad maxima de la cafetera es ${this.capacidadMaxima}`);
    }
}

let cafeteraBar = new Cafetera(1000, 0);
cafeteraBar.mostrar();