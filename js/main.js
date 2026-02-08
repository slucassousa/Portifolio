document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Active Link Highlighting based on current URL
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Check if the link href is active in the current URL
        // We use link.href (absolute) to compare with currentUrl
        if (currentUrl === link.href || (currentUrl.endsWith('/') && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else if (currentUrl.includes(link.getAttribute('href'))) {
            // Fallback for partial matches if needed, but strict match is better for distinct pages
            // EXCEPT for index.html which might not be in the URL if it's just the root
            link.classList.add('active');
        }
    });
});
