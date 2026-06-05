import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { projects } from '../data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

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

// Duplicate lists to make sure they span wider than any screen width for seamless looping
const repeatedLanguages = [...languages, ...languages];
const repeatedTools = [...tools, ...tools, ...tools];

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-hidden').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phone = '6285693672730';
    const waMessage = `Halo, saya ${name}.\nEmail: ${email}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const waURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(waURL, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('contact-', '')]: value
    }));
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Home Section */}
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

{/* About Section */}
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

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-black border-t border-white/5 overflow-hidden">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-hidden fade-up">
            <span className="text-gray-400 font-semibold tracking-wider uppercase text-xs">Kemampuan Teknis</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-2">Skills & Tools</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
              Teknologi dan perangkat lunak yang saya gunakan untuk mengubah ide menjadi produk digital yang fungsional.
            </p>
          </div>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* Languages Slider (Right to Left) */}
            <div className="animate-hidden fade-up">
              <h3 className="text-lg font-bold mb-6 text-white/70 font-heading tracking-wide pl-4 flex items-center gap-2">
                <i className="fas fa-code text-white/50"></i> Programming Languages & Frameworks
              </h3>
              <div className="relative w-full overflow-hidden hover-pause py-2">
                {/* Edge Fading Overlays */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex w-max animate-marquee-left">
                  <div className="flex gap-6 pr-6 shrink-0">
                    {repeatedLanguages.map((lang, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                      >
                        <img 
                          src={lang.image} 
                          alt={lang.name} 
                          className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
                    {repeatedLanguages.map((lang, idx) => (
                      <div 
                        key={`dup-${idx}`} 
                        className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                      >
                        <img 
                          src={lang.image} 
                          alt={lang.name} 
                          className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Slider (Left to Right) */}
            <div className="animate-hidden fade-up" style={{ transitionDelay: '150ms' }}>
              <h3 className="text-lg font-bold mb-6 text-white/70 font-heading tracking-wide pl-4 flex items-center gap-2">
                <i className="fas fa-tools text-white/50"></i> Tools & Workflow
              </h3>
              <div className="relative w-full overflow-hidden hover-pause py-2">
                {/* Edge Fading Overlays */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex w-max animate-marquee-right">
                  <div className="flex gap-6 pr-6 shrink-0">
                    {repeatedTools.map((tool, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                      >
                        <img 
                          src={tool.image} 
                          alt={tool.name} 
                          className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
                    {repeatedTools.map((tool, idx) => (
                      <div 
                        key={`dup-${idx}`} 
                        className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                      >
                        <img 
                          src={tool.image} 
                          alt={tool.name} 
                          className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Work Section */}
      <section id="work" className="py-24 bg-black border-t border-white/5">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-hidden fade-up gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Portfolio</h2>
              <p className="text-lg text-gray-400 max-w-xl font-light">
                Eksplorasi hasil karya terbaik kami dalam menciptakan solusi digital yang berdampak.
              </p>
            </div>
            
            <div className="hidden md:flex gap-4">
              <button className="swiper-button-custom-prev w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="swiper-button-custom-next w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
            <SwiperComponent
              modules={[Navigation, Scrollbar]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-custom-next',
                prevEl: '.swiper-button-custom-prev',
              }}
              scrollbar={{
                draggable: true,
                hide: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="!pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <Link 
                    to={`/project-kami?project=${project.id}`} 
                    className="group bg-white/5 rounded border border-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full overflow-hidden"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 border-b border-white/5">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-wide">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-white transition text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-light">
                        {project.subtitle}
                      </p>
                      <div className="mt-auto flex items-center text-white font-semibold text-sm group-hover:underline">
                        Lihat Studi Kasus <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black border-t border-white/5">
        <div className="container-fluid">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-hidden fade-up">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Kontak</h2>
              <p className="text-xl text-gray-400 font-light">Punya proyek yang ingin dikerjakan? Mari diskusikan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-hidden fade-up">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white font-heading">Email</h3>
                    <p className="text-gray-400 font-light">msyaifulloh2024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white font-heading">Phone</h3>
                    <p className="text-gray-400 font-light">+62 856 9367 2730</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white font-heading">Location</h3>
                    <p className="text-gray-400 font-light">DKI Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input 
                  id="contact-name" 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-white/40 focus:ring-1 focus:ring-white/20 outline-none transition duration-300" 
                  required 
                />
                <input 
                  id="contact-email" 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-white/40 focus:ring-1 focus:ring-white/20 outline-none transition duration-300" 
                  required 
                />
                <textarea 
                  id="contact-message" 
                  placeholder="Your Message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-white/40 focus:ring-1 focus:ring-white/20 outline-none transition resize-none duration-300" 
                  required
                ></textarea>
                <button type="submit" className="w-full px-8 py-3.5 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold tracking-wide">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
