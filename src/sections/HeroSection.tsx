import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-black">
      {/* Stark ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Menggunakan px-4 sampai px-8 agar tidak mepet di mobile */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Kolon Konten Teks */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left animate-hidden from-left pt-6">
            <div className="inline-flex items-center px-4 py-1.5 bg-white/5 border border-white/10 text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <i className="fas fa-code mr-2"></i>Web Developer & UI/UX Designer
            </div>
            
            {/* Ukuran font disesuaikan agar tidak merusak layout mobile */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-white">
              Hai, Saya
              <br />
              <span className="gradient-text block mt-1">Muhammad Syaifulloh</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-light">
              Pengembang web profesional dengan pengalaman 1+ tahun dalam menciptakan solusi digital yang inovatif. Spesialisasi dalam HTML, CSS, JavaScript, dan framework modern.
            </p>
            
            {/* Tombol dibuat w-full di mobile agar rapi, dan kembali normal di tablet/desktop */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start mb-8">
              <a 
                href="#work" 
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold tracking-wide及"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
              <a 
                href="/image/CV_MUHAMMAD_SYAIFULLOH_ENGLISH-pemrogramman.pdf" 
                download="CV_MUHAMMAD_SYAIFULLOH_ENGLISH-pemrogramman.pdf" 
                className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent text-white border border-white rounded hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-wide"
              >
                Download My CV
              </a>
            </div>

            <div className="flex justify-center lg:justify-start items-center space-x-4">
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

          {/* Kolon Foto Home - Diberikan margin top & padding bawah di mobile agar tidak terpotong */}
          <div className="flex justify-center animate-hidden from-right mt-8 lg:mt-0 pb-12 lg:pb-0">
            <div className="relative group max-w-xs sm:max-w-sm w-full px-4 sm:px-0">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-2xl group-hover:bg-white/10 transition duration-500"></div>
              <img 
                src="/image/foto_ipul.png" 
                alt="Muhammad Syaifulloh" 
                className="relative w-full h-auto object-cover rounded border border-white/10 shadow-2xl transition duration-500 group-hover:border-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
