import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState<string>('');
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

  const navSections = [
    { id: 'about',      label: t('navAbout')       },
    { id: 'experience', label: t('navExperience')  },
    { id: 'skills',     label: t('navSkills')      },
    { id: 'work',       label: t('navWork')        },
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
          rootMargin: '-10% 0px -70% 0px', // active when section enters top 30% of viewport
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [isHome, language]); // added language to trigger observer re-bind when language switches (since elements labels re-render)

  /* ── Close mobile menu on route change ───────────────────────── */
  useEffect(() => setIsMobileMenuOpen(false), [location]);

  /* ── Smooth-scroll helper ─────────────────────────────────────── */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
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
  const desktopNavLink = (id: string, label: string) => {
    if (isHome) {
      return (
        <a
          key={id}
          href={`#${id}`}
          className={linkClass(id)}
          onClick={e => { e.preventDefault(); scrollTo(id); }}
        >
          {label}
          <span className="nav-underline" />
        </a>
      );
    }
    return (
      <Link key={id} to={`/#${id}`} className={linkClass(id)}>
        {label}
        <span className="nav-underline" />
      </Link>
    );
  };

  /* ── Render mobile nav link ───────────────────────────────────── */
  const mobileNavLink = (id: string, label: string) => {
    if (isHome) {
      return (
        <a
          key={id}
          href={`#${id}`}
          className={mobileLinkClass(id)}
          onClick={e => { e.preventDefault(); scrollTo(id); }}
        >
          {label}
        </a>
      );
    }
    return (
      <Link key={id} to={`/#${id}`} className={mobileLinkClass(id)}>
        {label}
      </Link>
    );
  };

  /* ── Contact button class ─────────────────────────────────────── */
  const contactBtnClass =
    activeSection === 'contact'
      ? 'px-6 py-2.5 rounded font-medium transition duration-300 bg-white text-black border border-white nav-contact-active'
      : 'px-6 py-2.5 border border-white text-white rounded hover:bg-white hover:text-black transition duration-300 font-medium';

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
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition duration-300">
            <div className="bg-white text-black font-black text-lg px-3 py-1.5 rounded">MS</div>
          </Link>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center space-x-4 md:space-x-8">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navSections.map(({ id, label }) => desktopNavLink(id, label))}
            </div>

            {/* Language Selector (Visible on both desktop & mobile) */}
            <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[10px] select-none">
              <button
                onClick={() => setLanguage('id')}
                className={`px-2.5 py-1 rounded-full transition-all duration-300 font-bold cursor-pointer ${language === 'id' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-300 font-bold cursor-pointer ${language === 'en' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            {/* Desktop Contact CTA */}
            <div className="hidden md:block">
              {isHome ? (
                <a
                  href="#contact"
                  className={contactBtnClass}
                  onClick={e => { e.preventDefault(); scrollTo('contact'); }}
                >
                  {t('navContact')}
                </a>
              ) : (
                <Link to="/#contact" className={contactBtnClass}>
                  {t('navContact')}
                </Link>
              )}
            </div>

            {/* Hamburger */}
            <button
              id="menu-btn"
              className="md:hidden focus:outline-none text-white cursor-pointer"
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
            {navSections.map(({ id, label }) => mobileNavLink(id, label))}
          </div>

          <div className="pt-2 border-t border-white/5">
            {isHome ? (
              <a
                href="#contact"
                className={mobileLinkClass('contact')}
                onClick={e => { e.preventDefault(); scrollTo('contact'); }}
              >
                {t('navContact')}
              </a>
            ) : (
              <Link to="/#contact" className={mobileLinkClass('contact')}>
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
