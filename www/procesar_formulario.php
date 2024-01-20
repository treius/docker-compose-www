<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "treius@avalerom.es"; // Cambia esto con tu dirección de correo electrónico

    $asunto = "Nuevo mensaje de contacto de $nombre";
    $cuerpoMensaje = "Nombre: $nombre\nCorreo Electrónico: $correo\nMensaje:\n$mensaje";

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpoMensaje);

    // Redirigir a una página de agradecimiento o mostrar un mensaje de éxito
    header("Location: gracias.html");
    exit();
}
