import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import syaifulImg from '../../img/syaiful.png';

export const Hero: React.FC = () => {
  const hollowTextRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    // 1. Entrance Anime.js animation
    if (window.anime) {
      if (hollowTextRef.current) {
        window.anime({
          targets: hollowTextRef.current,
          opacity: [0, 1],
          scale: [0.96, 1],
          duration: 1200,
          easing: 'easeOutQuad',
        });
      }

      if (photoRef.current) {
        window.anime({
          targets: photoRef.current,
          opacity: [0, 1],
          duration: 1000,
          delay: 150,
          easing: 'easeOutCubic',
        });
      }
    }

    // 2. Scroll listener to calculate fill transition
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const heroHeight = window.innerHeight * 0.8;
          const progress = Math.min(Math.max(currentScroll / heroHeight, 0), 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute dynamic fill styles based on scroll position
  const fillPercent = Math.round(scrollProgress * 100);
  const strokeOpacity = Math.max(0.18 * (1 - scrollProgress), 0);
  const isFilled = scrollProgress >= 0.95;

  const textFillStyle: React.CSSProperties = {
    WebkitTextStroke: isFilled ? '0px transparent' : `2px rgba(30, 30, 30, ${strokeOpacity + 0.1})`,
    backgroundImage: `linear-gradient(to top, #1E1E1E ${fillPercent}%, transparent ${fillPercent}%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: isFilled ? '#1E1E1E' : 'transparent',
    color: isFilled ? '#1E1E1E' : 'transparent',
    transition: 'background-image 0.08s ease-out, color 0.12s ease-out',
  };

  return (
    <section
      id="home"
      className="fixed inset-0 w-full h-screen min-h-[100dvh] flex flex-col justify-start sm:justify-end items-center overflow-hidden bg-[#FDFBF7] select-none z-0 pointer-events-auto"
    >
      {/* 1. LAYER 0 (BACKGROUND): Tulisan "SOFTWARE ENGINEER" (Tetap diam di tempat / Fixed) */}
      <div
        ref={hollowTextRef}
        className="pointer-events-none absolute inset-0 z-0 flex items-start sm:items-center justify-center overflow-visible select-none"
        aria-hidden="true"
      >
        {/* Mobile: 2 Kolom Vertikal (Kiri: SOFTWARE, Kanan: ENGINEER) */}
        <div className="flex sm:hidden w-full max-w-[92vw] justify-between px-3 pt-20 font-sans font-black uppercase select-none whitespace-nowrap leading-[1.02] tracking-tighter">
          {/* Kolom Kiri: SOFTWARE */}
          <div className="flex flex-col items-center">
            {'SOFTWARE'.split('').map((char, i) => (
              <span
                key={i}
                className="text-[13.5vw] block"
                style={textFillStyle}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Kolom Kanan: ENGINEER */}
          <div className="flex flex-col items-center">
            {'ENGINEER'.split('').map((char, i) => (
              <span
                key={i}
                className="text-[13.5vw] block"
                style={textFillStyle}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop: Layout Horizontal Klasik */}
        <div className="hidden sm:flex flex-col items-center justify-center text-center font-sans font-black uppercase tracking-tighter select-none whitespace-nowrap gap-2 lg:gap-0 leading-none origin-center overflow-visible">
          <span
            className="text-[15vw] lg:text-[18vw] block"
            style={textFillStyle}
          >
            SOFTWARE
          </span>
          <span
            className="text-[15vw] lg:text-[18vw] block"
            style={textFillStyle}
          >
            ENGINEER
          </span>
        </div>
      </div>

      {/* 2. LAYER 1 (MIDDLE): Foto Portrait Syaiful (Tetap diam di tempat / Fixed) */}
      <div
        ref={photoRef}
        className="relative z-10 w-full flex justify-center items-end group cursor-pointer h-[100vh] -translate-y-24 sm:translate-y-0"
      >
        <div className="relative h-full w-full flex items-end justify-center overflow-visible">
          <img
            src={syaifulImg}
            alt="M. Syaiful - Full Stack Web Developer"
            className="h-[75vh] sm:h-full w-auto max-w-none object-contain object-bottom filter grayscale contrast-105 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out transform scale-110 sm:scale-100 origin-bottom group-hover:scale-115 sm:group-hover:scale-[1.015]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
          />
        </div>
      </div>

      {/* 3. Bottom Centered Scroll Down Arrow Indicator */}
      <div
        className="absolute bottom-2 right-6 sm:right-12 z-30 hidden sm:block transition-opacity duration-300"
        style={{ opacity: Math.max(1 - scrollProgress * 2, 0) }}
      >
        <a
          href="#about"
          className="p-2 text-[#78716C] hover:text-[#C25E3E] transition-colors group flex items-center gap-1 text-xs font-mono"
          aria-label="Scroll to About section"
        >
          <span>scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#1E1E1E] group-hover:text-[#C25E3E]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
