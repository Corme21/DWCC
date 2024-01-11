//Crear expresiones regulares para:

//Recibir exclusivamente numeros do 0 ao 4
let expresion1 = new RegExp('^[0-4]$');
document.write("4 ");
document.write(expresion1.test("4")+ "<br>");//true
document.write("francia ");
document.write(expresion1.test("francia")+ "<br>");//False

//Recibir exclusivamente cadeas que comencen por maiuscula
let expresion2 = /^[A-Z]/;
document.write("ASDFASF ");
document.write(expresion2.test("ASDFASF")+ "<br>");//true
document.write("aLemania ");
document.write(expresion2.test("aLemania")+ "<br>");//False

//Recibir exclusivamente cadeas que rematen por "dw"
let expresion3 = new RegExp('dw$');
document.write("sarf ");
document.write(expresion3.test("sarf")+ "<br>");//False
document.write("wedw ");
document.write(expresion3.test("wedw")+ "<br>");//true

//Impedir que se reciban numeros que conteñan 0
let expresion4 = /[^0]*/;
document.write("12345 ");
document.write(expresion4.test("12345")+ "<br>");//true
document.write("5042 ");
document.write(expresion4.test("5042")+ "<br>");//False

//Validar
let dni = /^[0-9]{8}[A-Z]{1}$/i;
document.write("23955733Z ");
document.write(dni.test("23955733Z")+ "<br>");//true

let cif = /^[A-Z]{1}[0-9]{7}[A-Z0-9]$/;
document.write("G1234567K ");
document.write(cif.test("G1234567K")+ "<br>");//true

let cp = /^[0-9]{5}$/;
document.write("15114 ");
document.write(cp.test("15114")+ "<br>");//true

let email = /^[A-Za-z0-9.]+@[a-z0-9.]+\.[a-z]{2,4}$/i;
document.write("jesusallo.21@gmail.com ");
document.write(email.test("jesusallo.21@gmail.com")+ "<br>");//true

//Prohibido numeros na cadea
let prohibido = /^[^0-9]*$/;
document.write("hola ");
document.write(prohibido.test("hola")+ "<br>");//true
document.write("g5f ");
document.write(prohibido.test("g5f")+ "<br>");//False

