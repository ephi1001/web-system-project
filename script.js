// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Typing animation for hero title
const heroSpan = document.querySelector('.hero h1 span');
const text = heroSpan.textContent;
heroSpan.textContent = '';

let i = 0;
function typingEffect() {
    if (i < text.length) {
        heroSpan.textContent += text.charAt(i);
        i++;
        setTimeout(typingEffect, 150);
    }
}
typingEffect();

// Expand/collapse project cards
document.querySelectorAll('.project-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.project-card');
        card.classList.toggle('expanded');
        btn.textContent = card.classList.contains('expanded') ? 'Show Less' : 'See Project';
    });
});

// Contact form validation
const contactForm = document.querySelector('.contact form');
const feedback = document.createElement('p');
feedback.style.color = 'red';
feedback.style.marginTop = '10px';
contactForm.appendChild(feedback);

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        feedback.textContent = 'Please fill in all fields.';
        return;
    }

    if (!isValidEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    feedback.style.color = 'green';
    feedback.textContent = 'Thank you for your message! I will get back to you soon.';
    contactForm.reset();

    setTimeout(() => {
        feedback.textContent = '';
        feedback.style.color = 'red';
    }, 5000);
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
}

// Back to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑ Top';
scrollBtn.id = 'backToTop';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '16px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.backgroundColor = '#8e44ad'; // Changed from blue to purple
scrollBtn.style.color = 'white';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});




