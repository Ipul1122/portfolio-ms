<?php
session_start();
require '../../be/config.php';

// Cek sesi login
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit;
}

// Ambil data artikel
$query = "SELECT * FROM articles ORDER BY created_at DESC";
$result = mysqli_query($conn, $query);
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manajemen Artikel</title>
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
<body class="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen flex flex-col">

    <nav class="bg-white shadow-sm border-b border-gray-100">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <div class="bg-blue-100 p-2 rounded-lg text-primary">
                    <i class="fas fa-newspaper text-xl"></i>
                </div>
                <span class="text-xl font-bold text-gray-800">Admin Panel</span>
            </div>
            <div class="flex items-center space-x-4">
                <span class="text-sm text-gray-500 hidden md:block">Halo, Admin</span>
                <a href="../logout.php" class="text-red-500 hover:text-red-700 text-sm font-medium transition">
                    <i class="fas fa-sign-out-alt mr-1"></i> Logout
                </a>
            </div>
        </div>
    </nav>

    <main class="flex-grow container mx-auto px-4 sm:px-6 py-8">
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Daftar Artikel</h1>
                <p class="text-gray-500 text-sm mt-1">Kelola semua artikel dan berita Anda di sini.</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a href="../dashboard.php" class="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition font-medium flex items-center justify-center shadow-sm">
                    <i class="fas fa-arrow-left mr-2"></i> Kembali
                </a>
                <a href="tambah_artikel.php" class="px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-secondary transition font-medium flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <i class="fas fa-plus mr-2"></i> Tulis Artikel
                </a>
            </div>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
            <div class="relative">
                <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input type="text" id="searchInput" onkeyup="filterTable()" placeholder="Cari judul artikel..." class="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm">
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse" id="articleTable">
                    <thead>
                        <tr class="bg-gray-50/50 border-b border-gray-200 text-gray-500 uppercase text-xs tracking-wider font-semibold">
                            <th class="py-4 px-6 text-center w-16">No</th>
                            <th class="py-4 px-6 w-24 text-center">Cover</th>
                            <th class="py-4 px-6">Judul & Slug</th>
                            <th class="py-4 px-6 text-center w-40 hidden md:table-cell">Tanggal</th>
                            <th class="py-4 px-6 text-center w-32">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm divide-y divide-gray-100">
                        <?php if(mysqli_num_rows($result) > 0): ?>
                            <?php $no = 1; while($row = mysqli_fetch_assoc($result)): ?>
                            <tr class="hover:bg-blue-50/30 transition duration-150 group">
                                <td class="py-4 px-6 text-center font-medium text-gray-400">
                                    <?= $no++; ?>
                                </td>
                                <td class="py-4 px-6">
                                    <div class="w-16 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 mx-auto relative">
                                        <?php if($row['image']): ?>
                                            <img src="../../uploads/<?= $row['image']; ?>" alt="Thumb" class="w-full h-full object-cover">
                                        <?php else: ?>
                                            <div class="w-full h-full flex items-center justify-center text-gray-400">
                                                <i class="fas fa-image"></i>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </td>
                                <td class="py-4 px-6">
                                    <p class="font-bold text-gray-800 text-base mb-1 group-hover:text-primary transition line-clamp-1">
                                        <?= htmlspecialchars($row['title']); ?>
                                    </p>
                                    <p class="text-xs text-gray-400 font-mono bg-gray-100 inline-block px-2 py-0.5 rounded">
                                        /<?= htmlspecialchars($row['slug']); ?>
                                    </p>
                                </td>
                                <td class="py-4 px-6 text-center hidden md:table-cell">
                                    <span class="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium border border-green-100">
                                        <?= date('d M Y', strtotime($row['created_at'])); ?>
                                    </span>
                                </td>
                                <td class="py-4 px-6 text-center">
                                    <div class="flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition">
                                        <a href="edit_artikel.php?id=<?= $row['id']; ?>" class="w-9 h-9 rounded-lg bg-white border border-gray-200 text-yellow-600 flex items-center justify-center hover:bg-yellow-50 hover:border-yellow-200 hover:text-yellow-700 transition shadow-sm" title="Edit">
                                            <i class="fas fa-pen text-xs"></i>
                                        </a>
                                        <a href="hapus_artikel.php?id=<?= $row['id']; ?>" onclick="return confirm('Apakah Anda yakin ingin menghapus artikel ini? Data tidak dapat dikembalikan.')" class="w-9 h-9 rounded-lg bg-white border border-gray-200 text-red-600 flex items-center justify-center hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition shadow-sm" title="Hapus">
                                            <i class="fas fa-trash text-xs"></i>
                                        </a>
                                        <a href="../../detail-artikel.php?slug=<?= $row['slug']; ?>" target="_blank" class="w-9 h-9 rounded-lg bg-white border border-gray-200 text-blue-600 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition shadow-sm hidden sm:flex" title="Lihat di Website">
                                            <i class="fas fa-external-link-alt text-xs"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <?php endwhile; ?>
                        <?php else: ?>
                            <tr>
                                <td colspan="5" class="py-12 text-center">
                                    <div class="flex flex-col items-center justify-center text-gray-400">
                                        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                            <i class="far fa-folder-open text-2xl"></i>
                                        </div>
                                        <p class="text-lg font-medium text-gray-600">Belum ada artikel</p>
                                        <p class="text-sm">Mulai menulis artikel pertama Anda sekarang.</p>
                                        <a href="tambah_artikel.php" class="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
                                            Buat Artikel Baru
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
            
            <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
                <span>Total Artikel: <strong><?= mysqli_num_rows($result); ?></strong></span>
                <span class="hidden sm:inline">Diurutkan berdasarkan tanggal terbaru</span>
            </div>
        </div>

    </main>

    <script>
        function filterTable() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("searchInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("articleTable");
            tr = table.getElementsByTagName("tr");

            for (i = 0; i < tr.length; i++) {
                // Mencari di kolom ke-3 (Index 2) yaitu Judul
                td = tr[i].getElementsByTagName("td")[2]; 
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        }
    </script>

</body>
</html>