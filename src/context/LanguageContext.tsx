import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'EN' | 'ID';

export const SECTION_SLUGS: Record<Language, Record<string, string>> = {
  ID: {
    home: 'beranda',
    about: 'tentang',
    skills: 'keahlian',
    experience: 'pengalaman',
    gallery: 'galeri',
    contact: 'kontak',
  },
  EN: {
    home: 'home',
    about: 'about',
    skills: 'skills',
    experience: 'experience',
    gallery: 'gallery',
    contact: 'contact',
  },
};

export const SLUG_TO_SECTION: Record<string, string> = {
  // Indonesian Slugs
  beranda: 'home',
  tentang: 'about',
  keahlian: 'skills',
  pengalaman: 'experience',
  galeri: 'gallery',
  kontak: 'contact',
  // English Slugs
  home: 'home',
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  gallery: 'gallery',
  contact: 'contact',
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  navigateToSection: (sectionId: string, customLang?: Language, pushHistory?: boolean) => void;
  getUrlForSection: (sectionId: string, targetLang?: Language) => string;
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
    'experience.title': 'Experience & Track Record',
    'experience.desc': 'Proven track record in architecting high-impact web applications, academic mentoring, and management systems.',

    // Gallery
    'gallery.overline': '04 / VISUAL ARCHIVE',
    'gallery.title': 'Project Showcase & System Visuals',
    'gallery.desc': 'Visual documentation of deployed web applications, enterprise systems, community platforms, and architectural milestones.',

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
    'hero.title': 'M. Syaiful — Full Stack Web Developer di Indonesia, berfokus pada Arsitektur Sistem & Skalabilitas.',
    'hero.bio': 'Full Stack Web Developer yang berfokus pada ekosistem Laravel & ReactJS, didukung fondasi akademis solid (IPK 3.82) dan kepemimpinan sebagai ketua remaja masjid. Berpengalaman merancang Sistem Informasi Manajemen yang efisien, aman, dan scalable. Terampil mengintegrasikan AI modern (seperti Antigravity IDE) untuk mempercepat iterasi pengembangan produk dan debugging tanpa mengorbankan standar arsitektur bersih dan kolaborasi Git yang rapi.',
    'hero.viewCases': 'Lihat Studi Kasus',
    'hero.readAbout': 'Tentang Saya',
    'hero.scroll': 'gulir ke bawah',

    // About
    'about.badge': 'TENTANG SAYA',
    'about.heading': 'Membangun arsitektur web berskala besar dengan landasan akademis dan akselerasi AI.',
    'about.p1': 'Full Stack Web Developer yang berfokus pada ekosistem Laravel & ReactJS, didukung fondasi akademis solid (IPK 3.82) dan kepemimpinan sebagai ketua remaja masjid.',
    'about.p1_lead': 'Full Stack Web Developer yang berfokus pada ekosistem',
    'about.p1_tail': ', didukung fondasi akademis solid',
    'about.p1_end': 'dan kepemimpinan sebagai',
    'about.p1_role': 'ketua remaja masjid',
    'about.p2': 'Berpengalaman merancang Sistem Informasi Manajemen yang efisien, aman, dan scalable. Terampil mengintegrasikan AI modern (seperti Antigravity IDE) untuk mempercepat iterasi pengembangan produk dan debugging tanpa mengorbankan standar arsitektur bersih dan kolaborasi Git yang rapi.',
    
    'about.card1.title': 'Keunggulan Akademik',
    'about.card1.desc': 'Lulusan Ilmu Komputer dengan pengalaman kepemimpinan ketua remaja masjid.',
    'about.card1.footer': 'ketua remaja masjid • IPK 3.82',

    'about.card2.title': 'Ekosistem Utama',
    'about.card2.desc': 'Pengembangan full-stack modern dengan TypeScript, TailwindCSS, dan database relasional.',
    'about.card2.footer': 'PHP • JS • TS',

    'about.card3.title': 'Alur Kerja Modern',
    'about.card3.desc': 'Antigravity IDE & prompt-driven iteration untuk efisiensi debugging 3x lebih cepat.',
    'about.card3.footer': 'Antigravity IDE',

    'about.card4.title': 'Keamanan Sistem',
    'about.card4.desc': 'Merancang sistem informasi manajemen aman dengan integritas data ketat.',
    'about.card4.footer': 'Clean Code • Git',

    'about.tools': 'Teknologi & Tools',
    'about.viewExp': 'Lihat Pengalaman',
    'about.whatsapp': 'Hubungi Saya',
    'about.downloadCv': 'Unduh CV (PDF)',

    // Skills
    'skills.overline': '02 / MATRIKS TEKNIS',
    'skills.title': 'Kompetensi Inti & Teknologi',
    'skills.desc': 'Keahlian teknis terverifikasi dalam frontend modern, layanan backend tangguh, dan rekayasa basis data.',

    // Experience
    'experience.overline': '03 / TONGGAK & DAMPAK',
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
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Parse initial state from URL pathname
  const parsePath = (): { initialLang: Language; initialSection: string } => {
    if (typeof window === 'undefined') {
      return { initialLang: 'ID', initialSection: 'home' };
    }

    const segments = window.location.pathname.split('/').filter(Boolean);
    const langCode = segments[0]?.toLowerCase();
    const slug = segments[1]?.toLowerCase();

    let resolvedLang: Language = 'ID';
    if (langCode === 'en') resolvedLang = 'EN';
    else if (langCode === 'id') resolvedLang = 'ID';
    else {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'EN' || saved === 'ID') resolvedLang = saved;
    }

    const resolvedSection = slug && SLUG_TO_SECTION[slug] ? SLUG_TO_SECTION[slug] : 'home';
    return { initialLang: resolvedLang, initialSection: resolvedSection };
  };

  const [lang, setLangState] = useState<Language>(() => parsePath().initialLang);
  const [activeSection, setActiveSection] = useState<string>(() => parsePath().initialSection);

  const getUrlForSection = useCallback(
    (sectionId: string, targetLang?: Language): string => {
      const currentLang = targetLang || lang;
      const slug = SECTION_SLUGS[currentLang][sectionId] || SECTION_SLUGS[currentLang]['home'];
      return `/${currentLang.toLowerCase()}/${slug}`;
    },
    [lang]
  );

  const navigateToSection = useCallback(
    (sectionId: string, customLang?: Language, pushHistory: boolean = true) => {
      const targetLang = customLang || lang;
      const targetSlug = SECTION_SLUGS[targetLang][sectionId] || SECTION_SLUGS[targetLang]['home'];
      const targetUrl = `/${targetLang.toLowerCase()}/${targetSlug}`;

      if (window.location.pathname !== targetUrl) {
        if (pushHistory) {
          window.history.pushState({ section: sectionId, lang: targetLang }, '', targetUrl);
        } else {
          window.history.replaceState({ section: sectionId, lang: targetLang }, '', targetUrl);
        }
      }

      setActiveSection(sectionId);

      // Smooth scroll to target section
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const navOffset = window.innerWidth < 640 ? 70 : 85;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    },
    [lang]
  );

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);

    // Update URL to new language with current active section
    const currentSlug = SECTION_SLUGS[newLang][activeSection] || SECTION_SLUGS[newLang]['home'];
    const newUrl = `/${newLang.toLowerCase()}/${currentSlug}`;
    window.history.pushState({ section: activeSection, lang: newLang }, '', newUrl);
  };

  const toggleLang = () => {
    const nextLang = lang === 'EN' ? 'ID' : 'EN';
    setLang(nextLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  // Handle Initial Landing and Popstate (Browser Back/Forward)
  useEffect(() => {
    const handlePopState = () => {
      const { initialLang, initialSection } = parsePath();
      setLangState(initialLang);
      setActiveSection(initialSection);

      if (initialSection === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(initialSection);
        if (el) {
          const navOffset = window.innerWidth < 640 ? 70 : 85;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    // On Initial Mount, if URL has a section or path, normalize URL and scroll
    const { initialLang, initialSection } = parsePath();
    const normalizedUrl = `/${initialLang.toLowerCase()}/${SECTION_SLUGS[initialLang][initialSection]}`;
    if (window.location.pathname !== normalizedUrl) {
      window.history.replaceState({ section: initialSection, lang: initialLang }, '', normalizedUrl);
    }

    if (initialSection !== 'home') {
      // Delay slightly for elements to mount
      setTimeout(() => {
        const el = document.getElementById(initialSection);
        if (el) {
          const navOffset = window.innerWidth < 640 ? 70 : 85;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 150);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        activeSection,
        setActiveSection,
        navigateToSection,
        getUrlForSection,
      }}
    >
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
