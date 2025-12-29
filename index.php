<?php

    require 'be/config.php';

?>

<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Syaifulloh - Web Developer</title>
    
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

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

        <!-- Home -->
        <?php include 'component/section-home.php'; ?>
        
        <!-- About -->
        <?php include 'component/section-about.php'; ?>
        
        <!-- Services -->
        <?php include 'component/section-services.php'; ?>
        
        <!-- Work -->
        <?php include 'component/section-work.php'; ?>

        <!-- Artikel -->
        <?php include 'component/section-artikel.php'; ?>

        <!-- Contact -->
        <?php include 'component/section-contact.php'; ?>
       
       

    </main>

    <footer class="bg-gray-900 py-12 text-gray-400">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 Muhammad Syaifulloh. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="kebijakan-privasi.php" class="hover:text-white transition">kebijakan privasi</a>
                    <a href="syarat-dan-ketentuan.php" class="hover:text-white transition">syarat dan ketentuan</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="js/navbar.js"></script>
    <script src="js/swiper.js"></script>
    <script src="js/contact.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>


</body>
</html>