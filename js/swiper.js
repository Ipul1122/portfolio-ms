document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.project-swiper', {
        // Konfigurasi Swiper
        loop: false, // Set false agar user tahu mana awal dan akhir
        slidesPerView: 1,
        spaceBetween: 24, // Jarak antar card diperkecil sedikit agar rapi
        
        // Aktifkan gesture geser
        simulateTouch: true,
        grabCursor: true,
        
        // Navigasi Tombol (Custom Class)
        navigation: {
            nextEl: '.swiper-button-custom-next',
            prevEl: '.swiper-button-custom-prev',
        },

        // Scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
        },

        // Breakpoints (Responsif)
        breakpoints: {
            // Mobile: 1 slide
            640: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            // Desktop: 3 slide
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SWIPER UNTUK SECTION PROJECT (KARYA)
    const projectSwiper = new Swiper('.project-swiper', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 24,
        simulateTouch: true,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-custom-next',
            prevEl: '.swiper-button-custom-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
        },
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    });

    // 2. SWIPER UNTUK SECTION MVP SHOWCASE (BARU DITAMBAHKAN)
    const mvpSwiper = new Swiper('.mvp-swiper', {
        loop: true, // Bisa berputar terus
        slidesPerView: 1, // Tampilkan 1 item penuh
        spaceBetween: 40,
        effect: 'fade', // Efek transisi pudar (lebih elegan untuk hero section)
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000, // Geser otomatis setiap 5 detik
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.mvp-next-btn', // Class tombol navigasi kita tadi
            prevEl: '.mvp-prev-btn',
        }
    });

});