document.addEventListener('DOMContentLoaded', function() {
    // Select relevant DOM elements
    let sections = document.querySelectorAll("section");
    let footer = document.getElementById("footer");
    let homeImg = document.querySelector(".home-img img");
    let textAnimation = document.querySelector(".text-animation");
    let socialIcons = document.querySelector(".social-icons");
    let downloadCVBtn = document.querySelector(".btn2"); // Select the Download CV button

    // Mobile Menu
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
        document.body.classList.toggle("menu-open");
        
        if (homeImg) homeImg.classList.toggle("hidden");
        if (textAnimation) textAnimation.classList.toggle("hidden");
        if (socialIcons) socialIcons.classList.toggle("hidden");
    });

    navbar.querySelectorAll("a").forEach(function(item) {
        item.addEventListener("click", function() {
            navbar.classList.remove("active");
            document.body.classList.remove("menu-open");
            
            if (homeImg && homeImg.classList.contains("hidden")) homeImg.classList.remove("hidden");
            if (textAnimation && textAnimation.classList.contains("hidden")) textAnimation.classList.remove("hidden");
            if (socialIcons && socialIcons.classList.contains("hidden")) socialIcons.classList.remove("hidden");
        });
    });

    document.getElementById("myServices").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.querySelector(".my-services").style.display = "block";
        footer.style.display = "none";
    });

    document.getElementById("aboutMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.getElementById("about").style.display = "block";
        footer.style.display = "none";
    });

    document.getElementById("myProjects").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const projectsSection = document.getElementById("projectsSection");
        projectsSection.style.display = "block";
        projectsSection.scrollIntoView({ behavior: "smooth" });
        footer.style.display = "none";
    });

    document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.querySelector(".Home").style.display = "block";
        downloadCVBtn.style.display = "inline-block"; // Show the Download CV button when Home is visible
        footer.style.display = "none";
    });

    document.getElementById("hireMeBtn").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        footer.style.display = "block";
        footer.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contactMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        footer.style.display = "block";
    });

    function hideAllSections() {
        sections.forEach(function(section) {
            section.style.display = "none";
        });
        downloadCVBtn.style.display = "none"; // Hide the Download CV button when leaving Home
    }

    hideAllSections();
    document.querySelector(".Home").style.display = "block";
    downloadCVBtn.style.display = "inline-block"; // Ensure CV button is visible on page load for Home

    const backHomeButton = document.querySelectorAll(".Home-btn button");

    backHomeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            location.reload();
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let htmlSection = document.getElementById('html');

    // Function to show the HTML section
    function showHtmlSection() {
        htmlSection.style.display = 'flex';
        localStorage.setItem('htmlSectionVisible', 'true');
    }

    // Function to hide the HTML section
    function hideHtmlSection() {
        htmlSection.style.display = 'none';
        localStorage.setItem('htmlSectionVisible', 'false');
    }

    // Show the HTML section when "HTML" link is clicked
    document.getElementById('show-html').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action
        showHtmlSection();
    });

    // Close the HTML section when the close button is clicked
    document.getElementById('closeHtml').addEventListener('click', function () {
        hideHtmlSection();
    });

    // No longer automatically showing the HTML section based on localStorage
});
