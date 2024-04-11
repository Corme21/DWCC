/*
Crea un Array de mapas. O contido do mapa será:
✔ Nome do barco
✔ Ano de construción.
Pedirás o nome de 5 barcos por prompt. Almacena cada un deles no LocalStoarge.
Unha vez almacenados, pide por teclado o nome que queiras eliminar. Se o atopa, bórrao, se non o
atopa deberás indicar que non foi atopado. 
*/

for(let i = 0; i < 5; i ++){
    let nomeBarco = prompt("Introduce o nome do barco");

    let anoConstr = prompt("Introduce o ano de construccion");

    var info = {Nome_Barco: nomeBarco, Porto_Base: portoBase, 
        Ano_Constr: anoConstr, eslora: eslora};

    localStorage.setItem("clave", JSON.stringify(info));

    
}

