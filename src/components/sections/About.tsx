import React, { useEffect, useRef, useState } from 'react';
import { animate, scrambleText } from 'animejs';
import { FileDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import kelulusan from '../../img/kelulusan.jpeg';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const aboutParagraphOne = useRef<HTMLSpanElement | null>(null);
  const aboutParagraphTwo = useRef<HTMLSpanElement | null>(null);
  const gpaRef = useRef<HTMLSpanElement | null>(null);
  const roleRef = useRef<HTMLSpanElement | null>(null);
  const aiRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  // 3D Card Hover Tilt state
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number; glareX: number; glareY: number; active: boolean }>({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    active: false,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates (-0.5 to 0.5)
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    const maxTilt = 12; // degrees
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;

    setTilt({
      rotateX,
      rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      active: false,
    }));
  };

  // Trigger scramble effect for key texts
  const runScramble = () => {
    if (badgeRef.current) {
      animate(badgeRef.current, {
        innerHTML: scrambleText({
          text: t('about.badge'),
          chars: 'uppercase',
          cursor: '_',
          duration: 1600,
        }),
      });
    }

    if (headingRef.current) {
      animate(headingRef.current, {
        innerHTML: scrambleText({
          text: t('about.heading'),
          chars: 'a-zA-Z0-9!@#$%^&*',
          cursor: true,
          duration: 2000,
        }),
      });
    }

    if (aboutParagraphOne.current) {
      animate(aboutParagraphOne.current, {
        innerHTML: scrambleText({
          text: t('about.p1'),
          chars: 'a-zA-Z0-9',
          cursor: true,
          duration: 1800,
        }),
      });
    }

    if (aboutParagraphTwo.current) {
      animate(aboutParagraphTwo.current, {
        innerHTML: scrambleText({
          text: t('about.p2'),
          chars: 'a-zA-Z0-9',
          cursor: true,
          duration: 1800,
        }),
      });
    }

    if (gpaRef.current) {
      animate(gpaRef.current, {
        innerHTML: scrambleText({
          text: '3.82 / 4.00',
          chars: '0-9./',
          duration: 1800,
        }),
      });
    }

    if (roleRef.current) {
      animate(roleRef.current, {
        innerHTML: scrambleText({
          text: t('about.p1_role'),
          chars: 'a-zA-Z',
          duration: 1800,
        }),
      });
    }

    if (aiRef.current) {
      animate(aiRef.current, {
        innerHTML: scrambleText({
          text: 'Antigravity / Claude',
          chars: 'uppercase',
          duration: 1800,
        }),
      });
    }
  };

  // Run on mount / view intersection, and also on language toggle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runScramble();
            hasAnimatedRef.current = true;
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // When language changes, re-trigger scramble smoothly
  useEffect(() => {
    if (hasAnimatedRef.current) {
      runScramble();
    }
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 mt-[100vh] py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-[#FDFBF7] border-t border-[#E2DDD5] shadow-[0_-30px_70px_rgba(0,0,0,0.12)] rounded-t-[36px] sm:rounded-t-[52px]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout: Left Content (7 cols) + Right Photo (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start" data-aos="fade-right">
            {/* Minimalist Section Overline */}
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer group"
              onClick={runScramble}
              title="Click to replay scramble effect"
            >
              <span className="w-2 h-2 rounded-full bg-[#C25E3E] group-hover:scale-125 transition-transform" />
              <span
                ref={badgeRef}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#78716C] font-semibold group-hover:text-[#C25E3E] transition-colors"
              >
                {t('about.badge')}
              </span>
            </div>

            {/* Big Editorial Statement */}
            <h2
              ref={headingRef}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-[1.18] tracking-tight mb-6 cursor-pointer"
              onClick={runScramble}
            >
              {t('about.heading')}
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#5A5551] leading-relaxed font-normal mb-4">
              <span ref={aboutParagraphOne}>
                {t('about.p1')}
              </span>
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#78716C] leading-relaxed mb-8 text-justify sm:text-left">
              <span ref={aboutParagraphTwo}>
              {t('about.p2')}
              </span>
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full pt-6 border-t border-[#E2DDD5]/80">
              <div
                className="p-3.5 rounded-2xl bg-[#F4F0EA]/70 border border-[#E2DDD5] cursor-pointer hover:border-[#C25E3E]/40 transition-colors"
                onClick={runScramble}
              >
                <span className="text-[11px] font-mono text-[#78716C] block uppercase">Academic GPA</span>
                <span ref={gpaRef} className="font-mono font-bold text-base text-[#1E1E1E]">
                  3.82 / 4.00
                </span>
              </div>
              <div
                className="p-3.5 rounded-2xl bg-[#F4F0EA]/70 border border-[#E2DDD5] cursor-pointer hover:border-[#C25E3E]/40 transition-colors"
                onClick={runScramble}
              >
                <span className="text-[11px] font-mono text-[#78716C] block uppercase">Leadership</span>
                <span ref={roleRef} className="font-sans font-bold text-sm text-[#C25E3E]">
                  {t('about.p1_role')}
                </span>
              </div>
              <div
                className="p-3.5 rounded-2xl bg-[#F4F0EA]/70 border border-[#E2DDD5] col-span-2 sm:col-span-1 cursor-pointer hover:border-[#C25E3E]/40 transition-colors"
                onClick={runScramble}
              >
                <span className="text-[11px] font-mono text-[#78716C] block uppercase">AI Workflow</span>
                <span ref={aiRef} className="font-mono font-bold text-xs text-[#1E1E1E]">
                  Antigravity IDE
                </span>
              </div>
            </div>

            {/* Action Buttons: Direct WhatsApp & Download CV */}
            <div className="flex flex-wrap items-center gap-3.5 mt-7 w-full">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6285693672730?text=Halo%20M.%20Syaiful,%20saya%20tertarik%20untuk%20berkolaborasi%20mengenai%20proyek%20web%20development."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-[0_4px_14px_rgba(37,211,102,0.28)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 group"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg
                  className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.18 7.65C8.97 7.65 8.78 7.66 8.61 7.95C8.42 8.24 7.87 8.76 7.87 9.83C7.87 10.9 8.65 11.93 8.76 12.08C8.87 12.23 10.3 14.42 12.48 15.36C12.99 15.58 13.39 15.71 13.7 15.81C14.22 15.98 14.69 15.95 15.06 15.9C15.48 15.84 16.35 15.37 16.53 14.86C16.71 14.34 16.71 13.91 16.66 13.81C16.6 13.72 16.46 13.66 16.25 13.56C16.04 13.45 14.99 12.93 14.79 12.86C14.6 12.79 14.46 12.75 14.32 12.96C14.18 13.17 13.78 13.66 13.66 13.8C13.54 13.93 13.42 13.95 13.21 13.85C13 13.74 12.11 13.45 11.05 12.51C10.23 11.77 9.67 10.87 9.51 10.6C9.35 10.33 9.49 10.18 9.6 10.08C9.69 9.98 9.81 9.84 9.92 9.71C10.02 9.58 10.06 9.48 10.13 9.34C10.2 9.2 10.16 9.08 10.11 8.97C10.06 8.87 9.64 7.83 9.46 7.41C9.29 6.99 9.12 7.05 8.99 7.04C8.87 7.04 8.73 7.04 8.59 7.04L9.18 7.65Z" />
                </svg>
                <span>{t('about.whatsapp')}</span>
                <ArrowUpRight className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Download CV PDF Button */}
              <a
                href="/pdf/CV_MUHAMMAD_SYAIFULLOH.pdf"
                download="CV_MUHAMMAD_SYAIFULLOH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#1E1E1E] hover:bg-[#C25E3E] text-[#FDFBF7] shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(194,94,62,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 group border border-[#1E1E1E]/20 hover:border-[#C25E3E]"
              >
                <FileDown className="w-4 h-4 group-hover:scale-110 group-hover:translate-y-0.5 transition-transform" />
                <span>{t('about.downloadCv')}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Photo Frame with 3D Parallax Hover */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full" data-aos="fade-left">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative group w-full max-w-[360px] sm:max-w-[400px] rounded-3xl p-3.5 sm:p-4 bg-[#F4F0EA]/90 border border-[#E2DDD5] shadow-warm-md hover:shadow-warm-xl cursor-pointer will-change-transform"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                transform: tilt.active
                  ? `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                transition: tilt.active ? 'transform 0.1s ease-out, box-shadow 0.3s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
              }}
            >
              {/* Inner Photo Container with 3D Depth */}
              <div
                className="relative overflow-hidden rounded-2xl bg-[#E2DDD5]/40 aspect-[4/5] flex items-end justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)',
                }}
              >
                <img
                  src={kelulusan}
                  alt="M. Syaiful - Full Stack Web Developer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out transform group-hover:scale-105"
                  style={{
                    transform: 'translateZ(10px)',
                  }}
                />

                {/* Interactive Dynamic Glare Reflection Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                  style={{
                    opacity: tilt.active ? 0.35 : 0,
                    background: `radial-gradient(circle 240px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, transparent 80%)`,
                    mixBlendMode: 'overlay',
                  }}
                />

                {/* Floating Identity Pill with 3D Pop-out */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#1E1E1E]/85 backdrop-blur-md text-[#FDFBF7] flex items-center justify-between border border-white/10 shadow-lg transition-transform duration-300"
                  style={{
                    transform: 'translateZ(40px)',
                  }}
                >
                  <div>
                    <div className="font-sans font-bold text-xs">M. Syaiful</div>
                    <div className="text-[10px] font-mono text-[#E2DDD5]">Full Stack Web Developer</div>
                  </div>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
