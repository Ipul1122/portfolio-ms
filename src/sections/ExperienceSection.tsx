import React from 'react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  descriptions: string[];
  tech?: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: 'Januari - Juni 2026',
    role: 'Fullstack Developer',
    company: 'PT Cakrawala Parama Internasional',
    type: 'Full-time',
    descriptions: [
      'Merancang RESTful API berbasis Laravel 12 dan Vue 3 menggunakan Laravel Sanctum untuk mengamankan data serta membangun approval workflow bilingual khusus peran Direktur.',
      'Mengoptimalkan struktur database MySQL untuk konten interaktif dan menerapkan mekanisme short-term caching pada hitungan artikel guna meminimalkan beban query database.',
      'Mengeksekusi pengujian fungsionalitas secara menyeluruh (Whitebox dan Blackbox testing) pada API endpoint dan penanganan error frontend.',
    ],
    tech: ['Laravel 12', 'Vue 3', 'MySQL', 'Sanctum', 'REST API'],
  },
  {
    period: 'Juli 2025 - Sekarang',
    role: 'Asisten Dosen',
    company: 'Akademi Teknik Informatika Tunas Bangsa',
    type: 'Part-time',
    descriptions: [
      'Membimbing dan mentransfer pengetahuan kepada 10+ mahasiswa mengenai logika pemrograman dasar serta implementasi Fullstack Web Development.',
      'Melakukan code review, membantu proses debugging/troubleshooting, serta mengajarkan teknik clean code untuk memastikan aplikasi mudah dipelihara.',
      'Mengarahkan mahasiswa dalam perancangan arsitektur sistem (Flowchart, DFD, ERD), penggunaan Git/GitHub untuk kolaborasi tim.',
    ],
    tech: ['PHP', 'MySQL', 'Bootstrap', 'Git', 'GitHub'],
  },
  {
    period: 'September 2024 - Sekarang',
    role: 'Koordinator Utama & IT Support',
    company: 'TPA Masjid Nurul Haq',
    type: 'Volunteer',
    descriptions: [
      'Memimpin kegiatan operasional harian institusi pendidikan, mencakup penyusunan jadwal pengajaran dan manajemen data murid.',
      'Melakukan digitalisasi administrasi dengan menginisiasi dan mengelola platform web (tpanurhaq.com) untuk efisiensi rekapitulasi jadwal serta absensi.',
      'Menangani kendala teknis (hosting maintenance) secara mandiri untuk memastikan platform edukasi dapat diakses tanpa hambatan.',
    ],
    tech: ['Laravel 12', 'MySQL', 'Tailwind CSS'],
  },
  {
    period: 'Maret - Mei 2025',
    role: 'Fullstack Developer (Laravel)',
    company: 'PT. Radar Teknologi Komputer',
    type: 'Magang',
    descriptions: [
      'Merancang dan membangun arsitektur website portofolio dinamis menggunakan Laravel 12 (terbaru) dengan fitur CRUD yang optimal.',
      'Mengembangkan modul web untuk visualisasi data lingkungan (studi kasus: Polusi Laut Pantai Selatan).',
      'Melakukan Black Box Testing dan debugging kode sebelum deployment, mengurangi risiko error pada tahap produksi.',
    ],
    tech: ['Laravel 12', 'MySQL', 'Bootstrap'],
  },
];

const typeColors: Record<string, string> = {
  'Full-time': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  'Part-time': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  'Magang': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  'Volunteer': 'bg-purple-500/15 text-purple-400 border-purple-500/20',
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 animate-hidden fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            Pengalaman Kerja
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Perjalanan karir dan kontribusi profesional saya
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-timeline__item animate-hidden fade-up"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Timeline dot */}
              <div className="exp-timeline__dot">
                <div className="exp-timeline__dot-inner" />
              </div>

              {/* Card */}
              <div className="exp-timeline__card group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="exp-timeline__period">
                      <i className="fas fa-calendar-alt mr-2 text-xs opacity-60"></i>
                      {exp.period}
                    </span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${typeColors[exp.type] || 'bg-white/10 text-gray-300 border-white/10'}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1 group-hover:text-gray-200 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-base sm:text-lg text-gray-400 font-light mb-5 flex items-center gap-2">
                  <i className="fas fa-building text-sm opacity-50"></i>
                  {exp.company}
                </p>

                {/* Description list */}
                <ul className="space-y-3 mb-5">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                      <span className="exp-timeline__bullet mt-2 shrink-0" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                {exp.tech && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
