import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.skills'), href: '#skill', id: 'skill' },
    { name: t('nav.experience'), href: '#experience', id: 'experience' },
    { name: t('nav.gallery'), href: '#gallery', id: 'gallery' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['home', 'about', 'skill', 'experience', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#FDFBF7]/85 backdrop-blur-md border-b border-[#E2DDD5]/60 shadow-2xs' : 'py-5 sm:py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-[#1E1E1E] text-[#FDFBF7] flex items-center justify-center font-serif font-bold text-base shadow-sm group-hover:bg-[#C25E3E] group-hover:scale-105 transition-all duration-300">
              MS
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

          {/* Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FDFBF7]/80 backdrop-blur-md border border-[#E2DDD5] shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
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
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
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

          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="font-serif text-2xl text-[#1E1E1E] hover:text-[#C25E3E] font-medium transition-colors flex items-center justify-between border-b border-[#E2DDD5]/70 pb-2.5"
            >
              <span>{item.name}</span>
              <span className="font-mono text-xs text-[#6E6A67]">0{idx + 1}</span>
            </a>
          ))}

          <div className="pt-4">
            <Button
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
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
