// Pedimos os valores por pantalla
let nomeFinca = prompt("Nombre de finca");

let extension = prompt("Introduce a extension");

let tipoSolo = prompt("Tipo de solo");

let valorCatas = prompt("Valor catastral");

// Se un dos valores esta en blanco, satara unha alerta
if (nomeFinca == "" || extension == "" || tipoSolo == "" || valorCatas == "") {
    alert("Non se recibiu ningun valor");
} else {
    // Se todos os valores estan definidos, crease o objeto JSON
    let datos = new Object({ "Nome": nomeFinca, "Extension": extension, "Solo": tipoSolo, "Valor": valorCatas });

    // Creamos el objeto JSON
    let finca = JSON.stringify(datos);

    // Forzamos o acceso a un valor inexistente
    try {
        
        let info = JSON.parse(finca);
        // Se existe, mostrarase no documento
        if (info.familia) {
            document.write(info.familia);
        } else {
            // Se non existe, lanzara un error
            throw new Error;
        }
    } catch (error) {
        // Capturamos o error e mandamos a seguinte mensaxe
        document.write("A pesar de terse intentado o acceso ao obxeto... <br> NON FOI POSIBLE pois a propiedade non existe");
    }
}


