document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);

    const tagline = document.querySelector('.tagline');
    const taglineText = tagline.textContent;
    tagline.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < taglineText.length) {
            tagline.textContent += taglineText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    typeWriter();

    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
        }

        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }


const messageInput = document.getElementById('message');
if (!messageInput.value.trim()) {
    isValid = false;
    messageInput.classList.add('error');
} else {
    messageInput.classList.remove('error');
}

