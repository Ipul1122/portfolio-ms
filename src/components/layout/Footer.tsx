import React, { useState, useEffect } from 'react';
import {
  ArrowUp,
  Mail,
  MessageSquare,
  Sparkles,
  MapPin,
  ExternalLink,
  Code2,
} from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t, getUrlForSection, navigateToSection } = useLanguage();
  const [currentTime, setCurrentTime] = useState<string>('');

  const emailAddress = 'msyaifulloh2024@gmail.com';
  const whatsappNumber = '6285693672730';
  const githubUrl = 'https://github.com/Ipul1122';
  const linkedinUrl = 'https://www.linkedin.com/in/muhammad-syaifulloh-99a233305/';

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    navigateToSection('home', lang, true);
  };

  const navLinks = [
    { id: 'home', label: lang === 'ID' ? 'Beranda' : 'Home' },
    { id: 'about', label: lang === 'ID' ? 'Tentang' : 'About' },
    { id: 'skills', label: lang === 'ID' ? 'Keahlian' : 'Skills' },
    { id: 'experience', label: lang === 'ID' ? 'Pengalaman' : 'Experience' },
    { id: 'gallery', label: lang === 'ID' ? 'Galeri' : 'Gallery' },
    { id: 'contact', label: lang === 'ID' ? 'Kontak' : 'Contact' },
  ];

  return (
    <footer className="relative bg-[#F4F0EA] border-t border-[#E2DDD5] pt-16 pb-12 px-5 sm:px-8 lg:px-12 z-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid: Brand, Nav & Connect */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#E2DDD5]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1E1E1E] p-1 flex items-center justify-center shadow-sm border border-[#E2DDD5] overflow-hidden">
                <img
                  src="/logo/logo-syaiful.png"
                  alt="M. Syaiful Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-sans font-bold text-xl text-[#1E1E1E] tracking-tight">
                M. Syaiful
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6E6A67] leading-relaxed max-w-sm">
              {lang === 'ID'
                ? 'Full Stack Web Developer berbasis Laravel & React. Berfokus pada perancangan arsitektur sistem informasi yang aman, efisien, dan scalable.'
                : 'Full Stack Web Developer specializing in Laravel & React ecosystems. Focused on delivering secure, scalable, and high-performance management systems.'}
            </p>

            {/* Location & Availability Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] border border-[#E2DDD5] text-[11px] font-mono text-[#6E6A67]">
                <MapPin className="w-3 h-3 text-[#C25E3E]" />
                <span>Jakarta, Indonesia</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] border border-[#E2DDD5] text-[11px] font-mono text-[#1E1E1E] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{lang === 'ID' ? 'Tersedia untuk Proyek' : 'Available for Work'}</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#1E1E1E] font-bold">
              {lang === 'ID' ? 'Navigasi Cepat' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-mono text-[#6E6A67]">
              {navLinks.map((link) => {
                const href = getUrlForSection(link.id);
                return (
                  <li key={link.id}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(link.id, lang, true);
                      }}
                      className="hover:text-[#C25E3E] hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Channels & Live Clock (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#1E1E1E] font-bold">
              {lang === 'ID' ? 'Saluran Komunikasi' : 'Connect & Channels'}
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDFBF7] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] border border-[#E2DDD5] hover:border-[#1E1E1E] text-xs font-mono transition-all duration-200"
              >
                <Code2 className="w-3.5 h-3.5 text-[#C25E3E]" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDFBF7] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] border border-[#E2DDD5] hover:border-[#1E1E1E] text-xs font-mono transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C25E3E]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDFBF7] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] border border-[#E2DDD5] hover:border-[#1E1E1E] text-xs font-mono transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDFBF7] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] border border-[#E2DDD5] hover:border-[#1E1E1E] text-xs font-mono transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#C25E3E]" />
                <span>Email</span>
              </a>
            </div>

            {/* Live Jakarta Time Card */}
            <div className="p-3.5 px-4 rounded-2xl bg-[#FDFBF7] border border-[#E2DDD5] text-xs font-mono flex items-center justify-between">
              <div>
                <div className="text-[#78716C] text-[10px] uppercase tracking-wider mb-0.5">
                  Jakarta Time (WIB)
                </div>
                <div className="text-[#1E1E1E] font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{currentTime || '07:00:00 AM (GMT+7)'}</span>
                </div>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="gap-1.5 bg-[#F4F0EA] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#FDFBF7] text-xs font-mono border-[#E2DDD5] cursor-pointer"
                title={lang === 'ID' ? 'Kembali ke Atas' : 'Back to Top'}
              >
                <span className="hidden sm:inline">{lang === 'ID' ? 'Ke Atas' : 'Top'}</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#C25E3E]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716C]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>
              © {new Date().getFullYear()} M. Syaiful. {t('footer.rights')}
            </span>
          </div>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
