import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

interface ExperienceRecord {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
}

const experienceRecords: ExperienceRecord[] = [
  {
    id: 'exp-1',
    role: 'Lead Full-Stack Architect',
    company: 'Vanguard Digital Solutions',
    period: '2023 — Present',
    location: 'Jakarta / Remote',
    summary: 'Directing the engineering architecture of multi-tenant enterprise SaaS applications and high-concurrency client systems serving 250k+ monthly active users.',
    highlights: [
      'Architected distributed micro-frontends with Next.js 14 App Router and module federation, reducing build times by 45%.',
      'Optimized backend PostgreSQL queries with custom indexing and Redis caching, cutting average p99 latency from 320ms to 42ms.',
      'Instituted automated CI/CD pipelines and code review standards for a team of 8 engineers.',
    ],
    metrics: ['+140% User Throughput', '99.98% SLA Availability', '-58% Cloud Hosting Cost'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'exp-2',
    role: 'Senior Frontend & Creative Technologist',
    company: 'Aura Interactive Studio',
    period: '2021 — 2023',
    location: 'Bandung / Remote',
    summary: 'Led the development of award-winning web platforms, high-touch e-commerce experiences, and 3D WebGL interactive storytelling microsites.',
    highlights: [
      'Engineered interactive Three.js 3D product customizers with realistic PBR materials, driving a 38% conversion uplift.',
      'Crafted complex GSAP/Anime.js motion timelines and smooth scrolling orchestrations with 60fps frame budgeting.',
      'Built a headless Shopify + React e-commerce platform processing over $2.5M in quarterly GMV.',
    ],
    metrics: ['Awwwards Site of the Day', '+38% Conversion Rate', '100/100 Lighthouse Performance'],
    techStack: ['React', 'Three.js', 'Anime.js', 'Tailwind CSS', 'Shopify Storefront API', 'GraphQL'],
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Software Engineer',
    company: 'Nexus Fintech Labs',
    period: '2019 — 2021',
    location: 'Jakarta',
    summary: 'Developed real-time banking analytics dashboards, automated reconciliation engines, and cryptographic transaction processing systems.',
    highlights: [
      'Engineered high-concurrency WebSocket data feeds for live financial trading charts and instantaneous order book updates.',
      'Implemented bank-grade OAuth2 + 2FA security protocols adhering to stringent financial regulatory compliance.',
      'Developed end-to-end automated testing suites with 94% code coverage using Jest and Cypress.',
    ],
    metrics: ['10M+ Daily API Events', '0 Security Breaches', '94% Test Coverage'],
    techStack: ['TypeScript', 'Node.js', 'Express', 'React', 'MongoDB', 'Redis', 'Docker'],
  },
];

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-28 px-5 sm:px-8 bg-[#F4F0EA]/40 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD5]">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 text-[#C25E3E] font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-[#C25E3E]" />
              <span>03 / Career Chronology</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E1E1E]">
              Work Trajectory & Key Impact
            </h2>
          </div>
          <p data-aos="fade-left" className="text-[#6E6A67] text-sm max-w-xs mt-4 md:mt-0 font-mono">
            Chronological milestone markers highlighting architectural deliverables and quantifiable results.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E2DDD5] space-y-12">
          {experienceRecords.map((record, index) => {
            const isExpanded = expandedId === record.id;

            return (
              <div
                key={record.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative group"
              >
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#1E1E1E] border-4 border-[#FDFBF7] shadow-sm group-hover:bg-[#C25E3E] group-hover:scale-125 transition-all duration-300" />

                {/* Timeline Card */}
                <Card className="bg-[#FDFBF7] border-[#E2DDD5] shadow-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="terracotta">MILESTONE 0{index + 1}</Badge>
                        <span className="text-xs font-mono text-[#6E6A67] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C25E3E]" />
                          {record.period}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#6E6A67] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {record.location}
                      </span>
                    </div>

                    <CardTitle className="text-2xl font-serif text-[#1E1E1E]">
                      {record.role}
                    </CardTitle>
                    <div className="font-serif italic text-base text-[#C25E3E]">
                      {record.company}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <p className="text-sm sm:text-base text-[#6E6A67] leading-relaxed">
                      {record.summary}
                    </p>

                    {/* Expandable Highlight Section */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-[#E2DDD5]/80 space-y-4 animate-in fade-in duration-300">
                        <div className="text-xs font-mono uppercase tracking-wider text-[#1E1E1E] font-semibold flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
                          <span>Key Architectural Deliverables</span>
                        </div>

                        <div className="space-y-2">
                          {record.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E1E1E]">
                              <CheckCircle2 className="w-4 h-4 text-[#C25E3E] flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Quantitative Metrics Box */}
                        <div className="p-4 rounded-2xl bg-[#F4F0EA] border border-[#E2DDD5] space-y-2">
                          <div className="text-xs font-mono uppercase tracking-wider text-[#C25E3E] font-semibold flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>Quantifiable Impact</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                            {record.metrics.map((m, i) => (
                              <div
                                key={i}
                                className="bg-[#FDFBF7] p-2.5 rounded-xl border border-[#E2DDD5] text-xs font-mono font-bold text-[#1E1E1E]"
                              >
                                {m}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Footer Row: Tech Stack & Expand Toggle */}
                    <div className="pt-4 border-t border-[#E2DDD5]/70 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {record.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-[11px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(record.id)}
                        className="text-xs font-mono gap-1 text-[#C25E3E] hover:text-[#1E1E1E]"
                      >
                        <span>{isExpanded ? 'Collapse Details' : 'Expand Highlights'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
