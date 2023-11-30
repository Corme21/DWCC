/*
Estase a desenvolver un sistema para xestionar a información do aeroporto. O sistema debe
manexar diferentes tipos de vehículos, incluídos os avións, e debe ser capaz de describir os
vehículos, identificando o seu modelo e capacidade. Ademais, a capacidade de voar é necesaria para
as aeronaves, especificando a compañía aérea á que pertencen.

Tarefas a realizar:

Define unha clase base chamada Vehículo que teña propiedades de modelo e capacidade. Esta clase
debe ter un método describe() que devolva a información do vehículo.

Crea un avión de clase que herde do vehículo. A clase Avión debe ter un atributo adicional chamado
aerolínea e un método fly() que indique que avión está a voar (mensaxe por pantalla) e a que
compañía aérea pertence.

Crea polo menos unha instancia da clase Avión, asigna valores aos seus atributos e mostra na
consola a descrición da aeronave e a mensaxe de que está voando.

Lembra usar a herdanza para organizar as clases de forma adecuada e poder reutilizar a
funcionalidade.
*/

class vehiculo{
    modelo;
    capacidad;
    constructor(modelo, capacidad){
        this.modelo = modelo;
        this.capacidad = capacidad;
    }

    describe(){
        document.write(`Modelo del coche: ${this.modelo}`);
        document.write(`Capacidad: ${this.capacidad}<br>`);
    }
}

class avion extends vehiculo{
    aerolinea;
    constructor(modelo, capacidad, aerolinea){
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.aerolinea = aerolinea;
    }

    fly(){
        document.write(`El avion de la compañia ${this.aerolinea} esta volando`);
    }
}

let miAvion = new avion();