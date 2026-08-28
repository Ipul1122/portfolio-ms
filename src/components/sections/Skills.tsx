import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Sparkles, Layers, Code2, Database, Wrench, Users } from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Ecosystem',
    icon: Code2,
    description: 'Declarative component hierarchies, high-fidelity responsive styling, state machines, and fine-tuned browser rendering.',
    skills: [
      'React 18',
      'Next.js 14 (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Three.js / WebGL',
      'Anime.js & GSAP',
      'HTML5 Canvas',
      'Vite & Webpack',
      'Zustand / Redux Toolkit',
    ],
  },
  {
    id: 'backend',
    name: 'Backend & Data Engineering',
    icon: Database,
    description: 'Resilient REST & GraphQL microservices, caching layers, relational schemas, and asynchronous queue processing.',
    skills: [
      'Node.js & Express',
      'NestJS',
      'PostgreSQL',
      'Prisma ORM',
      'Redis Caching',
      'GraphQL & Apollo',
      'RESTful APIs',
      'JWT / OAuth2 Auth',
      'WebSockets',
    ],
  },
  {
    id: 'tools',
    name: 'Cloud, DevOps & Tooling',
    icon: Wrench,
    description: 'Containerization, continuous integration workflows, cloud hosting, and testing harnesses.',
    skills: [
      'Docker & Compose',
      'GitHub Actions CI/CD',
      'Linux Server Mgmt',
      'Nginx Reverse Proxy',
      'Vitest & Jest',
      'Playwright E2E',
      'Git Workflow & SemVer',
      'AWS (S3 / EC2)',
    ],
  },
  {
    id: 'soft-skills',
    name: 'Engineering Leadership & Soft Skills',
    icon: Users,
    description: 'Technical strategy, product architecture breakdown, code review standards, and effective communication.',
    skills: [
      'System Design & RFCs',
      'Code Review & Mentorship',
      'Agile / Scrum Cycles',
      'Product Empathy',
      'Technical Documentation',
      'Cross-functional Alignment',
    ],
  },
];

export const Skills: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('frontend');

  const activeCategory =
    skillCategories.find((c) => c.id === selectedCategoryId) || skillCategories[0];

  return (
    <section
      id="skill"
      className="relative py-24 sm:py-28 px-5 sm:px-8 bg-[#FDFBF7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD5]">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 text-[#C25E3E] font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-[#C25E3E]" />
              <span>02 / Technical Ecosystem</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E1E1E]">
              Skills, Tooling & Competencies
            </h2>
          </div>
          <p data-aos="fade-left" className="text-[#6E6A67] text-sm max-w-xs mt-4 md:mt-0 font-mono">
            Hover any badge to experience physics bounce. Click categories to inspect architectural specialization.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div data-aos="fade-up" className="flex flex-wrap gap-2.5 mb-12">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm'
                    : 'bg-[#F4F0EA] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C25E3E]' : 'text-[#6E6A67]'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Category Deep Dive (5 cols) */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <Card className="bg-[#F4F0EA] border-[#E2DDD5] shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="terracotta">CATEGORY SPOTLIGHT</Badge>
                  <span className="font-mono text-xs text-[#6E6A67]">
                    {activeCategory.skills.length} TECHNOLOGIES
                  </span>
                </div>
                <CardTitle className="text-2xl">{activeCategory.name}</CardTitle>
                <CardDescription className="text-sm mt-2 text-[#6E6A67]">
                  {activeCategory.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E2DDD5] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#1E1E1E] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
                    <span>Production Standards</span>
                  </div>
                  <p className="text-xs text-[#6E6A67] leading-relaxed">
                    All tools are utilized in adherence to clean architecture principles, strict unit/integration tests, and zero-downtime deployment pipelines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Badge Cluster (7 cols) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F0EA]/50 border border-[#E2DDD5] min-h-[320px] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-[#6E6A67] uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C25E3E]" />
                  <span>Interactive Badge Cloud (Hover for Physics)</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeCategory.skills.map((skill, idx) => (
                    <Badge
                      key={skill}
                      variant={idx % 2 === 0 ? 'secondary' : 'outline'}
                      bounceOnHover={true}
                      className="px-4 py-2 text-sm bg-[#FDFBF7] shadow-sm hover:border-[#C25E3E] hover:text-[#C25E3E]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#C25E3E] mr-2" />
                      <span>{skill}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-mono text-[#6E6A67]">
                <span>Engineered with Anime.js Elastic Motion</span>
                <span className="text-[#C25E3E] font-semibold">100% Type-Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
