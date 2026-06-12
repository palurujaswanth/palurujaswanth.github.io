// =========================
// Navigation Active State
// =========================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Header shadow effect
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Reveal elements while scrolling
    revealElements();
});


// =========================
// Reveal Animation
// =========================

function revealElements() {

    const elements = document.querySelectorAll(
        '.project-card, .skill-box, .heading, .about p, .contact p'
    );

    elements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add('show');

        } else {

            element.classList.remove('show');
        }
    });
}


// =========================
// Smooth Scrolling
// =========================

navLinks.forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// =========================
// Initialize on Page Load
// =========================

window.addEventListener('DOMContentLoaded', () => {

    revealElements();

    console.log(
        "🚀 Welcome to Jaswanth Paluru's Portfolio"
    );
});
