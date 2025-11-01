document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.project-swiper', {
        // Konfigurasi Swiper
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        
        // Aktifkan gesture geser
        simulateTouch: true,
        allowTouchMove: true,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        
        // Scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: 'auto',
            snapOnRelease: true,
        },

        // Breakpoints (agar responsif)
        breakpoints: {
            // ketika lebar >= 768px (md)
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // ketika lebar >= 1024px (lg)
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});