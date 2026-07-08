import React, { useEffect } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Bisnis: React.FC = () => {
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

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container-fluid text-center relative z-10">
          <span className="text-gray-400 font-semibold tracking-wider uppercase text-xs mb-4 block animate-hidden fade-up">
            Professional Web Development
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 animate-hidden fade-up leading-tight">
            Solusi Digital untuk <br />
            <span className="gradient-text font-black">
              Pertumbuhan Bisnis Anda
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-hidden fade-up font-light">
            Kami membantu UMKM dan perusahaan membangun kehadiran digital yang kuat melalui Website Custom dan Aplikasi Siap Pakai (MVP).
          </p>
          <div className="flex justify-center gap-4 animate-hidden fade-up">
            <a 
              href="#services" 
              className="px-8 py-3 bg-white text-black border border-transparent rounded-full font-bold hover:bg-black hover:text-white hover:border-white transition-all duration-300 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Layanan
            </a>
            <a 
              href="#mvp-showcase" 
              className="px-8 py-3 bg-transparent text-white border border-white/20 rounded-full font-bold hover:border-white transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('mvp-showcase')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Produk MVP
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black border-t border-white/5">
        <div className="container-fluid">
          <div className="text-center mb-16 animate-hidden fade-up">
            <span className="text-gray-400 font-semibold tracking-wider uppercase text-xs">Penawaran Spesial</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mt-2 mb-4">Pilih Paket Website</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Transparan, tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan skala bisnis Anda saat ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Paket Lite */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 animate-hidden fade-up flex flex-col relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-400 mb-2 font-heading">Paket Lite</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-gray-400">Rp</span>
                  <span className="text-4xl font-bold text-white font-heading">500.000</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-light">Cocok untuk Landing Page & Biodata Diri.</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1 font-light text-gray-300 text-sm">
                {[
                  { bold: 'One Page', norm: ' (Landing Page Single)' },
                  { bold: 'Desain Responsive', norm: ' (Mobile Friendly)' },
                  { bold: 'Gratis Domain my.id', norm: ' (1 Tahun)' },
                  { bold: 'Integrasi Tombol WhatsApp', norm: '' },
                  { bold: 'Hosting Standar', norm: ' (Kecepatan Stabil)' },
                  { bold: 'Revisi Minor 1x', norm: '' },
                  { bold: 'Pengerjaan Cepat', norm: ' (3-5 Hari)' },
                  { bold: 'Setup SEO Dasar', norm: '' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-white mt-1 opacity-60"></i>
                    <span><strong>{item.bold}</strong>{item.norm}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/6285693672730?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Lite%20Website" target="_blank" rel="noreferrer" className="w-full block text-center py-3 rounded-xl border border-white text-white font-bold hover:bg-white hover:text-black transition duration-300">
                Pilih Lite
              </a>
            </div>

            {/* Paket Medium */}
            <div className="bg-white/5 rounded-3xl p-8 border-2 border-white relative transform md:-translate-y-4 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 animate-hidden fade-up flex flex-col z-10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-b-xl text-xs font-black tracking-wide uppercase shadow-md font-heading">
                Paling Laris
              </div>

              <div className="mb-6 mt-4">
                <h3 className="text-xl font-bold text-white mb-2 font-heading">Paket Medium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-gray-400">Rp</span>
                  <span className="text-4xl font-bold text-white font-heading">2.000.000</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-light">Ideal untuk UMKM & Company Profile.</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1 font-medium text-gray-200 text-sm">
                {[
                  { bold: 'Hingga 5 Halaman', norm: ' (Home, About, dll)' },
                  { bold: 'Desain Premium & Custom', norm: ' UI/UX' },
                  { bold: 'Gratis Domain .com', norm: ' (1 Tahun)' },
                  { bold: 'Gratis SSL', norm: ' (Website Aman/Gembok)' },
                  { bold: 'Halaman Responsif', norm: ' (Mobile Friendly)' },
                  { bold: 'Integrasi Google Maps & Form Email', norm: '' },
                  { bold: 'Revisi Desain 3x', norm: '' },
                  { bold: 'Gratis Maintenance 1 Bulan', norm: '' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-white mt-1"></i>
                    <span><strong>{item.bold}</strong>{item.norm}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/6285693672730?text=Halo,%20saya%20tertarik%20dengan%20Paket%20Medium%20Website" target="_blank" rel="noreferrer" className="w-full block text-center py-4 rounded-xl bg-white text-black font-bold hover:bg-black hover:text-white hover:border-white border border-transparent transition duration-300">
                Pilih Medium
              </a>
            </div>

            {/* Paket Custom */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 animate-hidden fade-up flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>

              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-bold text-gray-400 mb-2 font-heading">Paket Custom</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-gray-400">Mulai</span>
                  <span className="text-4xl font-bold text-white font-heading">5.000.000</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-light">Untuk Sistem Web App & Toko Online.</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1 font-light text-gray-300 text-sm relative z-10">
                {[
                  { bold: 'Full Custom Features', norm: ' (Sesuai Request)' },
                  { bold: 'Integrasi Database', norm: ' Kompleks' },
                  { bold: 'Sistem Login/Register', norm: ' Member' },
                  { bold: 'Integrasi Payment Gateway', norm: ' (Otomatis)' },
                  { bold: 'Server High Performance', norm: ' (VPS Ready)' },
                  { bold: 'UI/UX Design dengan Figma Prototype', norm: '' },
                  { bold: 'Unlimited Revisi', norm: ' (Selama Dev)' },
                  { bold: 'Prioritas Support & Training Penggunaan', norm: '' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-white mt-1 opacity-60"></i>
                    <span><strong>{item.bold}</strong>{item.norm}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/6285693672730?text=Halo,%20saya%20butuh%20website%20Custom/Sistem" target="_blank" rel="noreferrer" className="w-full block text-center py-3 rounded-xl border border-white text-white font-bold hover:bg-white hover:text-black transition duration-300 relative z-10">
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Showcase Section */}
      <section id="mvp-showcase" className="py-24 bg-black border-t border-white/5 overflow-hidden">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-hidden fade-up gap-6">
            <div className="text-center md:text-left">
              <span className="bg-white/10 border border-white/10 text-white px-4 py-1.5 rounded text-xs font-bold tracking-wide uppercase mb-4 inline-block font-heading">
                MVP Showcase
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">Project Highlight</h2>
              <p className="text-xl text-gray-400 font-light">
                Koleksi Minimum Viable Product (MVP) siap pakai untuk bisnis modern.
              </p>
            </div>
            
            <div className="hidden md:flex gap-4">
              <button className="mvp-prev-btn w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="mvp-next-btn w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
            <SwiperComponent
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              slidesPerView={1}
              spaceBetween={40}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.mvp-next-btn',
                prevEl: '.mvp-prev-btn',
              }}
              className="mvp-swiper pb-12"
            >
              {/* Slide 1: Coffee Shop */}
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-white/5 rounded-3xl transform rotate-2 group-hover:rotate-1 transition duration-500 opacity-70"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/30 transition duration-300 bg-neutral-950">
                        <img 
                          src="/image/project/sistem-masjid.webp" 
                          alt="Kopi Senja MVP" 
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 opacity-80"
                          loading="lazy"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md p-4 rounded border border-white/10 shadow-lg flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-white font-heading">Kopi Senja App</h4>
                            <p className="text-xs text-gray-400 font-medium">● Live Status: Active</p>
                          </div>
                          <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-black flex items-center justify-center text-[10px] font-black text-white">UI</div>
                            <div className="w-8 h-8 rounded-full bg-white/20 border border-black flex items-center justify-center text-[10px] font-black text-white">UX</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white leading-tight">
                      Platform Digital untuk <br />
                      <span className="gradient-text font-black">
                        Modern Coffee Shop
                      </span>
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                      Website MVP yang dirancang untuk mempercepat proses pemesanan pelanggan (Self-Order). Dilengkapi manajemen menu real-time.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 font-light text-gray-300">
                      {[
                        'QR Code Ordering',
                        'Payment Gateway',
                        'Real-time Dashboard',
                        'Mobile First'
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <i className="fas fa-check-circle text-white mt-1 opacity-70"></i>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://ipul1122.github.io/coffe-shop/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold flex justify-center gap-2">
                        Lihat Demo <i className="fas fa-arrow-right mt-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2: Printing */}
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-white/5 rounded-3xl transform -rotate-2 group-hover:rotate-1 transition duration-500 opacity-70"></div>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/30 transition duration-300 bg-neutral-950">
                        <img 
                          src="/image/project/percetakan.webp" 
                          alt="Sistem Percetakan Online" 
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700 opacity-80"
                          loading="lazy"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md p-4 rounded border border-white/10 shadow-lg flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-white font-heading">EzPrint Dashboard</h4>
                            <p className="text-xs text-gray-400 font-medium">● Order Processing</p>
                          </div>
                          <div className="px-3 py-1 bg-white/10 border border-white/10 text-white rounded text-xs font-bold font-heading">
                            B2B & B2C
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white leading-tight">
                      Solusi Web-to-Print untuk <br />
                      <span className="gradient-text font-black">
                        Digital Printing Modern
                      </span>
                    </h3>
                    
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                      Platform manajemen percetakan terintegrasi. Memungkinkan pelanggan upload desain, hitung harga otomatis (kalkulator cetak), dan melacak status produksi secara real-time.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 font-light text-gray-300">
                      {[
                        'Auto Price Calculator',
                        'Large File Upload',
                        'Production Tracking',
                        'Auto Invoicing'
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <i className="fas fa-check-circle text-white mt-1 opacity-70"></i>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://ipul1122.github.io/prototipe-printing/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold flex justify-center gap-2">
                        Lihat Demo <i className="fas fa-arrow-right mt-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </SwiperComponent>
            <div className="swiper-pagination mt-8"></div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container-fluid relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-white leading-tight animate-hidden fade-up">
            Jangan Biarkan Bisnis Anda <br />
            <span className="gradient-text font-black">
              Tertinggal di Era Digital
            </span>
          </h2>
          
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg animate-hidden fade-up font-light" style={{ transitionDelay: '100ms' }}>
            Wujudkan website impian Anda sekarang. Konsultasikan ide Anda, dan kami akan berikan solusi teknis terbaik. 
            <span className="text-white font-semibold"> Gratis Konsultasi!</span>
          </p>
          
          <div className="animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
            <a 
              href="https://wa.me/6285693672730?text=Halo%20Kak%20Syaifulloh,%20saya%20mau%20konsultasi%20mengenai%20pembuatan%20website%20nih" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black border border-transparent rounded-full font-bold text-lg hover:bg-black hover:text-white hover:border-white transition-all duration-300 group shadow-lg"
            >
              <i className="fab fa-whatsapp text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
              <span>Hubungi Saya via WhatsApp</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 font-light">Respon cepat biasanya dalam 10-30 menit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bisnis;
