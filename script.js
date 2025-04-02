// Initialize AOS for animations
AOS.init({
    duration: 1000, // Animation duration
    once: true,     // Only animate once
});

// Smooth Scroll for all links inside navbar
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector('textarea').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill out all fields before submitting.');
                e.preventDefault();
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                e.preventDefault();
            } else {
                alert('Thank you! Your message has been sent.');
            }
        });
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Highlight Active Link in Navbar (so user knows where they are)
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.navbar-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Optional: Add subtle fade-in for whole page
document.body.style.opacity = 0;
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = 1;
});
