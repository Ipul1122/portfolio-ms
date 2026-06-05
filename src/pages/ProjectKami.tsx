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
      <section id="project-detail" className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div id="project-default">
            <h1 className="text-4xl font-bold font-heading mb-4 text-gray-900">Proyek Tidak Ditemukan</h1>
            <p className="text-xl text-gray-600 mb-8">Silakan kembali ke halaman utama untuk melihat portofolio kami.</p>
            <Link to="/#work" className="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium">
              Kembali ke Portofolio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="project-detail" className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {project.subtitle}
          </p>

          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-2xl shadow-xl mb-12 border object-cover"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900">Tentang Proyek</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto mb-5 inline-flex justify-center items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Lihat Live Demo
                </a>
              )}
              
              <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 mt-6">Fitur Utama</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl h-fit">
              <h3 className="text-xl font-bold font-heading mb-4 text-gray-900">Info Teknis</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Klien:</strong> {project.client}</p>
                <p className="text-gray-700"><strong>Layanan:</strong> {project.service}</p>
                <p className="text-gray-700"><strong>Tahun:</strong> {project.year}</p>
                <p className="text-gray-700"><strong>Harga:</strong> {project.price}</p>
                
                <h4 className="font-bold pt-2 text-gray-900">Teknologi:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
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
