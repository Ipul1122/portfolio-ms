<?php
session_start();
require '../be/config.php';

// Jika sudah login, lempar ke dashboard
if (isset($_SESSION['user_id'])) {
    header("Location: dashboard.php");
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    // Cari user berdasarkan username (gunakan prepared statement untuk keamanan)
    $stmt = mysqli_prepare($conn, "SELECT id, username, password FROM users WHERE username = ? LIMIT 1");
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, 's', $username);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if ($result && mysqli_num_rows($result) > 0) {
            $user = mysqli_fetch_assoc($result);
            // Cek kecocokan password yang diketik dengan hash di database
            if (password_verify($password, $user['password'])) {
                // Regenerate session id to prevent fixation and ensure session is saved before redirect
                session_regenerate_id(true);
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                // Force session write and close so data is available after redirect
                session_write_close();
                header("Location: dashboard.php?login=success");
                exit;
            } else {
                // Support legacy plain-text passwords (not recommended):
                if ($password === $user['password']) {
                    // Upgrade to a secure hash
                    $newHash = password_hash($password, PASSWORD_DEFAULT);
                    $updateStmt = mysqli_prepare($conn, "UPDATE users SET password = ? WHERE id = ?");
                    if ($updateStmt) {
                        mysqli_stmt_bind_param($updateStmt, 'si', $newHash, $user['id']);
                        mysqli_stmt_execute($updateStmt);
                        mysqli_stmt_close($updateStmt);
                        error_log("[LOGIN] Upgraded hash for user={$username} (id={$user['id']}).");
                    }
                    // Log in user now that it's authenticated
                    session_regenerate_id(true);
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['username'] = $user['username'];
                    session_write_close();
                    header("Location: dashboard.php?login=success");
                    exit;
                }
                // Log for debugging (do not expose hashes publicly)
                error_log("[LOGIN] Password mismatch for user={$username}. SessionID=" . session_id());
                $error = "Username atau password salah!";
            }
        } else {
            error_log("[LOGIN] Username not found: {$username}. SessionID=" . session_id());
            $error = "Username atau password salah!";
        }
        mysqli_stmt_close($stmt);
    } else {
        // Jika gagal mempersiapkan statement, tampilkan pesan generik dan log error
        error_log("[LOGIN] Gagal prepare statement: " . mysqli_error($conn));
        $error = "Terjadi kesalahan, silakan coba lagi nanti.";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Login Admin</title>
    <script src="https://cdn.tailwindcss.com/3.4.17"></script>
</head>
<body class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold mb-6 text-center text-blue-600">Login Admin</h2>
        
        <?php if($error): ?>
            <div class="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm text-center">
                <?= $error ?>
            </div>
        <?php endif; ?>

        <form method="POST">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="text" name="username" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" name="password" class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Masuk</button>
        </form>
    </div>
</body>
</html>