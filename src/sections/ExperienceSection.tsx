import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiencesTranslations } from '../data/translations';

const typeColors: Record<string, string> = {
  'Full-time': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  'Part-time': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  'Magang': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  'Internship': 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  'Volunteer': 'bg-purple-500/15 text-purple-400 border-purple-500/20',
};

const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();
  const experiences = experiencesTranslations[language];

  return (
    <section id="experience" className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 animate-hidden fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
            {t('expHeading')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('expSubheading')}
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
