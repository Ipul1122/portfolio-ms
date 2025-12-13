<?php
require 'be/config.php';

// Cek apakah ada parameter slug di URL
if (isset($_GET['slug'])) {
    $slug = mysqli_real_escape_string($conn, $_GET['slug']);
    
    // Cari artikel berdasarkan slug
    $query = "SELECT * FROM articles WHERE slug = '$slug'";
    $result = mysqli_query($conn, $query);
    
    // Jika artikel ditemukan
    if (mysqli_num_rows($result) > 0) {
        $article = mysqli_fetch_assoc($result);
    } else {
        // Jika slug salah, redirect ke home
        header("Location: index.php");
        exit;
    }
} else {
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($article['title']); ?> - Muhammad Syaifulloh</title>
    
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
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
                        'accent': '#3b82f6',
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
        <article class="container mx-auto px-6 max-w-4xl">
            <header class="text-center mb-10">
                <div class="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-medium mb-6">
                    <?= date('d F Y', strtotime($article['created_at'])); ?>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight text-gray-900">
                    <?= htmlspecialchars($article['title']); ?>
                </h1>
            </header>

            <?php if ($article['image']): ?>
            <div class="mb-12 rounded-2xl overflow-hidden shadow-xl">
                <img src="uploads/<?= $article['image']; ?>" alt="<?= htmlspecialchars($article['title']); ?>" class="w-full h-auto object-cover max-h-[500px]">
            </div>
            <?php endif; ?>

            <div class="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm text-gray-700 leading-relaxed">
                <?= nl2br($article['content']); ?> 
                </div>

            <div class="mt-12 flex justify-center">
                <a href="index.php#blog" class="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-primary hover:text-primary transition duration-300 shadow-sm font-medium">
                    Lihat Artikel Lainnya
                </a>
            </div>
        </article>
    </main>

    <footer class="bg-gray-900 py-12 text-gray-400">
        <div class="container mx-auto px-6 text-center">
            <p>&copy; 2025 Muhammad Syaifulloh. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>