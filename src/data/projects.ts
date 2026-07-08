export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  category: string;
  categoryEn?: string;
  client: string;
  clientEn?: string;
  service: string;
  serviceEn?: string;
  year: string;
  price: string;
  technologies: string[];
  features: string[];
  featuresEn?: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPublic: boolean;
}

export const projects: Project[] = [
  // ==========================================
  // PROYEK PUBLIK — Bisa dilihat oleh publik
  // ==========================================
  {
    id: "tpa",
    title: "Absensi Digital TPA Nurul Haq",
    titleEn: "TPA Nurul Haq Digital Attendance",
    subtitle: "Sistem Pendaftaran dan Absensi Santri TPA Berbasis Web menggunakan Laravel & Blade",
    subtitleEn: "Web-Based TPA Student Registration and Attendance System using Laravel & Blade",
    description: "Aplikasi web ini dirancang untuk menggantikan sistem absensi manual di TPA Nurul Haq. Dibangun dengan framework Laravel dan template engine Blade, aplikasi ini memungkinkan orang tua mendaftarkan anak mereka secara online, sementara guru dapat dengan mudah mencatat absensi harian serta memantau perkembangan santri melalui dashboard yang interaktif.",
    descriptionEn: "This web application is designed to replace the manual attendance system at TPA Nurul Haq. Built with the Laravel framework and Blade template engine, it allows parents to register their children online, while teachers can easily record daily attendance and monitor student progress via an interactive dashboard.",
    image: "/image/project/absensi-tpa.webp",
    category: "Sistem Absensi",
    categoryEn: "Attendance System",
    client: "Pengurus TPA Nurul Haq",
    clientEn: "TPA Nurul Haq DKM Management",
    service: "Aplikasi Web Custom",
    serviceEn: "Custom Web Application",
    year: "2025",
    price: "Rp. 2.000.000",
    technologies: ["PHP", "Laravel", "Blade", "Bootstrap 5", "TailwindCSS", "JavaScript", "ChartJs", "CSS", "MySQL"],
    features: [
      "Formulir Pendaftaran Santri Baru (Online)",
      "Panel Admin (Manajemen Data Santri & Guru)",
      "Sistem Absensi Harian oleh Guru",
      "Laporan Absensi per Santri (Bulanan)",
      "Informasi Kegiatan TPA"
    ],
    featuresEn: [
      "New Student Online Registration Form",
      "Admin Panel (Student & Teacher Data Management)",
      "Daily Attendance System for Teachers",
      "Monthly Attendance Report per Student",
      "TPA Activities Information"
    ],
    demoUrl: "https://tpanurhaq.com",
    githubUrl: "https://github.com/Ipul1122/management-presensi-",
    isPublic: true
  },
  {
    id: "compro",
    title: "PT Cakrawala Internasional",
    titleEn: "PT Cakrawala Internasional",
    subtitle: "Website Company Profile modern yang dibangun dengan Vue.js, Laravel & MySQL",
    subtitleEn: "Modern Company Profile Website built with Vue.js, Laravel & MySQL",
    description: "Website company profile profesional untuk PT Cakrawala Internasional. Dibangun menggunakan arsitektur SPA dengan Vue.js di frontend dan Laravel sebagai RESTful API backend. Website ini menampilkan profil perusahaan, layanan, dan informasi bisnis dengan desain modern dan performa tinggi.",
    descriptionEn: "A professional company profile website for PT Cakrawala Internasional. Built using a SPA architecture with Vue.js on the frontend and Laravel as the RESTful API backend. The website displays company profile, services, and business information with a modern design and high performance.",
    image: "/image/project/company-profile.webp",
    category: "Company Profile",
    categoryEn: "Company Profile",
    client: "PT Cakrawala Internasional",
    clientEn: "PT Cakrawala Internasional",
    service: "Website Company Profile",
    serviceEn: "Company Profile Website",
    year: "2025",
    price: "—",
    technologies: ["Vue.js", "PHP", "Laravel", "Blade", "JavaScript", "HTML", "CSS", "MySQL"],
    features: [
      "Single Page Application (SPA) dengan Vue.js",
      "RESTful API Backend dengan Laravel",
      "Profil Perusahaan & Layanan",
      "Desain Modern dan Responsif",
      "SEO Friendly & Fast Loading",
      "Content Management System (CMS)"
    ],
    featuresEn: [
      "Single Page Application (SPA) with Vue.js",
      "RESTful API Backend with Laravel",
      "Company Profile & Services",
      "Modern and Responsive Design",
      "SEO Friendly & Fast Loading",
      "Content Management System (CMS)"
    ],
    demoUrl: "https://cakrawala-internasional.co.id",
    githubUrl: "https://github.com/Ipul1122/compro",
    isPublic: true
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    titleEn: "Portfolio Website",
    subtitle: "Website portfolio pribadi modern yang dibangun dengan React, TypeScript & Vite",
    subtitleEn: "Modern personal portfolio website built with React, TypeScript & Vite",
    description: "Website portfolio pribadi yang dirancang untuk menampilkan karya dan pengalaman profesional. Dibangun menggunakan React dengan TypeScript untuk type-safety, Vite sebagai build tool yang cepat, dan TailwindCSS untuk styling yang responsif. Website ini menampilkan animasi halus, slider interaktif, dan desain dark-mode yang elegan.",
    descriptionEn: "A personal portfolio website designed to showcase work and professional experience. Built using React with TypeScript for type-safety, Vite as a fast build tool, and TailwindCSS for responsive styling. The website features smooth animations, interactive sliders, and an elegant dark-mode design.",
    image: "/image/project/portfolio.webp",
    category: "Portfolio",
    categoryEn: "Portfolio",
    client: "Personal Project",
    clientEn: "Personal Project",
    service: "Website Portfolio",
    serviceEn: "Portfolio Website",
    year: "2025",
    price: "—",
    technologies: ["TypeScript", "React", "Vite", "TailwindCSS", "CSS", "JavaScript", "Swiper.js"],
    features: [
      "Desain Dark Mode yang Modern & Elegan",
      "Animasi Scroll & Micro-interactions",
      "Slider Portfolio Interaktif dengan Swiper.js",
      "Skills Section dengan Auto-sliding Tracks",
      "Fully Responsive untuk Semua Perangkat",
      "SEO Optimized & Fast Loading"
    ],
    featuresEn: [
      "Modern & Elegant Dark Mode Design",
      "Scroll Animations & Micro-interactions",
      "Interactive Portfolio Slider with Swiper.js",
      "Skills Section with Auto-sliding Tracks",
      "Fully Responsive for All Devices",
      "SEO Optimized & Fast Loading"
    ],
    demoUrl: "https://github.com/Ipul1122/portfolio-ms",
    githubUrl: "https://github.com/Ipul1122/portfolio-ms",
    isPublic: true
  },

  // ==========================================
  // PROYEK LAINNYA — Belum tersedia publik
  // ==========================================
  {
    id: "masjid",
    title: "Website Masjid Nurul Haq",
    titleEn: "Nurul Haq Mosque Website",
    subtitle: "Aplikasi web monolithic yang dibangun menggunakan Laravel untuk mengelola semua aspek informasi, kegiatan, dan keuangan masjid.",
    subtitleEn: "A monolithic web application built using Laravel to manage all aspects of mosque information, activities, and finance.",
    description: "Aplikasi Web ini memiliki tiga peran pengguna utama: Pengguna Umum (Jamaah) dapat melihat informasi publik, Admin DKM (Dewan Kemakmuran Masjid) sebagai pengelola utama website, dan Admin RISNHA (Remaja Islam Masjid Nurul Haq) sebagai pengelola untuk bagian organisasi remaja masjid.",
    descriptionEn: "This Web Application has three main user roles: General Users (Congregants) can view public information, DKM Admin (Mosque Prosperity Council) acts as the main website manager, and RISNHA Admin (Remaja Islam Mosque Nurul Haq) manages the mosque youth organization section.",
    image: "/image/project/sistem-masjid.webp",
    category: "Web App",
    categoryEn: "Web App",
    client: "DKM Masjid Nurul Haq",
    clientEn: "DKM Masjid Nurul Haq",
    service: "Aplikasi Web Custom",
    serviceEn: "Custom Web Application",
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
    ],
    featuresEn: [
      "Homepage: Displays dynamic carousel, running text, and summary of latest content.",
      "Mosque Content: List and details of activities and articles published by DKM.",
      "Mosque Finance: Transparent financial reports with income and expenditure details.",
      "Gallery: View photo gallery of mosque activities.",
      "Mosque Profile: Pages to view History, Vision & Mission of the mosque.",
      "Donation: Donation info page, form to submit transfer proof, and view verified donations.",
      "Prayer Schedule: Displays daily prayer times (via internal API)."
    ],
    isPublic: false
  },
  {
    id: "absensi-karyawan",
    title: "Sistem Absensi Karyawan Digital",
    titleEn: "Digital Employee Attendance System",
    subtitle: "Aplikasi absensi karyawan modern berbasis Web dengan React, TypeScript & Laravel 12",
    subtitleEn: "Modern web-based employee attendance application with React, TypeScript & Laravel 12",
    description: "Aplikasi Full-stack web yang dirancang untuk mengelola absensi karyawan secara efisien. Sistem ini memisahkan frontend menggunakan React dan TypeScript untuk interaksi pengguna yang cepat dan responsif, serta backend Laravel 12 sebagai RESTful API yang aman dengan database MySQL dan styling TailwindCSS v4.",
    descriptionEn: "Full-stack web application designed to manage employee attendance efficiently. The system separates the frontend using React and TypeScript for fast and responsive user interaction, and the backend using Laravel 12 as a secure RESTful API with a MySQL database and TailwindCSS v4 styling.",
    image: "/image/project/hris.webp",
    category: "Sistem Absensi",
    categoryEn: "Attendance System",
    client: "Personal Project",
    clientEn: "Personal Project",
    service: "Full-Stack Web Development",
    serviceEn: "Full-Stack Web Development",
    year: "2025",
    price: "—",
    technologies: ["React", "TypeScript", "PHP", "Laravel", "TailwindCSS", "SweetAlert", "MySQL"],
    features: [
      "Autentikasi & Otorisasi Pengguna (Multi-role Admin/Karyawan)",
      "Sistem Catat Absensi Harian (Check-in & Check-out)",
      "Dashboard Statistik Absensi & Jam Kerja Karyawan",
      "Manajemen Data Karyawan, Departemen & Jadwal Kerja",
      "RESTful API Backend Terpisah dengan Laravel 12",
      "Notifikasi Interaktif & Konfirmasi dengan SweetAlert"
    ],
    featuresEn: [
      "User Authentication & Authorization (Multi-role Admin/Employee)",
      "Daily Attendance Recording System (Check-in & Check-out)",
      "Employee Attendance & Working Hours Statistics Dashboard",
      "Management of Employee, Department & Working Schedule Data",
      "Separate RESTful API Backend with Laravel 12",
      "Interactive Notifications & Confirmation with SweetAlert"
    ],
    demoUrl: "https://goodpeople-hcms.com/",
    githubUrl: "https://github.com/Ipul1122/absensi-karyawan",
    isPublic: true
  },
  {
    id: "lpdp-app",
    title: "Aplikasi Pendaftaran Beasiswa LPDP",
    titleEn: "LPDP Scholarship Application",
    subtitle: "Sistem Pendaftaran Beasiswa (TUBEL / LPDP App) Berbasis Web Monolithic dengan Laravel & Alpine.js",
    subtitleEn: "Monolithic Web-Based Scholarship Registration System (TUBEL / LPDP App) with Laravel & Alpine.js",
    description: "Aplikasi berbasis web untuk mengelola proses pendaftaran beasiswa secara terpusat. Dilengkapi dengan sistem registrasi berbasis OTP, formulir pendaftaran 7 tahap (multi-step wizard), serta panel kontrol Admin untuk verifikasi, filter, dan pengelolaan status pendaftar (Diterima, Ditolak, Revisi).",
    descriptionEn: "Web-based application to manage scholarship registration process centrally. Equipped with OTP registration system, 7-stage registration form (multi-step wizard), and Admin control panel for verification, filtering, and status management (Accepted, Rejected, Revision).",
    image: "/image/project/tubel-app.webp",
    category: "Web App",
    categoryEn: "Web App",
    client: "Personal Project",
    clientEn: "Personal Project",
    service: "Aplikasi Web Custom",
    serviceEn: "Custom Web Application",
    year: "2025",
    price: "—",
    technologies: ["PHP", "Laravel", "Blade", "TailwindCSS", "AlpineJs", "MySQL", "Vite"],
    features: [
      "Autentikasi Aman: Registrasi & Login dengan verifikasi OTP via Email",
      "Formulir Pendaftaran 7 Tahap (Multi-step Wizard)",
      "Fitur Draft: Otomatis simpan data formulir ke database/localStorage",
      "Dashboard Statistik Admin: Ringkasan data pendaftar secara real-time",
      "Manajemen Berkas & Sistem Verifikasi (Diterima, Ditolak, Revisi)",
      "Integrasi Notifikasi WhatsApp untuk Status Berkas"
    ],
    featuresEn: [
      "Secure Authentication: Register & Login with OTP verification via Email",
      "7-Stage Registration Form (Multi-step Wizard)",
      "Draft Feature: Auto-save form data to database/localStorage",
      "Admin Statistics Dashboard: Applicant data summary in real-time",
      "File Management & Verification System (Accepted, Rejected, Revision)",
      "WhatsApp Notification Integration for File Status"
    ],
    githubUrl: "https://github.com/Ipul1122/lpdp-app",
    isPublic: false
  },
  {
    id: "percetakan",
    title: "Percetakan & Stempel Online",
    titleEn: "Online Printing & Stamp",
    subtitle: "Website Company Profile & Layanan Percetakan Modern",
    subtitleEn: "Modern Company Profile & Printing Services Website",
    description: "Website profile bisnis percetakan yang menampilkan berbagai produk, kalkulator harga, dan memudahkan pelanggan melakukan pemesanan via WhatsApp.",
    descriptionEn: "A business profile website for printing and stamp services, displaying various print products and facilitating direct orders via WhatsApp.",
    image: "/image/project/percetakan.webp",
    category: "Company Profile",
    categoryEn: "Company Profile",
    client: "UMKM Percetakan",
    clientEn: "Printing Business",
    service: "Website Company Profile",
    serviceEn: "Company Profile Website",
    year: "2024",
    price: "Rp 500.000",
    technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    features: [
      "Katalog Produk & Layanan Cetak",
      "Tombol Direct Chat WhatsApp",
      "Peta Lokasi & Informasi Toko",
      "Desain Responsif & Cepat"
    ],
    featuresEn: [
      "Product & Print Service Catalog",
      "WhatsApp Direct Chat Button",
      "Location Map & Store Information",
      "Responsive & Fast Design"
    ],
    demoUrl: "https://percetakandanstempel.netlify.app/",
    isPublic: true
  },
  {
    id: "edu-siswa",
    title: "Edu Siswa Empat Pilar",
    titleEn: "Edu Siswa Empat Pilar",
    subtitle: "Aplikasi Media Pembelajaran Interaktif Empat Pilar Kebangsaan",
    subtitleEn: "Interactive Learning Media Application for the Four Pillars of Nationality",
    description: "Aplikasi web interaktif yang dirancang sebagai media pembelajaran bagi siswa untuk memahami Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika. Dilengkapi materi pembelajaran dan modul kuis interaktif.",
    descriptionEn: "An interactive web application designed as learning media for students to understand Pancasila, UUD 1945, NKRI, and Bhinneka Tunggal Ika. Features learning materials and interactive quizzes.",
    image: "/image/project/materi-edukasi.webp",
    category: "Web App",
    categoryEn: "Web App",
    client: "Personal Project",
    clientEn: "Personal Project",
    service: "Aplikasi Web Edukasi",
    serviceEn: "Educational Web Application",
    year: "2026",
    price: "—",
    technologies: ["PHP", "Laravel", "Blade", "TailwindCSS", "MySQL", "JavaScript"],
    features: [
      "Materi Pembelajaran (Teks & Video)",
      "Kuis Interaktif dengan Perhitungan Skor",
      "Panel Manajemen Soal & Materi (Admin)",
      "User Interface Responsif & Menarik untuk Siswa"
    ],
    featuresEn: [
      "Learning Materials (Text & Video)",
      "Interactive Quiz with Score Calculation",
      "Questions & Materials Management Panel (Admin)",
      "Responsive & Attractive UI for Students"
    ],
    githubUrl: "https://github.com/Ipul1122/edu-siswa-empat-pilar",
    isPublic: false
  },
  {
    id: "nyi-roro-green",
    title: "Nyi Roro Green",
    titleEn: "Nyi Roro Green",
    subtitle: "Landing page elegan untuk promosi dengan fokus pada visual dan booking.",
    subtitleEn: "Elegant landing page for promotion with focus on visuals and booking.",
    description: "Sebuah landing page yang dirancang untuk Nyi Roro Green. Tujuannya adalah untuk menarik pengunjung dengan visual yang kuat, menampilkan akibat sampah lautan di pantai selatan akibat manusia.",
    descriptionEn: "A landing page designed for Nyi Roro Green. The goal is to attract visitors with strong visuals, showing the impact of marine waste on the southern coast caused by humans.",
    image: "/image/project/story-telling-nyi-roro-kidul.webp",
    category: "Landing Page",
    categoryEn: "Landing Page",
    client: "Pak Asep Surahmat",
    clientEn: "Mr. Asep Surahmat",
    service: "Website Landing Page",
    serviceEn: "Landing Page Website",
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
    featuresEn: [
      "Hero Section with Full-screen Image",
      "Origin of Nyi Roro Kidul",
      "Impact of waste disposal in the ocean",
      "Waste categories in Yogyakarta region",
      "Waste Volume Distribution in Yogyakarta"
    ],
    demoUrl: "https://ipul1122.github.io/Nyi_Roro_Green/",
    isPublic: true
  }
];

// Helper exports
export const publicProjects = projects.filter(p => p.isPublic);
export const otherProjects = projects.filter(p => !p.isPublic);
