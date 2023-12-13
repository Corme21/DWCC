function listadoXeral(lista){
    for(let[froita, prezo] of fruta){
        document.write(`${froita} ${prezo}`);
    }
}

function consulta(nombre){
    return fruta.has(nombre);
}


let fruta = new Map([
    ["Pera", 1.25],
    ["Manzana", 1.70],
    ["Kiwi", 2.90],
    ["Mandarina", 1.19],
    ["Fresa", 3.75]
]);

listadoXeral(fruta);

let nombre = prompt("Introduce el nombre de una fruta");

if(consulta(nombre)){
    document.write("A fruta existe");
    let peso = prompt("Cantos quilos");

    document.write(`Tienes que pagar ${fruta.get(nombre) * peso} €`);
}else{
    document.write("No existe");
}