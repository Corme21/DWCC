/*
Facendo uso do obxecto DATE, crea un obxeto usuario que conteña como atributo o nome de usuario,
e un metodo que se chama iniciarsesion que imprima un saludo ao usuario da seguinte forma:
Hola, usuario. Hoxe é data de hoxe en string.
*/

let usuario = new Object();
usuario.nombre = "Jesus";
usuario.iniciarsesion = function(){
    console.log(`Hola, ${usuario.nombre}. Hoxe é `);
}

usuario.iniciarsesion();