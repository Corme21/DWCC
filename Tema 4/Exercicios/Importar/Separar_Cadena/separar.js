function separar(cadena){

    let mitad1 = "";
    let mitad2 = "";

    let dividir = cadena.length/2;

    if(cadena.length % 2 != 0){
        cadena += "0";

        dividir = cadena.length/2;

        mitad1 = cadena.substring(0, dividir);
        mitad2 = cadena.substring(dividir);

        console.log(mitad1);
        console.log(mitad2);
    }else{

        mitad1 = cadena.substring(0, dividir);
        mitad2 = cadena.substring(dividir);
        
        console.log(mitad1);
        console.log(mitad2);
    }
}

export{separar}