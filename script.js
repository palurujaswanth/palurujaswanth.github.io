// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight active navigation link while scrolling
window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    // Add shadow effect to header while scrolling
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

// Smooth reveal animation on scroll
const revealElements = document.querySelectorAll(
    '.project-card, .skill-box, .heading, .about p, .contact p'
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('show');
        }
    });
};

// Run on page load
window.addEventListener('load', revealOnScroll);

// Run while scrolling
window.addEventListener('scroll', revealOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Console greeting
console.log(
    "Welcome to Jaswanth Paluru's Portfolio 🚀"
);
