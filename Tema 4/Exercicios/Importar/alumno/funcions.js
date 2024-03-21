function cargarAlumno(mapa, cantidad){
    for(let i = 0; i < cantidad; i++){
        let dni = prompt("Escribe el dni del alumno");

        let nota = prompt("Escribe la nota del alumno");

        mapa.set(dni, nota);
    }
}

function imprimirAlumno(mapa){
    for(let[dni, nota] of mapa){
        console.log(dni +"-"+ nota);
    }
}

export{cargarAlumno, imprimirAlumno}