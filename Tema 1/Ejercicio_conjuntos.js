/*
Crear un programa co seguinte menu
----------Cidades de España--------------
1. Introducir unha nova cidade.
2. Ver cidades cargadas no conxunto
3. Comprobar se unha cidade está cargada no conxunto.
4. Eliminar unha cidade do conxunto.
5. Salir do programa.
*/

var cidades = new Set(["Sevilla", "A Coruña", "Murcia"]);

    console.log("----------Cidades de España-----------");
    console.log("1. Introducir unha nova cidade");
    console.log("2. Ver cidades cargadas no conxunto");
    console.log("3. Comprobar se unha cidade esta cargada no conxunto");
    console.log("4. Eliminar unha cidade no conxunto");
    console.log("5. Salir");

    const opcion = prompt("Elige una opcion")

    switch(opcion){
        case 1:
            let nombreAñadir = prompt("Escribe o nome da cidade");
            cidades.add(nombreAñadir);
            break;
        case 2:
            for(let elemento of cidades){
                console.log(elemento);
            }
            break;
        case 3:
            let nombreBusca = prompt("Escribe o nome da cidade");
            cidades.has(nombreBusca);
            break;
        case 4:
            let nombreBorrar = prompt("Escribe o nome da cidade");
            cidades.delete(nombreBorrar);
            break;  
        case 5:
            
            break;
    }
