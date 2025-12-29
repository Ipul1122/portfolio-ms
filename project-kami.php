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
                    <a href="index.php#work" class="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">
                        Kembali ke Portofolio
                    </a>
                </div>


                <!-- MASJID NURUL HAQ -->
                <?php include 'component/detail-project/project-masjid.php'; ?>

                <!-- Absensi Digital -->
                <?php include 'component/detail-project/absensi-digital.php'; ?>

                <!-- PELLOR TRANS TRAVEL -->
                <?php include 'component/detail-project/project-travel.php'; ?>
                
                <!-- LAUNTEC -->
                <?php include 'component/detail-project/project-launtec.php'; ?>

                <!-- Nyi Roro Green -->
                <?php include 'component/detail-project/nyi-roro-green.php'; ?>

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