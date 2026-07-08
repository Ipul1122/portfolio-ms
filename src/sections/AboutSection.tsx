import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id={language === 'id' ? 'tentang-saya' : 'about-me'} className="py-20 border-t" style={{ background: '#0e0e13', borderColor: 'rgba(163, 166, 255, 0.04)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-hidden fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">{t('aboutHeading')}</h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>{t('aboutSubheading')}</p>
        </div>

        {/* 2×2 Grid */}
        <div className="about-grid max-w-6xl mx-auto mb-16">

          {/* Row 1, Col 1 — Intro */}
          <div className="about-grid__cell animate-hidden fade-up">
            <div className="about-grid__cell-inner">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-6 leading-snug" style={{ color: '#f9f5fd' }}>
                {t('aboutIntroTitle')} <span className="block sm:inline" style={{ color: '#a3a6ff' }}>{t('aboutIntroName')}</span>
              </h3>
              <p className="text-base sm:text-lg mb-6 leading-relaxed font-light" style={{ color: 'rgba(249, 245, 253, 0.5)' }}>
                {language === 'en' ? (
                  <>
                    I am a dedicated web developer focused on creating innovative and efficient digital solutions.
                    I was the <strong style={{ color: '#a3a6ff', fontWeight: 700 }}>Best Graduate</strong> of the Akademi Teknik Informatika Tunas Bangsa with an Associate Degree in Computer Science (A.md.Kom.).
                  </>
                ) : (
                  <>
                    Saya adalah seorang pengembang web yang berdedikasi dalam menciptakan solusi digital yang inovatif dan efisien.
                    Saya merupakan <strong style={{ color: '#a3a6ff', fontWeight: 700 }}>Lulusan Terbaik</strong> pada kampus Akademi Teknik Informatika Tunas Bangsa dengan gelar A.md.Kom.
                  </>
                )}
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 rounded-full font-bold transition-all duration-300"
                  style={{
                    border: '1px solid rgba(163, 166, 255, 0.3)',
                    color: '#a3a6ff',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.background = 'rgba(163, 166, 255, 0.1)';
                    (e.target as HTMLElement).style.borderColor = 'rgba(163, 166, 255, 0.5)';
                    (e.target as HTMLElement).style.boxShadow = '0 0 16px rgba(163, 166, 255, 0.12)';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.background = 'transparent';
                    (e.target as HTMLElement).style.borderColor = 'rgba(163, 166, 255, 0.3)';
                    (e.target as HTMLElement).style.boxShadow = 'none';
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
                      window.scrollTo({ top, behavior: 'smooth' });
                      window.history.pushState(null, '', '#contact');
                    }
                  }}
                >
                  {t('aboutBtnContact')}
                </a>
              </div>
            </div>
          </div>

          {/* Row 1, Col 2 — Photo */}
          <div className="about-grid__cell animate-hidden fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="about-grid__cell-inner flex items-center justify-center">
              <div className="relative w-full max-w-[280px] group">
                <a href="/image/foto_kelulusan.jpg" target="_blank" rel="noreferrer" className="block w-full">
                  <img
                    src="/image/foto_kelulusan.jpg"
                    alt="Foto Muhammad Syaifulloh"
                    className="relative w-full h-auto rounded-2xl transition duration-500 shadow-xl"
                    style={{
                      aspectRatio: '4/5',
                      objectFit: 'cover',
                      border: '1px solid rgba(163, 166, 255, 0.1)',
                    }}
                  />
                </a>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-xl -z-10 group-hover:opacity-80 transition duration-500" style={{ background: 'rgba(163, 166, 255, 0.05)', border: '1px solid rgba(163, 166, 255, 0.05)' }} />
                <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 rounded-xl -z-10 group-hover:opacity-80 transition duration-500" style={{ background: 'rgba(163, 166, 255, 0.05)', border: '1px solid rgba(163, 166, 255, 0.05)' }} />
              </div>
            </div>
          </div>

          {/* Row 2, Col 1 — Vision */}
          <div className="about-grid__cell animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="about-grid__cell-inner">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(163, 166, 255, 0.08)', border: '1px solid rgba(163, 166, 255, 0.1)' }}>
                <i className="fas fa-rocket text-xl" style={{ color: '#a3a6ff' }} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4" style={{ color: '#f9f5fd' }}>{t('aboutVisionTitle')}</h3>
              <p className="text-base sm:text-lg leading-relaxed font-light" style={{ color: 'rgba(249, 245, 253, 0.5)' }}>
                {t('aboutVisionDesc')}
              </p>
            </div>
          </div>

          {/* Row 2, Col 2 — Stats */}
          <div className="about-grid__cell animate-hidden fade-up" style={{ transitionDelay: '300ms' }}>
            <div className="about-grid__cell-inner">
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-6" style={{ color: '#f9f5fd' }}>{t('aboutAchievementsTitle')}</h3>
              <div className="space-y-6">
                {[
                  { icon: 'fas fa-trophy', val: t('aboutExpVal'), label: t('aboutExpLabel') },
                  { icon: 'fas fa-project-diagram', val: t('aboutProjVal'), label: t('aboutProjLabel') },
                  { icon: 'fas fa-users', val: t('aboutClientVal'), label: t('aboutClientLabel') },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(163, 166, 255, 0.08)', border: '1px solid rgba(163, 166, 255, 0.1)' }}>
                      <i className={stat.icon} style={{ color: '#a3a6ff' }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold" style={{ color: '#f9f5fd' }}>{stat.val}</p>
                      <p className="text-sm font-light" style={{ color: 'rgba(249, 245, 253, 0.4)' }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
