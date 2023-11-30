/*
Crea un menú onde o usuario poida escoller entre a seguintes accións:
a) Cargar alumnos.
b) Eliminar un alumno.
c) Agregar nota a un alumno.
d) Borrar nota a un alumno
e) Sair
Para a realización do exercicio deben terse as seguintes consideracións.
    • Só se pode usar arrays para gardar os alumnos e as súas notas. O normal é usar un
    array bidimensional. 
    • Só se sae do menú se se pulsar a opción saír. 
*/

//Crea el array bidimensional donde en la primera parte se guardaran los alumnos y en la segunda parte las notas.
let arrayClase = [[], []];

//Este es el menu con las opciones
console.log("1. Cargar alumno.");
console.log("2. Eliminar un alumno");
console.log("3. Agregar nota a un alumno");
console.log("4. Borrar nota a un alumno");
console.log("5. Salir");

//Creo una variable llamada "seguir" con valor "true"
var seguir = true;

//Creo un bucle, que mostrara el menu mientras la variable "seguir" no cambie al valor "false"(opcion 5).
while(seguir != false){

    var opcion = prompt("Elige una opción");

    switch(opcion){
        case "1":   //Esta opcion, pide por pantalla el nombre del alumno y lo añade a la primera parte del array
            let alumnoAñadir = prompt("Introduce el nombre del alumno que quiere añadir");

            arrayClase[0].push(alumnoAñadir);

            break;
        case "2":   //Esta opcion, pide por pantalla el nombre del alumno, luego lo busca por el array y lo borra
            let alumnoBorrar = prompt("Introduce el nombre del alumno que quiere eliminar");

            for(let i = 0; i < arrayClase.length; i++){
                for(let a = 0; a < arrayClase[i].length; a++){
                    if(alumnoBorrar == arrayClase[i]){
                        arrayClase.shift(alumnoBorrar);
                    }
                }
            }

            console.log("Se ha eliminado el alumno");

            break;
        case "3":   //En esta opcion, pide por pantalla el nombre del alumno, buscas su posicion y añade la nota en la misma posicion en la segunda parte
            

            let notaAñadir = prompt("Introduce la nota que quiere añadir al alumno ");

            arrayClase[1].push(notaAñadir);

            break;
        case "4":   //En esta opcion, pide por pantalla el nombre del alumno, buscas su posicion y borra la nota en la misma posicion en la segunda parte
            let alumnoFueraNota = prompt("Introduce el nombre del alumno");

            let notaBorrar = prompt("Introduce la nota que quiere borrar al alumno ");

            break;
        case "5":   //Esta opcion cambiara el valor de la variable "seguir" a "false" y terminara el bucle
            seguir = false;
            break;
        default:    //Si se escribe un numero en el que no hai ninguna opcion, enviara el siguiente mensaje
            console.log("Opcion no validad");
    }
}
document.write(arrayClase);