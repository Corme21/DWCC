/*
Dada unha táboa de prezos de froita almacenada nun mapa nomefroita:prezo, escribir un programa
que pregunte ó usuario por unha froita e polo número de quilos que desexa comprar, e amose por
pantalla o prezo total que vai ter que pagar pola compra. 2,5Ptos.

A ter en conta. 
- O listado de prezos cargámolo nós de forma estática no programa, non hai que pedilos prezos, e
estes gárdanse nun mapa:
 
Froita Prezo 
pera 1.25 
manzana 1.70 
kiwi 2.90 
mandarina 1.19 
fresa 3.75 

RÚBRICA:
• Amosamos o listado xeral de prezos cunha función. 0,5ptos. 
• O programa principal pide ao usuario o nome da froita a consultar e unha función dille se
esta existe ou non na táboa. No caso de que exista, devolverá o prezo da mesma. 1Pto.
• Con esta función, o programa principal diralle ao usuario que prezo final terá que pagar
pola froita escollida ou se a froita non foi atopada no dicionario, neste caso, o programa
diralle que pida outra froita, que esa non existe. 1Pto.
*/

//Creamos o mapa coa froita e cos prezos que lle correstonde 
let tablaFroita = new Map([
    ["pera", 1.25],
    ["manzana", 1.70],
    ["kiwi", 2.90],
    ["mandarina", 1.19],
    ["fresa", 3.75]
]);

//Creamos unha funcion que mostre a tabla de prezos recorrendo o mapa creado anteriormente
function listado(){
    document.write("Froita  Prezo<br>");
    //Recorremos o mapa e imprimimos as claves e os valores
    for(let [froita, prezo] of tablaFroita){
        document.write(`${froita}   ${prezo}<br>`);
    }
}
//Chamamos a funcion do listado
listado();

//Pedimos ao usuario que elixa unha froita e introduzca os quilos que quere desta
let elexir = prompt("Elixe unha froita");

let quilos = prompt("Cantos quilos queres");

//Calculamos o total da compra e mostramola
let total = tablaFroita.get(elexir) * quilos;

document.write(`<br>Por ${quilos} quilos de ${elexir}, tes que pagar ${total}<br><br>`);


//Le preguntamos ao usuario que froita quere consultar
let nomeFruta = prompt("Que froita queres consultar?");
//Mentras a froita escrita non se atope na lista, pediraselle ao usuario que escriba outra
function consulta(nomeFroita){
    bucle: do{
        if(tablaFroita.has(nomeFroita)){
            document.write(`<br>Aquí esta la fruta que buscaba: ${nomeFroita}<br>`);
            document.write(`Tes que pagar ${tablaFroita.get(nomeFroita)}`);
        }else{
            document.write(``);
            nomeFroita = prompt("A froita que escribio non esta na lista, escribe outra froita");
            break bucle;
        }  
    }while(tablaFroita.has(nomeFroita) == false);
}
//Chamamos a funcion da consulta
consulta(nomeFruta);

