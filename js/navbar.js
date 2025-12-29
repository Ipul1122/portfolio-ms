document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. NAVIGASI (Scroll Blur & Mobile Menu)
       ========================================= */
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const menuMobile = document.getElementById('menu-mobile');

    // Efek Blur saat Scroll
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) header.classList.add('nav-blur');
            else header.classList.remove('nav-blur');
        });
    }

    // Toggle Menu Mobile
    if (menuBtn && menuMobile) {
        menuBtn.addEventListener('click', () => {
            menuMobile.classList.toggle('hidden');
        });
    }

    /* =========================================
       2. SMOOTH SCROLL (Hanya di Halaman Index)
       ========================================= */
    // Cek apakah URL saat ini adalah home/index
    const path = window.location.pathname;
    // Sesuaikan logika ini dengan struktur folder Anda (misal: /portfolio/index.php)
    const isHomePage = path.endsWith('/') || path.includes('index.php');

    if (isHomePage) {
        // Pilih semua link yang diawali dengan '#'
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                // Abaikan jika href cuma "#"
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Tutup menu mobile jika sedang terbuka
                    if (menuMobile && !menuMobile.classList.contains('hidden')) {
                        menuMobile.classList.add('hidden');
                    }

                    // Hitung offset header
                    const headerOffset = 80; 
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            });
        });
    }

    /* =========================================
       3. ANIMASI FADE-UP (Intersection Observer)
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-hidden').forEach(el => {
        observer.observe(el);
    });

});