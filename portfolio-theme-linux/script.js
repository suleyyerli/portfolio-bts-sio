// script.js
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.linux-navbar');
    const body = document.body;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
    });
});