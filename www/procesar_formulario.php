<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "correo@example.es"; // Cambia esto con tu dirección de correo electrónico

    $asunto = "Nuevo mensaje de contacto de $nombre";
    $mensaje = "Nombre: $nombre\nCorreo Electrónico: $correo\nMensaje:\n$mensaje";

    // Usar el comando mail en una línea de PHP
    $resultado = shell_exec("echo '$mensaje' | mail -s '$asunto' '$destinatario'");

    if ($resultado) {
        header("Location: gracias.html");
        exit();
    } else {
        echo "Este servicio no se encuentra actualmente disponible, disculpe las molestias";
        // header("Location: error.html");
        // exit();
    }
}

