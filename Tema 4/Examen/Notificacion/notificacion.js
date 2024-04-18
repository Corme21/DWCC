// Pedimos permiso al usuario para poder mostrar las notificacións
Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
        // Creamos y mostramos la notificación
        var notification = new Notification("No vamos a Youtube", {
            body: "Pulsa para ir a youtube",
            icon: "icono.png"
        });

        // Cuando el usuario haga click en la notificacion, sera enviado a la pagina de youtube
        notification.onclick = function () {
            window.location.href = "http://youtube.com";
        };
    } else {
        console.log("O usuario non aceptou a petición de notificación.");
    }
});
