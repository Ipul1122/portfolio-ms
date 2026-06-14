import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { experiencesTranslations } from '../data/translations';

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  'Full-time': { bg: 'rgba(163, 166, 255, 0.1)', text: '#a3a6ff', border: 'rgba(163, 166, 255, 0.2)' },
  'Part-time': { bg: 'rgba(163, 166, 255, 0.07)', text: 'rgba(163, 166, 255, 0.7)', border: 'rgba(163, 166, 255, 0.15)' },
  'Magang': { bg: 'rgba(163, 166, 255, 0.06)', text: 'rgba(163, 166, 255, 0.6)', border: 'rgba(163, 166, 255, 0.12)' },
  'Internship': { bg: 'rgba(163, 166, 255, 0.06)', text: 'rgba(163, 166, 255, 0.6)', border: 'rgba(163, 166, 255, 0.12)' },
  'Volunteer': { bg: 'rgba(163, 166, 255, 0.05)', text: 'rgba(163, 166, 255, 0.55)', border: 'rgba(163, 166, 255, 0.1)' },
};

const defaultType = { bg: 'rgba(25, 25, 31, 0.5)', text: 'rgba(249, 245, 253, 0.5)', border: 'rgba(163, 166, 255, 0.08)' };

const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();
  const experiences = experiencesTranslations[language];

  return (
    <section id="experience" className="py-20 border-t" style={{ background: '#0a0a0f', borderColor: 'rgba(163, 166, 255, 0.04)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 animate-hidden fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">
            {t('expHeading')}
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
            {t('expSubheading')}
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const colors = typeColors[exp.type] || defaultType;
            return (
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
                        <i className="fas fa-calendar-alt mr-2 text-xs opacity-60" />
                        {exp.period}
                      </span>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1 transition-colors" style={{ color: '#f9f5fd' }}>
                    {exp.role}
                  </h3>
                  <p className="text-base sm:text-lg font-light mb-5 flex items-center gap-2" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
                    <i className="fas fa-building text-sm opacity-50" />
                    {exp.company}
                  </p>

                  {/* Description list */}
                  <ul className="space-y-3 mb-5">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm sm:text-base font-light leading-relaxed" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
                        <span className="exp-timeline__bullet mt-2 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {exp.tech && (
                    <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(163, 166, 255, 0.06)' }}>
                      {exp.tech.map((techItem, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-300"
                          style={{
                            background: 'rgba(163, 166, 255, 0.06)',
                            border: '1px solid rgba(163, 166, 255, 0.08)',
                            color: 'rgba(249, 245, 253, 0.5)',
                          }}
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
