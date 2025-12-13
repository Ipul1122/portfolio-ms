<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Judul Halaman -->
    <title>Kebijakan Privasi - Muhammad Syaifulloh</title>
    
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
        <section id="policy-content" class="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div class="container mx-auto px-6">
                <!-- Konten legal di dalam container -->
                <article class="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-8 gradient-text">Kebijakan Privasi</h1>
                    
                    <div class="space-y-6 text-gray-700 leading-relaxed">
                        <p>Terakhir diperbarui: 30 Oktober 2025</p>

                        <p>Selamat datang di website portofolio Muhammad Syaifulloh. Kami menghargai privasi Anda dan berkomitmen untuk melindunginya. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">1. Informasi yang Kami Kumpulkan</h2>
                        <p>Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menghubungi kami melalui formulir kontak atau email, seperti:</p>
                        <ul class="list-disc list-inside pl-4">
                            <li>Nama</li>
                            <li>Alamat Email</li>
                            <li>Nomor Telepon (jika Anda memberikannya)</li>
                            <li>Isi pesan Anda</li>
                        </ul>
                        <p>Saat Anda mengirimkan formulir kontak yang mengarah ke WhatsApp, data yang Anda masukkan (Nama, Email, Pesan) akan diformat menjadi pesan WhatsApp dan dikirimkan melalui aplikasi WhatsApp Anda. Kami tidak menyimpan data ini di server kami.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">2. Penggunaan Informasi</h2>
                        <p>Informasi yang Anda berikan kami gunakan semata-mata untuk:</p>
                        <ul class="list-disc list-inside pl-4">
                            <li>Merespons pertanyaan atau permintaan Anda.</li>
                            <li>Berkomunikasi dengan Anda mengenai proyek atau layanan yang mungkin Anda minati.</li>
                            <li>Memahami kebutuhan Anda untuk meningkatkan layanan kami.</li>
                        </ul>

                        <h2 class="text-2xl font-bold font-heading pt-4">3. Keamanan Informasi</h2>
                        <p>Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak lain. Informasi Anda hanya digunakan untuk keperluan internal komunikasi antara Anda dan Muhammad Syaifulloh.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">4. Perubahan pada Kebijakan Ini</h2>
                        <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal pembaruan yang baru. Kami menganjurkan Anda untuk meninjau halaman ini secara berkala.</p>

                        <h2 class="text-2xl font-bold font-heading pt-4">5. Hubungi Kami</h2>
                        <p>Jika Anda memiliki pertanyaan lebih lanjut mengenai kebijakan privasi ini, silakan hubungi kami melalui informasi yang tersedia di <a href="index.html#contact" class="text-primary hover:underline">halaman kontak</a>.</p>
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
                    <a href="kebijakan-privasi.html" class="hover:text-white transition">Kebijakan Privasi</a>
                    <a href="syarat-dan-ketentuan.html" class="hover:text-white transition">Syarat Layanan</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Script untuk memuat navbar -->
    <script src="js/navbar.js"></script>
    
</body>
</html>
