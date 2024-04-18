// Creamos el array
let numeroArray = [];

// Creamos a funcion para cargar os elementos no array
let cargarArray = (primer, segun, tercer) =>{
    numeroArray.push(primer);
    numeroArray.push(segun);
    numeroArray.push(tercer);
}

// Creamos a funcion para mostrar os elementos numericos do array
let verArray = () =>{
    for(let i = 0; i < numeroArray.length; i++){
        console.log(numeroArray[i]);
    }
}

// Exportamos as funcions anteriores ao programa principal
export{cargarArray, verArray}