/*
Crea un prototipo chamado almacen que conteña inicialmente:
Nome
Ubicacion
Numero de productos
E o observador para os tres atributos
temos que crear un almacen cos datos "Xoguetes", "Laxe", 200
Imprimimos e visualizamos os datos.
Engadimos un novo atributo FacturacionAnual con 100000€
Engadimos unha funcion para ver a nova facturacion
Imprimimos todo
*/

function Almacen(nome, ubicacion, numProductos){
    this.nome = nome;
    this.ubicacion = ubicacion;
    this.numProductos = numProductos;
    this.mostrar = function(){
        console.log(`O almacen ${this.nome}`);
        console.log(`Esta ubicado en ${this.ubicacion}`);
        console.log(`Ten ${this.numProductos} productos`);
    };
};

let miAlmacen = new Almacen("Xoguetes", "Laxe", 200);
miAlmacen.mostrar();

Almacen.prototype.facturacionAnual = 100000

Almacen.prototype.verFacturacion = function(){
    console.log(`Facturación anual: ${this.facturacionAnual}`);
}

miAlmacen.verFacturacion();