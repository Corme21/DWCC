let notificacion = () =>{
    Notification.requestPermission().then(respuesta=>{
        if(respuesta == "granted"){
           new Notification("Gracias"); 
        }else{
            
        }
    });
}

let intervalo1 = setInterval(notificacion(), 30000);