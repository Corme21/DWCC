var planta =
    {"nome":"Cactus", "especie":"crassa", "orixe":"Mohave",
    "Estacion_Xermen":"veran", "estacion_poda":"nonten"};

var plantuka = JSON.parse(planta);

plantuka.gravarDatos = function (nome, especie, orixe, estacionxer, estacionpo) {
    this.nome = nome;
    this.especie = especie;
    this.orixe = orixe;
    this.Estacion_Xermen = estacionxer;
    this.estacion_poda = estacionpo;
}

plantuka.verDatos = function () {
    document.write(this.nome + "<br>");
    document.write(this.especie + "<br>");
    document.write(this.orixe + "<br>");
    document.write(this.Estacion_Xermen + "<br>");
    document.write(this.estacion_poda + "<br>");
}

plantuka.verDatos();

var plantuka1 = [];
for (var i = 0; i < 3; i++) {
    var nuevaPlanta = Object.create(plantuka);
    nome = prompt("introduce o nome da planta");
    especie = prompt("introduce especie");
    orixe = prompt("orixe?");
    Estacion_Xermen = prompt(" en que estacion xermina?");
    estacion_poda = prompt("estacion de poda?");
    nuevaPlanta.gravarDatos(nome, especie, orixe, Estacion_Xermen, estacion_poda);
    plantuka1.push(nuevaPlanta);
}

for (var i = 0; i < 3; i++) {
    document.write("Planta: " + i + "<br>");
    plantuka1[i].verDatos();
}