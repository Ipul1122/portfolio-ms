import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  const cvPath = language === 'en'
    ? '/image/CV_MUHAMMAD_SYAIFULLOH_ENGLISH_.pdf'
    : '/image/CV_MUHAMMAD_SYAIFULLOH_INDO_.pdf';

  const cvFileName = language === 'en'
    ? 'CV_MUHAMMAD_SYAIFULLOH_ENGLISH_.pdf'
    : 'CV_MUHAMMAD_SYAIFULLOH_INDO_.pdf';

  // Interactive mouse follow gradient overlay
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden"
      style={{ background: '#0e0e13' }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Interactive Radial Spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(99, 102, 241, 0.12), transparent 80%)',
          }}
        />

        {/* Ambient Glows */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full blur-[120px]"
          style={{ background: 'rgba(99, 102, 241, 0.08)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full blur-[140px]"
          style={{ background: 'rgba(163, 166, 255, 0.04)' }}
        />

        {/* Clean Line Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(163, 166, 255, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(163, 166, 255, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
            opacity: 0.9,
          }}
        />
      </div>

      {/* Top gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0e0e13]/80 to-transparent pointer-events-none z-[2]" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border backdrop-blur-md mb-8 animate-hidden from-left"
            style={{
              background: 'rgba(25, 25, 31, 0.4)',
              borderColor: 'rgba(163, 166, 255, 0.15)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
            }}
          >
            <i className="fas fa-code text-sm" style={{ color: '#a3a6ff' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#a3a6ff', fontFamily: 'Inter' }}>
              {t('heroBadge')}
            </span>
          </div>

          {/* Giant Typography */}
          <div className="my-6 animate-hidden fade-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold font-heading leading-[1.05] tracking-tighter" style={{ color: '#f9f5fd' }}>
              {t('heroGreeting')}
              <br />
              <span className="gradient-text-animated block mt-2">Muhammad Syaifulloh</span>
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center text-center max-w-2xl z-20 animate-hidden fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-sans font-light" style={{ color: 'rgba(249, 245, 253, 0.55)' }}>
              {t('heroDesc')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-10">
              <a
                href="#work"
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 group"
                style={{
                  background: '#6366f1',
                  color: '#f9f5fd',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.5)';
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('heroBtnView')}
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={cvPath}
                download={cvFileName}
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 backdrop-blur-sm"
                style={{
                  background: 'rgba(25, 25, 31, 0.3)',
                  color: '#f9f5fd',
                  border: '1px solid rgba(163, 166, 255, 0.2)',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(163, 166, 255, 0.5)';
                  (e.target as HTMLElement).style.background = 'rgba(163, 166, 255, 0.08)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(163, 166, 255, 0.2)';
                  (e.target as HTMLElement).style.background = 'rgba(25, 25, 31, 0.3)';
                }}
              >
                <i className="fas fa-download mr-2" />
                {t('heroBtnDownload')}
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center items-center gap-5">
              {[
                { href: 'https://www.instagram.com/pul_ipul_pul?igsh=MWJ5eXV3eTVsN2N3dA==', icon: 'fa-brands fa-instagram', label: 'Instagram' },
                { href: 'https://www.linkedin.com/in/muhammad-syaifulloh-99a233305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' },
                { href: 'https://github.com/Ipul1122/', icon: 'fa-brands fa-github', label: 'GitHub' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-300"
                  style={{
                    background: 'rgba(25, 25, 31, 0.3)',
                    border: '1px solid rgba(163, 166, 255, 0.1)',
                    color: 'rgba(249, 245, 253, 0.45)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.color = '#a3a6ff';
                    el.style.borderColor = 'rgba(163, 166, 255, 0.4)';
                    el.style.boxShadow = '0 0 20px rgba(163, 166, 255, 0.15)';
                    el.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.color = 'rgba(249, 245, 253, 0.45)';
                    el.style.borderColor = 'rgba(163, 166, 255, 0.1)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`${s.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
