let mapa = new Map(
    ["Ana", "123456K"],
    ["Juan", "987654A"]
);

let agregar = (idUsuario, nombre) =>{
    mapa.set(idUsuario, nombre);
}

let eliminar = (idUsuario) =>{
    mapa.delete(idUsuario);
}

let buscar = (idUsuario) =>{
    if(mapa.has(idUsuario)){
        
    }else{
        console.log("Usuario no encontrado");
    }
}

export{agregar, eliminar, buscar}