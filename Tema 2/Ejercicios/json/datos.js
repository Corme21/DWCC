/*
Partindo dun obxecto json cos seguintes datos:
Nome: Pepe
Apellidos: Sanchez Riveiro
Idade: 34
Convertilo a un obxeto de js
Antes imprimir engade, mediante patrons unha nova funcion a ese obxecto chamada verInfo para 
imprimir os datos do obxecto json

A continuacion, crea un array para engadir 2 personas novas.
Sera necesario unha nova funcion engadirDatos(nome, apelidos, idade)

Finalmente, recorre o array e imprime os datos das persoas da seguinte forma:
Persona 1:
Imprimes os datos da persoa1
Persona 2:
Imprimes os datos da persoa2
*/

let persona = '{"nombre":"Pepe","apellidos":"Problemas","edad":"34"}';

let laPersona = JSON.parse(persona);

laPersona.verInfo = function(nombre, apellidos, edad){
    document.write(this.nombre + "<br>");
    document.write(this.apellidos + "<br>");
    document.write(this.edad + "<br><br>");
};

laPersona.verInfo();

let laPersona2 = [];
for(let i = 0; i < 2; i++){
    let nuevaPersona = Object.create(laPersona);
    nombre = prompt("Nombre de la persona");
    apellido = prompt("Apellido de la persona");
    edad = prompt("Edad de la persona");
    nuevaPersona.verInfo(nombre, apellidos, edad);
    laPersona.push(laPersona2);
}


