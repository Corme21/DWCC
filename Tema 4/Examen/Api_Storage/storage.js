// Declaramos el array
let pcArray = [];

// Creamos un "for" para poder pedir datos de 2 PCs distintos
for(let i = 0; i < 2; i++){

    // Pedimos los valores
    let referencia = prompt("Referencia");

    let modelo = prompt("Modelo");

    let ram = prompt("RAM");

    let HDD = prompt("Disco duro");

    let procesador = prompt("Procesador");

    let sistemOp = prompt("Sistema operativo");

    // Creamos un objeto para guardar los datos
    var ordenador = new Object();
    
    ordenador.referencia = referencia;

    ordenador.modelo = modelo;

    ordenador.ram = ram;

    ordenador.HDD = HDD;

    ordenador.procesador = procesador;

    ordenador.sistemOp = sistemOp;

    // Introducimos el objeto en el array
    pcArray.push(ordenador);
}


// Guardamos los datos en LocalStorage
for (let a = 0; a < 2; a++) {
    localStorage.setItem(a, JSON.stringify(pcArray[a]));
}

// Borramos uno de los objetos
localStorage.removeItem(1);

// Comprobamos si esta
for (let e = 0; e < pcArray.length; e++) {

    let PCGuardado2 = JSON.parse(localStorage.getItem(e));

    document.write("<h2>PC " + (e + 1) + "</h2>");

    document.write("<p>Referencia: " + PCGuardado2.referencia + "</p>");

    document.write("<p>Modelo: " + PCGuardado2.modelo + "</p>");

    document.write("<p>Memoria RAM: " + PCGuardado2.ram + "</p>");

    document.write("<p>Disco duro: " + PCGuardado2.HDD + "</p>");

    document.write("<p>Sistema operativo: " + PCGuardado2.sistemOp + "</p>");
}

