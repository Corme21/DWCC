var continua = true;

while(continua != false){
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Opción 3");
    console.log("4. salir");

    var opcion = prompt("Elige una opcion");

    switch(opcion){
        case "1":
            console.log("Opcion 1");
            break;
        case "2":
            console.log("Opcion 2");
            break;
        case "3":
            console.log("Opcion 3");
            break;
        case "4":
            console.log("Opcion 4");
            continua = false;
            break;
    }
}