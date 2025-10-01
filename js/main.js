function toggleTheme(btn, icon) {
    btn.addEventListener("click", () => {        
        // console.log("click");
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            icon.textContent = "sunny";
        } else {
            icon.textContent = "bedtime";
        }
    });
}

function formLink(links){
    links.forEach(link => {
        link.addEventListener('click', () => {
            // formLink(link);
            let url = link.getAttribute('data-url');
            // console.log('Formation link clicked:', url);
            window.open(url, '_blank');
            
        });
    });
}

function socialPopup(btn, info){
    btn.addEventListener('click', () => {
        Swal.mixin({
            toast: true
        }).fire({
            title: info,
            customClass: {
                popup: 'mi-alerta',         // contenedor principal
                confirmButton: 'sw2-boton'   // botón
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("toggleTheme");
    const icon = document.getElementById("icon");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const github = document.getElementById("github");
    const linkedin = document.getElementById("linkedin");

    const formationLinks = document.querySelectorAll('.formation-link');
    const proyectLinks = document.querySelectorAll('.proyects-list li');
    
    formLink(formationLinks);
    formLink(proyectLinks);
    formLink([github, linkedin]);
    socialPopup(email, "danielmarinlopez898@gmail.com")
    socialPopup(tel, "+34 618 36 79 35")

    toggleTheme(btn, icon);
});