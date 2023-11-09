/*
Programa que chame dende unha funcion a outra para validar un codigo postal e comprobe a 
provincia de España a que pertence ese codigo (dous primeiros numeros)
O programa principal lanza a funcion que devolvera so o nome da provincia do codigo postal, 
pasada a funcion
*/

let codigo = prompt("Introduce el codigo postal");

let España = new Map([
    ["01", "Alava"],
    ["02", "Albacete"],
    ["03", "Alicante"],
    ["04", "Almeria"],
    ["05", "Avila"],
    ["06", "Badajoz"],
    ["07", "Baleares"],
    ["08", "Barcelona"],
    ["09", "Burgos"],
    ["10", "Cáceres"],
    ["11", "Cádiz"],
    ["12", "Castellón"],
    ["13", "Ciudad Real"],
    ["14", "Cordoba"],
    ["15", "La Coruña"],
    ["16", "Cuenca"],
    ["17", "Gerona"],
    ["18", "Granada"],
    ["19", "Guadalajara"],
    ["20", "Guipúzcua"],
    ["21", "Huelva"],
    ["22", "Huesca"],
    ["23", "Jaén"],
    ["24", "León"],
    ["25", "Lérida"],
    ["26", "La Rioja"],
    ["27", "Lugo"],
    ["28", "Madrid"],
    ["29", "Málaga"],
    ["30", "Murcia"],
    ["31", "Navarra"],
    ["32", "Orense"],
    ["33", "Asturias"],
    ["34", "Palencia"],
    ["35", "Las Palmas"],
    ["36", "Pontevedra"],
    ["37", "Salamanca"],
    ["38", "Santa Cruz de Tenerife"],
    ["39", "Cantabria"],
    ["40", "Segovia"],
    ["41", "Sevilla"],
    ["42", "Soria"],
    ["43", "Tarragona"],
    ["44", "Teruel"],
    ["45", "Toledo"],
    ["46", "Valencia"],
    ["47", "Valladolid"],
    ["48", "Vizcaya"],
    ["49", "Zamora"],
    ["50", "Zaragoza"],
    ["51", "Ceuta"],
    ["52", "Melilla"]
]);

/*
function validarCodigo(codigo){
    for(let i = 0; i < codigo.lenght; i++){
        if(i == 4){
            return true;
        }else{
            return false;
        }
    }
}
*/

function validarCodigo(codigo){
    if(codigo.length == 5){
        return true
    }else{
        return false
    }
}

function codigoProvinc(validarCodigo, codigo, España){
    if(validarCodigo(codigo) == false){
        console.log("El codigo no es correcto");
    }else{
        for(let[numero, provincia] of España){
            if(numero == codigo.substring(0,2)){
                console.log(`El codigo es de ${provincia}`);
            }
        }
    }
}

codigoProvinc(validarCodigo, codigo, España);