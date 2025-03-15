window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");
    const toggleBtn = document.getElementById("toggle-audio");
    const icon = document.getElementById("audio-icon");

    // Botón para pausar/reproducir
    toggleBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            icon.src = "./img/pausa.svg";
        } else {
            audio.pause();
            icon.src = "./img/boton-de-play.svg";
        }
    });

    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");

        setTimeout(() => {
            loader.style.display = "none";
            audio.volume = 0.5;
            audio.play().then(() => {
                console.log("Música iniciada automáticamente.");
            }).catch(() => {
                console.warn("Autoplay bloqueado por el navegador.");
            });
        }, 4000);
    });
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
});

function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    new bootstrap.Modal(document.getElementById('imageModal')).show();
}