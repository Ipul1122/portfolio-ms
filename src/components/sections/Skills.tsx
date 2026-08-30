import React, { useEffect, useRef } from 'react';
import { animate, scrambleText } from 'animejs';
import { Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface TechIcon {
  id: string;
  name: string;
  icon: string;
}

const rowOneIcons: TechIcon[] = [
  { id: 'react', name: 'React', icon: '/img/react.svg' },
  { id: 'typescript', name: 'TypeScript', icon: '/img/typescript.svg' },
  { id: 'javascript', name: 'JavaScript', icon: '/img/Javascript.svg' },
  { id: 'tailwindcss', name: 'Tailwind CSS', icon: '/img/tailwindcss.svg' },
  { id: 'html', name: 'HTML5', icon: '/img/html.svg' },
  { id: 'figma', name: 'Figma', icon: '/img/figma.svg' },
  { id: 'antigravity', name: 'Antigravity IDE', icon: '/img/antigravity.svg' },
];

const rowTwoIcons: TechIcon[] = [
  { id: 'nodejs', name: 'Node.js', icon: '/img/nodejs.svg' },
  { id: 'mysql', name: 'MySQL', icon: '/img/mysql.svg' },
  { id: 'cpanel', name: 'cPanel', icon: '/img/cpanel.svg' },
  { id: 'git', name: 'Git', icon: '/img/git-branch.svg' },
  { id: 'github', name: 'GitHub', icon: '/img/github.svg' },
  { id: 'claude', name: 'Claude AI', icon: '/img/claude.svg' },
  { id: 'react2', name: 'React Ecosystem', icon: '/img/react.svg' },
];

export const Skills: React.FC = () => {
  const { lang, t } = useLanguage();

  // Anime.js refs
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  // Scramble text animation for section header
  const runHeaderScramble = () => {
    if (badgeRef.current) {
      animate(badgeRef.current, {
        innerHTML: scrambleText({
          text: t('skills.overline'),
          chars: 'uppercase',
          cursor: '_',
          duration: 1400,
        }),
      });
    }

    if (headingRef.current) {
      animate(headingRef.current, {
        innerHTML: scrambleText({
          text: t('skills.title'),
          chars: 'a-zA-Z0-9 &',
          cursor: true,
          duration: 1800,
        }),
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        innerHTML: scrambleText({
          text: t('skills.desc'),
          chars: 'a-zA-Z0-9 ',
          cursor: false,
          duration: 1600,
        }),
      });
    }
  };

  // Anime.js interactive bounce on icon click / hover
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: [1, 0.88, 1.15, 1],
      rotate: [0, -8, 8, 0],
      duration: 500,
      easing: 'easeOutElastic(1, .5)',
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            runHeaderScramble();
            hasAnimatedRef.current = true;
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasAnimatedRef.current) {
      runHeaderScramble();
    }
  }, [lang]);

  // Helper component for repeating seamless marquee stream
  const renderMarqueeTrack = (icons: TechIcon[], reverse: boolean = false, durationSec: number = 28) => {
    // Quadruple items to ensure seamless infinite loop across wide screens
    const quadrupleList = [...icons, ...icons, ...icons, ...icons];

    return (
      <div className="relative w-full overflow-hidden py-3 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className={`flex gap-4 sm:gap-6 w-max ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
          style={{
            animationDuration: `${durationSec}s`,
          }}
        >
          {quadrupleList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={handleIconClick}
              className="group flex items-center gap-3.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#F4F0EA] hover:bg-[#1E1E1E] border border-[#E2DDD5] hover:border-[#C25E3E] shadow-sm hover:shadow-warm-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FDFBF7] p-2 border border-[#E2DDD5]/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain filter drop-shadow-xs"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('/icon/')) {
                      target.src = target.src.replace('/img/', '/icon/');
                    }
                  }}
                />
              </div>

              {/* Icon Tech Name Only */}
              <span className="font-mono text-xs sm:text-sm font-bold text-[#1E1E1E] group-hover:text-[#FDFBF7] tracking-wide whitespace-nowrap transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative z-10 py-20 sm:py-28 bg-[#FDFBF7] border-t border-[#E2DDD5] overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            {/* Overline Badge */}
            <div
              className="flex items-center gap-2 mb-3 cursor-pointer group w-fit"
              onClick={runHeaderScramble}
              title="Click to replay anime.js scramble"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C25E3E] group-hover:scale-125 transition-transform" />
              <span
                ref={badgeRef}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#78716C] font-semibold group-hover:text-[#C25E3E] transition-colors"
              >
                {t('skills.overline')}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              onClick={runHeaderScramble}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-[1.15] tracking-tight cursor-pointer"
            >
              {t('skills.title')}
            </h2>
          </div>

          {/* Description */}
          <div className="mt-4 md:mt-0 max-w-sm">
            <p
              ref={descRef}
              className="text-xs sm:text-sm text-[#78716C] font-mono leading-relaxed"
            >
              {t('skills.desc')}
            </p>
          </div>
        </div>
      </div>

      {/* Full Width Running Text / Logo Stream Marquee Tracks */}
      <div className="w-full space-y-4 sm:space-y-6">
        {/* Track 1: Running Left to Right */}
        {renderMarqueeTrack(rowOneIcons, false, 30)}

        {/* Track 2: Running Right to Left */}
        {renderMarqueeTrack(rowTwoIcons, true, 34)}
      </div>

      {/* Subtle Footer Note */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#78716C] pt-6 border-t border-[#E2DDD5]/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>Hover to pause • Click icon for Anime.js elastic bounce</span>
          </div>
          <div className="flex items-center gap-2 text-[#1E1E1E] font-medium">
            <Terminal className="w-3.5 h-3.5 text-[#C25E3E]" />
            <span>Continuous Infinite Tech Stream</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
