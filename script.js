// Continuous Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.getElementById('typed-text');
    
    if (typedText) {
        const phrases = [
            "Mathematics Meets Trading",
            "Free Chart Education",
            "Proprietary Quant Code",
            "Smart Money Concepts",
            "Systematic Trading Academy",
            "Eradicating Forex Scams"
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let pauseDuration = 1500;
        
        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                // Deleting text
                typedText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                // Typing text
                typedText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at end of phrase
                typingSpeed = pauseDuration;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Move to next phrase
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start typing animation after page loads
        setTimeout(typeEffect, 1000);
        
        // Add blinking cursor
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.className = navLinks.classList.contains('active') 
                ? 'fas fa-times' 
                : 'fas fa-bars';
        });
        
        // Close menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.querySelector('i').className = 'fas fa-bars';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Handle logo loading errors
    const logoImages = document.querySelectorAll('img[src*="logo"]');
    logoImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            // Show fallback text logo
            const parent = this.parentElement;
            const fallback = document.createElement('div');
            fallback.className = 'text-logo';
            fallback.textContent = 'LA';
            parent.insertBefore(fallback, this);
        });
    });
    
    // Add CSS for fallback logo
    const style = document.createElement('style');
    style.textContent = `
        .text-logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #3b82f6, #60a5fa);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 0.9rem;
            color: white;
        }
        
        .text-logo.footer {
            width: 60px;
            height: 60px;
            font-size: 1.25rem;
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);
});