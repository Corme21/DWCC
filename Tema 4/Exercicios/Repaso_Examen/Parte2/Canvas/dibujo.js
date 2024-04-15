function dibujarCarita(){
    let lienzo = document.getElementById("lienzo");
    if (lienzo.getContext){
        let mano = lienzo.getContext("2d");
        mano.beginPath();
        mano.arc(75,75,50,0,Math.PI*2,true);
        mano.stroke();
    }
}
dibujarCarita();