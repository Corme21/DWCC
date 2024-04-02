let sumar = (primer, segun) =>{
    let total = primer + segun;
   console.log(`Total suma = ${total}`);
}

let restar = (primer, segun) =>{
    let total = primer - segun;
    console.log(`Total resta = ${total}`);
}

let dividir = (primer, segun) =>{
    let total = primer / segun;
    console.log(`Total division = ${total}`);
}

let multiplicar = (primer, segun) =>{
    let total = primer * segun;
    console.log(`Total multiplicacion = ${total}`);
}

export{sumar, restar, dividir, multiplicar}