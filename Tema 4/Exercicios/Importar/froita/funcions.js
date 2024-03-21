function cargarMapa(mapa, cantidad){
    for(let i = 0; i < cantidad; i++){
        let fruta = prompt("Nombre de la fruta");

        mapa.set(i, fruta);
    }
    console.log(mapa);
}

let buscar = (mapa) => {
    let busca = prompt("Que froita buscas");

     for(let froita of mapa.values()){
        if(busca == froita){
            return "Si";
        }else{
            return "no";
        }
     }
}

export{cargarMapa, buscar}