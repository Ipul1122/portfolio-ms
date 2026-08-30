import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage, SECTION_SLUGS } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const {
    lang,
    setLang,
    t,
    activeSection,
    setActiveSection,
    navigateToSection,
    getUrlForSection,
  } = useLanguage();

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.experience'), id: 'experience' },
    { name: t('nav.gallery'), id: 'gallery' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  useEffect(() => {
    let scrollTimeout: number | null = null;

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['home', 'about', 'skills', 'experience', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            if (activeSection !== section) {
              setActiveSection(section);

              // Debounce URL replaceState to prevent excessive browser history writes on fast scrolling
              if (scrollTimeout) window.clearTimeout(scrollTimeout);
              scrollTimeout = window.setTimeout(() => {
                const targetSlug =
                  SECTION_SLUGS[lang][section] || SECTION_SLUGS[lang]['home'];
                const targetUrl = `/${lang.toLowerCase()}/${targetSlug}`;
                if (window.location.pathname !== targetUrl) {
                  window.history.replaceState({ section, lang }, '', targetUrl);
                }
              }, 120);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, [activeSection, lang, setActiveSection]);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToSection(sectionId, lang, true);
  };

  const whatsappNumber = '6285693672730';
  const whatsappMessage =
    lang === 'ID'
      ? 'Halo Syaiful, saya tertarik untuk berdiskusi tentang proyek web / kolaborasi...'
      : 'Hello Syaiful, I would like to discuss a web project / collaboration...';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#FDFBF7]/85 backdrop-blur-md border-b border-[#E2DDD5]/60 shadow-2xs'
            : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href={getUrlForSection('home')}
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10  p-1 flex items-center justify-center shadow-sm  group-hover:scale-105 group-hover:border-[#C25E3E] transition-all duration-300 overflow-hidden">
              <img
                src="/logo/logo-syaiful.png"
                alt="M. Syaiful Logo"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-sm tracking-wider text-[#1E1E1E] leading-tight">
                M. SYAIFUL
              </span>
              <span className="text-[10px] font-mono text-[#6E6A67] tracking-tight flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t('nav.available')}
              </span>
            </div>
          </a>

          {/* Floating Pill Navigation with Semantic URLs */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FDFBF7]/80 backdrop-blur-md border border-[#E2DDD5] shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const href = getUrlForSection(item.id);
              return (
                <a
                  key={item.id}
                  href={href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-[#FDFBF7] bg-[#1E1E1E] shadow-sm font-semibold'
                      : 'text-[#6E6A67] hover:text-[#1E1E1E] hover:bg-[#F4F0EA]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher (EN/ID) + Let's Talk */}
          <div className="hidden md:flex items-center gap-3">
            {/* Segmented Language Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-[#F4F0EA] border border-[#E2DDD5] text-xs font-mono shadow-2xs">
              <button
                onClick={() => setLang('EN')}
                className={`px-2.5 py-1 rounded-full font-bold transition-all duration-200 ${
                  lang === 'EN'
                    ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-xs'
                    : 'text-[#6E6A67] hover:text-[#1E1E1E]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('ID')}
                className={`px-2.5 py-1 rounded-full font-bold transition-all duration-200 ${
                  lang === 'ID'
                    ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-xs'
                    : 'text-[#6E6A67] hover:text-[#1E1E1E]'
                }`}
                aria-label="Switch to Indonesian"
              >
                ID
              </button>
            </div>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="terracotta"
              size="sm"
              magnetic={true}
              className="gap-1.5 shadow-2xs"
            >
              <span>{t('nav.letsTalk')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Right Controls: Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <div className="flex items-center p-0.5 rounded-full bg-[#F4F0EA] border border-[#E2DDD5] text-[11px] font-mono shadow-2xs">
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 rounded-full font-bold transition-all duration-200 ${
                  lang === 'EN'
                    ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-xs'
                    : 'text-[#6E6A67]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ID')}
                className={`px-2 py-0.5 rounded-full font-bold transition-all duration-200 ${
                  lang === 'ID'
                    ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-xs'
                    : 'text-[#6E6A67]'
                }`}
              >
                ID
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#F4F0EA] border border-[#E2DDD5] text-[#1E1E1E] hover:text-[#C25E3E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-5 max-w-xs mx-auto w-full">
          <div className="flex items-center justify-between border-b border-[#E2DDD5]/70 pb-3 mb-1">
            <div className="flex items-center gap-2 text-[#C25E3E] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('nav.menuTitle')}</span>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono text-[#6E6A67]">
              <Globe className="w-3.5 h-3.5 text-[#C25E3E]" />
              <span className="font-bold text-[#1E1E1E]">{lang}</span>
            </div>
          </div>

          {navItems.map((item, idx) => {
            const href = getUrlForSection(item.id);
            return (
              <a
                key={item.id}
                href={href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="font-serif text-2xl text-[#1E1E1E] hover:text-[#C25E3E] font-medium transition-colors flex items-center justify-between border-b border-[#E2DDD5]/70 pb-2.5"
              >
                <span>{item.name}</span>
                <span className="font-mono text-xs text-[#6E6A67]">0{idx + 1}</span>
              </a>
            );
          })}

          <div className="pt-4">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              variant="terracotta"
              size="lg"
              className="w-full"
            >
              <span>{t('nav.letsTalk')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
