<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>403 - Akses Ditolak</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-gray-50 h-screen flex items-center justify-center p-4">

    <div class="max-w-md w-full text-center">
        <div class="mb-8 relative inline-block">
            <div class="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>
            <div class="relative bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto border-4 border-red-100">
                <i class="fas fa-lock text-4xl text-red-500"></i>
            </div>
        </div>

        <h1 class="text-6xl font-bold text-gray-900 mb-2">403</h1>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Akses Dilarang!</h2>
        <p class="text-gray-600 mb-8">
            Ups! Anda tidak memiliki izin untuk mengakses area ini. 
            Data di sini bersifat rahasia dan dilindungi.
        </p>

        <a href="/" class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-blue-500/30 font-medium">
            <i class="fas fa-home"></i>
            Kembali ke Beranda
        </a>
    </div>

</body>
</html>