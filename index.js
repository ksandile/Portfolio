document.addEventListener('DOMContentLoaded', function() {
    // Select relevant DOM elements
    let sections = document.querySelectorAll("section");
    let footer = document.getElementById("footer");
    let homeImg = document.querySelector(".home-img img");
    let textAnimation = document.querySelector(".text-animation");
    let socialIcons = document.querySelector(".social-icons");

    // Mobile Menu
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    /**
     * Toggle mobile menu visibility on menu icon click.
     * Also toggles visibility of specific elements when the menu is open.
     */
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
        document.body.classList.toggle("menu-open"); // Add or remove class on body
        
        // Toggle visibility of home-img, textAnimation, and socialIcons
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

    /**
     * Close the mobile menu when a menu item is clicked.
     * Ensures specific elements are shown when the menu is closed.
     */
    navbar.querySelectorAll("a").forEach(function(item) {
        item.addEventListener("click", function() {
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open"); // Remove class on body
            
            // Ensure home-img, textAnimation, and socialIcons are visible
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

    /**
     * Show the My Services section and hide other sections and footer.
     */
    document.getElementById("myServices").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        hideAllSections();
        document.querySelector(".my-services").style.display = "block"; // Show the services section
        footer.style.display = "none"; // Hide the footer
    });

    /**
     * Show the About Me section and hide other sections and footer.
     */
    document.getElementById("aboutMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("about").style.display = "block"; // Show the about me section
        footer.style.display = "none"; // Hide the footer
    });

    /**
     * Show the My Projects section, hide other sections and footer, and scroll smoothly to projects.
     */
    document.getElementById("myProjects").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const projectsSection = document.getElementById("projectsSection");
        projectsSection.style.display = "block"; // Show the my projects section
        projectsSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to projects
        footer.style.display = "none"; // Hide the footer
    });

    // Show the Home section when the Home link is clicked
    document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.querySelector(".Home").style.display = "block"; // Show the home section
        footer.style.display = "none"; // Optionally hide the footer if needed
    });

    // "Hire Me" button logic
    document.getElementById("hireMeBtn").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        footer.style.display = "block"; // Show the footer (contact section)
        footer.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to footer
    });


    /**
     * Show the Contact Me section (footer) and hide other sections.
     */
    document.getElementById("contactMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        footer.style.display = "block"; // Show the footer
    });

    /**
     * Function to hide all sections.
     */
    function hideAllSections() {
        sections.forEach(function(section) {
            section.style.display = "none"; // Hide all sections
        });
    }

    // Back Home button
    const backHomeButton = document.querySelectorAll(".Home-btn button");

    /**
     * Add event listener to each "Home" button to reload the page.
     */
    backHomeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            // Reload the page
            location.reload();
        });
    });
});

