function dibujarCarita(){
    let fecha = new Date();

    let data = fecha.toDateString();

    let lienzo = document.getElementById("lienzo");
    if (lienzo.getContext){
        let mano = lienzo.getContext("2d");
        
        mano.beginPath();
        mano.arc(250,230,50,0,Math.PI*2,true);
        mano.stroke();

        
        mano.font = "12px Arial";
        mano.fillText(data,205,230);
    }
}
dibujarCarita();