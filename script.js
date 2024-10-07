
document.addEventListener("DOMContentLoaded", function() {
    // Add class to header for animation effect
    const headerTitle = document.querySelector(".title");
    headerTitle.classList.add("slide-in");

    // Smooth scrolling for navbar links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
