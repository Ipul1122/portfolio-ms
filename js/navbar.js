  // Navbar scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('nav-blur');
            } else {
                header.classList.remove('nav-blur');
            }
        });

        // Mobile menu
        const menuBtn = document.getElementById('menu-btn');
        const menuMobile = document.getElementById('menu-mobile');

        menuBtn.addEventListener('click', () => {
            menuMobile.classList.toggle('hidden');
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    if (!menuMobile.classList.contains('hidden')) {
                        menuMobile.classList.add('hidden');
                    }
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-hidden').forEach(el => {
            observer.observe(el);
        });