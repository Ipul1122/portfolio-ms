import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectKami: React.FC = () => {
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
            <h1 className="text-4xl font-bold font-heading mb-4 text-white">Proyek Tidak Ditemukan</h1>
            <p className="text-xl text-gray-400 mb-8 font-light">Silakan kembali ke halaman utama untuk melihat portofolio kami.</p>
            <Link to="/#work" className="px-8 py-3.5 border border-white text-white rounded hover:bg-white hover:text-black transition duration-300 font-bold tracking-wide">
              Kembali ke Portofolio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="project-detail" className="pt-32 pb-24 bg-black text-white min-h-screen">
      <div className="container-fluid">
        <article className="max-w-4xl mx-auto">
          <Link to="/#work" className="inline-flex items-center text-gray-400 hover:text-white transition mb-8 text-sm">
            <i className="fas fa-arrow-left mr-2"></i> Kembali ke Portofolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 font-light">
            {project.subtitle}
          </p>

          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded border border-white/10 shadow-2xl mb-12 object-cover"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-left">
              <h3 className="text-2xl font-bold font-heading mb-4 text-white">Tentang Proyek</h3>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto mb-5 inline-flex justify-center items-center gap-2 px-8 py-3 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold tracking-wide"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Lihat Live Demo
                </a>
              )}
              
              <h3 className="text-2xl font-bold font-heading mb-4 text-white mt-8">Fitur Utama</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 font-light">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded h-fit text-left">
              <h3 className="text-xl font-bold font-heading mb-4 text-white border-b border-white/10 pb-2">Info Teknis</h3>
              <div className="space-y-3 font-light text-sm text-gray-300">
                <p><strong>Klien:</strong> {project.client}</p>
                <p><strong>Layanan:</strong> {project.service}</p>
                <p><strong>Tahun:</strong> {project.year}</p>
                <p><strong>Harga:</strong> {project.price}</p>
                
                <h4 className="font-bold pt-2 text-white font-heading">Teknologi:</h4>
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
