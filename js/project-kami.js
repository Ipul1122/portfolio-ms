 // Jalankan script setelah halaman selesai dimuat
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Ambil URL parameter
            const urlParams = new URLSearchParams(window.location.search);
            const projectNama = urlParams.get('project'); // akan berisi 'masjid', 'tpa', 'travel', 'launtec', 'nyi-roro-green'

            // Sembunyikan konten default
            const projectDefault = document.getElementById('project-default');
            
            // 2. Tentukan elemen mana yang akan ditampilkan
            let elemenToShow = null;

            if (projectNama === 'masjid') {
                elemenToShow = document.getElementById('project-masjid');
            } else if (projectNama === 'tpa') {
                elemenToShow = document.getElementById('project-tpa');
            } else if (projectNama === 'travel') {
                elemenToShow = document.getElementById('project-travel');
            
            // --- Tambahan untuk project baru ---
            } else if (projectNama === 'launtec') {
                elemenToShow = document.getElementById('project-launtec');
            } else if (projectNama === 'nyi-roro-green') {
                elemenToShow = document.getElementById('project-nyi-roro-green');
            }
            // -------------------------------------

            // 3. Tampilkan elemen yang dipilih (jika ada)
            if (elemenToShow) {
                // Sembunyikan pesan default
                projectDefault.classList.add('hidden');
                // Tampilkan proyek yang benar
                elemenToShow.classList.remove('hidden');
            } else {
                // Jika parameter tidak ada atau salah, biarkan pesan default terlihat
                projectDefault.classList.remove('hidden');
            }
        });