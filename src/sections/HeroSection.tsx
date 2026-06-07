import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();

  const cvPath = language === 'en'
    ? '/image/CV_MUHAMMAD_SYAIFULLOH_ENGLISH_.pdf'
    : '/image/CV_MUHAMMAD_SYAIFULLOH_INDO_.pdf';

  const cvFileName = language === 'en'
    ? 'CV_MUHAMMAD_SYAIFULLOH_ENGLISH_.pdf'
    : 'CV_MUHAMMAD_SYAIFULLOH_INDO_.pdf';

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-black">
      {/* Stark ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Menggunakan px-4 sampai px-8 agar tidak mepet di mobile */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-hidden from-left">
            <i className="fas fa-code mr-2"></i>{t('heroBadge')}
          </div>

          {/* Overlapping Text & Image Area (1 Column grid overlay) */}
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-center w-full my-8 relative">
            
            {/* TEXT IN THE BACK */}
            <div className="col-start-1 row-start-1 z-0 select-text animate-hidden from-left">
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[12rem] 2xl:text-[13rem] font-bold font-heading leading-[0.9] tracking-tighter text-white">
                {t('heroGreeting')}
                <br />
                <span className="gradient-text block mt-2">Muhammad Syaifulloh</span>
              </h1>
            </div>

            {/* IMAGE IN THE FRONT */}
            <div 
              className="col-start-1 row-start-1 z-10 animate-hidden translate-y-16 opacity-0 [&.animate-visible]:translate-y-0 [&.animate-visible]:opacity-100 pointer-events-none"
              style={{ transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <div className="relative group w-[85vw] h-[85vw] max-w-[320px] sm:w-[65vw] sm:h-[65vw] sm:max-w-md lg:w-[34rem] lg:h-[34rem] xl:w-[40rem] xl:h-[40rem] rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:scale-[1.03] hover:opacity-70 active:opacity-70 pointer-events-auto">
                <img 
                  src="/image/foto_ipul.png" 
                  alt="Muhammad Syaifulloh" 
                  className="relative w-full h-full object-cover transition duration-500"
                />
              </div>
            </div>
            
          </div>

          {/* Content below the overlap */}
          <div className="flex flex-col items-center text-center max-w-2xl  z-20 animate-hidden fade-up">
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-sans font-light">
              {t('heroDesc')}
            </p>
            
            {/* Tombol dibuat w-full di mobile agar rapi, dan kembali normal di tablet/desktop */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-8">
              <a 
                href="#work" 
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold tracking-wide"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('heroBtnView')}
              </a>
              <a 
                href={cvPath} 
                download={cvFileName} 
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent text-white border border-white rounded hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-wide"
              >
                {t('heroBtnDownload')}
              </a>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <a href="https://www.instagram.com/pul_ipul_pul?igsh=MWJ5eXV3eTVsN2N3dA==" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition duration-300" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-syaifulloh-99a233305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition duration-300" rel="noreferrer">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/Ipul1122/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition duration-300" rel="noreferrer">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
