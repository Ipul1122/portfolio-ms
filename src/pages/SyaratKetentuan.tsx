import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SyaratKetentuan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section id="terms-content" className="pt-32 pb-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 gradient-text">Syarat dan Ketentuan</h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-left">
              <p>Terakhir diperbarui: 30 Oktober 2025</p>

              <p>Harap baca Syarat dan Ketentuan ("Ketentuan") ini dengan saksama sebelum menggunakan website portofolio Muhammad Syaifulloh ("Situs").</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-gray-900">1. Penerimaan Ketentuan</h2>
              <p>Dengan mengakses atau menggunakan Situs ini, Anda setuju untuk terikat oleh Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak diizinkan untuk mengakses Situs.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-gray-900">2. Penggunaan Situs</h2>
              <p>Situs ini disediakan untuk tujuan informasional guna menampilkan portofolio, layanan, dan informasi kontak Muhammad Syaifulloh. Anda setuju untuk tidak menggunakan situs ini untuk tujuan yang melanggar hukum atau dilarang oleh Ketentuan ini.</p>
              
              <h2 className="text-2xl font-bold font-heading pt-4 text-gray-900">3. Hak Kekayaan Intelektual</h2>
              <p>Semua konten yang ada di Situs ini, termasuk namun tidak terbatas pada teks, grafik, logo, gambar, dan desain proyek, adalah milik Muhammad Syaifulloh atau pemberi lisensinya dan dilindungi oleh undang-undang hak cipta. Anda tidak boleh mereproduksi, mendistribusikan, atau membuat karya turunan dari konten apa pun tanpa izin tertulis sebelumnya.</p>
              
              <h2 className="text-2xl font-bold font-heading pt-4 text-gray-900">4. Batasan Tanggung Jawab</h2>
              <p>Informasi di Situs ini disediakan "sebagaimana adanya" tanpa jaminan apa pun. Muhammad Syaifulloh tidak akan bertanggung jawab atas kerusakan apa pun yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan Situs ini.</p>
              <p>Link ke situs web pihak ketiga (seperti WhatsApp atau tautan proyek) disediakan hanya untuk kenyamanan Anda. Kami tidak mengontrol atau mendukung konten situs pihak ketiga tersebut dan tidak bertanggung jawab atasnya.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-gray-900">5. Perubahan pada Ketentuan</h2>
              <p>Kami berhak untuk mengubah atau mengganti Ketentuan ini kapan saja atas kebijakan kami sendiri. Tanggung jawab Anda untuk meninjau Ketentuan ini secara berkala. Penggunaan Situs yang berkelanjutan setelah perubahan apa pun merupakan penerimaan Anda atas Ketentuan yang baru.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-gray-900">6. Hubungi Kami</h2>
              <p>Jika Anda memiliki pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, silakan hubungi kami melalui informasi yang tersedia di <Link to="/#contact" className="text-primary hover:underline">halaman kontak</Link>.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default SyaratKetentuan;
