import React, { useState, useEffect, useRef, useCallback } from 'react';
import { animate, scrambleText } from 'animejs';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Play,
  Pause,
  Layers,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  category: {
    ID: string;
    EN: string;
  };
  githubUrl: string;
  liveUrl?: string;
  desc: {
    ID: string;
    EN: string;
  };
  tags: string[];
}

export const Gallery: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);

  // Responsive dimensions state
  const [spacing, setSpacing] = useState<number>(280);
  const [cardWidth, setCardWidth] = useState<number>(380);

  // Refs
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);
  const hasEnteredRef = useRef<boolean>(false);
  const autoPlayTimerRef = useRef<number | null>(null);
  const dragStartXRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);

  const galleryPhotos: GalleryPhoto[] = [
    {
      id: 'presensi',
      title: 'Sistem Informasi Absensi & Presensi Karyawan',
      image: '/gallery/presensi.webp',
      githubUrl: 'https://github.com/Ipul1122/absensi-karyawan',
      category: {
        ID: 'HRIS & Geolokasi Presensi',
        EN: 'HRIS & Geolocation Presensi',
      },
      tags: ['Laravel 12', 'Sanctum', 'Geolocation API', 'MySQL', 'cPanel'],
      desc: {
        ID: 'Sistem presensi karyawan terintegrasi dengan validasi geolokasi radius, autentikasi multi-role RBAC, dan rekonsiliasi data kehadiran otomatis.',
        EN: 'Integrated employee attendance system with geolocation boundary validation, multi-role RBAC, and automated attendance recaps.',
      },
    },
    {
      id: 'pt-cakrawala',
      title: 'Company Profile & Enterprise Portal PT Cakrawala',
      image: '/gallery/pt-cakrawala-internasional.webp',
      githubUrl: 'https://github.com/Ipul1122/compro',
      category: {
        ID: 'Enterprise & Multi-Role Portal',
        EN: 'Enterprise & Multi-Role Portal',
      },
      tags: ['Laravel 12', 'Vue.js', 'Blade', 'REST API', 'Tailwind CSS'],
      desc: {
        ID: 'Portal korporat resmi PT Cakrawala Parama Internasional dengan antarmuka bilingual, manajemen konten dinamis, dan integrasi backend aman.',
        EN: 'Official corporate enterprise portal for PT Cakrawala Parama Internasional featuring dynamic multi-role CMS and bilingual workflows.',
      },
    },
    {
      id: 'tubel-lpdp',
      title: 'Tubel LPDP — Scholarship Progress System',
      image: '/gallery/tubel-lpdp.webp',
      githubUrl: 'https://github.com/Ipul1122/lpdp-app',
      category: {
        ID: 'Sistem Monitoring Tugas Belajar',
        EN: 'Scholarship Monitoring Portal',
      },
      tags: ['Laravel', 'MySQL', 'Admin Portal', 'Blade', 'Tailwind CSS'],
      desc: {
        ID: 'Sistem informasi pengelolaan beasiswa tugas belajar LPDP, monitoring progres akademik per semester, dan verifikasi dokumen terstruktur.',
        EN: 'Administrative workflow system managing LPDP scholarship awardees, academic milestone verification, and compliance monitoring.',
      },
    },
    {
      id: 'tpa-masjid',
      title: 'Platform Manajemen TPA Masjid Nurul Haq',
      image: '/gallery/tpa_masjid.webp',
      githubUrl: 'https://github.com/Ipul1122/management-presensi-',
      // liveUrl: 'https://tpanurhaq.com',
      category: {
        ID: 'Platform Edukasi & Presensi Santri',
        EN: 'Educational & Student Platform',
      },
      tags: ['Laravel 12', 'MySQL', 'Tailwind CSS', 'tpanurhaq.com', 'Blade'],
      desc: {
        ID: 'Platform web manajemen data santri, pencatatan absensi pengajar, dan monitoring riwayat hafalan Al-Qur’an terintegrasi (tpanurhaq.com).',
        EN: 'Centralized web portal for student academic records, teaching attendance ledgers, and Quran memorization progress at tpanurhaq.com.',
      },
    },
    {
      id: 'pellor-trans',
      title: 'Pellor Trans Travel — Fleet Booking Platform',
      image: '/gallery/pellor_trans_travel.webp',
      githubUrl: 'https://github.com/Ipul1122/pellortranstravel.io',
      category: {
        ID: 'Platform Booking & Transportasi',
        EN: 'Travel & Booking Platform',
      },
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Booking Engine'],
      desc: {
        ID: 'Portal reservasi armada transportasi dan pemesanan rute perjalanan online dengan kalkulasi tarif dinamis dan cetak tiket digital.',
        EN: 'Online travel ticket reservation and fleet logistics portal with automated dynamic route pricing algorithms.',
      },
    },
    {
      id: 'nyiroro-green',
      title: 'Nyi Roro Green — Ocean Pollution Analytics',
      image: '/gallery/nyirorogreen.webp',
      githubUrl: 'https://github.com/Ipul1122/Nyi_Roro_Green',
      category: {
        ID: 'Visualisasi Data & Riset Lingkungan',
        EN: 'Environmental Data Analytics',
      },
      tags: ['Laravel 12', 'Data Analytics', 'Blade', 'QA Testing', 'Charts'],
      desc: {
        ID: 'Modul web analitik dan visualisasi data interaktif untuk pemantauan polusi laut Pantai Selatan dengan prosedur Black Box QA Testing.',
        EN: 'Interactive public data visualization portal monitoring coastal marine pollution metrics, verified with Black Box Testing.',
      },
    },
    {
      id: 'launtec',
      title: 'Launtec Management System',
      image: '/gallery/launtec.webp',
      githubUrl: 'https://github.com/Ipul1122/launtec',
      category: {
        ID: 'Sistem Operasional SaaS',
        EN: 'SaaS Operations System',
      },
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API'],
      desc: {
        ID: 'Aplikasi manajemen operasional laundry modern dengan pelacakan status pesanan real-time, manajemen inventaris, dan cetak invoice digital.',
        EN: 'Structured operational management web application featuring real-time order tracking, point-of-sale logging, and digital invoicing.',
      },
    },
  ];

  const totalItems = galleryPhotos.length;

  // Responsive spacing and card dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setCardWidth(Math.min(270, Math.floor(width * 0.72)));
        setSpacing(Math.min(180, Math.floor(width * 0.48)));
      } else if (width < 1024) {
        // Tablet
        setCardWidth(360);
        setSpacing(240);
      } else {
        // Desktop
        setCardWidth(440);
        setSpacing(310);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Header scramble text animation
  const runHeaderScramble = useCallback(() => {
    if (badgeRef.current) {
      animate(badgeRef.current, {
        innerHTML: scrambleText({
          text: t('gallery.overline'),
          chars: 'uppercase',
          cursor: '_',
          duration: 1400,
        }),
      });
    }

    if (headingRef.current) {
      animate(headingRef.current, {
        innerHTML: scrambleText({
          text: t('gallery.title'),
          chars: 'a-zA-Z0-9 &',
          cursor: true,
          duration: 1800,
        }),
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        innerHTML: scrambleText({
          text: t('gallery.desc'),
          chars: 'a-zA-Z0-9 ',
          cursor: false,
          duration: 1600,
        }),
      });
    }
  }, [t]);

  // Entrance scroll animation
  const triggerEntranceAnimation = useCallback(() => {
    if (hasEnteredRef.current) return;
    hasEnteredRef.current = true;

    const cards = document.querySelectorAll('.curved-flow-card');
    cards.forEach((card, idx) => {
      animate(card, {
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.8, 1],
        delay: idx * 80,
        duration: 750,
        easing: 'easeOutCubic',
      });
    });
  }, []);

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimatedRef.current) {
              runHeaderScramble();
              hasAnimatedRef.current = true;
            }
            triggerEntranceAnimation();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [runHeaderScramble, triggerEntranceAnimation]);

  useEffect(() => {
    if (hasAnimatedRef.current) {
      runHeaderScramble();
    }
  }, [lang, runHeaderScramble]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay || isDragging || selectedPhoto) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      return;
    }

    autoPlayTimerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4200);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlay, isDragging, selectedPhoto, totalItems]);

  // Next / Prev handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Drag & Swipe gesture handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartXRef.current = clientX;
    dragDistanceRef.current = 0;
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.abs(deltaX);
    setDragOffset(deltaX / spacing);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 0.25) {
      const step = dragOffset > 0 ? -1 : 1;
      setCurrentIndex((prev) => (prev + step + totalItems) % totalItems);
    }
    setDragOffset(0);
  };

  // Clicking ANY card directly opens the modal
  const handleCardClick = (photo: GalleryPhoto, index: number) => {
    if (dragDistanceRef.current > 8) return;
    setCurrentIndex(index);
    setSelectedPhoto(photo);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        return;
      }

      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        const currIdx = galleryPhotos.findIndex((p) => p.id === selectedPhoto.id);
        const nextIdx = (currIdx + 1) % totalItems;
        setSelectedPhoto(galleryPhotos[nextIdx]);
        setCurrentIndex(nextIdx);
      } else if (e.key === 'ArrowLeft') {
        const currIdx = galleryPhotos.findIndex((p) => p.id === selectedPhoto.id);
        const prevIdx = (currIdx - 1 + totalItems) % totalItems;
        setSelectedPhoto(galleryPhotos[prevIdx]);
        setCurrentIndex(prevIdx);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, totalItems]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-20 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-12 bg-[#FDFBF7] border-t border-[#E2DDD5] overflow-hidden select-none scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            {/* Overline Badge */}
            <div
              className="flex items-center gap-2 mb-3 cursor-pointer group w-fit"
              onClick={runHeaderScramble}
              title="Click to replay scramble"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C25E3E] group-hover:scale-125 transition-transform" />
              <span
                ref={badgeRef}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#78716C] font-semibold group-hover:text-[#C25E3E] transition-colors"
              >
                {t('gallery.overline')}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              onClick={runHeaderScramble}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-[1.15] tracking-tight cursor-pointer"
            >
              {t('gallery.title')}
            </h2>
          </div>

          {/* Description */}
          <div className="mt-4 md:mt-0 max-w-sm">
            <p
              ref={descRef}
              className="text-xs sm:text-sm text-[#78716C] font-mono leading-relaxed"
            >
              {t('gallery.desc')}
            </p>
          </div>
        </div>

        {/* 3D Curved Flow Carousel Arena */}
        <div
          className="relative w-full flex flex-col items-center justify-center touch-pan-y"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => {
            if (!isDragging) setIsAutoPlay(true);
          }}
        >
          {/* Curved Stage Area */}
          <div
            className="relative w-full h-[300px] sm:h-[380px] lg:h-[430px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
            style={{
              perspective: '1200px',
              perspectiveOrigin: '50% 50%',
            }}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseMove={(e) => handleDragMove(e.clientX)}
            onMouseUp={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
            onTouchEnd={handleDragEnd}
          >
            {/* Render Each Card in Separate Curved Position */}
            {galleryPhotos.map((photo, index) => {
              // Calculate circular offset relative to active index
              let rawOffset = index - currentIndex;
              if (rawOffset > totalItems / 2) rawOffset -= totalItems;
              if (rawOffset < -totalItems / 2) rawOffset += totalItems;

              // Include real-time drag offset
              const offset = rawOffset + dragOffset;
              const absOffset = Math.abs(offset);

              // Don't render cards that are too far away
              if (absOffset > 2.6) {
                return null;
              }

              // Calculate curved 3D transform metrics
              const translateX = offset * spacing;
              const translateZ = -absOffset * 95;
              const rotateY = -Math.sign(offset) * Math.min(30, absOffset * 24);
              const scale = Math.max(0.72, 1 - absOffset * 0.14);
              const opacity = Math.max(0, 1 - absOffset * 0.32);
              const zIndex = Math.round(50 - absOffset * 10);
              const isCenter = absOffset < 0.35;

              return (
                <div
                  key={photo.id}
                  onClick={() => handleCardClick(photo, index)}
                  className="curved-flow-card absolute top-1/2 left-1/2 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group transition-all"
                  style={{
                    width: `${cardWidth}px`,
                    aspectRatio: '16/11',
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: isDragging
                      ? 'none'
                      : 'transform 0.55s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.55s ease',
                    border: isCenter
                      ? '2px solid #C25E3E'
                      : '1px solid rgba(226, 221, 213, 0.8)',
                    boxShadow: isCenter
                      ? '0 20px 45px -10px rgba(194, 94, 62, 0.45), 0 10px 25px rgba(0,0,0,0.2)'
                      : '0 12px 28px -6px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Pure Image Container */}
                  <div className="relative w-full h-full bg-[#1E1E1E] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 filter grayscale-[5%] group-hover:grayscale-0"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 ${
                        isCenter ? 'opacity-40 group-hover:opacity-75' : 'opacity-65'
                      }`}
                    />

                    {/* Expand Badge Overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="px-4 py-2 rounded-full bg-[#1E1E1E]/90 text-[#FDFBF7] backdrop-blur-md border border-white/25 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-xs font-mono">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C25E3E]" />
                        <span>{lang === 'ID' ? 'Buka Detail' : 'View Project'}</span>
                      </div>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-3.5 transform transition-all duration-300 ${
                        isCenter
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-1 opacity-70 group-hover:opacity-100'
                      }`}
                    >
                      <p className="text-white text-xs sm:text-sm font-sans font-semibold tracking-wide truncate drop-shadow-md">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Curved Carousel Controls & Status Bar */}
          <div className="mt-6 sm:mt-10 pt-4 border-t border-[#E2DDD5]/70 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-3xl px-2 z-20">
            {/* Left / Right Nav Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 sm:p-3 rounded-full bg-[#F4F0EA] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] border border-[#E2DDD5] hover:border-[#1E1E1E] shadow-sm hover:shadow-warm-md transition-all duration-200 cursor-pointer active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 sm:p-3 rounded-full bg-[#F4F0EA] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] border border-[#E2DDD5] hover:border-[#1E1E1E] shadow-sm hover:shadow-warm-md transition-all duration-200 cursor-pointer active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-2.5 sm:p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                  isAutoPlay
                    ? 'bg-[#1E1E1E] text-[#FDFBF7] border-[#1E1E1E]'
                    : 'bg-[#F4F0EA] text-[#78716C] border-[#E2DDD5] hover:text-[#1E1E1E]'
                }`}
                title={isAutoPlay ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
                aria-label="Toggle auto rotation"
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

            {/* Pagination Indicator Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[220px] justify-center">
              {galleryPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i
                      ? 'w-6 bg-[#C25E3E]'
                      : 'w-2 bg-[#E2DDD5] hover:bg-[#A8A29E]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Active Image Indicator */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#78716C]">
              <Layers className="w-3.5 h-3.5 text-[#C25E3E]" />
              <span>
                {currentIndex + 1} / {totalItems} • {lang === 'ID' ? 'Klik untuk pratinjau' : 'Click to preview'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Repository Links & Details */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#1C1A18] rounded-2xl sm:rounded-3xl border border-[#3E3A36] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 sm:px-7 py-4 bg-[#262320] border-b border-[#3E3A36] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full bg-[#C25E3E]/20 text-[#C25E3E] border border-[#C25E3E]/30 text-[11px] font-mono font-semibold flex-shrink-0">
                  {selectedPhoto.category[lang]}
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#A8A29E] truncate">
                  {selectedPhoto.title}
                </span>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 sm:p-2 rounded-full bg-[#36322E] hover:bg-[#C25E3E] text-[#FDFBF7] transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Scrollable */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-6">
              {/* Image Showcase */}
              <div className="relative rounded-2xl overflow-hidden bg-[#121212] border border-[#3E3A36] flex items-center justify-center max-h-[50vh] shadow-inner">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[50vh] object-contain"
                />
              </div>

              {/* Title & Action Links */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#FDFBF7]">
                      {selectedPhoto.title}
                    </h3>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* GitHub Button */}
                    <a
                      href={selectedPhoto.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C2825] hover:bg-[#1E1E1E] text-[#FDFBF7] hover:text-[#C25E3E] border border-[#48423C] hover:border-[#C25E3E] text-xs font-mono font-semibold transition-all duration-200 shadow-sm"
                    >
                      <Code2 className="w-4 h-4 text-[#C25E3E]" />
                      <span>{lang === 'ID' ? 'Repository GitHub' : 'GitHub Repository'}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>

                    {/* Optional Live Demo */}
                    {selectedPhoto.liveUrl && (
                      <a
                        href={selectedPhoto.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C25E3E] hover:bg-[#A94C2F] text-[#FDFBF7] text-xs font-mono font-semibold transition-all duration-200 shadow-md"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{lang === 'ID' ? 'Kunjungi Website' : 'Live Website'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#D5D0C7] font-sans leading-relaxed">
                  {selectedPhoto.desc[lang]}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#262320] text-[#D5D0C7] border border-[#3E3A36]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Carousel Navigation */}
            <div className="px-5 sm:px-7 py-3.5 bg-[#262320] border-t border-[#3E3A36] flex items-center justify-between text-xs font-mono text-[#A8A29E]">
              <div className="flex items-center gap-1.5">
                <span className="hidden sm:inline">Navigate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-[#36322E] text-[10px] text-[#FDFBF7]">←</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-[#36322E] text-[10px] text-[#FDFBF7]">→</kbd>
                <span className="hidden sm:inline">or</span>
                <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-[#36322E] text-[10px] text-[#FDFBF7]">ESC</kbd>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const currIdx = galleryPhotos.findIndex((p) => p.id === selectedPhoto.id);
                    const prevIdx = (currIdx - 1 + totalItems) % totalItems;
                    setSelectedPhoto(galleryPhotos[prevIdx]);
                    setCurrentIndex(prevIdx);
                  }}
                  className="p-2 rounded-lg bg-[#36322E] hover:bg-[#C25E3E] text-[#FDFBF7] transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const currIdx = galleryPhotos.findIndex((p) => p.id === selectedPhoto.id);
                    const nextIdx = (currIdx + 1) % totalItems;
                    setSelectedPhoto(galleryPhotos[nextIdx]);
                    setCurrentIndex(nextIdx);
                  }}
                  className="p-2 rounded-lg bg-[#36322E] hover:bg-[#C25E3E] text-[#FDFBF7] transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
