<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layanan & Solusi Digital - MSyaifulloh</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="css/style.css">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#2563eb',
                        secondary: '#1e40af',
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                        heading: ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 font-sans text-gray-800">

    <?php include 'component/templates/navbar.php'; ?>

    <section class="pt-32 pb-20 bg-white">
        <div class="container mx-auto px-6 text-center">
            <span class="text-primary font-bold tracking-wider uppercase text-sm mb-4 block animate-hidden fade-up">Professional Web Development</span>
            <h1 class="text-4xl md:text-6xl font-bold font-heading text-gray-900 mb-6 animate-hidden fade-up">
                Solusi Digital untuk <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pertumbuhan Bisnis Anda</span>
            </h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-hidden fade-up">
                Kami membantu UMKM dan perusahaan membangun kehadiran digital yang kuat melalui Website Custom dan Aplikasi Siap Pakai (MVP).
            </p>
            <div class="flex justify-center gap-4 animate-hidden fade-up">
                <a href="#services" class="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition shadow-lg hover:shadow-primary/30">
                    Lihat Layanan
                </a>
                <a href="#mvp-showcase" class="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:border-primary hover:text-primary transition">
                    Produk MVP
                </a>
            </div>
        </div>
    </section>

    <?php include 'component/section-services.php'; ?>

    <?php include 'component/sample-mvp/coffe-shop.php'; ?>

    <section class="relative py-24 bg-gray-900 overflow-hidden">
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-20 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-[100px]"></div>
        </div>

        <div class="container relative z-10 mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-5xl font-bold font-heading mb-6 text-white leading-tight animate-hidden fade-up">
                Jangan Biarkan Bisnis Anda <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tertinggal di Era Digital</span>
            </h2>
            
            <p class="text-gray-400 mb-10 max-w-2xl mx-auto text-lg animate-hidden fade-up" style="transition-delay: 100ms;">
                Wujudkan website impian Anda sekarang. Konsultasikan ide Anda, dan kami akan berikan solusi teknis terbaik. 
                <span class="text-white font-semibold">Gratis Konsultasi!</span>
            </p>
            
            <div class="animate-hidden fade-up" style="transition-delay: 200ms;">
                <a href="https://wa.me/6285693672730?text=Halo%20Kak%20Syaifulloh,%20saya%20mau%20konsultasi%20mengenai%20pembuatan%20website%20nih" 
                   target="_blank" 
                   class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 group">
                    <i class="fab fa-whatsapp text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
                    <span>Hubungi Saya via WhatsApp</span>
                </a>
                <p class="mt-4 text-sm text-gray-500">Respon cepat biasanya dalam 10-30 menit.</p>
            </div>
        </div>
    </section>

    <footer class="bg-white border-t border-gray-100 pt-16 pb-8 mt-auto">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                
                <div class="text-center md:text-left">
                    <div class="bg-primary text-white font-bold text-xl px-4 py-2 rounded-lg inline-block mb-2">MS</div>
                    <p class="text-gray-500 text-sm">Professional Web Developer & UI/UX Designer</p>
                </div>

                <div class="flex space-x-6">
                    <a href="https://id.linkedin.com/in/muhammad-syaifulloh-99a233305?trk=people-guest_people_search-card" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition duration-300">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Ipul1122/" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white transition duration-300">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/pul_ipul_pul/" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition duration-300">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:msyaifulloh2024@gmail.com" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-red-500 hover:text-white transition duration-300">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            <div class="border-t border-gray-100 pt-8 text-center">
                <p class="text-gray-400 text-sm">
                    &copy; <?= date('Y'); ?> <span class="text-primary font-semibold">MSyaifulloh</span>. All rights reserved.
                </p>
            </div>
        </div>
    </footer>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/swiper.js"></script>
</body>
</html>