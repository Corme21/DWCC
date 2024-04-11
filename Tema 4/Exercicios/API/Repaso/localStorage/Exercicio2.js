/*
Utilizando o exercicio anterior, busca o nome dese barco almacenado, se o atopa, debes de
eliminalo. No caso de non atopalo, debes dicir que non se atopou a clave.
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
    if(localStorage.getItem()){
        localStorage.removeItem();
    }else{
        document.write("Non se atopou a clave <br>");
    }
    console.log(`${barco}: ${datos[barco]}`);
}