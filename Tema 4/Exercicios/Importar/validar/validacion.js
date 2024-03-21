function validar(dni){
    let exDNI = /^[0-9]{8}[A-Z]{1}$/i;

    if(exDNI.test(dni)){
        alert("DNI valido");
    }else{
        alert("DNI no valido");
    }
}

export{validar}