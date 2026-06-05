import React from 'react';

const languages = [
  { name: 'HTML5', image: '/image/languange/html.png' },
  { name: 'CSS3', image: '/image/languange/css-icon.png' },
  { name: 'Tailwind CSS', image: '/image/languange/tailwindcss-icon.png' },
  { name: 'JavaScript', image: '/image/languange/JavaScript-icon.png' },
  { name: 'TypeScript', image: '/image/languange/typescript-icon.png' },
  { name: 'React', image: '/image/languange/React-icon.png' },
  { name: 'jQuery', image: '/image/languange/jquery-icon.png' },
  { name: 'PHP', image: '/image/languange/php-icon.png' },
  { name: 'Laravel', image: '/image/languange/Laravel-icon.png' },
  { name: 'MySQL', image: '/image/languange/Mysql-icon.png' },
];

const tools = [
  { name: 'Antigravity IDE', image: '/image/tools/antigravity-icon.png' },
  { name: 'Figma', image: '/image/tools/figma-icon.png' },
  { name: 'GitHub', image: '/image/tools/github-icon.png' },
  { name: 'Postman', image: '/image/tools/images.png' },
];

// Duplicate lists to make sure they span wider than any screen width for seamless looping
const repeatedLanguages = [...languages, ...languages];
const repeatedTools = [...tools, ...tools, ...tools];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="container-fluid">
        <div className="text-center mb-16 animate-hidden fade-up">
          <span className="text-gray-400 font-semibold tracking-wider uppercase text-xs">Kemampuan Teknis</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mt-2">Skills & Tools</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
            Teknologi dan perangkat lunak yang saya gunakan untuk mengubah ide menjadi produk digital yang fungsional.
          </p>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Languages Slider (Right to Left) */}
          <div className="animate-hidden fade-up">
            <h3 className="text-lg font-bold mb-6 text-white/70 font-heading tracking-wide pl-4 flex items-center gap-2">
              <i className="fas fa-code text-white/50"></i> Programming Languages & Frameworks
            </h3>
            <div className="relative w-full overflow-hidden hover-pause py-2">
              {/* Edge Fading Overlays */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee-left">
                <div className="flex gap-6 pr-6 shrink-0">
                  {repeatedLanguages.map((lang, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                    >
                      <img 
                        src={lang.image} 
                        alt={lang.name} 
                        className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{lang.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
                  {repeatedLanguages.map((lang, idx) => (
                    <div 
                      key={`dup-${idx}`} 
                      className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                    >
                      <img 
                        src={lang.image} 
                        alt={lang.name} 
                        className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools Slider (Left to Right) */}
          <div className="animate-hidden fade-up" style={{ transitionDelay: '150ms' }}>
            <h3 className="text-lg font-bold mb-6 text-white/70 font-heading tracking-wide pl-4 flex items-center gap-2">
              <i className="fas fa-tools text-white/50"></i> Tools & Workflow
            </h3>
            <div className="relative w-full overflow-hidden hover-pause py-2">
              {/* Edge Fading Overlays */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee-right">
                <div className="flex gap-6 pr-6 shrink-0">
                  {repeatedTools.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name} 
                        className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 pr-6 shrink-0" aria-hidden="true">
                  {repeatedTools.map((tool, idx) => (
                    <div 
                      key={`dup-${idx}`} 
                      className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 select-none group cursor-default"
                    >
                      <img 
                        src={tool.image} 
                        alt={tool.name} 
                        className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition duration-300">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
