export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  client: string;
  service: string;
  year: string;
  price: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "masjid",
    title: "Website Masjid Nurul Haq",
    subtitle: "Aplikasi web monolithic yang dibangun menggunakan Laravel untuk mengelola semua aspek informasi, kegiatan, dan keuangan masjid.",
    description: "Aplikasi Web ini memiliki tiga peran pengguna utama: Pengguna Umum (Jamaah) dapat melihat informasi publik, Admin DKM (Dewan Kemakmuran Masjid) sebagai pengelola utama website, dan Admin RISNHA (Remaja Islam Masjid Nurul Haq) sebagai pengelola untuk bagian organisasi remaja masjid.",
    image: "/image/project/masjid_nurul_haq.png",
    category: "Web App",
    client: "DKM Masjid Nurul Haq",
    service: "Aplikasi Web Custom",
    year: "2025",
    price: "Rp. 5.000.000",
    technologies: ["HTML", "Css", "JavaScript", "TailwindCSS", "PHP", "Laravel", "AlpineJs", "ChartJs", "MySQL"],
    features: [
      "Homepage: Menampilkan carousel dinamis, running text, dan ringkasan konten terbaru.",
      "Konten Masjid: Melihat daftar dan detail kegiatan serta artikel yang dipublikasikan oleh DKM.",
      "Keuangan Masjid: Laporan keuangan transparan dengan rincian pemasukkan dan pengeluaran.",
      "Galeri: Melihat galeri foto kegiatan masjid.",
      "Profil Masjid: Halaman untuk melihat Sejarah serta Visi & Misi masjid.",
      "Donasi: Halaman untuk informasi donasi, formulir kirim bukti transfer, dan melihat donasi yang telah terverifikasi.",
      "Jadwal Sholat: Menampilkan jadwal sholat harian (melalui API internal)."
    ]
  },
  {
    id: "tpa",
    title: "Absensi Digital TPA Nurul Haq",
    subtitle: "Sistem Pendaftaran dan Absensi Santri TPA Berbasis Web",
    description: "Aplikasi web ini dirancang untuk menggantikan sistem absensi manual di TPA Nurul Haq. Orang tua dapat mendaftarkan anak mereka secara online, dan guru dapat dengan mudah mencatat absensi harian serta memantau perkembangan santri.",
    image: "/image/project/tpa_masjid.png",
    category: "Sistem Absensi",
    client: "Pengurus TPA Nurul Haq",
    service: "Aplikasi Web Custom",
    year: "2025",
    price: "Rp. 2.000.000",
    technologies: ["HTML", "CSS", "Bootstrap 5", "TailwindCSS", "JavaScript", "ChartJs", "PHP", "Laravel", "MySQL"],
    features: [
      "Formulir Pendaftaran Santri Baru (Online)",
      "Panel Admin (Manajemen Data Santri & Guru)",
      "Sistem Absensi Harian oleh Guru",
      "Laporan Absensi per Santri (Bulanan)",
      "Informasi Kegiatan TPA"
    ],
    demoUrl: "https://tpanurhaq.com"
  },
  {
    id: "travel",
    title: "Pellor Trans Travel",
    subtitle: "Website Company Profile untuk Jasa Transportasi & Travel",
    description: "Ini adalah proyek studi kasus untuk membuat website company profile modern bagi perusahaan travel. Fokus utamanya adalah pada desain yang menarik, informasi layanan yang jelas, dan kemudahan untuk menghubungi (Call to Action).",
    image: "/image/project/pellor_trans_travel.png",
    category: "Company Profile",
    client: "Pellor Trans Travel",
    service: "Website Company Profile",
    year: "2023",
    price: "Rp 500.000",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    features: [
      "Desain Landing Page yang Menarik",
      "Daftar Layanan (Pemesanan Tiket, Antar Jemput)",
      "Galeri Armada Kendaraan",
      "Halaman 'Tentang Kami' dan 'Kontak'",
      "Tombol WhatsApp terintegrasi"
    ],
    demoUrl: "https://ipul1122.github.io/pellortranstravel.io/index.html"
  },
  {
    id: "launtec",
    title: "Launtec - Website Laundry",
    subtitle: "Company profile modern untuk jasa laundry, menampilkan layanan dan paket harga.",
    description: "Launtec adalah sebuah website company profile yang dirancang untuk bisnis laundry modern. Website ini menonjolkan kemudahan pemesanan, transparansi harga, dan layanan profesional.",
    image: "/image/project/launtec.png",
    category: "Bisnis UMKM",
    client: "Pak Asep Surahmat",
    service: "Website Company Profile",
    year: "2024",
    price: "Rp 750.000",
    technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    features: [
      "Desain Bersih dan Modern",
      "Daftar Layanan (Cuci Kering, Setrika, dll)",
      "Tabel Paket Harga",
      "Galeri Hasil Cucian",
      "Formulir Kontak dan Peta Lokasi"
    ],
    demoUrl: "https://ipul1122.github.io/launtec/"
  },
  {
    id: "nyi-roro-green",
    title: "Nyi Roro Green",
    subtitle: "Landing page elegan untuk promosi dengan fokus pada visual dan booking.",
    description: "Sebuah landing page yang dirancang untuk Nyi Roro Green. Tujuannya adalah untuk menarik pengunjung dengan visual yang kuat, menampilkan akibat sampah lautan di pantai selatan akibat manusia.",
    image: "/image/project/nyirorogreen.png",
    category: "Landing Page",
    client: "Pak Asep Surahmat",
    service: "Website Landing Page",
    year: "2024",
    price: "Rp 600.000",
    technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    features: [
      "Hero Section dengan Gambar Full-screen",
      "Asal Usul Nyi Roro Kidul",
      "Akibat Pembuangan limbah sampah di lautan",
      "Kategori sampah di daerah Yogyakarta",
      "Sebaran Volume Sampah di Yogyakarta"
    ],
    demoUrl: "https://ipul1122.github.io/Nyi_Roro_Green/"
  }
];
