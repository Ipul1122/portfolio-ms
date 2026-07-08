export interface TranslationDict {
  navHome: string;
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navWork: string;
  navContact: string;
  whatsappTooltip: string;
  whatsappMessage: string;

  heroBadge: string;
  heroGreeting: string;
  heroGreetingSub: string;
  heroDesc: string;
  heroBtnView: string;
  heroBtnDownload: string;

  aboutHeading: string;
  aboutSubheading: string;
  aboutIntroTitle: string;
  aboutIntroName: string;
  aboutIntroDesc: string;
  aboutBtnContact: string;
  aboutVisionTitle: string;
  aboutVisionDesc: string;
  aboutAchievementsTitle: string;
  aboutExpVal: string;
  aboutExpLabel: string;
  aboutProjVal: string;
  aboutProjLabel: string;
  aboutClientVal: string;
  aboutClientLabel: string;

  expHeading: string;
  expSubheading: string;

  skillsHeading: string;
  skillsTitle: string;
  skillsSubheading: string;
  skillsSectionLang: string;
  skillsSectionTools: string;

  workHeadingLive: string;
  workTitlePublic: string;
  workDescPublic: string;
  workTitleOther: string;
  workDescOther: string;
  workViewCaseStudy: string;

  contactHeading: string;
  contactSubheading: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  contactPlaceholderName: string;
  contactPlaceholderEmail: string;
  contactPlaceholderMessage: string;
  contactBtnSend: string;
  contactWaGreeting: string;

  footerTagline: string;
  footerCopy: string;

  detailNotFoundTitle: string;
  detailNotFoundSub: string;
  detailBackBtn: string;
  detailAboutTitle: string;
  detailLiveDemo: string;
  detailSourceCode: string;
  detailFeaturesTitle: string;
  detailInfoTitle: string;
  detailClient: string;
  detailService: string;
  detailYear: string;
  detailPrice: string;
  detailTech: string;
}

