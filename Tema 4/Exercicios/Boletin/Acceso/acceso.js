let persona = {nome: "Juan", idade: 30};

try {
    console.log("Apelidos:", persona.apelidos);
} catch (error) {
    console.log("La propiedad 'apelido' no fue encontrada");
}finally{
    console.log("Intentouse acceder a propiedade");
}