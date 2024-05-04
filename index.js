document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll("section");
    let footer = document.getElementById("footer");
    let homeImg = document.querySelector(".home-img img"); // Target the image within home-img
    let textAnimation = document.querySelector(".text-animation");
    let socialIcons = document.querySelector(".social-icons");

    // Mobile Menu
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    // Toggle mobile menu on menu icon click
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
        document.body.classList.toggle("menu-open"); // Add or remove class on body
        
        // Toggle visibility of home-img
        if (homeImg) {
            homeImg.classList.toggle("hidden");
        }
        if (textAnimation) {
            textAnimation.classList.toggle("hidden");
        }
        if (socialIcons) {
            socialIcons.classList.toggle("hidden");
        }
    });

    // Close mobile menu when a menu item is clicked
    navbar.querySelectorAll("a").forEach(function(item) {
        item.addEventListener("click", function() {
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open"); // Remove class on body
            
            // Ensure home-img is hidden when a menu item is clicked
            if (homeImg && homeImg.classList.contains("hidden")) {
                homeImg.classList.remove("hidden");
            }

            if (textAnimation && textAnimation.classList.contains("hidden")) {
                textAnimation.classList.remove("hidden");
            }
            if (socialIcons && socialIcons.classList.contains("hidden")) {
                socialIcons.classList.remove("hidden");
            }
        });
    });

    // My Services
    document.getElementById("myServices").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        hideAllSections();
        document.querySelector(".my-services").style.display = "block"; // Show the services section
        footer.style.display = "none"; // Hide the footer
    });

    // About Me
    document.getElementById("aboutMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("about").style.display = "block"; // Show the about me section
        footer.style.display = "none"; // Hide the footer
    });

    // My Projects
    document.getElementById("myProjects").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("projectsSection").style.display = "block"; // Show the my projects section
        document.getElementById("projectsSection").scrollIntoView({ behavior: "smooth" }); // Smooth scroll to projects
        footer.style.display = "none"; // Hide the footer
    });

    // Contact Me
    document.getElementById("contactMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        footer.style.display = "block"; // Show the footer
    });

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(function(section) {
            section.style.display = "none"; // Hide all sections
        });
    }

    // Back Home button
    const backHomeButton = document.querySelectorAll(".Home-btn button");

    // Add event listener to each "Home" button
    backHomeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            // Reload the page
            location.reload();
        });
    });
});