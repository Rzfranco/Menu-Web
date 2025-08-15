document.addEventListener("DOMContentLoaded", function() {

    const sectionToggles = document.querySelectorAll(".section-toggle");

    sectionToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const menuItems = toggle.nextElementSibling;
            
            menuItems.classList.toggle("hidden");

            const arrow = toggle.querySelector(".arrow");
            const toggleText = toggle.querySelector(".toggle-text");

            if (menuItems.classList.contains("hidden")) {
                toggleText.textContent = "mostrar";
                arrow.style.transform = "translateY(-50%) rotate(-90deg)";
            } else {
                toggleText.textContent = "esconder";
                arrow.style.transform = "translateY(-50%) rotate(0deg)";
            }
        });
    });

});