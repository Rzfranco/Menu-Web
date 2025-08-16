

document.addEventListener("DOMContentLoaded", function() {
    // Código existente para el acordeón
    const sections = document.querySelectorAll(".menu-section");
    sections.forEach(section => {
        section.classList.add("collapsed");
        const toggle = section.querySelector(".section-toggle");
        toggle.addEventListener("click", () => {
            section.classList.toggle("collapsed");
        });
    });

    // Código para el desplazamiento suave (smooth scroll)
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) { // Verifica que el botón exista antes de agregar el evento
        backToTopBtn.addEventListener("click", function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});