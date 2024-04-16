var persona = new datos (
    nome = "Jesus",
    apelido = "Allo"
);

try {
    if(persona.edad){
        document.write(persona.edad);
    }else{
        throw new Error;
    }
} catch (error) {
    document.write("Non se encontrou a propiedade");
}finally{
    document.write("Intentouse acceder a propiedade");
}