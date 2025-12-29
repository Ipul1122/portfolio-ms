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