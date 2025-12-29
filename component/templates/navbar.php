<?php
// Cek halaman saat ini untuk menentukan link
$current_page = basename($_SERVER['PHP_SELF']);
$is_home = ($current_page == 'index.php' || $current_page == '');

// Jika di halaman home, link pakai #id (scroll). Jika bukan, pakai index.php#id
$prefix = $is_home ? '' : 'index.php';
?>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
    <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
            
            <a href="<?= $prefix ?>#home" class="flex items-center space-x-2 hover:opacity-80 transition duration-300">
                <div class="bg-primary text-white font-bold text-lg px-3 py-1.5 rounded-lg">MS</div>
            </a>

            <div class="hidden md:flex items-center space-x-8">
                <a href="<?= $prefix ?>#about" class="text-gray-600 hover:text-primary transition duration-300 font-medium">About</a>
                <a href="<?= $prefix ?>#services" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Services</a>
                <a href="<?= $prefix ?>#work" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Work</a>
                <a href="<?= $prefix ?>#mvp-showcase" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Sample</a>
                <a href="<?= $prefix ?>#blog" class="text-gray-600 hover:text-primary transition duration-300 font-medium">Blog</a>
                <a href="<?= $prefix ?>#contact" class="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">Contact</a>
            </div>

            <button id="menu-btn" class="md:hidden focus:outline-none text-gray-700">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
    </nav>

    <div id="menu-mobile" class="hidden md:hidden nav-blur">
        <div class="container mx-auto px-6 py-4 space-y-2">
            <a href="<?= $prefix ?>#about" class="block py-2 text-gray-600 hover:text-primary transition">About</a>
            <a href="<?= $prefix ?>#services" class="block py-2 text-gray-600 hover:text-primary transition">Services</a>
            <a href="<?= $prefix ?>#work" class="block py-2 text-gray-600 hover:text-primary transition">Work</a>
            <a href="<?= $prefix ?>#mvp-showcase" class="block py-2 text-gray-600 hover:text-primary transition">Sample</a>
            <a href="<?= $prefix ?>#blog" class="block py-2 text-gray-600 hover:text-primary transition">Blog</a>
            <a href="<?= $prefix ?>#contact" class="block py-2 text-gray-600 hover:text-primary transition">Contact</a>
        </div>
    </div>
</header>