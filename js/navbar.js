document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fungsi untuk menginisialisasi semua skrip yang bergantung pada navbar
     * (menu, scroll blur, smooth scroll)
     */
    function initNavbarScripts(navbarFile) {
        const header = document.getElementById('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) header.classList.add('nav-blur');
                else header.classList.remove('nav-blur');
            });
        }

        const menuBtn = document.getElementById('menu-btn');
        const menuMobile = document.getElementById('menu-mobile');
        if (menuBtn && menuMobile) {
            menuBtn.addEventListener('click', () => {
                menuMobile.classList.toggle('hidden');
            });
        }
        
        // Hanya jalankan smooth scroll jika kita di halaman utama (index)
        if (navbarFile === 'components/navbar-index.html') {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        if (menuMobile && !menuMobile.classList.contains('hidden')) {
                            menuMobile.classList.add('hidden');
                        }
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerOffset;

                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                });
            });
        }
    }

    /**
     * Fungsi untuk menginisialisasi Intersection Observer (animasi fade-up)
     */
    function initObserver() {
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
    }

    /**
     * Fungsi utama untuk memuat komponen navbar
     */
    function loadNavbar() {
        const placeholder = document.getElementById('navbar-placeholder');
        if (!placeholder) return; // Jika tidak ada placeholder, hentikan

        const path = window.location.pathname;
        let navbarHTML;
        let navbarType;

        // Cek path untuk menentukan navbar mana yang akan dimuat
        const isHomePage = path.endsWith('/') || path.endsWith('/index.html') || !path.includes('.html');

        if (isHomePage) {
            navbarType = 'components/navbar-index.html';
            // Index navbar HTML here
            navbarHTML = `
                <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
                    <nav class="container mx-auto px-6 py-4">
                        <div class="flex justify-between items-center">
                            
                            <a href="#home" class="flex items-center space-x-2 hover:opacity-80 transition duration-300">
                                <div class="bg-primary text-white font-bold text-lg px-3 py-1.5 rounded-lg">MS</div>
                            </a>

                            <div class="hidden md:flex items-center space-x-8">
                                <a href="#about" class="text-gray-600 hover:text-primary transition duration-300 font-medium">About</a>
                                <a href="#services" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Services</a>
                                <a href="#work" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Work</a>
                                <a href="#contact" class="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">Contact</a>
                            </div>

                            <button id="menu-btn" class="md:hidden focus:outline-none text-gray-700">
                                <i class="fas fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </nav>

                    <div id="menu-mobile" class="hidden md:hidden nav-blur">
                        <div class="container mx-auto px-6 py-4 space-y-2">
                            <a href="#about" class="block py-2 text-gray-600 hover:text-primary transition">About</a>
                            <a href="#services" class="block py-2 text-gray-600 hover:text-primary transition">Services</a>
                            <a href="#work" class="block py-2 text-gray-600 hover:text-primary transition">Work</a>
                            <a href="#contact" class="block py-2 text-gray-600 hover:text-primary transition">Contact</a>
                        </div>
                    </div>
                </header>
            `;
        } else {
            navbarType = 'components/navbar-detail.html';
            // Detail navbar HTML here
            navbarHTML = `
                <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
                    <nav class="container mx-auto px-6 py-4">
                        <div class="flex justify-between items-center">
                            
                            <a href="#home" class="flex items-center space-x-2 hover:opacity-80 transition duration-300">
                                <div class="bg-primary text-white font-bold text-lg px-3 py-1.5 rounded-lg">MS</div>
                            </a>

                            <div class="hidden md:flex items-center space-x-8">
                                <a href="#about" class="text-gray-600 hover:text-primary transition duration-300 font-medium">About</a>
                                <a href="#services" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Services</a>
                                <a href="#work" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Work</a>
                                <a href="#contact" class="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">Contact</a>
                            </div>

                            <button id="menu-btn" class="md:hidden focus:outline-none text-gray-700">
                                <i class="fas fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </nav>

                    <div id="menu-mobile" class="hidden md:hidden nav-blur">
                        <div class="container mx-auto px-6 py-4 space-y-2">
                            <a href="#about" class="block py-2 text-gray-600 hover:text-primary transition">About</a>
                            <a href="#services" class="block py-2 text-gray-600 hover:text-primary transition">Services</a>
                            <a href="#work" class="block py-2 text-gray-600 hover:text-primary transition">Work</a>
                            <a href="#contact" class="block py-2 text-gray-600 hover:text-primary transition">Contact</a>
                        </div>
                    </div>
                </header>
            `;
        }

        try {
            // 1. Masukkan HTML navbar ke placeholder
            placeholder.innerHTML = navbarHTML;
            
            // 2. Inisialisasi skrip yang bergantung pada navbar (menu, scroll, dll)
            initNavbarScripts(navbarType);

        } catch (error) {
            console.error('Error memuat navbar:', error);
            placeholder.innerHTML = '<p class="text-center text-red-500 font-bold">Gagal memuat navigasi.</p>';
        }
    }

    // --- JALANKAN SEMUA FUNGSI ---
    
    // 1. Muat navbar
    loadNavbar();
    
    // 2. Inisialisasi observer (ini tidak bergantung pada navbar, jadi bisa langsung jalan)
    initObserver();
});