export const translations: Record<'id' | 'en', TranslationDict> = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang Saya",
    navExperience: "Pengalaman",
    navSkills: "Skills",
    navWork: "Portofolio",
    navContact: "Kontak",
    whatsappTooltip: "Hubungi via WhatsApp",
    whatsappMessage: "Halo Muhammad Syaifulloh, saya tertarik dengan portofolio Anda dan ingin berdiskusi mengenai peluang kerja sama.",

    heroBadge: "Fullstack Developer",
    heroGreeting: "Hai, Saya",
    heroGreetingSub: "Muhammad Syaifulloh",
    heroDesc: "Full-Stack Developer spesialis Laravel & React yang berdedikasi membangun dan mengembangkan aplikasi web dinamis yang berkinerja tinggi, aman, dan efisien.",
    heroBtnView: "Lihat Portofolio",
    heroBtnDownload: "Unduh CV Saya",

    aboutHeading: "Tentang Saya",
    aboutSubheading: "Menciptakan pengalaman digital yang luar biasa",
    aboutIntroTitle: "Kenalin, Saya",
    aboutIntroName: "Muhammad Syaifulloh",
    aboutIntroDesc: "Saya adalah seorang pengembang web yang berdedikasi dalam menciptakan solusi digital yang inovatif dan efisien. Saya merupakan Lulusan Terbaik pada kampus Akademi Teknik Informatika Tunas Bangsa dengan gelar A.md.Kom.",
    aboutBtnContact: "Hubungi Saya",
    aboutVisionTitle: "Visi & Misi",
    aboutVisionDesc: "Tujuan saya adalah membangun aplikasi web yang tidak hanya fungsional dan cepat, tetapi juga memberikan pengalaman pengguna yang menyenangkan dan intuitif.",
    aboutAchievementsTitle: "Pencapaian",
    aboutExpVal: "1+ Tahun",
    aboutExpLabel: "Pengalaman Profesional",
    aboutProjVal: "10+ Proyek",
    aboutProjLabel: "Selesai dengan Sukses",
    aboutClientVal: "5+ Klien",
    aboutClientLabel: "Puas dengan Layanan",

    expHeading: "Pengalaman Kerja",
    expSubheading: "Perjalanan karir dan kontribusi profesional saya",

    skillsHeading: "Kemampuan Teknis",
    skillsTitle: "Skills & Tools",
    skillsSubheading: "Teknologi dan perangkat lunak yang saya gunakan untuk mengubah ide menjadi produk digital yang fungsional.",
    skillsSectionLang: "Programming Languages & Frameworks",
    skillsSectionTools: "Tools & Workflow",

    workHeadingLive: "Live & Open Source",
    workTitlePublic: "Proyek Publik",
    workDescPublic: "Proyek yang sudah live dan dapat diakses oleh publik. Kunjungi langsung atau lihat source code-nya.",
    workTitleOther: "Proyek Lainnya",
    workDescOther: "Kumpulan proyek klien dan studi kasus lainnya yang telah kami kerjakan.",
    workViewCaseStudy: "Lihat Studi Kasus",

    contactHeading: "Kontak",
    contactSubheading: "Punya proyek yang ingin dikerjakan? Mari diskusikan",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactPlaceholderName: "Nama Anda",
    contactPlaceholderEmail: "Email Anda",
    contactPlaceholderMessage: "Pesan Anda",
    contactBtnSend: "Kirim Pesan",
    contactWaGreeting: "Halo, saya [name].\nEmail: [email]\nPesan: [message]",

    footerTagline: "fungsional & Pengalaman Terbaik.",
    footerCopy: "Muhammad Syaifulloh. All rights reserved.",

    detailNotFoundTitle: "Proyek Tidak Ditemukan",
    detailNotFoundSub: "Silakan kembali ke halaman utama untuk melihat portofolio kami.",
    detailBackBtn: "Kembali ke Portofolio",
    detailAboutTitle: "Tentang Proyek",
    detailLiveDemo: "Lihat Live Demo",
    detailSourceCode: "Lihat Source Code",
    detailFeaturesTitle: "Fitur Utama",
    detailInfoTitle: "Info Teknis",
    detailClient: "Klien:",
    detailService: "Layanan:",
    detailYear: "Tahun:",
    detailPrice: "Harga:",
    detailTech: "Teknologi:"
  },
  en: {
    navHome: "Home",
    navAbout: "About Me",
    navExperience: "Work Experience",
    navSkills: "Skills",
    navWork: "Portfolio",
    navContact: "Contact",
    whatsappTooltip: "Contact via WhatsApp",
    whatsappMessage: "Hello Muhammad Syaifulloh, I am interested in your portfolio and would like to discuss potential collaboration opportunities.",

    heroBadge: "Fullstack Developer",
    heroGreeting: "Hi, I am",
    heroGreetingSub: "Muhammad Syaifulloh",
    heroDesc: "Full-Stack Developer specializing in Laravel & React, dedicated to building and developing high-performance, secure, and efficient dynamic web applications.",
    heroBtnView: "View My Work",
    heroBtnDownload: "Download My CV",

    aboutHeading: "About Me",
    aboutSubheading: "Creating extraordinary digital experiences",
    aboutIntroTitle: "Hello, I'm",
    aboutIntroName: "Muhammad Syaifulloh",
    aboutIntroDesc: "I am a dedicated web developer focused on creating innovative and efficient digital solutions. I was the Best Graduate of the Akademi Teknik Informatika Tunas Bangsa with an Associate Degree in Computer Science (A.md.Kom.).",
    aboutBtnContact: "Contact Me",
    aboutVisionTitle: "Vision & Mission",
    aboutVisionDesc: "My goal is to build web applications that are not only functional and fast, but also deliver an enjoyable and intuitive user experience.",
    aboutAchievementsTitle: "Achievements",
    aboutExpVal: "1+ Years",
    aboutExpLabel: "Professional Experience",
    aboutProjVal: "10+ Projects",
    aboutProjLabel: "Successfully Completed",
    aboutClientVal: "5+ Clients",
    aboutClientLabel: "Satisfied with Services",

    expHeading: "Work Experience",
    expSubheading: "My career journey and professional contributions",

    skillsHeading: "Technical Skills",
    skillsTitle: "Skills & Tools",
    skillsSubheading: "Technology and software I use to turn ideas into functional digital products.",
    skillsSectionLang: "Programming Languages & Frameworks",
    skillsSectionTools: "Tools & Workflow",

    workHeadingLive: "Live & Open Source",
    workTitlePublic: "Public Projects",
    workDescPublic: "Projects that are live and accessible by the public. Visit directly or view the source code.",
    workTitleOther: "Other Projects",
    workDescOther: "A collection of client projects and other case studies we have completed.",
    workViewCaseStudy: "View Case Study",

    contactHeading: "Contact",
    contactSubheading: "Have a project in mind? Let's discuss it",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactPlaceholderName: "Your Name",
    contactPlaceholderEmail: "Your Email",
    contactPlaceholderMessage: "Your Message",
    contactBtnSend: "Send Message",
    contactWaGreeting: "Hello, I'm [name].\nEmail: [email]\nMessage: [message]",

    footerTagline: "functional & Best Experience.",
    footerCopy: "Muhammad Syaifulloh. All rights reserved.",

    detailNotFoundTitle: "Project Not Found",
    detailNotFoundSub: "Please return to the home page to view our portfolio.",
    detailBackBtn: "Back to Portfolio",
    detailAboutTitle: "About Project",
    detailLiveDemo: "View Live Demo",
    detailSourceCode: "View Source Code",
    detailFeaturesTitle: "Key Features",
    detailInfoTitle: "Technical Info",
    detailClient: "Client:",
    detailService: "Service:",
    detailYear: "Year:",
    detailPrice: "Price:",
    detailTech: "Technology:"
  }
};

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  descriptions: string[];
  tech?: string[];
}

