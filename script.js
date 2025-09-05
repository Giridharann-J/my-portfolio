document.addEventListener('DOMContentLoaded', () => {

    // --- Lucide Icons Activation ---
    lucide.createIcons();

    // --- Header Scroll Effect ---
    // The header is now always solid, so no dynamic class for scrolled state is strictly needed for background,
    // but keeping it in case you want other effects on scroll.
    // const header = document.querySelector('.header');
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 50) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    // --- Typing Animation ---
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ["modern web experiences.", "interactive solutions.", "user-friendly applications."];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            const currentChars = currentWord.substring(0, charIndex);
            typingText.textContent = currentChars;
            typingText.classList.add('typing-cursor');

            if (!isDeleting && charIndex < currentWord.length) {
                charIndex++;
                setTimeout(type, 100);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(type, 50);
            } else {
                isDeleting = !isDeleting;
                typingText.classList.remove('typing-cursor');
                if (!isDeleting) {
                    wordIndex = (wordIndex + 1) % words.length;
                }
                setTimeout(type, 1200);
            }
        }
        type();
    }

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Active Nav Link on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-40% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));

    // --- Initialize AOS (Animate on Scroll) ---
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
    });
});