import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

type FilterKey = 'all' | 'public' | 'attendance' | 'company-profile' | 'web-app' | 'others';

const FILTERS: { key: FilterKey; labelId: string; labelEn: string }[] = [
  { key: 'all', labelId: 'Semua', labelEn: 'All' },
  { key: 'public', labelId: 'Publik', labelEn: 'Public' },
  { key: 'attendance', labelId: 'Sistem Absensi', labelEn: 'Attendance System' },
  { key: 'company-profile', labelId: 'Company Profile', labelEn: 'Company Profile' },
  { key: 'web-app', labelId: 'Web App', labelEn: 'Web App' },
  { key: 'others', labelId: 'Lainnya', labelEn: 'Others' },
];

const ITEMS_PER_PAGE = 6;

const matchesFilter = (project: Project, filter: FilterKey): boolean => {
  switch (filter) {
    case 'all':
      return true;
    case 'public':
      return project.isPublic;
    case 'attendance':
      return project.category === 'Sistem Absensi';
    case 'company-profile':
      return project.category === 'Company Profile';
    case 'web-app':
      return project.category === 'Web App';
    case 'others': {
      const knownCategories = ['Sistem Absensi', 'Company Profile', 'Web App'];
      return !project.isPublic && !knownCategories.includes(project.category);
    }
    default:
      return true;
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { language, t } = useLanguage();

  const title = language === 'en' && project.titleEn ? project.titleEn : project.title;
  const subtitle = language === 'en' && project.subtitleEn ? project.subtitleEn : project.subtitle;
  const category = language === 'en' && project.categoryEn ? project.categoryEn : project.category;

  return (
    <Link
      to={`/${language}/project-kami?project=${project.id}`}
      className="project-card group flex flex-col h-full p-4"
    >
      <div className="laptop-wrapper mb-4">
        <div className="laptop-mockup">
          <div className="laptop-screen">
            <img
              src={project.image}
              alt={title}
              className="laptop-screen-content"
              loading="lazy"
            />
            <div
              className="absolute top-2 right-2 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wide z-10"
              style={{
                background: 'rgba(14, 14, 19, 0.8)',
                color: '#f9f5fd',
                border: '1px solid rgba(163, 166, 255, 0.08)',
              }}
            >
              {category}
            </div>
            {project.isPublic && (
              <div
                className="absolute top-2 left-2 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wide flex items-center gap-1 z-10"
                style={{
                  background: 'rgba(163, 166, 255, 0.85)',
                  color: '#0e0e13',
                }}
              >
                <i className="fas fa-globe text-[7px]" /> Live
              </div>
            )}
          </div>
          <div className="laptop-base" />
        </div>
      </div>
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="text-lg font-bold font-heading mb-2 transition" style={{ color: '#f9f5fd' }}>
          {title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2 font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
          {subtitle}
        </p>
        {project.isPublic && (project.demoUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.demoUrl && (
              <span
                className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-md px-2 py-0.5"
                style={{ color: '#a3a6ff', background: 'rgba(163, 166, 255, 0.08)', border: '1px solid rgba(163, 166, 255, 0.15)' }}
              >
                <i className="fas fa-external-link-alt text-[8px]" /> Demo
              </span>
            )}
            {project.githubUrl && (
              <span
                className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-md px-2 py-0.5"
                style={{ color: 'rgba(249, 245, 253, 0.5)', background: 'rgba(25, 25, 31, 0.5)', border: '1px solid rgba(163, 166, 255, 0.08)' }}
              >
                <i className="fab fa-github text-[8px]" /> Source
              </span>
            )}
          </div>
        )}
        <div className="mt-auto flex items-center text-sm font-semibold group-hover:underline" style={{ color: '#a3a6ff' }}>
          {t('workViewCaseStudy')} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

const WorkSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    const list = projects.filter(p => matchesFilter(p, activeFilter));
    // Prioritize public projects first so they appear before "See More" (Lihat Lebih)
    return [...list].sort((a, b) => {
      if (a.isPublic && !b.isPublic) return -1;
      if (!a.isPublic && b.isPublic) return 1;
      return 0;
    });
  }, [activeFilter]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, ITEMS_PER_PAGE);
  const hasMore = filteredProjects.length > ITEMS_PER_PAGE;

  const handleFilterChange = (key: FilterKey) => {
    setActiveFilter(key);
    setShowAll(false);
  };

  return (
    <section id="work" className="py-24 border-t" style={{ background: '#0a0a0f', borderColor: 'rgba(163, 166, 255, 0.04)' }}>
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-12 animate-hidden fade-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">{t('workTitlePublic')}</h2>
          <p className="text-lg max-w-xl mx-auto font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>
            {t('workDescPublic')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-hidden fade-up" style={{ transitionDelay: '100ms' }}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => handleFilterChange(f.key)}
            >
              {language === 'en' ? f.labelEn : f.labelId}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-hidden fade-up" style={{ transitionDelay: '200ms' }}>
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-hidden fade-up">
            <i className="fas fa-folder-open text-4xl mb-4" style={{ color: 'rgba(163, 166, 255, 0.2)' }} />
            <p className="font-light" style={{ color: 'rgba(249, 245, 253, 0.35)' }}>
              {language === 'en' ? 'No projects found in this category.' : 'Tidak ada proyek dalam kategori ini.'}
            </p>
          </div>
        )}

        {/* See More Button */}
        {hasMore && !showAll && (
          <div className="text-center animate-hidden fade-up" style={{ transitionDelay: '300ms' }}>
            <button
              className="see-more-btn"
              onClick={() => setShowAll(true)}
            >
              {language === 'en' ? 'See More' : 'Lihat Lebih'}
              <i className="fas fa-chevron-down text-sm" />
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAll && hasMore && (
          <div className="text-center mt-8">
            <button
              className="see-more-btn"
              onClick={() => setShowAll(false)}
            >
              {language === 'en' ? 'Show Less' : 'Tampilkan Sedikit'}
              <i className="fas fa-chevron-up text-sm" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
