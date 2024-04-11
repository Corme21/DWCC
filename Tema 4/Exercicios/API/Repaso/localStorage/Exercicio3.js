/*
Borra toda a información gardada en LocalStorage, ata o de agora. 
*/

let nomeBarco = prompt("Introduce o nome do barco");

let portoBase = prompt("Introduce o porto base");

let anoConstr = prompt("Introduce o ano de construccion");

let eslora = prompt("Introduce a eslora");

var info = {Nome_Barco: nomeBarco, Porto_Base: portoBase, 
    Ano_Constr: anoConstr, eslora: eslora};

localStorage.setItem("clave", JSON.stringify(info));

var datos = JSON.parse(localStorage.getItem("clave"));

for(const barco in datos){
    document.write(`${barco}: ${datos[barco]}<br>`);
}

localStorage.clear();

localStorage.getItem(datos);

/* 
var nombre="Santa Maria";
var portoBase="Galicia";
var anoConstruc=1790 ;
var eslora="36 metros";


var infoBarco = {
    nombre: nombre,
    portoBase: portoBase,
    anoConstruc: anoConstruc,
    eslora:eslora
};


localStorage.setItem('infoBarco', JSON.stringify(infoBarco));


const barcoGuardado = JSON.parse(localStorage.getItem('infoBarco'));


console.log(barcoGuardado);


localStorage.clear();


const barcoGuardado2 = JSON.parse(localStorage.getItem('infoBarco'));


console.log(barcoGuardado2);
*/