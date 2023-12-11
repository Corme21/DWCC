/*
Converte un obxecto JSON nun obxecto JavaScript e accede a unha das súas propiedades.
Imprime o resultado nun documento.
*/

let cadena = new String(`{"Libro":"Lagrimas de Shiba", "autor":"Cesar Mallorquí"}`);

let objeto = JSON.parse(cadena);
for(elemento in objeto){
    document.write(`${elemento} <br>`);
}
