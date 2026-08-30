import React, { useState, useEffect, useRef } from 'react';
import { animate, scrambleText } from 'animejs';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface MilestoneItem {
  id: string;
  type: 'work' | 'education';
  role: string;
  institution: string;
  period: string;
  location: string;
  badgeLabel: string;
  summary: string;
  finalProject?: string;
  deliverables: {
    title: string;
    desc: string;
    tags?: string[];
  }[];
  techStack: string[];
}

export const Experience: React.FC = () => {
  const { lang, t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>('exp-work-1');
  const [filterType, setFilterType] = useState<'all' | 'work' | 'education'>('all');
  const [showAll, setShowAll] = useState<boolean>(false);
  const INITIAL_COUNT = 2;

  // Refs for Anime.js
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  const milestones: MilestoneItem[] = [
    {
      id: 'exp-work-1',
      type: 'work',
      role: 'Fullstack Developer',
      institution: 'PT Cakrawala Parama Internasional',
      period: lang === 'ID' ? 'Maret - September 2026' : 'March - September 2026',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENGALAMAN KERJA' : 'WORK EXPERIENCE',
      summary:
        lang === 'ID'
          ? 'Bertanggung jawab dalam perancangan dan pengembangan aplikasi web enterprise, integrasi sistem CMS multi-role dengan keamanan tingkat tinggi, aplikasi HRIS berbasis Geolocation & Payroll otomatis, serta manajemen deployment cloud cPanel.'
          : 'Responsible for end-to-end engineering of enterprise web systems, high-security multi-role RBAC CMS, geolocation-based HRIS attendance with automated payroll engines, and stable cloud deployment on cPanel.',
      deliverables: [
        {
          title: lang === 'ID' ? 'Sistem CMS Multi-Role RBAC' : 'Multi-Role RBAC CMS Architecture',
          desc:
            lang === 'ID'
              ? 'Merancang RESTful API berbasis Laravel dan Vue menggunakan Laravel Sanctum untuk mengamankan data serta membangun approval workflow bilingual khusus peran Direktur.'
              : 'Architected RESTful APIs with Laravel and Vue secured by Laravel Sanctum token auth, implementing a custom bilingual approval workflow tailored for Director roles.',
          tags: ['Laravel', 'Vue.js', 'Laravel Sanctum', 'REST API', 'RBAC'],
        },
        {
          title: lang === 'ID' ? 'Aplikasi Presensi HRIS & Payroll Otomatis' : 'HRIS Geolocation & Automated Payroll',
          desc:
            lang === 'ID'
              ? 'Mengembangkan aplikasi presensi (HRIS) berbasis web dengan validasi Geolocation dan perhitungan Payroll otomatis menggunakan arsitektur modern Laravel 12 dan React TypeScript.'
              : 'Engineered web-based attendance (HRIS) featuring real-time geolocation validation and automated payroll calculation algorithms built with Laravel 12 and React TypeScript.',
          tags: ['Laravel 12', 'React', 'TypeScript', 'Geolocation', 'Payroll Engine'],
        },
        {
          title: lang === 'ID' ? 'Manajemen Environment & Cloud Deployment' : 'Environment & Cloud Hosting Management',
          desc:
            lang === 'ID'
              ? 'Mengelola konfigurasi dependency, manajemen environment (production/staging), serta proses deployment aplikasi pada cloud hosting cPanel secara stabil dan efisien.'
              : 'Managed dependency configurations, multi-environment setups (production/staging), and automated deployment routines across cPanel cloud infrastructure.',
          tags: ['cPanel', 'Deployment', 'Production/Staging', 'Dependency Mgmt'],
        },
      ],
      techStack: [
        'Laravel 12',
        'React',
        'TypeScript',
        'Vue.js',
        'Laravel Sanctum',
        'RESTful API',
        'MySQL',
        'cPanel',
      ],
    },
    {
      id: 'exp-work-2',
      type: 'work',
      role: lang === 'ID' ? 'Asisten Dosen' : 'Teaching Assistant',
      institution: 'Akademi Teknik Informatika Tunas Bangsa',
      period:
        lang === 'ID'
          ? 'Juli 2025 - Sekarang (Part-time: Senin & Kamis Malam)'
          : 'July 2025 - Present (Part-time: Mon & Thu Evenings)',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENGALAMAN KERJA' : 'WORK EXPERIENCE',
      summary:
        lang === 'ID'
          ? 'Membimbing 10+ mahasiswa dalam penguasaan logika pemrograman, pengembangan fullstack web, peninjauan kode (code review), arsitektur sistem terstruktur, serta pendampingan tugas akhir berbasis metodologi Waterfall.'
          : 'Mentoring 10+ university students in programming logic, fullstack web development, code reviews, structured system architectures, and thesis project development using the Waterfall methodology.',
      deliverables: [
        {
          title:
            lang === 'ID'
              ? 'Mentoring Fullstack & Bimbingan Tugas Akhir'
              : 'Fullstack Web Mentoring & Thesis Supervision',
          desc:
            lang === 'ID'
              ? 'Mentoring 10+ mahasiswa mendalami logika pemrograman, pengembangan web fullstack (PHP, MySQL, Bootstrap), serta mendampingi penyusunan aplikasi tugas akhir berbasis metode Waterfall hingga tuntas.'
              : 'Mentored 10+ students in mastering programming logic and full-stack web engineering (PHP, MySQL, Bootstrap), guiding end-to-end development of final thesis applications using the Waterfall method.',
          tags: ['PHP', 'MySQL', 'Bootstrap', 'Waterfall SDLC', 'Mentoring'],
        },
        {
          title:
            lang === 'ID'
              ? 'Peninjauan Kode, Debugging & Clean Code'
              : 'Code Review, Debugging & Clean Code',
          desc:
            lang === 'ID'
              ? 'Aktif melakukan peninjauan kode (code review), debugging, dan menerapkan prinsip clean code untuk memastikan aplikasi mahasiswa terstruktur, aman, dan mudah dipelihara.'
              : 'Conducted rigorous code reviews, in-depth debugging sessions, and enforced clean code principles to ensure student software projects remain well-structured, secure, and maintainable.',
          tags: ['Code Review', 'Debugging', 'Clean Code', 'Security Best Practices'],
        },
        {
          title:
            lang === 'ID'
              ? 'Perancangan Arsitektur Sistem & Kolaborasi Git'
              : 'System Architecture Modeling & Git Collaboration',
          desc:
            lang === 'ID'
              ? 'Mengarahkan perancangan arsitektur sistem (Flowchart, DFD, ERD), alur kolaborasi tim menggunakan Git/GitHub, serta pemanfaatan AI tools untuk efisiensi eksekusi coding.'
              : 'Directed system architecture modeling (Flowcharts, DFD, ERD), structured Git/GitHub collaborative workflows, and guided the integration of AI developer tools for streamlined code execution.',
          tags: ['Flowchart & DFD', 'ERD Modeling', 'Git / GitHub', 'AI Coding Tools'],
        },
      ],
      techStack: [
        'PHP',
        'MySQL',
        'Bootstrap',
        'Git & GitHub',
        'System Architecture',
        'Clean Code',
        'AI Tools',
        'Waterfall SDLC',
      ],
    },
    {
      id: 'exp-work-3',
      type: 'work',
      role:
        lang === 'ID'
          ? 'Fullstack Developer (Magang)'
          : 'Fullstack Developer (Internship)',
      institution: 'PT Radar Teknologi Komputer',
      period: lang === 'ID' ? 'Maret - Mei 2025' : 'March - May 2025',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'MAGANG (INTERNSHIP)' : 'INTERNSHIP',
      summary:
        lang === 'ID'
          ? 'Mengembangkan arsitektur website portofolio dinamis berbasis Laravel 12 dengan operasi CRUD optimal, membangun modul visualisasi data interaktif untuk isu lingkungan publik, serta menjalankan Black Box Testing & debugging pra-deployment.'
          : 'Engineered dynamic portfolio web architectures utilizing Laravel 12 with optimized CRUD workflows, built interactive data visualization modules for environmental public data, and executed pre-deployment Black Box Testing & debugging.',
      deliverables: [
        {
          title:
            lang === 'ID'
              ? 'Arsitektur Website Portofolio Dinamis & CRUD'
              : 'Dynamic Portfolio Architecture & CRUD Engine',
          desc:
            lang === 'ID'
              ? 'Merancang dan membangun arsitektur website portofolio dinamis menggunakan Laravel 12 dengan fitur CRUD yang optimal.'
              : 'Designed and engineered dynamic portfolio website architectures utilizing Laravel 12 with high-performance, optimized CRUD functionalities.',
          tags: ['Laravel 12', 'PHP', 'CRUD Operations', 'Web Architecture', 'Blade'],
        },
        {
          title:
            lang === 'ID'
              ? 'Visualisasi Data Lingkungan (Polusi Laut)'
              : 'Environmental Data Visualization Module',
          desc:
            lang === 'ID'
              ? 'Mengembangkan modul web untuk visualisasi data lingkungan (studi kasus: Polusi Laut Pantai Selatan), memastikan data disajikan secara informatif kepada publik.'
              : 'Developed web modules for environmental data visualization (case study: South Coast Marine Pollution), ensuring accessible, clear, and informative data presentation for the public.',
          tags: ['Data Visualization', 'Environmental Data', 'UI/UX', 'Analytics'],
        },
        {
          title:
            lang === 'ID'
              ? 'Black Box Testing & Debugging Pra-Deployment'
              : 'Black Box Testing & Pre-Deployment Debugging',
          desc:
            lang === 'ID'
              ? 'Melakukan Black Box Testing dan debugging kode sebelum deployment, mengurangi risiko error pada tahap produksi.'
              : 'Conducted rigorous Black Box Testing and code debugging prior to deployment, significantly mitigating error risks in production environments.',
          tags: ['Black Box Testing', 'Debugging', 'QA Testing', 'Deployment Readiness'],
        },
      ],
      techStack: [
        'Laravel 12',
        'PHP',
        'MySQL',
        'Black Box Testing',
        'Data Visualization',
        'Blade',
        'Git',
      ],
    },
    {
      id: 'exp-work-4',
      type: 'work',
      role: lang === 'ID' ? 'Koordinator Utama & IT Support' : 'Head Coordinator & IT Support',
      institution: 'TPA Masjid Nurul Haq',
      period: lang === 'ID' ? 'September 2024 - Sekarang' : 'September 2024 - Present',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENGALAMAN KERJA' : 'WORK EXPERIENCE',
      summary:
        lang === 'ID'
          ? 'Memimpin operasional harian institusi pendidikan, memelopori digitalisasi administrasi melalui platform web tpanurhaq.com, serta mengelola infrastruktur hosting dan penanganan teknis secara mandiri.'
          : 'Leading daily operational workflows of the educational institution, spearheading administrative digitalization through the tpanurhaq.com web platform, and independently managing web hosting infrastructure and IT support.',
      deliverables: [
        {
          title:
            lang === 'ID'
              ? 'Manajemen Operasional & Performa Belajar'
              : 'Daily Operations & Academic Coordination',
          desc:
            lang === 'ID'
              ? 'Memimpin kegiatan operasional harian institusi pendidikan, mencakup penyusunan jadwal pengajaran, manajemen data murid, dan evaluasi performa belajar.'
              : 'Leading daily operational workflows of the educational institution, including teaching schedule coordination, student data management, and learning performance evaluations.',
          tags: ['Operations', 'Scheduling', 'Academic Management', 'Evaluation'],
        },
        {
          title:
            lang === 'ID'
              ? 'Digitalisasi Administrasi & Platform Web'
              : 'Administrative Digitalization & Web Platform',
          desc:
            lang === 'ID'
              ? 'Melakukan digitalisasi administrasi dengan menginisiasi dan mengelola platform web (tpanurhaq.com) untuk efisiensi rekapitulasi jadwal serta absensi pengajar dan murid.'
              : 'Spearheaded administrative digitalization by initiating and managing the web platform (tpanurhaq.com) for streamlined schedule recaps and attendance tracking for teachers and students.',
          tags: ['tpanurhaq.com', 'Web Platform', 'System Administration', 'Digitalization'],
        },
        {
          title:
            lang === 'ID'
              ? 'Pemeliharaan Hosting & Dukungan IT'
              : 'Hosting Maintenance & Technical Support',
          desc:
            lang === 'ID'
              ? 'Menangani kendala teknis (hosting maintenance) secara mandiri untuk memastikan platform edukasi dapat diakses tanpa hambatan oleh seluruh pengguna.'
              : 'Independently resolving technical issues and maintaining hosting infrastructure to ensure uninterrupted high-availability access to the educational platform.',
          tags: ['cPanel', 'Hosting Maintenance', 'IT Support', 'Troubleshooting'],
        },
      ],
      techStack: [
        'Web Platform',
        'Hosting Maintenance',
        'cPanel',
        'Operational Management',
        'IT Support',
        'Data Management',
      ],
    },
    {
      id: 'exp-edu-1',
      type: 'education',
      role: lang === 'ID' ? 'Manajemen Informatika' : 'Informatics Management',
      institution: 'Akademi Teknik Informatika Tunas Bangsa',
      period: '2022 - 2025',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENDIDIKAN' : 'EDUCATION',
      summary:
        lang === 'ID'
          ? 'Menyelesaikan studi dengan fokus pada perancangan sistem informasi manajemen, basis data relasional, dan pengembangan aplikasi web berbasis arsitektur modern (IPK 3.82 / 4.00).'
          : 'Completed degree with high academic distinction (GPA 3.82 / 4.00), emphasizing relational database modeling, software engineering, and modern full-stack web architectures.',
      finalProject:
        '“Sistem Informasi Manajemen Kehadiran Murid TPA Berbasis Web Menggunakan Laravel 12 (Studi Kasus: Masjid Nurul Haq, Jakarta Barat)”',
      deliverables: [
        {
          title: lang === 'ID' ? 'Proyek Akhir Akademik' : 'Final Graduation Project',
          desc:
            lang === 'ID'
              ? '“Sistem Informasi Manajemen Kehadiran Murid TPA Berbasis Web Menggunakan Laravel 12 (Studi Kasus: Masjid Nurul Haq, Jakarta Barat)” — Merancang sistem pencatatan presensi digital santri, monitoring riwayat hafalan Al-Qur\'an, dan rekapitulasi pelaporan otomatis untuk pengurus yayasan.'
              : '“Web-Based Mosque Student Attendance Management Information System Using Laravel 12 (Case Study: Masjid Nurul Haq, West Jakarta)” — Designed a digitized student attendance ledger, Quran memorization tracking module, and automated reporting suite.',
          tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Blade Engine', 'Management System'],
        },
      ],
      techStack: ['Laravel 12', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Git'],
    },
  ];

  const filteredMilestones =
    filterType === 'all'
      ? milestones
      : milestones.filter((m) => m.type === filterType);

  const displayedMilestones = showAll
    ? filteredMilestones
    : filteredMilestones.slice(0, INITIAL_COUNT);

  const handleFilterChange = (type: 'all' | 'work' | 'education') => {
    setFilterType(type);
    setShowAll(false);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  const runHeaderScramble = () => {
    if (badgeRef.current) {
      animate(badgeRef.current, {
        innerHTML: scrambleText({
          text: t('experience.overline'),
          chars: 'uppercase',
          cursor: '_',
          duration: 1400,
        }),
      });
    }

    if (headingRef.current) {
      animate(headingRef.current, {
        innerHTML: scrambleText({
          text: t('experience.title'),
          chars: 'a-zA-Z0-9 &',
          cursor: true,
          duration: 1800,
        }),
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        innerHTML: scrambleText({
          text: t('experience.desc'),
          chars: 'a-zA-Z0-9 ',
          cursor: false,
          duration: 1600,
        }),
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            runHeaderScramble();
            hasAnimatedRef.current = true;
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasAnimatedRef.current) {
      runHeaderScramble();
    }
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#F4F0EA]/50 border-t border-[#E2DDD5]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            {/* Overline Badge */}
            <div
              className="flex items-center gap-2 mb-3 cursor-pointer group w-fit"
              onClick={runHeaderScramble}
              title="Click to replay anime.js scramble"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C25E3E] group-hover:scale-125 transition-transform" />
              <span
                ref={badgeRef}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#78716C] font-semibold group-hover:text-[#C25E3E] transition-colors"
              >
                {t('experience.overline')}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              onClick={runHeaderScramble}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-[1.15] tracking-tight cursor-pointer"
            >
              {t('experience.title')}
            </h2>
          </div>

          {/* Description */}
          <div className="mt-4 md:mt-0 max-w-sm">
            <p
              ref={descRef}
              className="text-xs sm:text-sm text-[#78716C] font-mono leading-relaxed"
            >
              {t('experience.desc')}
            </p>
          </div>
        </div>

        {/* Filter Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          <button
            onClick={() => handleFilterChange('all')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'all'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Semua Riwayat' : 'All Milestones'}</span>
            <span className="text-[10px] bg-[#C25E3E] text-white px-1.5 py-0.2 rounded-full">
              {milestones.length}
            </span>
          </button>

          <button
            onClick={() => handleFilterChange('work')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'work'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>{lang === 'ID' ? 'Pengalaman Kerja' : 'Work Experience'}</span>
          </button>

          <button
            onClick={() => handleFilterChange('education')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'education'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>{lang === 'ID' ? 'Pendidikan' : 'Education'}</span>
          </button>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E2DDD5] space-y-12">
          {displayedMilestones.map((record) => {
            const isExpanded = expandedId === record.id;
            const isWork = record.type === 'work';

            return (
              <div key={record.id} className="relative group">
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-4 border-[#FDFBF7] shadow-sm transition-all duration-300 group-hover:scale-125 ${
                    isWork ? 'bg-[#C25E3E]' : 'bg-[#1E1E1E]'
                  }`}
                />

                {/* Timeline Card */}
                <Card className="bg-[#FDFBF7] border-[#E2DDD5] shadow-warm-sm hover:shadow-warm-md transition-all rounded-3xl overflow-hidden">
                  <CardHeader className="pb-4">
                    {/* Header Row: Badge & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <Badge variant="terracotta" className="text-[11px] font-mono">
                          {record.badgeLabel}
                        </Badge>
                        <span className="text-xs font-mono text-[#78716C] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C25E3E]" />
                          {record.period}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-[#78716C] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#78716C]" />
                        {record.location}
                      </span>
                    </div>

                    {/* Role Title */}
                    <CardTitle className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1E1E]">
                      {record.role}
                    </CardTitle>

                    {/* Institution / Company */}
                    <div className="font-sans font-semibold text-base sm:text-lg text-[#C25E3E] mt-0.5">
                      {record.institution}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Summary */}
                    <p className="text-sm sm:text-base text-[#5A5551] leading-relaxed">
                      {record.summary}
                    </p>

                    {/* Final Project Highlight (for Education) */}
                    {record.finalProject && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#F4F0EA] border border-[#E2DDD5] space-y-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#C25E3E] font-bold flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          <span>
                            {lang === 'ID' ? 'Judul Proyek Akhir (Tugas Akhir)' : 'Final Thesis Project'}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-[#1E1E1E] leading-relaxed italic">
                          {record.finalProject}
                        </p>
                      </div>
                    )}

                    {/* Expandable Deliverables Section */}
                    {isExpanded && (
                      <div className="pt-5 border-t border-[#E2DDD5]/80 space-y-4">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#1E1E1E] font-semibold flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
                          <span>
                            {isWork
                              ? lang === 'ID'
                                ? 'Pencapaian & Arsitektur Sistem'
                                : 'Key Architecture & Deliverables'
                              : lang === 'ID'
                              ? 'Fokus Kompetensi Akademik'
                              : 'Academic Focus & Competencies'}
                          </span>
                        </div>

                        <div className="space-y-3.5">
                          {record.deliverables.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-[#F4F0EA]/60 border border-[#E2DDD5] space-y-2"
                            >
                              <div className="flex items-start gap-2 text-sm font-bold text-[#1E1E1E]">
                                <CheckCircle2 className="w-4 h-4 text-[#C25E3E] flex-shrink-0 mt-0.5" />
                                <span>{item.title}</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#5A5551] leading-relaxed pl-6">
                                {item.desc}
                              </p>

                              {item.tags && (
                                <div className="flex flex-wrap gap-1.5 pl-6 pt-1">
                                  {item.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FDFBF7] text-[#1E1E1E] border border-[#E2DDD5]"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer Row: Tech Stack & Expand Toggle */}
                    <div className="pt-4 border-t border-[#E2DDD5]/70 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {record.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[11px] font-mono bg-[#F4F0EA] text-[#1E1E1E]"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(record.id)}
                        className="text-xs font-mono gap-1 text-[#C25E3E] hover:text-[#1E1E1E] hover:bg-[#F4F0EA] cursor-pointer"
                      >
                        <span>
                          {isExpanded
                            ? lang === 'ID'
                              ? 'Tutup Detail'
                              : 'Collapse Details'
                            : lang === 'ID'
                            ? 'Buka Rincian'
                            : 'Expand Details'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {filteredMilestones.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FDFBF7] text-[#1E1E1E] border border-[#E2DDD5] hover:border-[#C25E3E] hover:text-[#C25E3E] shadow-warm-sm hover:shadow-warm-md transition-all duration-200 cursor-pointer group"
            >
              <span>
                {showAll
                  ? lang === 'ID'
                    ? 'Tampilkan Lebih Sedikit'
                    : 'Show Less'
                  : lang === 'ID'
                  ? `Tampilkan Lebih Banyak (${filteredMilestones.length - INITIAL_COUNT} Lainnya)`
                  : `Show More (${filteredMilestones.length - INITIAL_COUNT} More)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#C25E3E] transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#C25E3E] transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