export const experiencesTranslations: Record<'id' | 'en', ExperienceItem[]> = {
  id: [
    {
      period: 'Januari - Juni 2026',
      role: 'Fullstack Developer',
      company: 'PT Cakrawala Parama Internasional',
      type: 'Full-time',
      descriptions: [
        'Merancang RESTful API berbasis Laravel 12 dan Vue 3 menggunakan Laravel Sanctum untuk mengamankan data serta membangun approval workflow bilingual khusus peran Direktur.',
        'Mengoptimalkan struktur database MySQL untuk konten interaktif dan menerapkan mekanisme short-term caching pada hitungan artikel guna meminimalkan beban query database.',
        'Mengeksekusi pengujian fungsionalitas secara menyeluruh (Whitebox dan Blackbox testing) pada API endpoint dan penanganan error frontend.',
      ],
      tech: ['Laravel 12', 'Vue 3', 'MySQL', 'Sanctum', 'REST API'],
    },
    {
      period: 'Juli 2025 - Sekarang',
      role: 'Asisten Dosen',
      company: 'Akademi Teknik Informatika Tunas Bangsa',
      type: 'Part-time',
      descriptions: [
        'Membimbing dan mentransfer pengetahuan kepada 10+ mahasiswa mengenai logika pemrograman dasar serta implementasi Fullstack Web Development.',
        'Melakukan code review, membantu proses debugging/troubleshooting, serta mengajarkan teknik clean code untuk memastikan aplikasi mudah dipelihara.',
        'Mengarahkan mahasiswa dalam perancangan arsitektur sistem (Flowchart, DFD, ERD), penggunaan Git/GitHub untuk kolaborasi tim.',
      ],
      tech: ['PHP', 'MySQL', 'Bootstrap', 'Git', 'GitHub'],
    },
    {
      period: 'September 2024 - Sekarang',
      role: 'Koordinator Utama & IT Support',
      company: 'TPA Masjid Nurul Haq',
      type: 'Volunteer',
      descriptions: [
        'Memimpin kegiatan operasional harian institusi pendidikan, mencakup penyusunan jadwal pengajaran dan manajemen data murid.',
        'Melakukan digitalisasi administrasi dengan menginisiasi dan mengelola platform web (tpanurhaq.com) untuk efisiensi rekapitulasi jadwal serta absensi.',
        'Menangani kendala teknis (hosting maintenance) secara mandiri untuk memastikan platform edukasi dapat diakses tanpa hambatan.',
      ],
      tech: ['Laravel 12', 'MySQL', 'Tailwind CSS'],
    },
    {
      period: 'Maret - Mei 2025',
      role: 'Fullstack Developer (Laravel)',
      company: 'PT. Radar Teknologi Komputer',
      type: 'Magang',
      descriptions: [
        'Merancang dan membangun arsitektur website portofolio dinamis menggunakan Laravel 12 (terbaru) dengan fitur CRUD yang optimal.',
        'Mengembangkan modul web untuk visualisasi data lingkungan (studi kasus: Polusi Laut Pantai Selatan).',
        'Melakukan Black Box Testing dan debugging kode sebelum deployment, mengurangi risiko error pada tahap produksi.',
      ],
      tech: ['Laravel 12', 'MySQL', 'Bootstrap'],
    },
  ],
  en: [
    {
      period: 'January - June 2026',
      role: 'Fullstack Developer',
      company: 'PT Cakrawala Parama Internasional',
      type: 'Full-time',
      descriptions: [
        'Designed RESTful APIs based on Laravel 12 and Vue 3 using Laravel Sanctum to secure data and built a bilingual approval workflow specifically for the Director role.',
        'Optimized MySQL database structure for interactive content and implemented short-term caching on article counts to minimize database query load.',
        'Executed thorough functionality testing (Whitebox and Blackbox testing) on API endpoints and frontend error handling.',
      ],
      tech: ['Laravel 12', 'Vue 3', 'MySQL', 'Sanctum', 'REST API'],
    },
    {
      period: 'July 2025 - Present',
      role: 'Teaching Assistant',
      company: 'Akademi Teknik Informatika Tunas Bangsa',
      type: 'Part-time',
      descriptions: [
        'Guided and transferred knowledge to 10+ students regarding basic programming logic and Fullstack Web Development implementation.',
        'Conducted code reviews, assisted in debugging/troubleshooting, and taught clean code techniques to ensure applications are maintainable.',
        'Directed students in system architecture design (Flowcharts, DFD, ERD), and Git/GitHub usage for team collaboration.',
      ],
      tech: ['PHP', 'MySQL', 'Bootstrap', 'Git', 'GitHub'],
    },
    {
      period: 'September 2024 - Present',
      role: 'Lead Coordinator & IT Support',
      company: 'TPA Masjid Nurul Haq',
      type: 'Volunteer',
      descriptions: [
        'Led the daily operational activities of the educational institution, including scheduling teaching slots and student data management.',
        'Digitalized administration by initiating and managing the web platform (tpanurhaq.com) to streamline schedules and attendance.',
        'Handled technical issues (hosting maintenance) independently to ensure the educational platform is accessible without interruption.',
      ],
      tech: ['Laravel 12', 'MySQL', 'Tailwind CSS'],
    },
    {
      period: 'March - May 2025',
      role: 'Fullstack Developer (Laravel)',
      company: 'PT. Radar Teknologi Komputer',
      type: 'Internship',
      descriptions: [
        'Designed and built dynamic portfolio website architectures using Laravel 12 (latest) with optimal CRUD features.',
        'Developed web modules for environmental data visualization (case study: Southern Coast Marine Pollution).',
        'Conducted Black Box Testing and code debugging before deployment, reducing the risk of production errors.',
      ],
      tech: ['Laravel 12', 'MySQL', 'Bootstrap'],
    },
  ]
};
