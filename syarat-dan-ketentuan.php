<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Judul Halaman -->
    <title>Syarat dan Ketentuan - Muhammad Syaifulloh</title>
    
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Link ke CSS yang sama -->
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sans': ['Inter', 'sans-serif'],
                        'heading': ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        'primary': '#2563eb',
                        'secondary': '#1e40af',
                        'accent': '#3b82f6',
                    }
                }
            }
        }
    </script>
    
</head>

<body class="bg-white text-gray-900 font-sans antialiased">

   <!-- Navbar akan dimuat di sini oleh navbar.js -->
   <div id="navbar-placeholder"></div>

    <main>
        <!-- Section untuk konten, pt-32 untuk memberi jarak dari navbar fixed -->
        <section id="terms-content" class="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div class="container mx-auto px-6">
                <!-- Konten legal di dalam container -->
                <article class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-8 gradient-text">Syarat dan Ketentuan</h1>
                    
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p>Terakhir diperbarui: 30 Oktober 2025</p>

                        <p>Harap baca Syarat dan Ketentuan ("Ketentuan") ini dengan saksama sebelum menggunakan website portofolio Muhammad Syaifulloh ("Situs").</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">1. Penerimaan Ketentuan</h2>
                        <p>Dengan mengakses atau menggunakan Situs ini, Anda setuju untuk terikat oleh Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak diizinkan untuk mengakses Situs.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">2. Penggunaan Situs</h2>
                        <p>Situs ini disediakan untuk tujuan informasional guna menampilkan portofolio, layanan, dan informasi kontak Muhammad Syaifulloh. Anda setuju untuk tidak menggunakan situs ini untuk tujuan yang melanggar hukum atau dilarang oleh Ketentuan ini.</p>
                        
                        <h2 class="text-2xl font-bold font-heading pt-4">3. Hak Kekayaan Intelektual</h2>
                        <p>Semua konten yang ada di Situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan desain proyek, adalah milik Muhammad Syaifulloh atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta. Anda tidak boleh mereproduksi, mendistribusikan, atau membuat karya turunan dari konten apa pun tanpa izin tertulis sebelumnya.</p>
                        
                        <h2 class="text-2xl font-bold font-heading pt-4">4. Batasan Tanggung Jawab</h2>
                        <p>Informasi di Situs ini disediakan "sebagaimana adanya" tanpa jaminan apa pun. Muhammad Syaifulloh tidak akan bertanggung jawab atas kerusakan apa pun yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan Situs ini.</p>
                        <p>Link ke situs web pihak ketiga (seperti WhatsApp atau tautan proyek) disediakan hanya untuk kenyamanan Anda. Kami tidak mengontrol atau mendukung konten situs pihak ketiga tersebut dan tidak bertanggung jawab atasnya.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">5. Perubahan pada Ketentuan</h2>
                        <p>Kami berhak untuk mengubah atau mengganti Ketentuan ini kapan saja atas kebijakan kami sendiri. Tanggung jawab Anda untuk meninjau Ketentuan ini secara berkala. Penggunaan Situs yang berkelanjutan setelah perubahan apa pun merupakan penerimaan Anda atas Ketentuan yang baru.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">6. Hubungi Kami</h2>
                         <p>Jika Anda memiliki pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, silakan hubungi kami melalui informasi yang tersedia di <a href="index.html#contact" class="text-primary hover:underline">halaman kontak</a>.</p>
                    </div>
                </article>
            </div>
        </section>
    </main>

    <!-- Footer yang sama -->
    <footer class="bg-gray-900 py-12 text-gray-400">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 Muhammad Syaifulloh. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <!-- Link sudah diperbarui -->
                    <a href="privacy-policy.html" class="hover:text-white transition">Kebijakan Privasi</a>
                    <a href="terms-of-service.html" class="hover:text-white transition">Syarat Layanan</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Script untuk memuat navbar -->
    <script src="js/navbar.js"></script>
    
</body>
</html>
