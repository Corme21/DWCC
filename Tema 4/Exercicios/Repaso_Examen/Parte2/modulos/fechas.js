let dataActual = (fecha) =>{
    let fechaActual = fecha.toDateString();

    return fechaActual;
}

let dataSistema = (fecha) =>{
    let fechaSistema = fecha.toLocaleString();
    return fechaSistema;
}

export{dataSistema, dataActual}