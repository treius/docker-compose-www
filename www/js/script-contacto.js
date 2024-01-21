function changeLanguage() {
    var selectedLanguage = document.getElementById("language-selector").value;

    if (selectedLanguage === "es") {
        document.getElementById("header-text").innerText = "CONTACTO";
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        `;
        document.getElementById("formulario").innerHTML = `
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
        
            <label for="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" required>
        
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
        
            <button type="submit">Enviar</button>
        `;
        document.getElementById("copyright").innerText = "© 2024 Alberto Valero Mlynaricova - Sitio desarrollado con pasión por la programación";
    } 
    
    else if (selectedLanguage === "en") {
        document.getElementById("header-text").innerText = "CONTACT";
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Index</a></li>
                <li><a href="contacto.html">Contact</a></li>
            </ul>
        `;
        document.getElementById("formulario").innerHTML = `
            <label for="nombre">Name:</label>
            <input type="text" id="nombre" name="nombre" required>
        
            <label for="correo">Email:</label>
            <input type="email" id="correo" name="correo" required>
        
            <label for="mensaje">Message:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
        
            <button type="submit">Enviar</button>
        `;

        document.getElementById("copyright").innerText = "© 2024 Alberto Valero Mlynaricova - Site developed with passion for programming";
    }
}
