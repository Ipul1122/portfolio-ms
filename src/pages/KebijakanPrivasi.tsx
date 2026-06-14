import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const KebijakanPrivasi: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">
      <section id="policy-content" className="pt-32 pb-24 bg-black">
        <div className="container-fluid">
          <article className="max-w-4xl mx-auto bg-white/5 border border-white/5 p-8 md:p-12 rounded shadow-2xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 gradient-text">Kebijakan Privasi</h1>
            
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-sm">
              <p className="text-white">Terakhir diperbarui: 30 Oktober 2025</p>

              <p>Selamat datang di website portofolio Muhammad Syaifulloh. Kami menghargai privasi Anda dan berkomitmen untuk melindunginya. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">1. Informasi yang Kami Kumpulkan</h2>
              <p>Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela saat menghubungi kami melalui formulir kontak atau email, seperti:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Nama</li>
                <li>Alamat Email</li>
                <li>Nomor Telepon (jika Anda memberikannya)</li>
                <li>Isi pesan Anda</li>
              </ul>
              <p>Saat Anda mengirimkan formulir kontak yang mengarah ke WhatsApp, data yang Anda masukkan (Nama, Email, Pesan) akan diformat menjadi pesan WhatsApp dan dikirimkan melalui aplikasi WhatsApp Anda. Kami tidak menyimpan data ini di server kami.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">2. Penggunaan Informasi</h2>
              <p>Informasi yang Anda berikan kami gunakan semata-mata untuk:</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Merespons pertanyaan atau permintaan Anda.</li>
                <li>Berkomunikasi dengan Anda mengenai proyek atau layanan yang mungkin Anda minati.</li>
                <li>Memahami kebutuhan Anda untuk meningkatkan layanan kami.</li>
              </ul>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">3. Keamanan Informasi</h2>
              <p>Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak lain. Informasi Anda hanya digunakan untuk keperluan internal komunikasi antara Anda dan Muhammad Syaifulloh.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">4. Perubahan pada Kebijakan Ini</h2>
              <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal pembaruan yang baru. Kami menganjurkan Anda untuk meninjau halaman ini secara berkala.</p>

              <h2 className="text-2xl font-bold font-heading pt-4 text-white">5. Hubungi Kami</h2>
              <p>Jika Anda memiliki pertanyaan lebih lanjut mengenai kebijakan privasi ini, silakan hubungi kami melalui informasi yang tersedia di <Link to={`/${language}#contact`} className="text-white underline hover:text-gray-300">halaman kontak</Link>.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default KebijakanPrivasi;
