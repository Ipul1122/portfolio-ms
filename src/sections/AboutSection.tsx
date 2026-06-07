import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-hidden fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-white">{t('aboutHeading')}</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">{t('aboutSubheading')}</p>
        </div>

        {/* 2×2 Grid with visible grid lines */}
        <div className="about-grid max-w-6xl mx-auto mb-16">

          {/* Row 1, Col 1 — Intro text */}
          <div className="about-grid__cell animate-hidden fade-up">
            <div className="about-grid__cell-inner">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-6 text-white leading-snug">
                {t('aboutIntroTitle')} <span className="block sm:inline">{t('aboutIntroName')}</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed font-light">
                {language === 'en' ? (
                  <>
                    I am a dedicated web developer focused on creating innovative and efficient digital solutions.
                    I was the <strong className="text-white font-bold">Best Graduate</strong> of the Akademi Teknik Informatika Tunas Bangsa with an Associate Degree in Computer Science (A.md.Kom.).
                  </>
                ) : (
                  <>
                    Saya adalah seorang pengembang web yang berdedikasi dalam menciptakan solusi digital yang inovatif dan efisien.
                    Saya merupakan <strong className="text-white font-bold">Lulusan Terbaik</strong> pada kampus Akademi Teknik Informatika Tunas Bangsa dengan gelar A.md.Kom.
                  </>
                )}
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition-all duration-300 font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
                    className="relative w-full h-auto rounded border border-white/10 group-hover:border-white/30 transition duration-500 shadow-xl"
                    style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                  />
                </a>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded border border-white/5 -z-10 group-hover:bg-white/10 transition duration-500"></div>
                <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded border border-white/5 -z-10 group-hover:bg-white/10 transition duration-500"></div>
              </div>
            </div>
          </div>

          {/* Row 2, Col 1 — Mission text */}
          <div className="about-grid__cell animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="about-grid__cell-inner">
              <div className="w-14 h-14 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-white">{t('aboutVisionTitle')}</h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
                {t('aboutVisionDesc')}
              </p>
            </div>
          </div>

          {/* Row 2, Col 2 — Stats */}
          <div className="about-grid__cell animate-hidden fade-up" style={{ transitionDelay: '300ms' }}>
            <div className="about-grid__cell-inner">
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-6 text-white">{t('aboutAchievementsTitle')}</h3>
              <div className="space-y-6">
                {/* Stat item */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-trophy text-white"></i>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{t('aboutExpVal')}</p>
                    <p className="text-sm text-gray-400 font-light">{t('aboutExpLabel')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-project-diagram text-white"></i>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{t('aboutProjVal')}</p>
                    <p className="text-sm text-gray-400 font-light">{t('aboutProjLabel')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center shrink-0">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{t('aboutClientVal')}</p>
                    <p className="text-sm text-gray-400 font-light">{t('aboutClientLabel')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
