
// Mobile navigation menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("navLinks")
            .classList.remove("active");
    });
});

// Display current year
document.getElementById("year").textContent =
    new Date().getFullYear();
