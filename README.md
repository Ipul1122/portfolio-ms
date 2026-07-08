# Muhammad Syaifulloh (MSyaifulloh) - Portfolio & Business Platform

[![React](https://img.shields.io/badge/React-19.2.6-blue.svg?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF.svg?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.0-06B6D4.svg?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Website Portofolio Profesional & Landing Page Bisnis milik **Muhammad Syaifulloh (MSyaifulloh)**, seorang *Full-Stack Developer* spesialis Laravel & React. Website ini dibangun dengan performa tinggi, animasi modern, desain *dark mode* yang elegan, serta mendukung dua bahasa (Bilingual: Indonesia & Inggris). 

Selain menampilkan profil, pengalaman kerja, dan portofolio proyek, platform ini juga menyediakan halaman penawaran layanan pembuatan website untuk UMKM / Perusahaan (Lite, Medium, Custom) serta pameran produk MVP (*Minimum Viable Product*) siap pakai.

---

## 🌟 Fitur Utama

- **Dukungan Dua Bahasa (Bilingual)**: Integrasi sistem translasi dinamis antara Bahasa Indonesia (`id`) dan Bahasa Inggris (`en`) melalui subpath URL (misal: `/id` atau `/en`). Pilihan bahasa disimpan secara otomatis di *localStorage* pengguna.
- **Scroll Routing & Hash Navigation**: Penanganan navigasi section yang smooth. URL browser akan otomatis terupdate saat user men-scroll halaman, dan sebaliknya (ketika memuat tautan spesifik seperti `/id/tentang-saya` atau `/en/about-me`).
- **Floating Scroll & WhatsApp Helper**:
  - Tombol melayang untuk navigasi scroll otomatis ke section sebelumnya (*Scroll Up*) atau berikutnya (*Scroll Down*).
  - Integrasi WhatsApp Floating button dengan teks template yang disesuaikan secara otomatis sesuai dengan bahasa pilihan pengguna.
- **Laptop Mockup Project Showcase**: Halaman detail proyek menampilkan tangkapan layar web di dalam frame mockup laptop interaktif untuk visualisasi portofolio yang lebih premium.
- **Layanan Paket Web & Produk MVP**:
  - Tabel harga transparan untuk jasa pembuatan website (Paket Lite, Medium, Custom) yang langsung terhubung ke WhatsApp.
  - Pameran produk aplikasi siap pakai (*MVP Showcase*) menggunakan Swiper slider interaktif lengkap dengan navigasi dan autoplay.
- **SEO & Performance Optimized**:
  - Penggunaan font modern (*Sora* dan *Inter*).
  - Meta tags, OpenGraph SEO, favicon, sitemap (`sitemap.xml`), dan konfigurasi Vercel rewrite.

---

## 🛠️ Teknologi & Libs

### Core Stack
- **React 19** - Library UI deklaratif dan efisien.
- **TypeScript** - Type-safety untuk menjaga kualitas dan skalabilitas kode.
- **Vite 8** - Build tool berkecepatan tinggi dengan Hot Module Replacement (HMR).
- **Tailwind CSS v4** - Framework CSS modern dengan performa tinggi menggunakan plugin `@tailwindcss/vite`.

### Routing & Utility
- **React Router DOM v7** - Routing berbasis komponen untuk subpath `/lang` dan sub-halaman.
- **Swiper 12** - Carousel slider untuk bagian MVP produk.
- **FontAwesome 6** - Kumpulan ikon vektor modern dan representatif.

---

## 📁 Struktur Folder Project

```text
portfolio-ms/
├── public/                 # File statis (Gambar, Sitemap, Favicon, dll.)
│   ├── image/              # Asset visual, foto profil, screenshot proyek
│   ├── sitemap.xml         # XML Sitemap untuk optimasi SEO
│   └── favicon/            # Ikon browser
├── src/                    # Source code aplikasi
│   ├── assets/             # Asset tambahan (CSS, Gambar lokal)
│   ├── components/         # Komponen global (Navbar, Footer, WhatsappFloat)
│   ├── context/            # State management (LanguageContext untuk bahasa)
│   ├── data/               # Data statis (daftar proyek, kamus translasi)
│   │   ├── projects.ts     # Data detail proyek & studi kasus
│   │   └── translations.ts # Translasi konten (ID / EN)
│   ├── pages/              # Halaman utama aplikasi (Home, Bisnis, ProjectKami, dll.)
│   ├── sections/           # Section modular untuk halaman Home
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── WorkSection.tsx
│   │   └── ContactSection.tsx
│   ├── App.tsx             # Entry point routing & layout aplikasi
│   ├── index.css           # Styling global & konfigurasi Tailwind v4
│   └── main.tsx            # Mounting React DOM
├── vercel.json             # Konfigurasi routing rewrite untuk deploy Vercel
├── tsconfig.json           # Konfigurasi TypeScript compiler
├── vite.config.ts          # Konfigurasi plugin Vite & Tailwind CSS
└── package.json            # Daftar dependencies & script project
```

---

## 🚀 Setup & Instalasi Lokal

Ikuti langkah-langkah di bawah ini untuk menjalankan project ini di komputer lokal Anda:

### Prerequisites
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (Sangat direkomendasikan versi LTS terbaru)
- npm (Bawaan dari Node.js) atau yarn / pnpm

### Langkah Penginstalan
1. **Clone repository ini:**
   ```bash
   git clone https://github.com/Ipul1122/portfolio-ms.git
   cd portfolio-ms
   ```

2. **Instal seluruh dependensi project:**
   ```bash
   npm install
   ```

3. **Jalankan local development server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di alamat default [http://localhost:5173/](http://localhost:5173/).

4. **Build untuk mode Produksi:**
   Untuk mengompilasi dan mengoptimasi aplikasi agar siap dideploy:
   ```bash
   npm run build
   ```
   Hasil build akan disimpan di folder `/dist`.

5. **Preview hasil build lokal:**
   ```bash
   npm run preview
   ```

---

## ☁️ Deployment

Project ini sepenuhnya siap untuk dideploy di platform **Vercel** dengan konfigurasi SPA routing rewrite yang terdapat di [vercel.json](file:///c:/xampp/htdocs/portfolio-ms/vercel.json):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Langkah Deploy ke Vercel:
1. Hubungkan repository GitHub Anda ke akun Vercel.
2. Buat project baru di Vercel dan pilih repository `portfolio-ms`.
3. Vercel akan mendeteksi framework **Vite** secara otomatis.
4. Klik **Deploy** tanpa perlu mengubah konfigurasi build default.

---

## 📝 Lisensi & Kontak

Project ini dilisensikan di bawah **MIT License** - bebas digunakan dan dikembangkan kembali.

**Muhammad Syaifulloh (MSyaifulloh)**
- **Website Utama**: [msyaifulloh.my.id](https://msyaifulloh.my.id)
- **GitHub**: [@Ipul1122](https://github.com/Ipul1122)
- **WhatsApp**: [+62 856-9367-2730](https://wa.me/6285693672730)
