//Juego del ahorcado

let clave = prompt("Escribe la palabra oculta");

let pista = prompt("Escribe una pista");

let tamaño = clave.length;

let intentos = tamaño + 4;

console.log("Palabra escrita");
console.log(`Tienen ${intentos} intentos`);
console.log(`El tamaño de la palabra es ${tamaño}`);
console.log(`La pista es "${pista}"`);
console.log("Jugadores, comiencen");

while(sigue = true){
    console.log(`Quedan ${intentos} intentos`);
    
    let letra = prompt("Escribe una letra");

    function comprobarLetra(letra){
        for(let i = 0; i < clave.length; i++){
            if(clave.includes(letra)){
                
            }else{
                intentos--;
            }
        }
    }
    
    comprobarLetra(letra);

    if(intentos == 0){
        console.log("Has perdido");
        console.log(`La palabra era ${clave}`);
        sigue = false;
        break;
    }
}

