// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Typing Animation
    const typedText1 = document.getElementById('typed-text-1');
    const typedText2 = document.getElementById('typed-text-2');
    
    if (typedText1 && typedText2) {
        const text1 = "Systematic Trading";
        const text2 = "Through Code & Discipline";
        
        let charIndex1 = 0;
        let charIndex2 = 0;
        let typingSpeed = 100;
        let pauseDuration = 1000;
        
        function typeText1() {
            if (charIndex1 < text1.length) {
                typedText1.textContent = text1.substring(0, charIndex1 + 1);
                charIndex1++;
                setTimeout(typeText1, typingSpeed);
            } else {
                // Start typing second line after a pause
                setTimeout(() => {
                    typeText2();
                }, pauseDuration);
            }
        }
        
        function typeText2() {
            if (charIndex2 < text2.length) {
                typedText2.textContent = text2.substring(0, charIndex2 + 1);
                charIndex2++;
                setTimeout(typeText2, typingSpeed);
            } else {
                // Animation complete - add blinking cursor
                setTimeout(() => {
                    const cursor = document.createElement('span');
                    cursor.className = 'cursor';
                    typedText2.parentElement.appendChild(cursor);
                    
                    // Add blinking animation to cursor
                    setInterval(() => {
                        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                    }, 500);
                }, 500);
            }
        }
        
        // Start typing animation after page loads
        setTimeout(typeText1, 1000);
    }
    
    // Copy code functionality
    const copyBtn = document.querySelector('.copy-btn');
    const toast = document.getElementById('toast');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const code = this.parentElement.querySelector('code').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 2000);
                }
                
                // Visual feedback
                const originalIcon = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.color = '#10b981';
                setTimeout(() => {
                    this.innerHTML = originalIcon;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 2000);
                }
            });
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
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.method-card, .code-card, .team-card, .contact-card, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('.nav-links a');
    
    function highlightNavLink() {
        let scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
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
    `;
    document.head.appendChild(style);
});