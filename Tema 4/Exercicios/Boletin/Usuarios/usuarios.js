let mapa = new Map(
    ["Ana", "123456K"],
    ["Juan", "987654A"]
);

let agregar = (idUsuario, nombre) =>{
    mapa.set(idUsuario, nombre);
}

let eliminar = (idUsuario) =>{
    mapa.delete(idUsuario);
    /*
    if (usuarios.has(idusuario)) {
    let nome = usuarios.get(idusuario);
    usuarios.delete(idusuario);
    console.log(`Usuario eliminado: ${nome}`);
  } else {
    console.log("El usuario no existe");
  }
    */
}

let buscar = (idUsuario) =>{
    if(mapa.has(idUsuario)){
        
    }else{
        console.log("Usuario no encontrado");
    }

    /*
if (usuarios.has(idusuario)) {
    let nome = usuarios.get(idusuario);
    console.log(`Usuario encontrado: ${nome}`);
  } else {
    console.log("El usuario no existe");
  }
    */
}

export{agregar, eliminar, buscar}