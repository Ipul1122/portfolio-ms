import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { projects } from '../data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

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
    <div>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-hidden from-left">
              <div className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-medium mb-6">
                <i className="fas fa-code mr-2"></i>Web Developer & Content Creator
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-6">
                Hai, Saya
                <br />
                <span className="gradient-text">Muhammad Syaifulloh</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Pengembang web profesional dengan pengalaman 1+ tahun dalam menciptakan solusi digital yang inovatif. Spesialisasi dalam HTML, CSS, JavaScript, dan framework modern.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a 
                  href="#work" 
                  className="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium shadow-lg shadow-blue-500/30"
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
                  className="px-8 py-3.5 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition duration-300 font-medium"
                >
                  Download My CV
                </a>
              </div>

              <div className="flex justify-center lg:justify-start items-center space-x-4">
                <a href="https://www.instagram.com/pul_ipul_pul?igsh=MWJ5eXV3eTVsN2N3dA==" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition duration-300" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-syaifulloh-99a233305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition duration-300" rel="noreferrer">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="https://github.com/Ipul1122/" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition duration-300" rel="noreferrer">
                  <i className="fa-brands fa-github text-xl"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-center animate-hidden from-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="/image/foto_ipul.png" 
                  alt="Muhammad Syaifulloh" 
                  className="relative max-w-sm md:max-w-md h-auto object-cover rounded-2xl"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(37, 99, 235, 0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-hidden fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">Tentang Saya</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Menciptakan pengalaman digital yang luar biasa</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-hidden from-left text-center lg:text-left">
              <h3 className="text-3xl font-bold font-heading mb-6 text-gray-900">
                Kenalin, Saya Muhammad Syaifulloh
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Saya adalah seorang Pengembang web yang berdedikasi dalam menciptakan solusi digital yang inovatif dan efisien.
                Saya merupakan <strong className="text-blue-600">Lulusan Terbaik</strong> pada kampus Akademi Teknik Informatika Tunas Bangsa dengan gelar A.md.Kom
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Tujuan saya adalah membangun aplikasi web yang tidak hanya fungsional dan cepat, tetapi juga memberikan pengalaman pengguna yang menyenangkan dan intuitif.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium shadow-lg shadow-blue-500/30"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Hubungi Saya
                </a>
              </div>
            </div>
            
            <div className="flex justify-center items-center animate-hidden from-right">
              <div className="relative w-full max-w-xs md:max-w-sm">
                <a href="/image/foto_kelulusan.jpg" target="_blank" rel="noreferrer">
                  <img 
                    src="/image/foto_kelulusan.jpg" 
                    alt="Foto Muhammad Syaifulloh" 
                    className="relative w-full h-auto object-cover rounded-2xl shadow-xl"
                    style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                  />
                </a>    
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg -z-10 opacity-60"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-lg -z-10 opacity-60"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl card-hover animate-hidden fade-up">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-trophy text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">1+ Years</h3>
              <p className="text-gray-600">Professional Experience</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl card-hover animate-hidden fade-up" style={{ transitionDelay: '100ms' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-project-diagram text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">10+ Projects</h3>
              <p className="text-gray-600">Successfully Completed</p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl card-hover animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-users text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">5+ Clients</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-hidden fade-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Kemampuan Teknis</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mt-2">Skills & Tools</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Teknologi dan perangkat lunak yang saya gunakan untuk mengubah ide menjadi produk digital yang fungsional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-hidden fade-up">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 border-b pb-2 border-gray-100">
                <i className="fas fa-code text-primary"></i> Programming & Frameworks
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {[
                  { icon: 'fab fa-html5 text-orange-600', label: 'HTML5', hoverBg: 'hover:bg-orange-50' },
                  { icon: 'fab fa-css3-alt text-blue-600', label: 'CSS3', hoverBg: 'hover:bg-blue-50' },
                  { icon: 'fab fa-bootstrap text-purple-600', label: 'Bootstrap', hoverBg: 'hover:bg-purple-50' },
                  { icon: 'fas fa-wind text-cyan-500', label: 'Tailwind', hoverBg: 'hover:bg-cyan-50' },
                  { icon: 'fab fa-js text-yellow-500', label: 'JavaScript', hoverBg: 'hover:bg-yellow-50' },
                  { icon: 'fab fa-react text-blue-400 animate-spin-slow', label: 'React', hoverBg: 'hover:bg-blue-50' },
                  { icon: 'fab fa-node-js text-green-600', label: 'Node.js', hoverBg: 'hover:bg-green-50' },
                  { icon: 'fab fa-php text-indigo-600', label: 'PHP', hoverBg: 'hover:bg-indigo-50' },
                  { icon: 'fab fa-laravel text-red-600', label: 'Laravel', hoverBg: 'hover:bg-red-50' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl ${item.hoverBg} hover:shadow-md transition duration-300 group cursor-default`}>
                    <i className={`${item.icon} text-4xl mb-2`}></i>
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 border-b pb-2 border-gray-100">
                <i className="fas fa-tools text-primary"></i> Tools & Workflow
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: 'fas fa-code text-blue-500', label: 'VS Code', hoverBg: 'hover:bg-blue-50' },
                  { icon: 'fas fa-space-shuttle text-orange-500', label: 'Postman', hoverBg: 'hover:bg-orange-50' },
                  { icon: 'fab fa-figma text-pink-500', label: 'Figma', hoverBg: 'hover:bg-pink-50' },
                  { icon: 'fas fa-database text-orange-600', label: 'XAMPP', hoverBg: 'hover:bg-orange-50' },
                  { icon: 'fab fa-github text-gray-900', label: 'Git/GitHub', hoverBg: 'hover:bg-gray-200' },
                  { icon: 'fas fa-robot text-emerald-600', label: 'AI Tools', hoverBg: 'hover:bg-emerald-50' }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl ${item.hoverBg} hover:shadow-md transition duration-300 group cursor-default`}>
                    <i className={`${item.icon} text-3xl mb-2`}></i>
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Work Section */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-hidden fade-up gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">Portfolio</h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Eksplorasi hasil karya terbaik kami dalam menciptakan solusi digital yang berdampak.
              </p>
            </div>
            
            <div className="hidden md:flex gap-4">
              <button className="swiper-button-custom-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition duration-300">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="swiper-button-custom-next w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition duration-300">
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
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                        {project.subtitle}
                      </p>
                      <div className="mt-auto flex items-center text-primary font-medium text-sm">
                        Lihat Studi Kasus <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition"></i>
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
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-hidden fade-up">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gray-900">Kontak</h2>
              <p className="text-xl text-gray-600">Punya proyek yang ingin dikerjakan? Mari diskusikan</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-hidden fade-up">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-600">msyaifulloh2024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Phone</h3>
                    <p className="text-gray-600">+62 856 9367 2730</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-600">DKI Jakarta, Indonesia</p>
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" 
                  required 
                />
                <input 
                  id="contact-email" 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" 
                  required 
                />
                <textarea 
                  id="contact-message" 
                  placeholder="Your Message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none" 
                  required
                ></textarea>
                <button type="submit" className="w-full px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">
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
