<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Proyek - Muhammad Syaifulloh</title>
    
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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

   <div id="navbar-placeholder"></div>

    <main>
        <section id="project-detail" class="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div class="container mx-auto px-6">

                <div id="project-default" class="text-center">
                    <h1 class="text-4xl font-bold font-heading mb-4">Proyek Tidak Ditemukan</h1>
                    <p class="text-xl text-gray-600 mb-8">Silakan kembali ke halaman utama untuk melihat portofolio kami.</p>
                    <a href="index.html#work" class="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">
                        Kembali ke Portofolio
                    </a>
                </div>


                <!-- MASJID NURUL HAQ -->
                <article id="project-masjid" class="hidden max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">Website Masjid Nurul Haq</h1>
                    <p class="text-xl text-gray-600 mb-8">Aplikasi web monolithic yang dibangun menggunakan Laravel untuk mengelola semua aspek informasi, kegiatan, dan keuangan masjid.</p>

                    <img src="image/project/masjid_nurul_haq.png" alt="Masjid Nurul Haq" class="w-full rounded-2xl shadow-xl mb-12 border">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="md:col-span-2">
                            <h3 class="text-2xl font-bold font-heading mb-4">Tentang Proyek</h3>
                            <p class="text-gray-600 leading-relaxed mb-6">
                            Aplikasi Web ini memiliki tiga peran pengguna utama:
                            Pengguna Umum (Jamaah): Dapat melihat informasi publik.
                            Admin DKM (Dewan Kemakmuran Masjid): Pengelola utama website.
                            Admin RISNHA (Remaja Islam Masjid Nurul Haq): Pengelola untuk bagian organisasi remaja masjid.   
                            </p>
                            
                            <h3 class="text-2xl font-bold font-heading mb-4">Fitur Utama</h3>
                            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                                <li>Homepage: Menampilkan carousel dinamis, running text, dan ringkasan konten terbaru.</li>
                                <li>Konten Masjid: Melihat daftar dan detail kegiatan serta artikel yang dipublikasikan oleh DKM.</li>
                                <li>Keuangan Masjid: Laporan keuangan transparan dengan rincian pemasukkan dan pengeluaran.</li>
                                <li>Galeri: Melihat galeri foto kegiatan masjid.</li>
                                <li>Profil Masjid: Halaman untuk melihat Sejarah serta Visi & Misi masjid.</li>
                                <li>Donasi: Halaman untuk informasi donasi, formulir kirim bukti transfer, dan melihat donasi yang telah terverifikasi.</li>
                                <li>Jadwal Sholat: Menampilkan jadwal sholat harian (melalui API internal).</li>
                            </ul>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-2xl">
                            <h3 class="text-xl font-bold font-heading mb-4">Info Teknis</h3>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Klien:</strong> DKM Masjid Nurul Haq</p>
                                <p class="text-gray-700"><strong>Layanan:</strong>Aplikasi Web Custom</p>
                                <p class="text-gray-700"><strong>Tahun:</strong> 2025</p>
                                <p class="text-gray-700"><strong>Harga:</strong> Rp. 5.000.000</p>
                                
                                <h4 class="font-bold pt-2">Teknologi:</h4>
                                <ul class="list-disc list-inside text-gray-600 text-sm">
                                    <li>HTML</li>
                                    <li>Css</li>
                                    <li>JavaScript</li>
                                    <li>TailwindCSS</li>
                                    <li>PHP</li>
                                    <li>Laravel</li>
                                    <li>AlpineJs</li>
                                    <li>ChartJs</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- ABSENSI DIGITAL -->
                <article id="project-tpa" class="hidden max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">Absensi Digital TPA Nurul Haq</h1>
                    <p class="text-xl text-gray-600 mb-8">Sistem Pendaftaran dan Absensi Santri TPA Berbasis Web</p>

                    <img src="image/project/tpa_masjid.png" alt="TPA Masjid" class="w-full rounded-2xl shadow-xl mb-12 border">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="md:col-span-2">
                            <h3 class="text-2xl font-bold font-heading mb-4">Tentang Proyek</h3>
                            <p class="text-gray-600 leading-relaxed mb-6">
                                Aplikasi web ini dirancang untuk menggantikan sistem absensi manual di TPA Nurul Haq. Orang tua dapat mendaftarkan anak mereka secara online, dan guru dapat dengan mudah mencatat absensi harian serta memantau perkembangan santri.
                            </p>
                            
                            <h3 class="text-2xl font-bold font-heading mb-4">Fitur Utama</h3>
                            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
                                <li>Formulir Pendaftaran Santri Baru (Online)</li>
                                <li>Panel Admin (Manajemen Data Santri & Guru)</li>
                                <li>Sistem Absensi Harian oleh Guru</li>
                                <li>Laporan Absensi per Santri (Bulanan)</li>
                                <li>Informasi Kegiatan TPA</li>
                            </ul>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-2xl">
                            <h3 class="text-xl font-bold font-heading mb-4">Info Teknis</h3>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Klien:</strong> Pengurus TPA Nurul Haq</p>
                                <p class="text-gray-700"><strong>Layanan:</strong> Aplikasi Web Custom</p>
                                <p class="text-gray-700"><strong>Tahun:</strong> 2025</p>
                                <p class="text-gray-700"><strong>Harga:</strong> 2.000.000</p>
                                
                                <h4 class="font-bold pt-2">Teknologi:</h4>
                                <ul class="list-disc list-inside text-gray-600 text-sm">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap 5</li>
                                    <li>TailwindCSS</li>
                                    <li>JavaScript</li>
                                    <li>ChartJs</li>
                                    <li>PHP</li>
                                    <li>Laravel</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- PELLOR TRANS TRAVEL -->
                <article id="project-travel" class="hidden max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">Pellor Trans Travel</h1>
                    <p class="text-xl text-gray-600 mb-8">Website Company Profile untuk Jasa Transportasi & Travel</p>

                    <img src="image/project/pellor_trans_travel.png" alt="Pellor Trans Travel" class="w-full rounded-2xl shadow-xl mb-12 border">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="md:col-span-2">
                            <h3 class="text-2xl font-bold font-heading mb-4">Tentang Proyek</h3>
                            <p class="text-gray-600 leading-relaxed mb-6">
                                Ini adalah proyek studi kasus untuk membuat website company profile modern bagi perusahaan travel. Fokus utamanya adalah pada desain yang menarik, informasi layanan yang jelas, dan kemudahan untuk menghubungi (Call to Action).
                            </p>
                            
                            <h3 class="text-2xl font-bold font-heading mb-4">Fitur Utama</h3>
                            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
                                <li>Desain Landing Page yang Menarik</li>
                                <li>Daftar Layanan (Pemesanan Tiket, Antar Jemput)</li>
                                <li>Galeri Armada Kendaraan</li>
                                CSS
                                <li>Halaman "Tentang Kami" dan "Kontak"</li>
                                <li>Tombol WhatsApp terintegrasi</li>
                            </ul>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-2xl">
                            <h3 class="text-xl font-bold font-heading mb-4">Info Teknis</h3>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Klien:</strong> Pellor Trans Travel</p>
                                <p class="text-gray-700"><strong>Layanan:</strong> Website Company Profile</p>
                                <p class="text-gray-700"><strong>Tahun:</strong> 2023</p>
                                <p class="text-gray-700"><strong>Harga:</strong> Rp 500.000</p>
                                
                                <h4 class="font-bold pt-2">Teknologi:</h4>
                                <ul class="list-disc list-inside text-gray-600 text-sm">
                                    <li>HTML</li>
                                    <li>CSS </li>
                                    <li>Boostrap</li>
                                    <li>JavaScript (untuk slider)</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                
                <!-- LAUNTEC -->
                <article id="project-launtec" class="hidden max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">Launtec - Website Laundry</h1>
                    <p class="text-xl text-gray-600 mb-8">Company profile modern untuk jasa laundry, menampilkan layanan dan paket harga.</p>

                    <img src="image/project/launtec.png" alt="Launtec Laundry" class="w-full rounded-2xl shadow-xl mb-12 border">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="md:col-span-2">
                            <h3 class="text-2xl font-bold font-heading mb-4">Tentang Proyek</h3>
                            <p class="text-gray-600 leading-relaxed mb-6">
                                Launtec adalah sebuah website company profile yang dirancang untuk bisnis laundry modern. Website ini menonjolkan kemudahan pemesanan, transparansi harga, dan layanan profesional.
                            </p>
                            
                            <h3 class="text-2xl font-bold font-heading mb-4">Fitur Utama</h3>
                            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
                                <li>Desain Bersih dan Modern</li>
                                <li>Daftar Layanan (Cuci Kering, Setrika, dll)</li>
                                <li>Tabel Paket Harga</li>
                                <li>Galeri Hasil Cucian</li>
                                <li>Formulir Kontak dan Peta Lokasi</li>
                            </ul>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-2xl">
                            <h3 class="text-xl font-bold font-heading mb-4">Info Teknis</h3>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Klien:</strong> Pak Asep Surahmat</p>
                                <p class="text-gray-700"><strong>Layanan:</strong> Website Company Profile</p>
                                <p class="text-gray-700"><strong>Tahun:</strong> 2024</p>
                                <p class="text-gray-700"><strong>Harga:</strong> Rp 750.000</p>
                                
                                <h4 class="font-bold pt-2">Teknologi:</h4>
                                <ul class="list-disc list-inside text-gray-600 text-sm">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap 5</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>
                

                <!-- NYI RORO GREEN -->
                <article id="project-nyi-roro-green" class="hidden max-w-4xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">Nyi Roro Green</h1>
                    <p class="text-xl text-gray-600 mb-8">Landing page elegan untuk promosi dengan fokus pada visual dan booking.</p>

                    <img src="image/project/nyirorogreen.png" alt="Nyi Roro Green" class="w-full rounded-2xl shadow-xl mb-12 border">

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="md:col-span-2">
                            <h3 class="text-2xl font-bold font-heading mb-4">Tentang Proyek</h3>
                            <p class="text-gray-600 leading-relaxed mb-6">
                                Sebuah landing page yang dirancang untuk Nyi Roro Green. 
                                Tujuannya adalah untuk menarik pengunjung dengan visual yang kuat
                                ,menampilkan akibat sampah lautan di pantai selatan akibat manusia
                            </p>
                            
                            <h3 class="text-2xl font-bold font-heading mb-4">Fitur Utama</h3>
                            <ul class="list-disc list-inside text-gray-600 space-y-2 mb-6">
                                <li>Hero Section dengan Gambar Full-screen</li>
                                <li>Asal Usul Nyi Roro Kidul</li>
                                <li>Akibat Pembuangan limbah sampah di lautan</li>
                                <li>Kategori sampah di daerah Yogyakarta</li>
                                <li>Sebaran Volume Sampah di Yogyakarta</li>
                            </ul>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-2xl">
                            <h3 class="text-xl font-bold font-heading mb-4">Info Teknis</h3>
                            <div class="space-y-3">
                                <p class="text-gray-700"><strong>Klien:</strong> Pak Asep Surahmat</p>
                                <p class="text-gray-700"><strong>Layanan:</strong> Website Landing Page</p>
                                <p class="text-gray-700"><strong>Tahun:</strong> 2024</p>
                                <p class="text-gray-700"><strong>Harga:</strong> Rp 600.000</p>
                                
                                <h4 class="font-bold pt-2">Teknologi:</h4>
                                <ul class="list-disc list-inside text-gray-600 text-sm">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Boostrap 5</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </section>

    </main>

    <footer class="bg-gray-900 py-12 text-gray-400">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 Muhammad Syaifulloh. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="kebijakan-privasi.html" class="hover:text-white transition">Kebijakan Privasi</a>
                    <a href="syarat-dan-ketentuan.html" class="hover:text-white transition">syarat dan ketentuan</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/project-kami.js"></script>
    
    </body>
</html>