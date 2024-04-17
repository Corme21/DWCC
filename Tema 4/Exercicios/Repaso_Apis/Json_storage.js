var coche = {
    "Marca": "Wolkswagen",
    "Modelo": "Golf",
    "Nº_Bastidor": "123d456a",
    "Cilindrada": "8",
    "Puertas": "4",
    "Color": "Blanco",
    "Datos_Propietario":{
        "Nombre": "Jesus",
        "Apellidos": "Allo Castro",
        "Direccion": "Corme",
        "Telefono": "123456789",
        "Correo": "abelungue@gmail.com"
    }
}

localStorage.setItem("vehiculo", JSON.stringify(coche));

var info = JSON.parse(localStorage.getItem("vehiculo"));

document.write(info.Datos_Propietario.Apellidos);