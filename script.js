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
        item.addEventListener("click", function(event) {
            if (!event.target.matches('.dropbtn')) {
                navbar.classList.remove("active");
                document.body.classList.remove("menu-open");
            }
            
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

    document.getElementById("softwareDevProjectsBtn").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const projectsSection = document.getElementById("softwareDevProjectsSection");
        projectsSection.style.display = "block";
        projectsSection.scrollIntoView({ behavior: "smooth" });
        footer.style.display = "none";
    });

    document.getElementById("dataAnalystProjectsBtn").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        const projectsSection = document.getElementById("dataAnalystProjectsSection");
        projectsSection.style.display = "block";
        projectsSection.scrollIntoView({ behavior: "smooth" });
        footer.style.display = "none";
    });

    document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        document.querySelector(".Home").style.display = "block";
        downloadCVBtn.style.display = "inline-block";
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
        downloadCVBtn.style.display = "none";
    }

    hideAllSections();
    document.querySelector(".Home").style.display = "block";
    downloadCVBtn.style.display = "inline-block";

    const backHomeButton = document.querySelectorAll(".Home-btn button");

    backHomeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            location.reload();
        });
    });
});

// HTML section display functionality
document.addEventListener('DOMContentLoaded', function() {
    let htmlSection = document.getElementById('html');

    function showHtmlSection() {
        htmlSection.style.display = 'flex';
        localStorage.setItem('htmlSectionVisible', 'true');
    }

    function hideHtmlSection() {
        htmlSection.style.display = 'none';
        localStorage.setItem('htmlSectionVisible', 'false');
    }

    document.getElementById('show-html').addEventListener('click', function (e) {
        e.preventDefault();
        showHtmlSection();
    });

    document.getElementById('closeHtml').addEventListener('click', function () {
        hideHtmlSection();
    });
});

// Display for various tech skills
document.addEventListener('DOMContentLoaded', function () {
    const techSkills = ['html', 'javascript', 'css', 'react', 'node', 'python', 'java', 'sql'];

    techSkills.forEach(skill => {
        const section = document.getElementById(skill);

        function showSection() {
            section.style.display = 'flex';
            localStorage.setItem(`${skill}SectionVisible`, 'true');
        }

        function hideSection() {
            section.style.display = 'none';
            localStorage.setItem(`${skill}SectionVisible`, 'false');
        }

        document.getElementById(`show-${skill}`).addEventListener('click', function (e) {
            e.preventDefault();
            showSection();
        });

        document.getElementById(`close${skill}`).addEventListener('click', function () {
            hideSection();
        });

        if (localStorage.getItem(`${skill}SectionVisible`) === 'true') {
            showSection();
        }
    });
});

// Active link functionality for navbar
const navLinks = document.querySelectorAll('.navbar a');

function setActiveLink() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}

navLinks.forEach(link => link.addEventListener('click', setActiveLink));

// Select dropdown buttons
const projectsDropdown = document.getElementById('myProjects');
const techSkillsDropdown = document.getElementById('techSkills');

// Function to toggle the dropdown visibility
function toggleDropdown(event) {
    event.preventDefault(); // Prevent default anchor behavior to stop navigation
    event.stopPropagation(); // Prevent other event handlers from executing

    const dropdownContent = event.target.nextElementSibling;

    // Close other dropdowns if open
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        if (dropdown !== dropdownContent) {
            dropdown.classList.remove('show');
        }
    });

    // Toggle the clicked dropdown's visibility
    dropdownContent.classList.toggle('show');
}

// Add click event listeners to dropdown buttons
projectsDropdown.addEventListener('click', function (event) {
    toggleDropdown(event); // Call the toggle function
    event.stopPropagation(); // Prevent the navbar from closing
});

techSkillsDropdown.addEventListener('click', function (event) {
    toggleDropdown(event); // Call the toggle function
    event.stopPropagation(); // Prevent the navbar from closing
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});

