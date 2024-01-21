function changeLanguage() {
    var selectedLanguage = document.getElementById("language-selector").value;

    if (selectedLanguage === "es") {
        //ABOUTME
        document.getElementById("header-text").innerText = "Técnico en Administración de Sistemas Informáticos";
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        `;
        document.getElementById("about-title").innerText = "Sobre Mí";
        document.getElementById("about-text").innerHTML = `
            <b>Trabajo en equipo</b>, <b>aprendizaje constante</b>, <b>puntualidad</b>, <b>educación</b> y <b>formalidad</b> son los pilares que
            defiendo en mi enfoque laboral. Mi pasión por la tecnología siempre ha sido más que una mera
            afición; la considero una forma constante de explorar y aprender. Mi pasión por el cacharreo es lo que impulsa
            mi deseo de sumergirme en los aspectos prácticos y experimentales de la tecnología.
            <br><br>
            Como <b>técnico informático</b>, mi compromiso es mantenerme a la <b>vanguardia</b> en el uso de nuevas
            tecnologías y expandir mis conocimientos en informática y electrónica, <b>siempre en busca de nuevas
            oportunidades</b> para aplicar y perfeccionar mis habilidades. Este enfoque proactivo, combinado con mi
            capacidades y experiencias para trabajar en equipo de manera efectiva, me posiciona como un
            profesional preparado para enfrentar los desafíos en el ámbito tecnológico.
        `;
        document.getElementById("projects-title").innerText = "Proyectos";
        document.getElementById("projects-text").innerHTML = `
            A lo largo de mi camino de aprendizaje he adquirido diferentes conocimientos que me han permitido desarrollar varios proyectos.
            <br>
            Varios de ellos se pueden encontrar en mi perfil de <a href="https://github.com/treius?tab=repositories">GitHub</a>.
            <br>
            Otros no están publicados actualmente ya que no han sido terminados o documentados aún, pero los mencionaré aquí:
        `;
        document.getElementById("projects-list").innerHTML = `
            <li>
                Modificación Hardware/Software de consolas de 5a/8a generación.
            </li>
            <li>
                Servidor NAS para almacenamiento personal y con acceso remoto.
            </li>
        `;
        document.getElementById("cv-title").innerText = "CV";
        document.getElementById("cv-text").innerHTML = `
            Pulse sobre el enlace para descargar y visualizar mi CV: <br>
            <a href="info_personal/CV-2024-TEMP.pdf" target="_blank">Curriculum Vitae de Alberto</a>
        `;
        document.getElementById("copyright").innerText = "© 2024 Alberto Valero Mlynaricova - Sitio desarrollado con pasión por la programación";
    } 
    
    else if (selectedLanguage === "en") {
        // ABOUTME
        document.getElementById("header-text").innerText = "Systems Administration Technician";
        document.getElementById("nav-text").innerHTML = `
            <ul>
                <li><a href="aboutme.html">Index</a></li>
                <li><a href="contacto.html">Contact</a></li>
            </ul>
        `;
        document.getElementById("about-title").innerText = "About Me";
        document.getElementById("about-text").innerHTML = `
            <b>Teamwork</b>, <b>continuous learning</b>, <b>punctuality</b>, <b>education</b>, and <b>professionalism</b> are the pillars I uphold in my work approach. 
            My passion for technology has always been more than just a hobby; I see it as a constant way to explore and learn. 
            My passion for experimenting motivates me to explore the hands-on and experimental aspects of technology.
            <br><br>
            As a <b>computer technician</b>, my commitment is to stay at the <b>forefront</b> of using new technologies and expanding my knowledge 
            in computer science and electronics, <b>always seeking new opportunities</b> to apply and refine my skills. This proactive approach, 
            combined with my capabilities and experiences to effectively work in a team, positions me as a professional ready to face challenges in the technological field.
        `;

        document.getElementById("projects-title").innerText = "Projects";
        document.getElementById("projects-text").innerHTML = `
            Throughout my learning journey, I've gained diverse knowledge that has enabled me to undertake various projects.
            <br>
            Several of them can be found on my <a href="https://github.com/treius?tab=repositories">GitHub</a> profile.
            <br>
            Others are not currently public as they haven't been completed or documented yet, but I'll mention them here:
        `;
        document.getElementById("projects-list").innerHTML = `
            <li>
                Hardware/Software modification of 5th/8th generation gaming consoles.
            </li>
            <li>
                Personal storage NAS server with remote access.
            </li>
        `;
        document.getElementById("cv-title").innerText = "CV";
        document.getElementById("cv-text").innerHTML = `
            Click on the link to download and view my CV: <br>
            <a href="info_personal/CV-2024-TEMP.pdf" target="_blank">Curriculum Vitae of Alberto</a>
        `;
        document.getElementById("copyright").innerText = "© 2024 Alberto Valero Mlynaricova - Site developed with passion for programming";
    }
}
