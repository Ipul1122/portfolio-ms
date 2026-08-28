import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { ShieldCheck, Cpu, Compass, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const svgLineRef = useRef<SVGPathElement | null>(null);

  const triggerSvgDraw = () => {
    if (!svgLineRef.current || !window.anime) return;
    window.anime({
      targets: svgLineRef.current,
      strokeDashoffset: [window.anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
    });
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 px-5 sm:px-8 bg-[#F4F0EA]/60 border-t border-b border-[#E2DDD5]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD5]">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 text-[#C25E3E] font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-[#C25E3E]" />
              <span>01 / Storytelling & Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E1E1E]">
              Crafting at the Intersection of Architecture & Empathy
            </h2>
          </div>
          <p data-aos="fade-left" className="text-[#6E6A67] text-sm max-w-xs mt-4 md:mt-0 font-mono">
            Engineering resilient digital foundations designed to outlast transient trends.
          </p>
        </div>

        {/* Grid: Storytelling Column + Interactive Tactile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          {/* Storytelling Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-up">
            <div className="bg-[#FDFBF7] p-8 sm:p-10 rounded-3xl border border-[#E2DDD5] shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C25E3E] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Engineering Journey</span>
              </div>

              <p className="font-serif text-lg sm:text-xl text-[#1E1E1E] leading-relaxed">
                I am a software engineer dedicated to building robust backend infrastructures and tactile, human-crafted interfaces. 
                With over five years of hands-on experience, I have navigated high-traffic enterprise environments, distributed microservices, and creative WebGL/canvas playgrounds.
              </p>

              <p className="text-sm sm:text-base text-[#6E6A67] leading-relaxed">
                To me, code is a medium of craftsmanship. Beyond shipping features, true engineering lies in designing fault-tolerant architectures, maintaining pristine type contracts, and providing instantaneous, smooth user experiences.
              </p>

              {/* Animated SVG Path Accent */}
              <div onMouseEnter={triggerSvgDraw} className="pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-[#6E6A67]">ENGINEERING SIGNATURE</span>
                <svg width="140" height="24" viewBox="0 0 140 24" className="text-[#C25E3E]">
                  <path
                    ref={svgLineRef}
                    d="M 2 12 Q 35 2, 70 12 T 138 12"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="140"
                    strokeDashoffset="0"
                  />
                </svg>
              </div>
            </div>

            {/* Core Values / Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="150">
              <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2DDD5] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#C25E3E] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1E1E1E] mb-1">
                  Resilience First
                </h4>
                <p className="text-xs text-[#6E6A67] leading-relaxed">
                  Decoupled services, strict typing, and zero single points of failure.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2DDD5] shadow-sm">
                <Cpu className="w-5 h-5 text-[#8B5E3C] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1E1E1E] mb-1">
                  Sub-100ms Feel
                </h4>
                <p className="text-xs text-text-[#6E6A67] text-[#6E6A67] leading-relaxed">
                  Optimized bundle chunks, snappy state trees, and 60fps animations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2DDD5] shadow-sm">
                <Compass className="w-5 h-5 text-[#C25E3E] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#1E1E1E] mb-1">
                  Tactile Empathy
                </h4>
                <p className="text-xs text-[#6E6A67] leading-relaxed">
                  Accessible semantics, organic micro-interactions, and visual harmony.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Tactile Card (5 cols) */}
          <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="200">
            <Card className="bg-[#FDFBF7] border-[#E2DDD5] shadow-md overflow-hidden">
              <CardHeader className="border-b border-[#E2DDD5]/70 pb-5">
                <div className="flex justify-between items-center">
                  <Badge variant="terracotta">CORE PROFILE</Badge>
                  <span className="font-mono text-xs text-[#6E6A67]">EST. 2019</span>
                </div>
                <CardTitle className="text-xl mt-2">M. Syaiful</CardTitle>
                <CardDescription>Full-Stack Engineer & Interactive Creative</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 pt-6">
                {/* Visual Avatar Vignette */}
                <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-[#F4F0EA] via-[#E2DDD5]/60 to-[#C25E3E]/15 border border-[#E2DDD5] p-5 flex flex-col justify-between items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1E1E1E] text-[#FDFBF7] flex items-center justify-center font-serif text-2xl font-bold shadow-md my-auto">
                    MS
                  </div>
                  <div className="text-xs font-mono text-[#6E6A67] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Jakarta (GMT+7) • Global Collaboration</span>
                  </div>
                </div>

                {/* Focus Areas Badges */}
                <div>
                  <div className="text-xs font-mono uppercase text-[#6E6A67] mb-2.5">
                    Primary Competencies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React 18 / Next.js', 'TypeScript', 'Node.js Microservices', 'PostgreSQL', 'Three.js & Canvas', 'Tailwind Architecture'].map(
                      (tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
