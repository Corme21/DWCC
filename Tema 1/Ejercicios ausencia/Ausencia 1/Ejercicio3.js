/*
Crea un mapa que almacene 10 nomes de froita e o seu prezo. 
Calcula finalmente o importe total da compra realizada.
Naranxas. 10€

Peras. 20€

Total: 30€

Con IVA: 69,6 (iva do 16%).
*/

let total = 0;

let compra = new Map([
    ["Pera", 20],
    ["Naranxas", 10],
    ["Manzás", 15],
    ["Limons", 21],
    ["Marakuya", 18],
    ["Platano", 12],
    ["Melocoton", 12],
    ["Uvas", 25],
    ["Piña", 28],
    ["Pitahaya", 10]
]);

for(let[fruta, precio] of compra){
    total += precio;
    document.write(`${fruta}: ${precio} €</br>`);

}
document.write(`</br>Total: ${total} €`);

let IVA = (total * 16) / 100;

document.write(`</br>Con IVA: ${IVA}€ (iva do 16%)`);