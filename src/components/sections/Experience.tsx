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
  type: 'work' | 'education' | 'organization';
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
  const [filterType, setFilterType] = useState<'all' | 'work' | 'education' | 'organization'>('all');
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
          ? 'Merancang arsitektur RESTful API performa tinggi, sistem CMS multi-role terproteksi Sanctum RBAC, aplikasi HRIS terintegrasi validasi Geolocation & Payroll otomatis, serta mengelola deployment cloud hosting cPanel dengan stabilitas tinggi.'
          : 'Architected high-performance RESTful APIs, enterprise multi-role RBAC CMS, geolocation-validated HRIS with automated payroll engines, and managed reliable cloud deployments across cPanel hosting infrastructure.',
      deliverables: [
        {
          title: lang === 'ID' ? 'Sistem CMS Multi-Role RBAC & Approval Workflow' : 'Multi-Role RBAC CMS & Approval Workflow',
          desc:
            lang === 'ID'
              ? 'Merancang dan mengimplementasikan 30+ RESTful API endpoints berbasis Laravel dan Vue.js, mengamankan autentikasi token via Laravel Sanctum dengan otorisasi 3-tier Role-Based Access Control (RBAC), serta membangun approval workflow dwibahasa untuk jajaran eksekutif.'
              : 'Architected and implemented 30+ RESTful API endpoints using Laravel and Vue.js, enforcing token security via Laravel Sanctum with a 3-tier Role-Based Access Control (RBAC) and delivering an executive-level bilingual approval workflow.',
          tags: ['Laravel', 'Vue.js', 'Laravel Sanctum', 'REST API', 'RBAC'],
        },
        {
          title: lang === 'ID' ? 'Aplikasi HRIS & Payroll Engine Otomatis' : 'HRIS & Automated Payroll Engine',
          desc:
            lang === 'ID'
              ? 'Mengembangkan aplikasi HRIS berbasis Laravel dan React TypeScript dengan fitur presensi validasi Geolocation API (radius geofencing) serta otomatisasi kalkulasi payroll (gaji pokok, lembur, dan penalti) yang memangkas waktu proses rekapitulasi HR hingga ~60%.'
              : 'Engineered web-based attendance (HRIS) featuring real-time geolocation boundary validation and automated payroll calculation algorithms built with Laravel 12 and React TypeScript, reducing HR processing time by ~60%.',
          tags: ['Laravel 12', 'React', 'TypeScript', 'Geolocation', 'Payroll Engine'],
        },
        {
          title: lang === 'ID' ? 'Manajemen Environment & Cloud Hosting cPanel' : 'Environment & Cloud Infrastructure Management',
          desc:
            lang === 'ID'
              ? 'Mengelola konfigurasi dependensi Composer/NPM, isolasi environment (staging/production), dan proses deployment aplikasi pada infrastruktur cloud hosting cPanel dengan pemantauan uptime stabil.'
              : 'Managed dependency configurations, multi-environment isolation (production/staging), and automated deployment routines across cPanel cloud infrastructure maintaining 99.9% uptime.',
          tags: ['cPanel', 'Deployment', 'Production/Staging', 'Dependency Mgmt'],
        },
        {
          title: lang === 'ID' ? 'Proposal Solusi Learning Management System (LMS)' : 'Enterprise LMS Technical Proposal',
          desc:
            lang === 'ID'
              ? 'Memimpin penyusunan proposal teknis arsitektur perangkat lunak dan materi presentasi solusi Learning Management System (LMS) skala enterprise untuk tender klien sektor pemerintahan.'
              : 'Spearheaded technical documentation and software architecture presentations for an enterprise Learning Management System (LMS) pitched in government procurement tenders.',
          tags: ['LMS', 'Technical Documentation', 'System Architecture', 'Enterprise Pitch'],
        },
        {
          title: lang === 'ID' ? 'Siklus Pengembangan Terstruktur (Waterfall SDLC)' : 'Full-Lifecycle Waterfall SDLC',
          desc:
            lang === 'ID'
              ? 'Menerapkan metodologi SDLC Waterfall secara menyeluruh, mulai dari elisitasi kebutuhan bisnis, perancangan diagram sistem (DFD, ERD), hingga implementasi dan pengujian fungsional.'
              : 'Applied end-to-end SDLC methodologies using the Waterfall framework to guide project execution from requirements analysis and system modeling (DFD/ERD) through production release.',
          tags: ['Waterfall SDLC', 'System Analysis', 'DFD / ERD', 'Implementation'],
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
        'SDLC Waterfall',
      ],
    },
    {
      id: 'exp-work-2',
      type: 'work',
      role: lang === 'ID' ? 'Asisten Dosen (Part-Time)' : 'Teaching Assistant (Part-Time)',
      institution: 'Akademi Teknik Informatika Tunas Bangsa',
      period:
        lang === 'ID'
          ? 'Juli 2025 - Sekarang'
          : 'July 2025 - Present',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENGALAMAN KERJA' : 'WORK EXPERIENCE',
      summary:
        lang === 'ID'
          ? 'Membimbing 10+ mahasiswa dalam penguasaan logika pemrograman dan pengembangan web full-stack, mendampingi aplikasi tugas akhir berbasis Waterfall SDLC hingga 100% lulus sidang, menegakkan standar Clean Code & Code Review berkala, serta mengedukasi alur Git dan AI-assisted coding tools.'
          : 'Mentoring 10+ undergraduate students in programming logic and full-stack web development, supervising final capstone projects using Waterfall SDLC with a 100% on-time defense rate, conducting code reviews for Clean Code, and guiding Git and AI-assisted workflows.',
      deliverables: [
        {
          title:
            lang === 'ID'
              ? 'Mentoring Pemrograman & Web Full-Stack'
              : 'Full-Stack Web Mentoring & Logic Fundamentals',
          desc:
            lang === 'ID'
              ? 'Membimbing 10+ mahasiswa dalam penguasaan logika pemrograman, algoritma dasar, dan pengembangan aplikasi web full-stack menggunakan PHP, MySQL, JavaScript, dan Tailwind CSS.'
              : 'Mentored 10+ undergraduate students in fundamental programming logic, relational data modeling, and full-stack web engineering using PHP, MySQL, JavaScript, and Tailwind CSS.',
          tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Mentoring'],
        },
        {
          title:
            lang === 'ID'
              ? 'Supervisi Proyek Tugas Akhir (Capstone)'
              : 'Capstone Project Supervision (Waterfall SDLC)',
          desc:
            lang === 'ID'
              ? 'Mendampingi mahasiswa secara intensif dalam perencanaan dan penyelesaian aplikasi tugas akhir berbasis metodologi Waterfall hingga tahap implementasi akhir, mempertahankan rasio kelulusan 100%.'
              : 'Supervised end-to-end development of final capstone projects, guiding students through the Waterfall SDLC from requirements analysis to final implementation and successful defense.',
          tags: ['Waterfall SDLC', 'Capstone Supervision', 'Project Delivery'],
        },
        {
          title:
            lang === 'ID'
              ? 'Perancangan Arsitektur Sistem & Pemodelan Data'
              : 'System Architecture & Data Modeling',
          desc:
            lang === 'ID'
              ? 'Memandu perancangan arsitektur dan pemodelan sistem perangkat lunak formal, mencakup pembuatan Flowchart, Data Flow Diagram (DFD Level 0-2), dan Entity Relationship Diagram (ERD).'
              : 'Instructed students in formal software architecture design, including process Flowcharts, Data Flow Diagrams (DFD Level 0–2), and normalized Entity Relationship Diagrams (ERD).',
          tags: ['Flowchart & DFD', 'ERD Modeling', 'System Architecture'],
        },
        {
          title:
            lang === 'ID'
              ? 'Code Review, Debugging & Standar Clean Code'
              : 'Code Review, Debugging & Clean Code',
          desc:
            lang === 'ID'
              ? 'Melakukan peninjauan kode (code review) berkala dan sesi debugging langsung untuk memastikan kepatuhan terhadap standar clean code, keamanan data (mitigasi SQLi/XSS), serta efisiensi query.'
              : 'Conducted structured code reviews and live debugging sessions to enforce clean code principles, system security (SQLi & XSS mitigations), and query efficiency.',
          tags: ['Code Review', 'Debugging', 'Clean Code', 'Security Best Practices'],
        },
        {
          title:
            lang === 'ID'
              ? 'Standar Kolaborasi Version Control (Git & GitHub)'
              : 'Git & GitHub Collaboration Workflows',
          desc:
            lang === 'ID'
              ? 'Mengarahkan mahasiswa dalam praktik kolaborasi pengembangan perangkat lunak berbasis version control menggunakan Git dan GitHub (branching, pull requests, conflict resolution).'
              : 'Facilitated collaborative software workflows and version control practices leveraging Git and GitHub (feature branches, pull requests, and conflict resolution).',
          tags: ['Git', 'GitHub', 'Version Control', 'Team Collaboration'],
        },
        {
          title:
            lang === 'ID'
              ? 'Integrasi AI-Assisted Coding Tools'
              : 'AI-Assisted Coding Tools Integration',
          desc:
            lang === 'ID'
              ? 'Mengedukasi penerapan AI-assisted coding tools (seperti Antigravity IDE) secara etis dan terarah guna mempercepat proses troubleshooting serta meningkatkan produktivitas penulisan kode.'
              : 'Guided students on the ethical and effective adoption of AI-assisted coding tools (such as Antigravity IDE) to accelerate troubleshooting speed and development productivity.',
          tags: ['AI Tools', 'Antigravity IDE', 'Productivity', 'Prompt Engineering'],
        },
      ],
      techStack: [
        'PHP',
        'MySQL',
        'JavaScript',
        'Tailwind CSS',
        'Git & GitHub',
        'System Architecture',
        'Clean Code',
        'Antigravity IDE',
        'Waterfall SDLC',
      ],
    },
    {
      id: 'exp-work-3',
      type: 'work',
      role:
        lang === 'ID'
          ? 'Fullstack Developer (Magang)'
          : 'Full-Stack Developer Intern (Laravel)',
      institution: 'PT Radar Teknologi Komputer',
      period: lang === 'ID' ? 'Maret - Mei 2025' : 'March - May 2025',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'MAGANG (INTERNSHIP)' : 'INTERNSHIP',
      summary:
        lang === 'ID'
          ? 'Merancang arsitektur website portofolio dinamis berbasis Laravel 12 dengan operasi CRUD optimal, membangun modul visualisasi data interaktif untuk isu lingkungan publik, serta menjalankan Black Box Testing & debugging pada 20+ skenario fungsi.'
          : 'Engineered dynamic web architectures using Laravel 12 with optimized CRUD workflows, built interactive data visualization modules for environmental public data, and executed pre-deployment Black Box Testing across 20+ functional test cases.',
      deliverables: [
        {
          title:
            lang === 'ID'
              ? 'Arsitektur Web Portofolio Dinamis & CRUD Engine'
              : 'Dynamic Web Architecture & CRUD Engine',
          desc:
            lang === 'ID'
              ? 'Merancang dan membangun arsitektur website portofolio dinamis menggunakan Laravel 12 dengan operasi CRUD performa tinggi dan struktur basis data MySQL yang teroptimasi.'
              : 'Designed and built dynamic web architectures utilizing Laravel 12 with high-performance CRUD operations and optimized MySQL relational database structures.',
          tags: ['Laravel 12', 'PHP', 'CRUD Operations', 'Web Architecture', 'Blade'],
        },
        {
          title:
            lang === 'ID'
              ? 'Visualisasi Data Lingkungan (Polusi Laut)'
              : 'Environmental Data Visualization Module',
          desc:
            lang === 'ID'
              ? 'Mengembangkan modul web analitik untuk visualisasi data lingkungan (studi kasus: Polusi Laut Pantai Selatan), memastikan data disajikan secara informatif dan responsif kepada publik.'
              : 'Developed web modules for environmental data visualization (case study: South Coast Marine Pollution), rendering complex datasets into clear, data-driven public insights.',
          tags: ['Data Visualization', 'Environmental Data', 'UI/UX', 'Analytics'],
        },
        {
          title:
            lang === 'ID'
              ? 'Black Box Testing & QA Pra-Deployment'
              : 'Black Box Testing & Pre-Deployment QA',
          desc:
            lang === 'ID'
              ? 'Melakukan Black Box Testing pada 20+ skenario pengujian dan debugging kode sebelum rilis, secara signifikan meminimalisir potensi error pada tahap produksi.'
              : 'Conducted comprehensive Black Box Testing and code debugging across 20+ functional test scenarios prior to deployment, significantly mitigating production defects.',
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
      role: lang === 'ID' ? 'Koordinator Utama & IT Support' : 'Lead Coordinator & IT Support',
      institution: 'TPA Masjid Nurul Haq',
      period: lang === 'ID' ? 'September 2024 - Sekarang' : 'September 2024 - Present',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENGALAMAN KERJA' : 'WORK EXPERIENCE',
      summary:
        lang === 'ID'
          ? 'Memimpin operasional harian institusi pendidikan non-formal, memelopori transformasi digital melalui website resmi tpanurhaq.com untuk 100+ santri & pengajar, mengotomatisasi absensi real-time (~70% efisiensi administrasi), serta mengelola hosting cPanel secara mandiri (99%+ uptime).'
          : 'Directing daily educational operations, spearheading administrative digitalization through tpanurhaq.com managing 100+ student records, automating real-time web-based attendance (~70% paperwork reduction), and administering cPanel hosting infrastructure with 99%+ uptime.',
      deliverables: [
        {
          title:
            lang === 'ID'
              ? 'Transformasi Digital & Web Portal (tpanurhaq.com)'
              : 'Digital Transformation & Official Web Portal',
          desc:
            lang === 'ID'
              ? 'Menginisiasi, merancang, dan meluncurkan platform web resmi (tpanurhaq.com) sebagai solusi transformasi digital sistem administrasi lembaga untuk 100+ santri dan pengajar.'
              : 'Spearheaded and launched the official web portal (tpanurhaq.com) to digitize organizational administrative operations, supporting 100+ student and faculty records.',
          tags: ['tpanurhaq.com', 'Web Platform', 'Digital Transformation'],
        },
        {
          title:
            lang === 'ID'
              ? 'Otomatisasi Presensi & Penjadwalan Terpadu'
              : 'Real-Time Attendance & Schedule Automation',
          desc:
            lang === 'ID'
              ? 'Mengotomatisasi sistem pencatatan presensi dan rekapitulasi jadwal kegiatan secara real-time via web, memangkas waktu proses administrasi manual hingga ~70%.'
              : 'Automated student attendance tracking and timetable management through the web platform, cutting manual administrative paperwork by ~70% and eliminating scheduling conflicts.',
          tags: ['Automation', 'Real-Time Tracking', 'Attendance', 'Scheduling'],
        },
        {
          title:
            lang === 'ID'
              ? 'Manajemen Basis Data & Pelaporan Santri'
              : 'Database Management & Academic Reporting',
          desc:
            lang === 'ID'
              ? 'Mengelola basis data administrasi santri secara terstruktur (registrasi, log kehadiran, dan evaluasi hasil belajar) serta menghasilkan pelaporan berkala otomatis untuk pengurus.'
              : 'Administered a centralized relational database covering student enrollments, attendance logs, and academic progress, generating automated progress reports for foundation trustees.',
          tags: ['Database Management', 'Data Integrity', 'Reporting'],
        },
        {
          title:
            lang === 'ID'
              ? 'Pemeliharaan Infrastruktur Hosting cPanel & IT Support'
              : 'cPanel Hosting Infrastructure & IT Support',
          desc:
            lang === 'ID'
              ? 'Bertanggung jawab penuh atas konfigurasi hosting cPanel, manajemen DNS domain, pemantauan uptime (99%+ availability), serta penanganan kendala teknis secara mandiri.'
              : 'Administered cloud hosting environments on cPanel, managed DNS routing, monitored uptime to sustain 99%+ service availability, and independently resolved server technical issues.',
          tags: ['cPanel', 'Hosting Maintenance', 'IT Support', 'Troubleshooting'],
        },
      ],
      techStack: [
        'tpanurhaq.com',
        'cPanel Cloud',
        'Web Platform',
        'Hosting Maintenance',
        'IT Support',
        'Database Management',
      ],
    },
    {
      id: 'exp-edu-1',
      type: 'education',
      role: lang === 'ID' ? 'D3 Manajemen Informatika' : 'Associate Degree (D3) in Informatics Management',
      institution: 'Akademi Teknik Informatika Tunas Bangsa',
      period: '2022 - 2025',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENDIDIKAN' : 'EDUCATION',
      summary:
        lang === 'ID'
          ? 'Menyelesaikan studi dengan predikat Sangat Memuaskan (IPK 3.82 / 4.00), berfokus pada perancangan sistem informasi manajemen, arsitektur basis data relasional, dan rekayasa web full-stack modern.'
          : 'Completed degree with high academic distinction (GPA 3.82 / 4.00), specializing in relational database modeling, software engineering, and modern full-stack web architectures.',
      finalProject:
        '“Sistem Informasi Manajemen Kehadiran Murid TPA Berbasis Web Menggunakan Laravel 12 (Studi Kasus: Masjid Nurul Haq, Jakarta Barat)”',
      deliverables: [
        {
          title: lang === 'ID' ? 'Proyek Akhir Akademik (Tugas Akhir)' : 'Final Thesis Graduation Project',
          desc:
            lang === 'ID'
              ? '“Sistem Informasi Manajemen Kehadiran Murid TPA Berbasis Web Menggunakan Laravel 12 (Studi Kasus: Masjid Nurul Haq, Jakarta Barat)” — Merancang sistem presensi digital santri, monitoring riwayat hafalan Al-Qur\'an, dan otomatisasi pelaporan rekapitulasi untuk yayasan.'
              : '“Web-Based Student Attendance Management Information System Using Laravel 12 (Case Study: Nurul Haq Mosque, West Jakarta)” — Designed a digitized student attendance ledger, Quran memorization tracking module, and automated reporting suite.',
          tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'Blade Engine', 'Management System'],
        },
      ],
      techStack: ['Laravel 12', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Git'],
    },
    {
      id: 'exp-edu-2',
      type: 'education',
      role: lang === 'ID' ? 'Otomatisasi & Tata Kelola Perkantoran' : 'Office Administration',
      institution: 'SMK Tanjung Jakarta Barat',
      period: '2019 - 2022',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'PENDIDIKAN' : 'EDUCATION',
      summary:
        lang === 'ID'
          ? 'Lulusan dengan konsentrasi otomatisasi tata kelola perkantoran digital, manajemen kearsipan dokumen terstruktur, korespondensi profesional, dan literasi teknologi komputer.'
          : 'Completed vocational education focusing on digital office administration, structured document archives, professional communication, and business software tools.',
      deliverables: [
        {
          title: lang === 'ID' ? 'Tata Kelola Administrasi Digital' : 'Digital Office Automation & Administration',
          desc:
            lang === 'ID'
              ? 'Pelatihan komprehensif dalam pengarsipan data digital, tata kelola dokumen formal, serta efisiensi manajemen operasional administrasi.'
              : 'Specialized training in electronic document indexing, formal correspondence, data organization, and executive administrative workflows.',
          tags: ['Office Administration', 'Documentation', 'Digital Archiving', 'Data Entry'],
        },
      ],
      techStack: ['Office Administration', 'Digital Archiving', 'Spreadsheets', 'Documentation'],
    },
    {
      id: 'exp-org-1',
      type: 'organization',
      role: lang === 'ID' ? 'Ketua Risnha (Remaja Islam Nurul Haq)' : 'Chairperson of RISNHA (Youth Organization)',
      institution: 'Masjid Nurul Haq',
      period: lang === 'ID' ? '2022 - Sekarang' : '2022 - Present',
      location: 'Jakarta, Indonesia',
      badgeLabel: lang === 'ID' ? 'ORGANISASI' : 'ORGANIZATIONAL EXPERIENCE',
      summary:
        lang === 'ID'
          ? 'Bertanggung jawab memimpin tim inti dalam merancang dan mengeksekusi program kerja tahunan kepemudaan, mengelola anggaran dan koordinasi logistik event sosial-edukasi, serta menjadi jembatan komunikasi antara dewan masjid (DKM) dan generasi muda.'
          : 'Leading the core executive committee in strategic planning and executing annual youth development programs, overseeing event budgets and logistics, and acting as primary liaison between mosque trustees and youth members.',
      deliverables: [
        {
          title: lang === 'ID' ? 'Kepemimpinan Strategis & Community Development' : 'Strategic Leadership & Youth Development',
          desc:
            lang === 'ID'
              ? 'Memimpin perumusan dan eksekusi program kerja tahunan yang berfokus pada pembangunan karakter generasi muda dan kepedulian sosial kemasyarakatan.'
              : 'Orchestrated annual initiative pipelines centered on youth empowerment, character mentorship, and neighborhood community service.',
          tags: ['Leadership', 'Strategic Planning', 'Community Development', 'Mentorship'],
        },
        {
          title: lang === 'ID' ? 'Penyelenggaraan Acara & Tata Kelola Anggaran' : 'Event Operations & Financial Governance',
          desc:
            lang === 'ID'
              ? 'Mengelola perencanaan hingga pelaksanaan berbagai kegiatan sosial dan edukatif, mencakup penyusunan anggaran biaya, sponsor, dan logistik lapangan.'
              : 'Supervised budget allocations, procurement logistics, and volunteer workflows across cultural, educational, and charitable gatherings.',
          tags: ['Event Management', 'Budgeting', 'Operations', 'Resource Management'],
        },
        {
          title: lang === 'ID' ? 'Mediasi Komunikasi & Problem Solving' : 'Mediation & Stakeholder Liaison',
          desc:
            lang === 'ID'
              ? 'Menjadi pengambil keputusan kunci dalam resolusi masalah internal organisasi dan menjembatani aspirasi pemuda dengan jajaran dewan eksekutif DKM masjid.'
              : 'Served as key executive liaison bridging communication between senior mosque board trustees and adolescent cohorts, resolving internal disputes.',
          tags: ['Conflict Resolution', 'Mediation', 'Public Speaking', 'Cross-Generation Liaison'],
        },
      ],
      techStack: ['Team Leadership', 'Community Development', 'Event Management', 'Public Speaking', 'Budgeting'],
    },
  ];

  const allCount = milestones.length;
  const workCount = milestones.filter((m) => m.type === 'work').length;
  const educationCount = milestones.filter((m) => m.type === 'education').length;
  const organizationCount = milestones.filter((m) => m.type === 'organization').length;

  const filteredMilestones =
    filterType === 'all'
      ? milestones
      : milestones.filter((m) => m.type === filterType);

  const displayedMilestones = showAll
    ? filteredMilestones
    : filteredMilestones.slice(0, INITIAL_COUNT);

  const handleFilterChange = (type: 'all' | 'work' | 'education' | 'organization') => {
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
      { threshold: 0.2 }
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
      className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#F4F0EA]/50 border-t border-[#E2DDD5] scroll-mt-20 sm:scroll-mt-24"
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

        {/* Filter Switcher Tabs with Dynamic Counts */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          {/* All Milestones */}
          <button
            onClick={() => handleFilterChange('all')}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'all'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>{lang === 'ID' ? 'Semua Riwayat' : 'All Milestones'}</span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                filterType === 'all'
                  ? 'bg-[#C25E3E] text-white'
                  : 'bg-[#F4F0EA] text-[#6E6A67] border border-[#E2DDD5]'
              }`}
            >
              {allCount}
            </span>
          </button>

          {/* Work Experience */}
          <button
            onClick={() => handleFilterChange('work')}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'work'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>{lang === 'ID' ? 'Pengalaman Kerja' : 'Work Experience'}</span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                filterType === 'work'
                  ? 'bg-[#C25E3E] text-white'
                  : 'bg-[#F4F0EA] text-[#6E6A67] border border-[#E2DDD5]'
              }`}
            >
              {workCount}
            </span>
          </button>

          {/* Education */}
          <button
            onClick={() => handleFilterChange('education')}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'education'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>{lang === 'ID' ? 'Pendidikan' : 'Education'}</span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                filterType === 'education'
                  ? 'bg-[#C25E3E] text-white'
                  : 'bg-[#F4F0EA] text-[#6E6A67] border border-[#E2DDD5]'
              }`}
            >
              {educationCount}
            </span>
          </button>

          {/* Organization */}
          <button
            onClick={() => handleFilterChange('organization')}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              filterType === 'organization'
                ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>{lang === 'ID' ? 'Organisasi' : 'Leadership'}</span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                filterType === 'organization'
                  ? 'bg-[#C25E3E] text-white'
                  : 'bg-[#F4F0EA] text-[#6E6A67] border border-[#E2DDD5]'
              }`}
            >
              {organizationCount}
            </span>
          </button>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E2DDD5] space-y-12">
          {displayedMilestones.map((record) => {
            const isExpanded = expandedId === record.id;
            const isWork = record.type === 'work';
            const isOrg = record.type === 'organization';

            return (
              <div key={record.id} className="relative group">
                {/* Timeline Dot Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-4 border-[#FDFBF7] shadow-sm transition-all duration-300 group-hover:scale-125 ${
                    isWork ? 'bg-[#C25E3E]' : isOrg ? 'bg-[#25D366]' : 'bg-[#1E1E1E]'
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
                              : isOrg
                              ? lang === 'ID'
                                ? 'Inisiatif & Kontribusi Organisasi'
                                : 'Key Initiatives & Contributions'
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
