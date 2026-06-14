import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SyaratKetentuan: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      <section id="terms-content" className="pt-32 pb-24 bg-black">
        <div className="container-fluid">
          <article className="max-w-4xl mx-auto bg-white/5 border border-white/5 p-8 md:p-12 rounded shadow-2xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 gradient-text">Syarat dan Ketentuan</h1>
            
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-sm">
              <p className="text-white">Terakhir diperbarui: 30 Oktober 2025</p>

              <p>Harap baca Syarat dan Ketentuan ("Ketentuan") ini dengan saksama sebelum menggunakan website portofolio Muhammad Syaifulloh ("Situs").</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">1. Penerimaan Ketentuan</h2>
              <p>Dengan mengakses atau menggunakan Situs ini, Anda setuju untuk terikat oleh Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak diizinkan untuk mengakses Situs.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">2. Penggunaan Situs</h2>
              <p>Situs ini disediakan untuk tujuan informasional guna menampilkan portofolio, layanan, dan informasi kontak Muhammad Syaifulloh. Anda setuju untuk tidak menggunakan situs ini untuk tujuan yang melanggar hukum atau dilarang oleh Ketentuan ini.</p>
              
              <h2 className="text-2xl font-bold font-heading pt-4 text-white">3. Hak Kekayaan Intelektual</h2>
              <p>Semua konten yang ada di Situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan desain proyek, adalah milik Muhammad Syaifulloh atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta. Anda tidak boleh mereproduksi, mendistribusikan, atau membuat karya turunan dari konten apa pun tanpa izin tertulis sebelumnya.</p>
              
              <h2 className="text-2xl font-bold font-heading pt-4 text-white">4. Batasan Tanggung Jawab</h2>
              <p>Informasi di Situs ini disediakan "sebagaimana adanya" tanpa jaminan apa pun. Muhammad Syaifulloh tidak akan bertanggung jawab atas kerusakan apa pun yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan Situs ini.</p>
              <p>Link ke situs web pihak ketiga (seperti WhatsApp atau tautan proyek) disediakan hanya untuk kenyamanan Anda. Kami tidak mengontrol atau mendukung konten situs pihak ketiga tersebut dan tidak bertanggung jawab atasnya.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">5. Perubahan pada Ketentuan</h2>
              <p>Kami berhak untuk mengubah atau mengganti Ketentuan ini kapan saja atas kebijakan kami sendiri. Tanggung jawab Anda untuk meninjau Ketentuan ini secara berkala. Penggunaan Situs yang berkelanjutan setelah perubahan apa pun merupakan penerimaan Anda atas Ketentuan yang baru.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">6. Hubungi Kami</h2>
              <p>Jika Anda memiliki pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, silakan hubungi kami melalui informasi yang tersedia di <Link to={`/${language}#contact`} className="text-white underline hover:text-gray-300">halaman kontak</Link>.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default SyaratKetentuan;
