import React, { createContext, useContext, useState } from 'react';

export type Language = 'EN' | 'ID';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Get In Touch',
    'nav.letsTalk': "Let's Talk",
    'nav.available': 'Available for Projects',
    'nav.menuTitle': 'Navigation Menu',

    // Hero
    'hero.welcome': 'WELCOME TO MY WEBSITE',
    'hero.title': 'M. Syaiful — Full Stack Web Developer based in Indonesia, focusing on System Architecture & Scalability.',
    'hero.bio': 'Full Stack Web Developer specializing in the Laravel & ReactJS ecosystems, backed by a strong academic foundation (GPA 3.82) and experience as a mosque youth leader. Experienced in designing efficient, secure, and scalable Management Information Systems. Adept at leveraging modern AI tools (such as Antigravity IDE) to accelerate product development and debugging cycles while strictly upholding rigorous standards in clean system architecture and Git collaboration.',
    'hero.viewCases': 'View Case Studies',
    'hero.readAbout': 'Read About Me',
    'hero.scroll': 'scroll',

    // About
    'about.badge': 'ABOUT ME',
    'about.heading': 'Engineering scalable web architectures with academic rigor and AI acceleration.',
    'about.p1': 'Full Stack Web Developer specializing in the Laravel & ReactJS ecosystems, backed by a strong academic foundation (GPA 3.82) and experience as a mosque youth leader.',
    'about.p1_lead': 'Full Stack Web Developer specializing in the',
    'about.p1_tail': 'ecosystems, backed by a strong academic foundation',
    'about.p1_end': 'and experience as a',
    'about.p1_role': 'mosque youth leader',
    'about.p2': 'Proven track record in architecting efficient, secure, and scalable Management Information Systems. Adept at leveraging modern AI tools (like Antigravity IDE) to accelerate development and debugging cycles while strictly maintaining high standards in clean architecture and Git collaboration.',
    
    'about.card1.title': 'Academic Excellence',
    'about.card1.desc': 'Computer Science graduate with mosque youth leader leadership experience.',
    'about.card1.footer': 'ketua remaja masjid • GPA 3.82',

    'about.card2.title': 'Primary Ecosystem',
    'about.card2.desc': 'Modern full-stack delivery with TypeScript, TailwindCSS, and relational databases.',
    'about.card2.footer': 'PHP • JS • TS',

    'about.card3.title': 'Modern Workflow',
    'about.card3.desc': 'Antigravity IDE & prompt-driven iteration for 3x faster debugging and delivery.',
    'about.card3.footer': 'Antigravity IDE',

    'about.card4.title': 'System Security',
    'about.card4.desc': 'Architecting secure management information systems with strict data integrity.',
    'about.card4.footer': 'Clean Code • Git',

    'about.tools': 'Technologies & Tools',
    'about.viewExp': 'View Experience',
    'about.whatsapp': 'Get In Touch',
    'about.downloadCv': 'Download CV (PDF)',

    // Skills
    'skills.overline': '02 / TECHNICAL MATRIX',
    'skills.title': 'Core Competencies & Stack',
    'skills.desc': 'Verified technical depth across modern frontend, resilient backend services, and database engineering.',

    // Experience
    'experience.overline': '03 / TRAJECTORY & IMPACT',
    'experience.title': 'Engineering Experience & Projects',
    'experience.desc': 'Proven track record in delivering high-impact web applications, academic mentoring, and management systems.',

    // Gallery
    'gallery.overline': '04 / VISUAL ARCHIVE',
    'gallery.title': 'Project & Architecture Gallery',
    'gallery.desc': 'A curated showcase of deployed web platforms, enterprise systems, community digitalization, and engineering milestones.',

    // Contact
    'contact.overline': '05 / REACH OUT',
    'contact.title': "Let's Build Something Exceptional",
    'contact.desc': 'Have a project in mind, need architectural consulting, or want to discuss full-stack opportunities? Reach out directly.',
    'contact.nameLabel': 'Your Name',
    'contact.emailLabel': 'Email Address',
    'contact.messageLabel': 'Project Details & Message',
    'contact.sendBtn': 'Send Message',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.crafted': 'Crafted with Laravel, React & AI Workflow.',
  },
  ID: {
    // Navbar
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.experience': 'Pengalaman',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    'nav.letsTalk': 'Hubungi Saya',
    'nav.available': 'Tersedia untuk Proyek',
    'nav.menuTitle': 'Menu Navigasi',

    // Hero
    'hero.welcome': 'SELAMAT DATANG DI WEBSITE SAYA',
    'hero.title': 'M. Syaiful — Full Stack Web Developer berbasis di Indonesia, berfokus pada Arsitektur Sistem & Skalabilitas.',
    'hero.bio': 'Full Stack Web Developer berbasis Laravel & ReactJS dengan latar belakang akademis kuat (IPK 3.82) dan pengalaman sebagai ketua remaja masjid. Berpengalaman merancang Sistem Informasi Manajemen yang efisien, aman, dan scalable. Terbiasa mengintegrasikan AI Tools (seperti Antigravity IDE) ke dalam alur kerja untuk mengakselerasi product development dan debugging, dengan tetap mempertahankan standar tinggi pada arsitektur sistem, clean code, dan kolaborasi Git/GitHub.',
    'hero.viewCases': 'Lihat Studi Kasus',
    'hero.readAbout': 'Tentang Saya',
    'hero.scroll': 'gulir',

    // About
    'about.badge': 'TENTANG SAYA',
    'about.heading': 'Merancang arsitektur web yang scalable dengan fondasi akademis kuat dan akselerasi AI.',
    'about.p1': 'Full Stack Web Developer berbasis ekosistem Laravel & ReactJS dengan latar belakang akademis kuat (GPA 3.82) dan pengalaman sebagai ketua remaja masjid.',
    'about.p1_lead': 'Full Stack Web Developer berbasis ekosistem',
    'about.p1_tail': 'dengan latar belakang akademis kuat',
    'about.p1_end': 'dan pengalaman sebagai',
    'about.p1_role': 'ketua remaja masjid',
    'about.p2': 'Berpengalaman merancang Sistem Informasi Manajemen yang efisien, aman, dan scalable. Terbiasa mengintegrasikan AI Tools (seperti Antigravity IDE) ke dalam alur kerja untuk mengakselerasi product development dan debugging, dengan tetap mempertahankan standar tinggi pada arsitektur sistem, clean code, dan kolaborasi Git/GitHub.',
    
    'about.card1.title': 'Prestasi Akademik',
    'about.card1.desc': 'Lulusan Ilmu Komputer dengan pengalaman kepemimpinan sebagai ketua remaja masjid.',
    'about.card1.footer': 'ketua remaja masjid • IPK 3.82',

    'about.card2.title': 'Ekosistem Utama',
    'about.card2.desc': 'Pengembangan modern full-stack dengan TypeScript, TailwindCSS, dan database relasional.',
    'about.card2.footer': 'PHP • JS • TS',

    'about.card3.title': 'Alur Kerja Modern',
    'about.card3.desc': 'Antigravity IDE & iterasi berbasis prompt untuk debugging dan delivery 3x lebih cepat.',
    'about.card3.footer': 'Antigravity / Claude',

    'about.card4.title': 'Keamanan Sistem',
    'about.card4.desc': 'Merancang sistem informasi manajemen yang aman dengan integritas data yang ketat.',
    'about.card4.footer': 'Clean Code • Git',

    'about.tools': 'Teknologi & Tools',
    'about.viewExp': 'Lihat Pengalaman',
    'about.whatsapp': 'Tetap Terhubung',
    'about.downloadCv': 'My CV',

    // Skills
    'skills.overline': '02 / MATRIKS TEKNIKAL',
    'skills.title': 'Kompetensi & Teknologi Utama',
    'skills.desc': 'Kedalaman teknis teruji di frontend modern, backend tangguh, dan rekayasa database.',

    // Experience
    'experience.overline': '03 / RIWAYAT & DAMPAK',
    'experience.title': 'Pengalaman & Portofolio Proyek',
    'experience.desc': 'Rekam jejak terbukti dalam membangun aplikasi web berdampak tinggi, mentoring akademik, dan sistem manajemen.',

    // Gallery
    'gallery.overline': '04 / ARSIP VISUAL',
    'gallery.title': 'Galeri Proyek & Arsitektur Sistem',
    'gallery.desc': 'Dokumentasi visual aplikasi web yang telah dideploy, sistem enterprise, digitalisasi komunitas, dan tonggak pencapaian teknis.',

    // Contact
    'contact.overline': '05 / HUBUNGI',
    'contact.title': 'Mari Membangun Sesuatu yang Luar Biasa',
    'contact.desc': 'Punya ide proyek, membutuhkan konsultasi arsitektur sistem, atau ingin mendiskusikan peluang kerja sama? Hubungi saya langsung.',
    'contact.nameLabel': 'Nama Anda',
    'contact.emailLabel': 'Alamat Email',
    'contact.messageLabel': 'Detail Proyek & Pesan',
    'contact.sendBtn': 'Kirim Pesan',

    // Footer
    'footer.rights': 'Seluruh hak cipta dilindungi.',
    'footer.crafted': 'Dibuat dengan Laravel, React & AI Workflow.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return saved === 'ID' || saved === 'EN' ? saved : 'EN';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === 'EN' ? 'ID' : 'EN';
    setLang(nextLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
