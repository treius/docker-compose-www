function changeLanguage() {
    var selectedLanguage = document.getElementById("language-selector").value;

    if (selectedLanguage === "es") {
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        `;
        document.getElementById("main-text").innerHTML = `
            <h2>¡Gracias por ponerse en contacto!</h2>
            <p>Me pondré en contacto con usted pronto.</p>
        `;
        document.getElementById("copyright").innerText = "© 2024 Alberto Valero Mlynaricova - Sitio desarrollado con pasión por la programación";
    } 
    else if (selectedLanguage === "en") {
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Index</a></li>
                <li><a href="contacto.html">Contact</a></li>
            </ul>
        `;
        document.getElementById("main-text").innerHTML = `
            <h2>Thank you for reaching out!</h2>
            <p>I will get in touch with you soon.</p>
        `;
        document.getElementById("copyright").innerText = "© 2024 Alberto Valero Mlynaricova - Site developed with passion for programming";
    }
}
