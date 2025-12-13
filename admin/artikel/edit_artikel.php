<?php
session_start();
// Mundur 2 langkah ke folder be
require '../../be/config.php';

// Cek Login
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit;
}

// Cek ID artikel di URL
if (!isset($_GET['id'])) {
    header("Location: index.php");
    exit;
}

$id = mysqli_real_escape_string($conn, $_GET['id']);

// Ambil data artikel lama untuk ditampilkan di form
$query = "SELECT * FROM articles WHERE id = '$id'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) == 0) {
    header("Location: index.php");
    exit;
}
$article = mysqli_fetch_assoc($result);

// Proses Update saat tombol Simpan ditekan
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $content = mysqli_real_escape_string($conn, $_POST['content']);
    
    // Update Slug otomatis jika judul berubah
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));

    $queryUpdate = "UPDATE articles SET title = '$title', slug = '$slug', content = '$content'";

    // Cek jika ada upload gambar baru
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $target_dir = "../../uploads/";
        $imageName = time() . '_' . basename($_FILES["image"]["name"]);
        
        if(move_uploaded_file($_FILES["image"]["tmp_name"], $target_dir . $imageName)) {
            // Hapus gambar lama agar tidak menuh-menuhin server
            if ($article['image'] && file_exists($target_dir . $article['image'])) {
                unlink($target_dir . $article['image']);
            }
            // Tambahkan update kolom image
            $queryUpdate .= ", image = '$imageName'";
        }
    }

    $queryUpdate .= " WHERE id = '$id'";
    
    if (mysqli_query($conn, $queryUpdate)) {
        header("Location: index.php");
        exit;
    } else {
        $error = "Gagal mengupdate: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Artikel - <?= htmlspecialchars($article['title']); ?></title>
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sans': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        primary: '#2563eb',
                        secondary: '#1e40af',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen pb-12">

    <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div class="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <a href="index.php" class="text-gray-500 hover:text-primary transition">
                    <i class="fas fa-arrow-left text-lg"></i>
                </a>
                <div>
                    <span class="block text-lg font-bold text-gray-800 leading-none">Edit Artikel</span>
                    <span class="text-xs text-gray-400 font-mono">ID: <?= $article['id'] ?></span>
                </div>
            </div>
            <button type="submit" form="editForm" class="md:hidden text-primary font-bold text-sm">
                SIMPAN
            </button>
        </div>
    </nav>

    <div class="container mx-auto px-4 sm:px-6 py-8">
        
        <?php if(isset($error)): ?>
            <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg shadow-sm">
                <p class="text-red-700 text-sm font-medium"><?= $error ?></p>
            </div>
        <?php endif; ?>

        <form id="editForm" method="POST" enctype="multipart/form-data" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div class="lg:col-span-2 space-y-6">
                
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Judul Artikel</label>
                    <input type="text" name="title" value="<?= htmlspecialchars($article['title']); ?>" class="w-full text-2xl md:text-3xl font-bold text-gray-800 border-none focus:ring-0 placeholder-gray-300 px-0 py-2" required>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[500px] flex flex-col">
                    <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Konten Artikel</label>
                    <textarea name="content" class="w-full flex-1 resize-none border-0 focus:ring-0 text-gray-600 text-lg leading-relaxed p-0 placeholder-gray-300" required><?= htmlspecialchars($article['content']); ?></textarea>
                </div>
            </div>

            <div class="space-y-6">
                
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                    <h3 class="font-bold text-gray-800 mb-4">Status</h3>
                    
                    <div class="flex items-center gap-3 mb-6 text-sm text-gray-600">
                        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <i class="fas fa-check"></i>
                        </div>
                        <div>
                            <p class="font-medium">Terakhir diupdate:</p>
                            <p class="text-xs text-gray-400"><?= date('d M Y, H:i', strtotime($article['created_at'])); ?></p>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <button type="submit" class="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 flex justify-center items-center gap-2">
                            <i class="fas fa-save"></i> Simpan Perubahan
                        </button>
                        <a href="index.php" class="w-full py-3 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition text-center">
                            Batal
                        </a>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">Gambar Utama</h3>
                    
                    <div class="w-full aspect-video bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center overflow-hidden relative cursor-pointer hover:bg-gray-100 transition group" onclick="document.getElementById('fileInput').click()">
                        
                        <img id="imagePreview" 
                             src="<?= $article['image'] ? '../../uploads/' . $article['image'] : '#' ?>" 
                             alt="Preview" 
                             class="w-full h-full object-cover <?= $article['image'] ? '' : 'hidden' ?>">
                        
                        <div id="uploadPlaceholder" class="text-center p-4 absolute inset-0 flex flex-col items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition duration-300 backdrop-blur-sm">
                            <div class="w-10 h-10 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
                                <i class="fas fa-pen"></i>
                            </div>
                            <p class="text-sm text-gray-600 font-bold">Ganti Gambar</p>
                        </div>

                        <div id="emptyState" class="<?= $article['image'] ? 'hidden' : '' ?> text-center p-4">
                            <div class="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                                <i class="fas fa-image"></i>
                            </div>
                            <p class="text-sm text-gray-400">Belum ada gambar</p>
                        </div>
                    </div>

                    <input type="file" name="image" id="fileInput" class="hidden" accept="image/*" onchange="previewImage(this)">
                    <p class="text-xs text-center text-gray-400 mt-3">Klik gambar untuk menggantinya.</p>
                </div>

            </div>
        </form>
    </div>

    <script>
        function previewImage(input) {
            const preview = document.getElementById('imagePreview');
            const placeholder = document.getElementById('uploadPlaceholder');
            const emptyState = document.getElementById('emptyState');
            
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                    if(emptyState) emptyState.classList.add('hidden');
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>

</body>
</html>