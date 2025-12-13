<?php
session_start();
require '../be/config.php';


if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = mysqli_real_escape_string($conn, $_POST['title']);
    $content = mysqli_real_escape_string($conn, $_POST['content']);
    
    // Buat slug otomatis dari judul (Contoh: "Halo Dunia" -> "halo-dunia")
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    
    // Upload Gambar (Opsional)
    $imageName = "";
    if(isset($_FILES['image']) && $_FILES['image']['error'] == 0){
        $target_dir = "../uploads/";
        if (!file_exists($target_dir)) { mkdir($target_dir, 0777, true); }
        
        $imageName = time() . '_' . basename($_FILES["image"]["name"]);
        move_uploaded_file($_FILES["image"]["tmp_name"], $target_dir . $imageName);
    }

    $query = "INSERT INTO articles (title, slug, content, image) VALUES ('$title', '$slug', '$content', '$imageName')";
    
    if (mysqli_query($conn, $query)) {
        header("Location: dashboard.php");
    } else {
        $error = "Gagal menyimpan: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Tambah Artikel</title>
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
    </head>
<body class="bg-gray-50 py-10">
    <div class="container mx-auto px-6 max-w-3xl">
        <div class="bg-white p-8 rounded-xl shadow-lg">
            <h1 class="text-2xl font-bold mb-6 text-gray-800">Tulis Artikel Baru</h1>
            
            <form method="POST" enctype="multipart/form-data" class="space-y-6">
                <div>
                    <label class="block text-gray-700 font-bold mb-2">Judul Artikel</label>
                    <input type="text" name="title" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-bold mb-2">Gambar Utama</label>
                    <input type="file" name="image" class="w-full px-4 py-2 border rounded-lg">
                </div>

                <div>
                    <label class="block text-gray-700 font-bold mb-2">Konten</label>
                    <textarea name="content" rows="10" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required></textarea>
                    <p class="text-sm text-gray-500 mt-1">Gunakan tag HTML sederhana seperti &lt;p&gt;, &lt;b&gt;, atau &lt;h2&gt; untuk format.</p>
                </div>

                <div class="flex justify-end gap-4">
                    <a href="dashboard.php" class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Batal</a>
                    <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Terbitkan</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>