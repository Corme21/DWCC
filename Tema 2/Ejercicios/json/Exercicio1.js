/*
Crea un obxecto JSON que represente un libro con propiedades como título, autor e ano de
publicación. Imprime o obxecto JSON na consola.
*/

const libro ={
    titulo: "Yo",
    autor: "Jordi Sierra i Fabra",
    anoPublic: "2008"
};

console.log(JSON.stringify(libro));

console.log(typeof(JSON.stringify(libro)));