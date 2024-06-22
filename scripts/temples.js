document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightYearSpan = document.getElementById("copyrightYear");
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = currentYear;
    }

    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedLastModified = lastModifiedDate.toLocaleDateString('en-US', options);

    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${formattedLastModified}`;
    }

    const toggleMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    };

    const updateTitle = (title) => {
        document.getElementById('page-title').textContent = title;
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    };

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            updateTitle(link.textContent);
        });
    });
});
