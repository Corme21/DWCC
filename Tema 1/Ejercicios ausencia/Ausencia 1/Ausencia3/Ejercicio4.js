/*
Escribe un programa en javascript que simule o xogo do aforcado. 
Teremos unha palabra clave escondida, diremos o seu tamaño e unha 
pista, e según se vaian descubrindo as letras amósanse. 
Só terá como intentos o tamaño da letra máis 4 intentos.

Exemplo: Palabra escondida barco.
Número de intentos: 9 intentos.
Vanse descubrindo as letras e amósanse. As letras non descubertas terán un -
Terase que introducir letras ata atopar a palabra ou rematar o 
número de intentos.
*/

let clave = prompt("Escribe la palabra oculta");

let pista = prompt("Escribe una pista");

let tamaño = clave.length;

let intentos = tamaño + 4;

console.log("Palabra escrita");
console.log(`Tienen ${intentos} intentos`);
console.log(`El tamaño de la palabra es ${tamaño}`);
console.log(`La pista es "${pista}"`);
console.log("Jugadores, comiencen");

while(true){
    console.log(`Quedan ${intentos} intentos`);
    
    let letra = prompt("Escribe una letra");

    for(let i = 0; i < clave.length; i++){
        if(letra == clave.length[i]){
            
        }else{
            intentos--;
        }
    }
    if(intentos == 0){
        console.log("Has perdido");
        console.log(`La palabra era ${clave}`);
        break;
    }
}
