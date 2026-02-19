document.addEventListener('DOMContentLoaded', function() {
    // Typing animation with gold phrases
    const typedText = document.getElementById('typed-text');
    if (typedText) {
        const phrases = [
            "Master XAUUSD Trading",
            "Gold Technical Analysis",
            "One-on-One Mentorship",
            "$50 / ₦80,000"
        ];
        let i = 0, j = 0, isDeleting = false;
        const speed = 100;
        const pause = 1500;

        function type() {
            const current = phrases[i];
            if (isDeleting) {
                typedText.textContent = current.substring(0, j-1);
                j--;
            } else {
                typedText.textContent = current.substring(0, j+1);
                j++;
            }
            if (!isDeleting && j === current.length) {
                isDeleting = true;
                setTimeout(type, pause);
                return;
            }
            if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % phrases.length;
            }
            setTimeout(type, isDeleting ? speed/2 : speed);
        }
        setTimeout(type, 1000);
    }

    // Mobile menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    toggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });

    // Year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});