<?php
session_start();
require '../../be/config.php';

if (!isset($_SESSION['user_id']) || !isset($_GET['id'])) {
    header("Location: index.php");
    exit;
}

$id = mysqli_real_escape_string($conn, $_GET['id']);

// Ambil info gambar dulu untuk dihapus dari folder uploads
$queryCheck = "SELECT image FROM articles WHERE id = '$id'";
$resultCheck = mysqli_query($conn, $queryCheck);
$row = mysqli_fetch_assoc($resultCheck);

// Hapus file gambar jika ada
if ($row['image']) {
    $filePath = "../../uploads/" . $row['image'];
    if (file_exists($filePath)) {
        unlink($filePath);
    }
}

// Hapus data dari database
$queryDelete = "DELETE FROM articles WHERE id = '$id'";
mysqli_query($conn, $queryDelete);

header("Location: index.php");
exit;
?>