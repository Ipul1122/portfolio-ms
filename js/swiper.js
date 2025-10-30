     document.addEventListener('DOMContentLoaded', () => {
            const swiper = new Swiper('.project-swiper', {
                // Konfigurasi Swiper
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                
                // Navigasi (tombol panah)
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
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