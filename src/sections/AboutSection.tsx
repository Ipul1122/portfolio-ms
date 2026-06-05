import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-hidden fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Tentang Saya</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">Menciptakan pengalaman digital yang luar biasa</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center lg:justify-items-start mb-16">
          
          {/* Konten Teks About - Ukuran font responsif mencegah teks terpotong kesamping */}
          <div className="animate-hidden from-left text-center lg:text-left max-w-xl mx-auto lg:mx-0 w-full">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-6 text-white leading-snug break-words">
              Kenalin, Saya <span className="block sm:inline">Muhammad Syaifulloh</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed font-light text-justify sm:text-left">
              Saya adalah seorang pengembang web yang berdedikasi dalam menciptakan solusi digital yang inovatif dan efisien.
              Saya merupakan <strong className="text-white font-bold">Lulusan Terbaik</strong> pada kampus Akademi Teknik Informatika Tunas Bangsa dengan gelar A.md.Kom.
            </p>
            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed font-light text-justify sm:text-left">
              Tujuan saya adalah membangun aplikasi web yang tidak hanya fungsional dan cepat, tetapi juga memberikan pengalaman pengguna yang menyenangkan dan intuitif.
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <a 
                href="#contact" 
                className="w-full sm:w-auto text-center px-8 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition-all duration-300 font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </a>
            </div>
          </div>
          
          {/* Foto Kelulusan - Penyesuaian margin agar efek box bayangan (-z-10) tidak keluar layar mobile */}
          <div className="flex justify-center items-center animate-hidden from-right py-4 w-full">
            <div className="relative w-full max-w-[260px] sm:max-w-sm group mx-auto">
              <a href="/image/foto_kelulusan.jpg" target="_blank" rel="noreferrer" className="block w-full">
                <img 
                  src="/image/foto_kelulusan.jpg" 
                  alt="Foto Muhammad Syaifulloh" 
                  className="relative w-full h-auto object-cover rounded border border-white/10 group-hover:border-white/30 transition duration-500 shadow-xl"
                  style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                />
              </a>    
              <div className="absolute -bottom-3 -right-3 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded border border-white/5 -z-10 group-hover:bg-white/10 transition duration-500"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded border border-white/5 -z-10 group-hover:bg-white/10 transition duration-500"></div>
            </div>
          </div>
        </div>

        {/* Section Counter Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          <div className="p-6 sm:p-8 bg-white/5 border border-white/5 rounded card-hover animate-hidden fade-up">
            <div className="w-14 h-14 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 mx-auto sm:mx-0">
              <i className="fas fa-trophy text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center sm:text-left">1+ Tahun</h3>
            <p className="text-gray-400 font-light text-sm text-center sm:text-left">Pengalaman Profesional</p>
          </div>

          <div className="p-6 sm:p-8 bg-white/5 border border-white/5 rounded card-hover animate-hidden fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="w-14 h-14 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 mx-auto sm:mx-0">
              <i className="fas fa-project-diagram text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center sm:text-left">10+ Proyek</h3>
            <p className="text-gray-400 font-light text-sm text-center sm:text-left">Selesai dengan Sukses</p>
          </div>

          <div className="p-6 sm:p-8 bg-white/5 border border-white/5 rounded card-hover animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="w-14 h-14 bg-white/5 rounded border border-white/10 flex items-center justify-center mb-6 mx-auto sm:mx-0">
              <i className="fas fa-users text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white text-center sm:text-left">5+ Klien</h3>
            <p className="text-gray-400 font-light text-sm text-center sm:text-left">Puas dengan Layanan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
