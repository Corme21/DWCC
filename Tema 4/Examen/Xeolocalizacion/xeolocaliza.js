// Obtenemos la fecha actual
let fechaActual = new Date();

/* 
De la fecha obtenida, cogemos el mes. El mes que queremos sera el 
3(Abril), ya que Enero seria el 0.
*/
let mesActual = fechaActual.getMonth();

// Si el mes es 3 mostraremos en el docuento los datos de geolocalizacion
if (mesActual == 3) {
    navigator.geolocation.getCurrentPosition(posicion => {
        
        $("#datos").text(`Lonxitude: ${posicion.coords.longitude}; 
        Latitude: ${posicion.coords.latitude}`)
    });
}