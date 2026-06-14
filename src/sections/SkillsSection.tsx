import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { name: 'HTML5', image: '/image/languange/html.png' },
  { name: 'CSS3', image: '/image/languange/css-icon.png' },
  { name: 'Tailwind CSS', image: '/image/languange/tailwindcss-icon.png' },
  { name: 'JavaScript', image: '/image/languange/JavaScript-icon.png' },
  { name: 'TypeScript', image: '/image/languange/typescript-icon.png' },
  { name: 'React', image: '/image/languange/React-icon.png' },
  { name: 'jQuery', image: '/image/languange/jquery-icon.png' },
  { name: 'PHP', image: '/image/languange/php-icon.png' },
  { name: 'Laravel', image: '/image/languange/Laravel-icon.png' },
  { name: 'MySQL', image: '/image/languange/Mysql-icon.png' },
];

const tools = [
  { name: 'Antigravity IDE', image: '/image/tools/antigravity-icon.png' },
  { name: 'Figma', image: '/image/tools/figma-icon.png' },
  { name: 'GitHub', image: '/image/tools/github-icon.png' },
  { name: 'Postman', image: '/image/tools/images.png' },
];

const repeatedLanguages = [...languages, ...languages];
const repeatedTools = [...tools, ...tools, ...tools];

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 overflow-hidden border-t" style={{ background: '#0e0e13', borderColor: 'rgba(163, 166, 255, 0.04)' }}>
      <div className="container-fluid">
        <div className="text-center mb-16 animate-hidden fade-up">
          <span className="font-semibold tracking-wider uppercase text-xs" style={{ color: 'rgba(163, 166, 255, 0.5)' }}>{t('skillsHeading')}</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 gradient-text">{t('skillsTitle')}</h2>
          <p className="mt-4 max-w-2xl mx-auto font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
            {t('skillsSubheading')}
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Languages Slider */}
          <div className="animate-hidden fade-up">
            <h3 className="text-lg font-bold mb-6 font-heading tracking-wide pl-4 flex items-center gap-2" style={{ color: 'rgba(163, 166, 255, 0.5)' }}>
              <i className="fas fa-code" style={{ color: 'rgba(163, 166, 255, 0.35)' }} /> {t('skillsSectionLang')}
            </h3>
            <div className="relative w-full overflow-hidden hover-pause py-2">
              {/* Edge Fading */}
              <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0e0e13, #0e0e13cc, transparent)' }} />
              <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0e0e13, #0e0e13cc, transparent)' }} />

              <div className="flex w-max animate-marquee-left">
                {[repeatedLanguages, repeatedLanguages].map((list, setIdx) => (
                  <div key={setIdx} className="flex gap-6 pr-6 shrink-0" aria-hidden={setIdx > 0}>
                    {list.map((lang, idx) => (
                      <div
                        key={`${setIdx}-${idx}`}
                        className="flex items-center gap-4 px-6 py-4 rounded-2xl select-none group cursor-default transition-all duration-300"
                        style={{
                          background: 'rgba(25, 25, 31, 0.5)',
                          border: '1px solid rgba(163, 166, 255, 0.06)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = 'rgba(163, 166, 255, 0.2)';
                          e.currentTarget.style.background = 'rgba(163, 166, 255, 0.06)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'rgba(163, 166, 255, 0.06)';
                          e.currentTarget.style.background = 'rgba(25, 25, 31, 0.5)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <img
                          src={lang.image}
                          alt={lang.name}
                          className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-sm font-semibold transition duration-300" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
                          {lang.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Slider */}
          <div className="animate-hidden fade-up" style={{ transitionDelay: '150ms' }}>
            <h3 className="text-lg font-bold mb-6 font-heading tracking-wide pl-4 flex items-center gap-2" style={{ color: 'rgba(163, 166, 255, 0.5)' }}>
              <i className="fas fa-tools" style={{ color: 'rgba(163, 166, 255, 0.35)' }} /> {t('skillsSectionTools')}
            </h3>
            <div className="relative w-full overflow-hidden hover-pause py-2">
              <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0e0e13, #0e0e13cc, transparent)' }} />
              <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0e0e13, #0e0e13cc, transparent)' }} />

              <div className="flex w-max animate-marquee-right">
                {[repeatedTools, repeatedTools].map((list, setIdx) => (
                  <div key={setIdx} className="flex gap-6 pr-6 shrink-0" aria-hidden={setIdx > 0}>
                    {list.map((tool, idx) => (
                      <div
                        key={`${setIdx}-${idx}`}
                        className="flex items-center gap-4 px-6 py-4 rounded-2xl select-none group cursor-default transition-all duration-300"
                        style={{
                          background: 'rgba(25, 25, 31, 0.5)',
                          border: '1px solid rgba(163, 166, 255, 0.06)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = 'rgba(163, 166, 255, 0.2)';
                          e.currentTarget.style.background = 'rgba(163, 166, 255, 0.06)';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'rgba(163, 166, 255, 0.06)';
                          e.currentTarget.style.background = 'rgba(25, 25, 31, 0.5)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-sm font-semibold transition duration-300" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
                          {tool.name}
                        </span>
                      </div>
                    ))}
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

export default SkillsSection;
