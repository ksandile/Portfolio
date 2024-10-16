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

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript Section Elements
    let javascriptSection = document.getElementById('javascript');

    // Function to show the JavaScript section
    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('javascriptSectionVisible', 'true');
    }

    // Function to hide the JavaScript section
    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('javascriptSectionVisible', 'false');
    }

    // Show the JavaScript section when "JavaScript" link is clicked
    document.getElementById('show-javascript').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action
        showJavaScriptSection();
    });

    // Close the JavaScript section when the close button is clicked
    document.getElementById('closejs').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    // Check localStorage to set visibility on load
    if (localStorage.getItem('javascriptSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript Section Elements
    let javascriptSection = document.getElementById('css');

    // Function to show the JavaScript section
    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('cssSectionVisible', 'true');
    }

    // Function to hide the JavaScript section
    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('cssSectionVisible', 'false');
    }

    // Show the JavaScript section when "JavaScript" link is clicked
    document.getElementById('show-css').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action
        showJavaScriptSection();
    });

    // Close the JavaScript section when the close button is clicked
    document.getElementById('closecss').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    // Check localStorage to set visibility on load
    if (localStorage.getItem('cssSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript Section Elements
    let javascriptSection = document.getElementById('react');

    // Function to show the JavaScript section
    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('reactSectionVisible', 'true');
    }

    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('reactSectionVisible', 'false');
    }

    
    document.getElementById('show-react').addEventListener('click', function (e) {
        e.preventDefault();
        showJavaScriptSection();
    });

    
    document.getElementById('closereact').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    
    if (localStorage.getItem('reactSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});

document.addEventListener('DOMContentLoaded', function() {

    let javascriptSection = document.getElementById('node');

    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('nodeSectionVisible', 'true');
    }

    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('nodeSectionVisible', 'false');
    }

    document.getElementById('show-node').addEventListener('click', function (e) {
        e.preventDefault();
        showJavaScriptSection();
    });

    document.getElementById('closenode').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    if (localStorage.getItem('nodeSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});


document.addEventListener('DOMContentLoaded', function() {

    let javascriptSection = document.getElementById('python');

    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('pythonSectionVisible', 'true');
    }

    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('pythonSectionVisible', 'false');
    }

    document.getElementById('show-python').addEventListener('click', function (e) {
        e.preventDefault();
        showJavaScriptSection();
    });

    document.getElementById('closepython').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    
    if (localStorage.getItem('pythonSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});

document.addEventListener('DOMContentLoaded', function() {

    let javascriptSection = document.getElementById('java');

    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('javaSectionVisible', 'true');
    }

    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('javaSectionVisible', 'false');
    }

    document.getElementById('show-java').addEventListener('click', function (e) {
        e.preventDefault();
        showJavaScriptSection();
    });

    document.getElementById('closejava').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    
    if (localStorage.getItem('javaSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});

document.addEventListener('DOMContentLoaded', function() {

    let javascriptSection = document.getElementById('sql');

    function showJavaScriptSection() {
        javascriptSection.style.display = 'flex';
        localStorage.setItem('sqlSectionVisible', 'true');
    }

    function hideJavaScriptSection() {
        javascriptSection.style.display = 'none';
        localStorage.setItem('sqlSectionVisible', 'false');
    }

    document.getElementById('show-sql').addEventListener('click', function (e) {
        e.preventDefault();
        showJavaScriptSection();
    });

    document.getElementById('closesql').addEventListener('click', function () {
        hideJavaScriptSection();
    });

    
    if (localStorage.getItem('sqlSectionVisible') === 'true') {
        showJavaScriptSection();
    }
});


const navLinks = document.querySelectorAll('.navbar a');

function setActiveLink() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
}

navLinks.forEach(link => link.addEventListener('click', setActiveLink));




