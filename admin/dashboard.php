<?php
session_start();
require '../be/config.php';

// Cek keamanan: Jika belum login, tendang ke halaman login
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dashboard Admin</title>
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
</head>
<body class="bg-gray-50">
    <nav class="bg-white shadow p-4">
        <div class="container mx-auto flex justify-between items-center">
            <span class="text-xl font-bold text-blue-600">Admin Panel</span>
            <div>
                <span class="mr-4 text-gray-600">Halo, <?= $_SESSION['username'] ?></span>
                <a href="logout.php" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm">Logout</a>
            </div>
        </div>
    </nav>

    <div class="container mx-auto mt-10 px-4">
        <div class="bg-white p-6 rounded-lg shadow">
            <h1 class="text-2xl font-bold mb-4">Selamat Datang di Dashboard</h1>
            <p class="text-gray-600">Anda berhasil login sebagai admin. Disini Anda bisa mengelola artikel nantinya.</p>
            <?php if (isset($_GET['login']) && $_GET['login'] === 'success'): ?>
                <div class="mt-4 p-3 bg-green-50 rounded border border-green-200 text-sm text-green-700">
                    <strong>Berhasil masuk!</strong> Anda sekarang berada di dashboard.
                </div>
            <?php endif; ?>
            <?php if (isset($_GET['debug']) && $_GET['debug'] == '1'): ?>
                <div class="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200 text-sm text-gray-700">
                    <strong>Debug: Session info</strong>
                    <ul class="mt-2">
                        <li>PHP Session ID: <?= session_id() ?></li>
                        <li>PHPSESSID cookie: <?= isset($_COOKIE[session_name()]) ? htmlspecialchars($_COOKIE[session_name()]) : 'not set' ?></li>
                        <li>Session user_id: <?= isset($_SESSION['user_id']) ? htmlspecialchars($_SESSION['user_id']) : 'not set' ?></li>
                        <li>Session username: <?= isset($_SESSION['username']) ? htmlspecialchars($_SESSION['username']) : 'not set' ?></li>
                    </ul>
                </div>
            <?php endif; ?>
            
            <div class="mt-6">
                <a href="tambah_artikel.php" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
                    + Buat Artikel Baru
                </a>
            </div>
        </div>
    </div>
</body>
</html>