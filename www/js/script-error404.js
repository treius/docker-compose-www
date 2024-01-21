function changeLanguage() {
    var selectedLanguage = document.getElementById("language-selector").value;

    if (selectedLanguage === "es") {
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        `;
        document.getElementById("error-text").innerText = "La página a la que intenta acceder no existe";
    } 
    else if (selectedLanguage === "en") {
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Index</a></li>
                <li><a href="contacto.html">Contact</a></li>
            </ul>
        `;
        document.getElementById("error-text").innerText = "The page you are trying to access doesn't exist";
    }
}
