/*
Dado o obxecto nave espacial de tipo Object que contén os seguintes atributos:
• Lugar actual: string.
• Seguinte destino: string.
• Km percorridos: Decimal. 

Implementar os métodos para que arranque a nave dende o destino actual ao seguinte destino,
incorporando a distancia entre ambos puntos (algo arbitrario). Debe gardar o número de km
percorridos totais. Supoñemos que chega sempre ao destino. 
Corme------->Laxe 20km pois, teremos que engadir 20km aos km totais percorridos. 

Comprobar que a nave non é un obxecto mapa, e no caso de que non o sexa imprimir os
atributos (nome do atributo: valor), sen usar observadores. 2,5Ptos. 

Saída do programa:
Lugar actual: Corme
Seguinte destino: Laxe
Kmpercorridos: 15km. 

RÚBRICA:
Definición do obxecto: 1pto.
O obxecto funciona e a lóxica do programa é correcta: 1 pto. 
Comproba e imprime os datos do obxecto: 0,5ptos.
*/

//Construimos a clase nave cos atributos lugarActual, destino y km
class nave{
    lugarActual;
    destino;
    km = 0;

    constructor(lugarActual, destino) {

        this.lugarActual = lugarActual;
        this.destino = destino;
    }

    //Creamos o metodo arranque
    arranque(){
        let distancia = prompt("Introduce a distancia do viaxe");

        document.write(`Vas a viaxar ${distancia} km dende ${this.lugarActual} ata ${this.destino}<br>`);
        document.write("Boa viaxe<br><br>");

        //Engadimos a distancia ao quilometraxe da nave
        this.km += distancia;
    }
}

//Pedimos os datos ao usuario
let actual = prompt("Introduce o lugar actual");

let destino = prompt("Introduce o lugar de destino");

//Creamos o obxeto para a clase nave
let miNave = new nave(actual, destino);

miNave.arranque();

//Comprobamos se nave é un obxeto mapa, se non o é, imprimirase os datos
if(nave instanceof Map){
    document.write("Error");
}else{
    let atributos = [];
    let i = 0;

    for(elemento in miNave){
        atributos[i] = elemento;
        i = i + 1;
    }
    //Imprimimos os atributos e os valores correspondentes
    let valor = Object.values(miNave);
    for(let a = 0; a<atributos.length; a++){
        document.write(`${atributos[a]} : ${valor[a]}<br>`);
    }
}
