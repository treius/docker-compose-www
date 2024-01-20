function changeLanguage() {
    var selectedLanguage = document.getElementById("language-selector").value;

    if (selectedLanguage === "es") {
        document.getElementById("header-text").innerText = "Técnico en Administración de Sistemas Informáticos";
        document.getElementById("about-title").innerText = "Sobre Mí";
        document.getElementById("about-text").innerText = "Breve descripción sobre quién eres, tus habilidades y experiencia.";
        document.getElementById("projects-title").innerText = "Proyectos";
        document.getElementById("projects-text").innerText = "Destaca algunos de tus proyectos más relevantes con enlaces y descripciones.";
        document.getElementById("cv-title").innerText = "CV";
        document.getElementById("cv-text").innerText = "Adjunta enlaces para descargar tus CV en diferentes formatos.";
        document.getElementById("copyright").innerText = "© 2024 Tu Nombre - Sitio desarrollado con pasión por la programación";
    } else if (selectedLanguage === "en") {
        document.getElementById("header-text").innerText = "Systems Administration Technician";
        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("about-text").innerText = "Brief description about who you are, your skills, and experience.";
        document.getElementById("projects-title").innerText = "Projects";
        document.getElementById("projects-text").innerText = "Highlight some of your most relevant projects with links and descriptions.";
        document.getElementById("cv-title").innerText = "CV";
        document.getElementById("cv-text").innerText = "Provide links to download your CV in different formats.";
        document.getElementById("copyright").innerText = "© 2024 Your Name - Site developed with passion for programming";
    }
}
