function cargarMatriz (array, elemento) {
    for(let i = 0; i < elemento; i++){
       array.push(0); 
    }
}

function visualizarMatriz (matriz) {
    
    console.log(matriz);
}

export{
    cargarMatriz,
    visualizarMatriz
}