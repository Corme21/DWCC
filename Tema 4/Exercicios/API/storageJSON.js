var cadea = {"Marca": "Volkswagen", "Modelo": "Golf", "Bastidor": "123456789",  
"Cilindrada": "6", "Puertas": "4", "Color": "Negro", "Propietario": {"nome": "Pepe", 
"Apelidos": "Problemas", "Direccion": "Abelungue", "Telefono": "654321987", "Correo": "algo@gmail.com"}}

localStorage.setItem("clave", JSON.stringify(cadea));
var obxetoJSON= JSON.parse(localStorage.getItem("clave"));

console.log(obxetoJSON);

localStorage.clear();