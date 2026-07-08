import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState<string>('');
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const isHome = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  const navSections = [
    { 
      id: language === 'id' ? 'tentang-saya' : 'about-me', 
      path: language === 'id' ? 'tentang-saya' : 'about-me', 
      label: t('navAbout') 
    },
    { 
      id: 'experience', 
      path: language === 'id' ? 'pengalaman' : 'experience', 
      label: t('navExperience')  
    },
    { 
      id: 'skills',     
      path: 'skills',     
      label: t('navSkills')      
    },
    { 
      id: 'work',       
      path: language === 'id' ? 'portofolio' : 'work',       
      label: t('navWork')        
    },
  ];

  /* ── Scroll → blur navbar ─────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Active-section detection via IntersectionObserver ────────── */
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = [...navSections.map(s => s.id), 'contact'];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          rootMargin: '-10% 0px -70% 0px',
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [isHome, language]);

  /* ── Close mobile menu on route change ───────────────────────── */
  useEffect(() => setIsMobileMenuOpen(false), [location]);

  /* ── Smooth-scroll helper ─────────────────────────────────────── */
  const scrollTo = (id: string, path: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `/${language}/${path}`);
    }
    setIsMobileMenuOpen(false);
  };

  /* ── Link class helper ────────────────────────────────────────── */
  const linkClass = (id: string) =>
    `relative transition-all duration-300 font-medium group ${
      activeSection === id
        ? 'nav-link-active'
        : 'text-gray-400 hover:text-white'
    }`;

  const mobileLinkClass = (id: string) =>
    `block py-2 transition-all duration-300 font-medium ${
      activeSection === id
        ? 'text-white nav-link-active-mobile'
        : 'text-gray-400 hover:text-white'
    }`;

  /* ── Render desktop nav link ──────────────────────────────────── */
  const desktopNavLink = (id: string, path: string, label: string) => {
    const sectionId = id;
    if (isHome) {
      return (
        <a
          key={sectionId}
          href={`/${language}/${path}`}
          className={linkClass(sectionId)}
          onClick={e => { e.preventDefault(); scrollTo(sectionId, path); }}
        >
          {label}
          <span className="nav-underline" />
        </a>
      );
    }
    return (
      <Link key={sectionId} to={`/${language}/${path}`} className={linkClass(sectionId)}>
        {label}
        <span className="nav-underline" />
      </Link>
    );
  };

  /* ── Render mobile nav link ───────────────────────────────────── */
  const mobileNavLink = (id: string, path: string, label: string) => {
    const sectionId = id;
    if (isHome) {
      return (
        <a
          key={sectionId}
          href={`/${language}/${path}`}
          className={mobileLinkClass(sectionId)}
          onClick={e => { e.preventDefault(); scrollTo(sectionId, path); }}
        >
          {label}
        </a>
      );
    }
    return (
      <Link key={sectionId} to={`/${language}/${path}`} className={mobileLinkClass(sectionId)}>
        {label}
      </Link>
    );
  };

  /* ── Contact button ──────────────────────────────────────────── */
  const isContactActive = activeSection === 'contact';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur' : 'bg-transparent'
      }`}
      id="header"
    >
      <nav className="container-fluid py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={`/${language}`} className="flex items-center space-x-2 hover:opacity-80 transition duration-300">
            <img src="/image/logo-ms.png" alt="Logo MS" className="h-10 w-auto object-contain transition-all duration-300 hover:scale-105" style={{ filter: 'drop-shadow(0 0 6px rgba(163, 166, 255, 0.3))' }} />
          </Link>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navSections.map(({ id, path, label }) => desktopNavLink(id, path, label))}
            </div>

            {/* Language Selector */}
            <div
              className="inline-flex items-center rounded-full p-0.5 text-[10px] select-none"
              style={{ background: 'rgba(25, 25, 31, 0.6)', border: '1px solid rgba(163, 166, 255, 0.08)' }}
            >
              <button
                onClick={() => setLanguage('id')}
                className="px-2.5 py-1 rounded-full transition-all duration-300 font-bold cursor-pointer"
                style={language === 'id'
                  ? { background: '#a3a6ff', color: '#0e0e13', boxShadow: '0 0 8px rgba(163, 166, 255, 0.3)' }
                  : { color: 'rgba(249, 245, 253, 0.4)' }
                }
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className="px-2.5 py-1 rounded-full transition-all duration-300 font-bold cursor-pointer"
                style={language === 'en'
                  ? { background: '#a3a6ff', color: '#0e0e13', boxShadow: '0 0 8px rgba(163, 166, 255, 0.3)' }
                  : { color: 'rgba(249, 245, 253, 0.4)' }
                }
              >
                EN
              </button>
            </div>

            {/* Desktop Contact CTA */}
            <div className="hidden md:block">
              {isHome ? (
                <a
                  href={`/${language}/${language === 'id' ? 'kontak' : 'contact'}`}
                  className="px-6 py-2.5 rounded-full font-medium transition duration-300"
                  style={isContactActive
                    ? { background: '#6366f1', color: '#f9f5fd', border: '1px solid #6366f1', boxShadow: '0 0 16px rgba(99, 102, 241, 0.3)' }
                    : { border: '1px solid rgba(163, 166, 255, 0.2)', color: '#a3a6ff' }
                  }
                  onMouseEnter={e => {
                    if (!isContactActive) {
                      (e.target as HTMLElement).style.background = 'rgba(163, 166, 255, 0.08)';
                      (e.target as HTMLElement).style.borderColor = 'rgba(163, 166, 255, 0.4)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isContactActive) {
                      (e.target as HTMLElement).style.background = 'transparent';
                      (e.target as HTMLElement).style.borderColor = 'rgba(163, 166, 255, 0.2)';
                    }
                  }}
                  onClick={e => { 
                    e.preventDefault(); 
                    scrollTo('contact', language === 'id' ? 'kontak' : 'contact'); 
                  }}
                >
                  {t('navContact')}
                </a>
              ) : (
                <Link
                  to={`/${language}/${language === 'id' ? 'kontak' : 'contact'}`}
                  className="px-6 py-2.5 rounded-full font-medium transition duration-300"
                  style={{ border: '1px solid rgba(163, 166, 255, 0.2)', color: '#a3a6ff' }}
                >
                  {t('navContact')}
                </Link>
              )}
            </div>

            {/* Hamburger */}
            <button
              id="menu-btn"
              className="md:hidden focus:outline-none cursor-pointer"
              style={{ color: '#f9f5fd' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden nav-blur transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="menu-mobile"
      >
        <div className="container-fluid py-4 space-y-4">
          <div className="space-y-2">
            {navSections.map(({ id, path, label }) => mobileNavLink(id, path, label))}
          </div>

          <div className="pt-2" style={{ borderTop: '1px solid rgba(163, 166, 255, 0.06)' }}>
            {isHome ? (
              <a
                href={`/${language}/${language === 'id' ? 'kontak' : 'contact'}`}
                className={mobileLinkClass('contact')}
                onClick={e => { 
                  e.preventDefault(); 
                  scrollTo('contact', language === 'id' ? 'kontak' : 'contact'); 
                }}
              >
                {t('navContact')}
              </a>
            ) : (
              <Link 
                to={`/${language}/${language === 'id' ? 'kontak' : 'contact'}`} 
                className={mobileLinkClass('contact')}
              >
                {t('navContact')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
