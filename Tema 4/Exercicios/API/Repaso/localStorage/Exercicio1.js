/*
Garda nun obxecto JS os datos dun barco. Pídeos mediante prompt.
✔ Nome.
✔ Porto Base.
✔ Ano de construción.
✔ Eslora
Agora converte este obxecto en JSON e almacénano en LocalStorage.
Garda este obxecto 
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