import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const ProjectKami: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('project');
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <section id="project-detail" className="pt-32 pb-24 bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container-fluid text-center">
          <div id="project-default">
            <h1 className="text-4xl font-bold font-heading mb-4 text-white">{t('detailNotFoundTitle')}</h1>
            <p className="text-xl text-gray-400 mb-8 font-light">{t('detailNotFoundSub')}</p>
            <Link to={`/${language}#work`} className="px-8 py-3.5 border border-white text-white rounded hover:bg-white hover:text-black transition duration-300 font-bold tracking-wide">
              {t('detailBackBtn')}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const title = language === 'en' && project.titleEn ? project.titleEn : project.title;
  const subtitle = language === 'en' && project.subtitleEn ? project.subtitleEn : project.subtitle;
  const description = language === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
  const features = language === 'en' && project.featuresEn ? project.featuresEn : project.features;
  const client = language === 'en' && project.clientEn ? project.clientEn : project.client;
  const service = language === 'en' && project.serviceEn ? project.serviceEn : project.service;

  return (
    <section id="project-detail" className="pt-32 pb-24 bg-black text-white min-h-screen">
      <div className="container-fluid">
        <article className="max-w-4xl mx-auto">
          <Link to={`/${language}#work`} className="inline-flex items-center text-gray-400 hover:text-white transition mb-8 text-sm">
            <i className="fas fa-arrow-left mr-2"></i> {t('detailBackBtn')}
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">
            {title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 font-light">
            {subtitle}
          </p>

          {/* Laptop Mockup */}
          <div className="laptop-wrapper mb-12 max-w-3xl mx-auto group">
            <div className="laptop-mockup">
              <div className="laptop-screen">
                <img 
                  src={project.image} 
                  alt={title} 
                  className="laptop-screen-content"
                />
              </div>
              <div className="laptop-base"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-left">
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">{t('detailAboutTitle')}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                {description}
              </p>

              <div className="flex flex-wrap gap-3 mb-5">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold tracking-wide"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    {t('detailLiveDemo')}
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3 bg-transparent text-white border border-white/30 rounded hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-bold tracking-wide"
                  >
                    <i className="fab fa-github"></i>
                    {t('detailSourceCode')}
                  </a>
                )}
              </div>
              
              <h3 className="text-2xl font-bold font-heading mb-4 text-white mt-8">{t('detailFeaturesTitle')}</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 font-light">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded h-fit text-left">
              <h3 className="text-xl font-bold font-heading mb-4 text-white border-b border-white/10 pb-2">{t('detailInfoTitle')}</h3>
              <div className="space-y-3 font-light text-sm text-gray-300">
                <p><strong>{t('detailClient')}</strong> {client}</p>
                <p><strong>{t('detailService')}</strong> {service}</p>
                <p><strong>{t('detailYear')}</strong> {project.year}</p>
                <p><strong>{t('detailPrice')}</strong> {project.price}</p>
                
                <h4 className="font-bold pt-2 text-white font-heading">{t('detailTech')}</h4>
                <ul className="list-disc list-inside text-gray-400 text-xs space-y-1">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="inline-block bg-white/5 border border-white/10 rounded px-2 py-0.5 mr-1 mb-1 font-sans">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProjectKami;
