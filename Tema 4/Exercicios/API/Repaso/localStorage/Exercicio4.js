/*
Crea un Array de mapas. O contido do mapa será:
✔ Nome do barco
✔ Ano de construción.
Pedirás o nome de 5 barcos por prompt. Almacena cada un deles no LocalStoarge.
Unha vez almacenados, pide por teclado o nome que queiras eliminar. Se o atopa, bórrao, se non o
atopa deberás indicar que non foi atopado. 
*/

let mapa = new Map();
let arrayMapas = [];

for(let i = 0; i < 5; i ++){
    var nomeBarco = prompt("Introduce o nome do barco");

    var anoConstr = prompt("Introduce o ano de construccion do barco");

    mapa.set("Nome_Barco", nomeBarco);
    mapa.set("Ano_Constr", anoConstr);

    arrayMapas.push(mapa);
    
    localStorage.setItem("mapa", arrayMapas[i]);
}

console.log(arrayMapas);

let busca = prompt("A quien quieres eliminar?");

for(const barco in mapa){
    if(localStorage.getItem(busca)){
        localStorage.removeItem(busca);
    }else{
        document.write("Non se atopou <br>");
    }
    console.log(`${barco}: ${datos[barco]}`);
}
