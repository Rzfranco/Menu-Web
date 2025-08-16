document.addEventListener("DOMContentLoaded", function() {
    // Código para el acordeón
    const sections = document.querySelectorAll(".menu-section");

    sections.forEach(section => {
        // Asegura que todas las secciones estén colapsadas al cargar la página
        section.classList.add("collapsed");

        // Selecciona el botón para alternar dentro de cada sección
        const toggle = section.querySelector(".section-toggle");
        
        // Añade el evento de clic
        toggle.addEventListener("click", () => {
            // Alterna la clase 'collapsed'
            section.classList.toggle("collapsed");
        });
    });

    // Código para el desplazamiento suave (smooth scroll)
    const backToTopBtn = document.getElementById("back-to-top");
    
    // Verifica que el botón exista antes de agregar el evento
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function(e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});