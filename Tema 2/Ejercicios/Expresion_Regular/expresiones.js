//Crear expresiones regulares para

//Recibir exclusivamente numeros do 0 ao 4
let expresion1 = new RegExp('^[0-4]$');
document.write("4 ");
document.write(expresion1.test("4")+ "<br>");
document.write("francia ");
document.write(expresion1.test("francia")+ "<br>");

//Recibir exclusivamente cadeas que comencen por maiuscula
let expresion2 = /^[A-Z]/;
document.write("ASDFASF ");
document.write(expresion2.test("ASDFASF")+ "<br>");
document.write("aLemania ");
document.write(expresion2.test("aLemania")+ "<br>");

//Recibir exclusivamente cadeas que rematen por "dw"
let expresion3 = new RegExp('dw$');
document.write("sarf ");
document.write(expresion3.test("sarf")+ "<br>");
document.write("wedw ");
document.write(expresion3.test("wedw")+ "<br>");

//Impedir que se reciban numeros que conteñan 0
let expresion4 = /[^0]*/;
document.write("12345 ");
document.write(expresion4.test("12345")+ "<br>");
document.write("5042 ");
document.write(expresion4.test("5042")+ "<br>");