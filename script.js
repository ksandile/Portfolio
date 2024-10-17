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

    function navigateToSection(sectionId) {
        hideAllSections();
        document.getElementById(sectionId).style.display = "block";
        footer.style.display = "none";
        sessionStorage.setItem('currentSection', sectionId); // Save current section in sessionStorage
    }

    document.getElementById("myServices").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("my-services");
    });

    document.getElementById("aboutMe").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("about");
    });

    document.getElementById("softwareDevProjectsBtn").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("softwareDevProjectsSection");
        const projectsSection = document.getElementById("softwareDevProjectsSection");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("dataAnalystProjectsBtn").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("dataAnalystProjectsSection");
        const projectsSection = document.getElementById("dataAnalystProjectsSection");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("Home");
        downloadCVBtn.style.display = "inline-block";
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

    // Restore the previous section on page load
    const currentSection = sessionStorage.getItem('currentSection');
    if (currentSection) {
        hideAllSections(); // Hide all sections first
        document.getElementById(currentSection).style.display = "block"; // Show the current section
    } else {
        // Default to showing the home section if no section is stored
        hideAllSections();
        document.querySelector(".Home").style.display = "block";
        downloadCVBtn.style.display = "inline-block";
    }

    const backHomeButton = document.querySelectorAll(".Home-btn button");

    backHomeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            location.reload();
        });
    });
});

// HTML section display functionality
document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        html: document.getElementById('html'),
        css: document.getElementById('css'),
        javascript: document.getElementById('javascript'),
        react: document.getElementById('react'),
        node: document.getElementById('node'),
        python: document.getElementById('python'),
        java: document.getElementById('java'),
        sql: document.getElementById('sql')
    };

    function showSection(sectionName) {
        // Hide all sections
        Object.keys(sections).forEach(key => {
            sections[key].style.display = 'none';
            sessionStorage.setItem(`${key}SectionVisible`, 'false');
        });
        
        // Show the selected section
        sections[sectionName].style.display = 'flex';
        sessionStorage.setItem(`${sectionName}SectionVisible`, 'true');
    }

    // Event listeners for dropdown links
    document.getElementById('show-html').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('html');
    });

    document.getElementById('show-css').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('css');
    });

    document.getElementById('show-javascript').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('javascript');
    });

    document.getElementById('show-react').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('react');
    });

    document.getElementById('show-node').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('node');
    });

    document.getElementById('show-python').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('python');
    });

    document.getElementById('show-java').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('java');
    });

    document.getElementById('show-sql').addEventListener('click', function(e) {
        e.preventDefault();
        showSection('sql');
    });

    // Close functionality for each section
    function hideHtmlSection() {
        sections.html.style.display = 'none';
        sessionStorage.setItem('htmlSectionVisible', 'false');
    }

    function hideCssSection() {
        sections.css.style.display = 'none';
        sessionStorage.setItem('cssSectionVisible', 'false');
    }

    function hideJavascriptSection() {
        sections.javascript.style.display = 'none';
        sessionStorage.setItem('javascriptSectionVisible', 'false');
    }

    function hideReactSection() {
        sections.react.style.display = 'none';
        sessionStorage.setItem('reactSectionVisible', 'false');
    }

    function hideNodeSection() {
        sections.node.style.display = 'none';
        sessionStorage.setItem('nodeSectionVisible', 'false');
    }

    function hidePythonSection() {
        sections.python.style.display = 'none';
        sessionStorage.setItem('pythonSectionVisible', 'false');
    }

    function hideJavaSection() {
        sections.java.style.display = 'none';
        sessionStorage.setItem('javaSectionVisible', 'false');
    }

    function hideSqlSection() {
        sections.sql.style.display = 'none';
        sessionStorage.setItem('sqlSectionVisible', 'false');
    }

    // Attach close button functionality for each section
    document.getElementById('closeHtml').addEventListener('click', hideHtmlSection);
    document.getElementById('closeCss').addEventListener('click', hideCssSection);
    document.getElementById('closeJavascript').addEventListener('click', hideJavascriptSection);
    document.getElementById('closereact').addEventListener('click', hideReactSection);
    document.getElementById('closeNode').addEventListener('click', hideNodeSection);
    document.getElementById('closePython').addEventListener('click', hidePythonSection);
    document.getElementById('closeJava').addEventListener('click', hideJavaSection);
    document.getElementById('closeSql').addEventListener('click', hideSqlSection);
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
projectsDropdown.addEventListener('click', function(event) {
    toggleDropdown(event); // Call the toggle function
    event.stopPropagation(); // Prevent the navbar from closing
});

techSkillsDropdown.addEventListener('click', function(event) {
    toggleDropdown(event); // Call the toggle function
    event.stopPropagation(); // Prevent the navbar from closing
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    // Check if the clicked target is not a dropdown button or part of its content
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});
