document.addEventListener('DOMContentLoaded', function() {
    // Select relevant DOM elements
    const sections = document.querySelectorAll("section");
    const footer = document.getElementById("footer");
    const homeImg = document.querySelector(".home-img img");
    const textAnimation = document.querySelector(".text-animation");
    const socialIcons = document.querySelector(".social-icons");
    const downloadCVBtn = document.querySelector(".btn2"); // Select the Download CV button

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

    // Navigation between sections
    function navigateToSection(sectionId) {
        hideAllSections(); // Hide all sections first
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = "block"; // Show the selected section
        }
        if (footer) footer.style.display = "none"; // Hide footer unless specified
        sessionStorage.setItem('currentSection', sectionId); // Save state
    }
    

    document.getElementById("myServices").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("my-services");
    });

    document.getElementById("aboutMe").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("about");
    });

    document.getElementById("home").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("home");
    });

    document.getElementById("softwareDevProjectsBtn").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("softwareDevProjectsSection");
        const projectsSection = document.getElementById("softwareDevProjectsSection");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    document.getElementById("dataAnalystProjectsBtn").addEventListener("click", function(event) {
        event.preventDefault();
        navigateToSection("dataAnalystProjectsSection");
        const projectsSection = document.getElementById("dataAnalystProjectsSection");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    document.getElementById("hireMeBtn").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        if (footer) footer.style.display = "block";
        if (footer) footer.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contactMe").addEventListener("click", function(event) {
        event.preventDefault();
        hideAllSections();
        if (footer) footer.style.display = "block";
    });

    function hideAllSections() {
        sections.forEach(function(section) {
            section.style.display = "none"; // Hide each section
        });
        if (downloadCVBtn) downloadCVBtn.style.display = "none"; // Hide CV button
    }
    

    // Restore the previous section on page load
    const currentSection = sessionStorage.getItem('currentSection');
    if (currentSection) {
        hideAllSections();
        let current = document.getElementById(currentSection);
        if (current) current.style.display = "block";
    } else {
        hideAllSections();
        let homeSection = document.querySelector(".Home");
        if (homeSection) homeSection.style.display = "block";
        if (downloadCVBtn) downloadCVBtn.style.display = "inline-block";
    }

    const backHomeButton = document.querySelectorAll(".Home-btn button");

    backHomeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            location.reload();
        });
    });

    // HTML section display functionality
    const sectionLinks = {
        'show-html': 'html',
        'show-css': 'css',
        'show-javascript': 'javascript',
        'show-react': 'react',
        'show-node': 'node',
        'show-python': 'python',
        'show-java': 'java',
        'show-sql': 'sql',
    };

    Object.keys(sectionLinks).forEach(id => {
        document.getElementById(id).addEventListener('click', function(e) {
            e.preventDefault();
            showSection(sectionLinks[id]);
        });
    });

    function showSection(sectionName) {
        Object.keys(sections).forEach(key => {
            sections[key].style.display = 'none';
            sessionStorage.setItem(`${key}SectionVisible`, 'false');
        });
        sections[sectionName].style.display = 'flex';
        sessionStorage.setItem(`${sectionName}SectionVisible`, 'true');
    }

    // Dropdown functionality
    const projectsDropdown = document.getElementById('myProjects');
    const techSkillsDropdown = document.getElementById('techSkills');

    function toggleDropdown(event) {
        event.preventDefault();
        event.stopPropagation();
        const dropdownContent = event.target.nextElementSibling;

        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            if (dropdown !== dropdownContent) {
                dropdown.classList.remove('show');
            }
        });

        dropdownContent.classList.toggle('show');
    }

    projectsDropdown.addEventListener('click', function(event) {
        toggleDropdown(event);
        event.stopPropagation();
    });

    techSkillsDropdown.addEventListener('click', function(event) {
        toggleDropdown(event);
        event.stopPropagation();
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    // Active link functionality for navbar
    const navLinks = document.querySelectorAll('.navbar a');

    function setActiveLink() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    }

    navLinks.forEach(link => link.addEventListener('click', setActiveLink));
});

const currentSection = sessionStorage.getItem('currentSection');
if (currentSection) {
    navigateToSection(currentSection);
} else {
    navigateToSection("home"); // Default to Home section
}

