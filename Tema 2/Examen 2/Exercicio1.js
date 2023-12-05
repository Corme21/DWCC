/*
Crea un programa que xestione o almacén dunha empresa co seguinte funcionamento.

Os produtos entran no almacén porque se compran a un provedor, nunha cantidade que se sumará
á cantidade actual do almacén dese produto.

Os produtos saen do almacén facendo unha venta que quitará cantidade das existencias actuais.

Do produto interesa gardar:
Código, nome, provedor, existencias en almacén, última venta realizada e última compra
realizada. 

Un produto pode darse de alta no almacén sen ser mercado previamente (non precisa provedor, nin
cantidade) ou con todos os datos cubertos. (Múltiple construtor). As datas serán gardadas como
“string” e no caso de non telas, será a data actual o día hoxe. Ter en conta que ao crear este
produto, en todos os casos, as existencias actuais serán sempre 0. 

Os movementos de almacén sempre son mediante compras ou ventas.

RÚBRICA:
Implementar o exercicio de tal forma que:
1) Carguemos un só producto. (1pto).
2) Carguemos 3 productos. Uso obrigatorio de array. (1pto)
3) Vexamos os datos de todos os produtos almacenados. 1 (pto). 
a)Nome: o nome.
b)Provedor: o provedor. 
c) Existencias actuais: Existencias no almacén.
d) Data da última compra realizada
*/

//Creamos la clase almacen
class almacen{
    codigo;
    nome;
    provedor;
    existencias = 0;
    ultimaVenta;
    ultimaCompra;

    //Creamos el constructor
    constructor(codigo, nome, provedor, ultimaVenta, ultimaCompra){
        if(provedor == undefined){
            this.codigo = codigo;
            this.nome = nome;
            this.ultimaVenta = ultimaVenta;
            this.ultimaCompra = ultimaCompra;
        }else{
            this.codigo = codigo;
            this.nome = nome;
            this.provedor = provedor;
            this.ultimaVenta = ultimaVenta;
            this.ultimaCompra = ultimaCompra;
        }
    }

    //Creamos la funcion de compras
    comprar(){
        let cantidad = prompt("Introduce la cantidad a comprar");

        this.existencias += cantidad;

        document.write(`Se almaceno ${cantidad}<br>`);
        document.write(`Las existencias del almacen son ${this.existencias}<br>`);
    }

    //Creamos la funcion de ventas
    vender(){
        let cantidad = prompt("Introduce la cantidad a vender");

        this.existencias -= cantidad;

        document.write(`Se vendio ${cantidad}<br>`);
        document.write(`Las existencias del almacen son ${this.existencias}<br>`);
    }

    //Creamos una funcion para mostrar los datos
    mostrar(){
        document.write(`Nome: ${this.nome}<br>`);
        if(provedor != undefined){
            document.write(`Proveedor: ${this.provedor}<br>`);
        }
        document.write(`Existencias actuais: ${this.existencias}<br>`);
        document.write(`Data da ultima compra: ${this.ultimaCompra}<br><br>`);
    }
}

//Pedimos por pantalla los datos
let codigo = prompt("Introduce el codigo del producto");

let nome = prompt("Introduce el nombre del producto");

let provedor = prompt("Introduce el proveedor");
if(provedor == ""){
    provedor = undefined;
}

let ultimaVenta = prompt("Introduce la fecha de la ultima venta");

let ultimaCompra = prompt("Introduce la fecha de la ultima compra");

//Creamos os obxetos para a clase almacen
//Un para as compras
let miAlmacen = new almacen(codigo, nome, provedor, ultimaCompra);

miAlmacen.comprar();

miAlmacen.mostrar();

//E outro para as vendas
let miAlmacen2 = new almacen(codigo, nome, provedor, ultimaVenta);

miAlmacen.vender();

miAlmacen.mostrar();
