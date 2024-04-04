var cadea = {"123456": "Juan"}

localStorage.setItem("clave", JSON.stringify(cadea));
var obxetoJSON= JSON.parse(localStorage.getItem("clave"));

console.log(obxetoJSON);