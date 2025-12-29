<?php
require 'be/config.php';

// 1. LOGIKA UTAMA: Ambil Artikel Berdasarkan Slug
if (isset($_GET['slug'])) {
    $slug = mysqli_real_escape_string($conn, $_GET['slug']);
    
    // Cari artikel saat ini
    $query = "SELECT * FROM articles WHERE slug = '$slug'";
    $result = mysqli_query($conn, $query);
    
    // Jika artikel ditemukan
    if (mysqli_num_rows($result) > 0) {
        $article = mysqli_fetch_assoc($result);
        $current_id = $article['id']; // Simpan ID untuk pengecualian di sidebar

        // --- SEO LOGIC ---
        $meta_description = substr(strip_tags($article['content']), 0, 160) . "...";
        $base_url = "https://msyaifulloh.my.id/"; // Ganti dengan domain asli saat live
        $image_url = $article['image'] ? $base_url . "uploads/" . $article['image'] : $base_url . "image/foto_ipul.png";
        $page_url = $base_url . "artikel/" . $article['slug'];

    } else {
        header("Location: index.php");
        exit;
    }
} else {
    header("Location: index.php");
    exit;
}

// 2. LOGIKA SIDEBAR: Ambil 5 Artikel Terbaru (Kecuali artikel yang sedang dibuka)
$query_latest = "SELECT * FROM articles WHERE id != '$current_id' ORDER BY created_at DESC LIMIT 5";
$result_latest = mysqli_query($conn, $query_latest);
?>

<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title><?= htmlspecialchars($article['title']); ?> - Muhammad Syaifulloh</title>
    <meta name="description" content="<?= htmlspecialchars($meta_description); ?>">
    <meta name="author" content="Muhammad Syaifulloh">
    <meta property="og:title" content="<?= htmlspecialchars($article['title']); ?>" />
    <meta property="og:description" content="Simak fakta fatal kenapa bisnis wajib punya website di 2026!" />
    <meta property="og:image" content="<?= $base_url; ?>uploads/<?= $article['image']; ?>" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="<?= $page_url; ?>" />
    <meta property="twitter:title" content="<?= htmlspecialchars($article['title']); ?>" />
    <meta property="twitter:description" content="Simak fakta fatal kenapa bisnis wajib punya website di 2026!" />
    <meta property="twitter:image" content="<?= $base_url; ?>uploads/<?= $article['image']; ?>" />
    
    <meta property="og:type" content="article">
    <meta property="og:title" content="<?= htmlspecialchars($article['title']); ?>">
    
    <meta property="og:description" content="<?= htmlspecialchars($meta_description); ?>">
    <meta property="og:image" content="<?= $image_url; ?>">
    <meta property="og:url" content="<?= $page_url; ?>">

    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
    <link rel="canonical" href="<?= $page_url; ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
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
                    }
                }
            }
        }
    </script>
</head>

<body class="bg-gray-50 text-gray-900 font-sans antialiased">

    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <nav class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <a href="index.php" class="flex items-center space-x-2 hover:opacity-80 transition duration-300">
                    <div class="bg-primary text-white font-bold text-lg px-3 py-1.5 rounded-lg">MS</div>
                </a>
                <a href="index.php" class="text-gray-600 hover:text-primary transition duration-300 font-medium">
                    <i class="fas fa-arrow-left mr-2"></i> Kembali ke Beranda
                </a>
            </div>
        </nav>
    </header>

    <main class="pt-32 pb-24">
        <div class="container mx-auto px-6">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                <aside class="hidden lg:block lg:col-span-1">
                    <div class="sticky top-32 flex flex-col items-center space-y-6">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest writing-vertical-lr mb-2">Share</p>
                        
                        <a href="https://instagram.com" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-pink-600 shadow-sm hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100" title="Instagram">
                            <i class="fa-brands fa-instagram text-lg"></i>
                        </a>
                        
                        <a href="https://tiktok.com" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-sm hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100" title="TikTok">
                            <i class="fa-brands fa-tiktok text-lg"></i>
                        </a>

                        <a href="https://facebook.com" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100" title="Facebook">
                            <i class="fa-brands fa-facebook-f text-lg"></i>
                        </a>

                         <a href="https://wa.me/?text=Baca artikel ini: <?= $page_url ?>" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-500 shadow-sm hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100" title="Share ke WhatsApp">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                        </a>
                    </div>
                </aside>


                <article class="col-span-1 lg:col-span-8 bg-white p-8 md:p-10 rounded-2xl shadow-sm h-fit">
                    
                    <header class="mb-8">
                        <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded-full font-medium text-xs">Artikel</span>
                            <span>•</span>
                            <span><?= date('d F Y', strtotime($article['created_at'])); ?></span>
                        </div>
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight text-gray-900 mb-6">
                            <?= htmlspecialchars($article['title']); ?>
                        </h1>
                    </header>

                    <?php if ($article['image']): ?>
                    <div class="mb-10 rounded-xl overflow-hidden shadow-lg">
                        <img src="uploads/<?= $article['image']; ?>" alt="<?= htmlspecialchars($article['title']); ?>" class="w-full h-auto object-cover">
                    </div>
                    <?php endif; ?>

                    <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <?= nl2br($article['content']); ?> 
                    </div>

                    <div class="mt-10 pt-8 border-t border-gray-100 lg:hidden">
                        <p class="text-sm font-bold text-gray-500 mb-4">Bagikan Artikel:</p>
                        <div class="flex space-x-4">
                            <a href="https://www.instagram.com/pul_ipul_pul/" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.tiktok.com/@pul_ipul_pul" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="https://www.facebook.com/syaiful.ipul.395454?locale=id_ID" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                </article>


                <aside class="col-span-1 lg:col-span-3 space-y-8">
                    
                    <div class="bg-white p-6 rounded-2xl shadow-sm sticky top-32">
                        <h3 class="text-xl font-bold font-heading mb-6 border-l-4 border-primary pl-3">Update Terbaru</h3>
                        
                        <div class="space-y-6">
                            <?php if (mysqli_num_rows($result_latest) > 0): ?>
                                <?php while ($row = mysqli_fetch_assoc($result_latest)): 
                                    $thumb = $row['image'] ? "uploads/" . $row['image'] : "https://via.placeholder.com/150";
                                ?>
                                <a href="detail-artikel.php?slug=<?= $row['slug']; ?>" class="group flex space-x-4 items-start">
                                    <div class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden relative">
                                        <img src="<?= $thumb; ?>" alt="Thumb" class="w-full h-full object-cover group-hover:scale-110 transition duration-300">
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-bold text-gray-800 leading-snug group-hover:text-primary transition line-clamp-2 mb-1">
                                            <?= htmlspecialchars($row['title']); ?>
                                        </h4>
                                        <p class="text-xs text-gray-400">
                                            <?= date('d M Y', strtotime($row['created_at'])); ?>
                                        </p>
                                    </div>
                                </a>
                                <?php endwhile; ?>
                            <?php else: ?>
                                <p class="text-gray-500 text-sm italic">Belum ada update terbaru.</p>
                            <?php endif; ?>
                        </div>

                        <div class="mt-8 pt-6 border-t border-gray-100 text-center">
                            <a href="index.php#blog" class="text-sm font-bold text-primary hover:text-secondary transition">
                                Lihat Semua Artikel <i class="fas fa-arrow-right ml-1"></i>
                            </a>
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    </main>

    <footer class="bg-gray-900 py-12 text-gray-400 mt-auto">
        <div class="container mx-auto px-6 text-center">
            <p>&copy; 2025 Muhammad Syaifulloh. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>