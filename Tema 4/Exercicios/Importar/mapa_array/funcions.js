function crearMapa(cadea){
    const mapa = new Map();
    for(let i = 0; i < cadea.length; i++){
        mapa.set(i, cadea[i]);
    }

    return mapa;
}

function crearArray(texto){
    let nuevoArray = [];

    for(let i = 0; i < cadea.length; i++){
        nuevoArray.push(cadena[i]);
    }
}

function visualizar(){
    console.log(mapa);
    console.log(array);
}

export{crearMapa, crearArray}