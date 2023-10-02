/*
SIMULAR UNHA PILA CON UN ARRAY

Debe lanzarse o seguinte menú, do que só se saírá se 
se pulsa a opción salir

1. Insertar ao inicio un elemento na pila
2. Insertar ao final un elemento na pila
3. Eliminar elemento da pila ao inicio
4. Eliminar elemento da pila ao final
5. Ver os elementos da pila en forma de pila.
6. Saír
*/

var pila = [1, 2, 3];

var insertar = prompt(`1. Inserta un numero al principio de la pila.
                       2. Insertar un numero al final de la pila.
                       3. Eliminar el numero del inicio de la pila.
                       4. Eliminar el numero del final de la pila.
                       5. Ver la pila.
                       6. Salir`
);


    switch(Number.insertar){
        case 1:
            var numero = prompt("Escribe el numero a insertar al principio:");
            pila.unshift(numero);
            break;
        case 2:
            var numero = prompt("Escribe el numero a insertar al final:");
            pila.push(numero);
            break;
        case 3:
            var numero = prompt("Escribe el numero a eliminar al principio:");
            pila.shift(numero);
            break;
        case 4:
            var numero = prompt("Escribe el numero a eliminar al final:");
            pila.pop(numero);
            break;
        case 5:
            for(let i = pila.length - 1; i >= 0; i--){
                document.write(pila[i]);  
            }
              break;
        case 6:
            break;
    }

/*
if(insertar == 1){
        var numero = prompt("Escribe el numero a insertar al principio:");
        pila.unshift(numero);
        document.write(pila);
    }else if(insertar == 2){
        var numero = prompt("Escribe el numero a insertar al final:");
        pila.push(numero);
        document.write(pila);
        break;
    } else if(insertar == 3){
        var numero = prompt("Escribe el numero a eliminar al principio:");
        pila.shift(numero);
        document.write(pila);
    } else if(insertar == 4){
        var numero = prompt("Escribe el numero a eliminar al final:");
        pila.pop(numero);
        document.write(pila);
    }else if(insertar == 5){
        for(let i = pila.length - 1; i >= 0; i--){
          document.write(pila[i]);  
        }
    } 
    */