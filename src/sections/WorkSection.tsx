import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { publicProjects, otherProjects } from '../data/projects';
import type { Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { language, t } = useLanguage();

  const title = language === 'en' && project.titleEn ? project.titleEn : project.title;
  const subtitle = language === 'en' && project.subtitleEn ? project.subtitleEn : project.subtitle;
  const category = language === 'en' && project.categoryEn ? project.categoryEn : project.category;

  return (
    <Link 
      to={`/project-kami?project=${project.id}`} 
      className="group bg-white/5 rounded border border-white/5 hover:border-white/30 hover:bg-white/10 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 border-b border-white/5">
        <img 
          src={project.image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-wide">
          {category}
        </div>
        {project.isPublic && (
          <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wide flex items-center gap-1">
            <i className="fas fa-globe text-[8px]"></i> Live
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-white transition text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-light">
          {subtitle}
        </p>
        {project.isPublic && (project.demoUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.demoUrl && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-2 py-0.5">
                <i className="fas fa-external-link-alt text-[8px]"></i> Demo
              </span>
            )}
            {project.githubUrl && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/10 rounded px-2 py-0.5">
                <i className="fab fa-github text-[8px]"></i> Source
              </span>
            )}
          </div>
        )}
        <div className="mt-auto flex items-center text-white font-semibold text-sm group-hover:underline">
          {t('workViewCaseStudy')} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </Link>
  );
};

const WorkSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-24 bg-black border-t border-white/5">
      <div className="container-fluid">
        {/* ===== PROYEK PUBLIK ===== */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-hidden fade-up gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{t('workHeadingLive')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">{t('workTitlePublic')}</h2>
            <p className="text-lg text-gray-400 max-w-xl font-light">
              {t('workDescPublic')}
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button className="swiper-button-public-prev w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="swiper-button-public-next w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
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
              nextEl: '.swiper-button-public-next',
              prevEl: '.swiper-button-public-prev',
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
            {publicProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="my-20 border-t border-white/5"></div>

        {/* ===== PROYEK LAINNYA ===== */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-hidden fade-up gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">{t('workTitleOther')}</h2>
            <p className="text-lg text-gray-400 max-w-xl font-light">
              {t('workDescOther')}
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button className="swiper-button-other-prev w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="swiper-button-other-next w-12 h-12 rounded border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition duration-300 cursor-pointer">
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
              nextEl: '.swiper-button-other-next',
              prevEl: '.swiper-button-other-prev',
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
            {otherProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
