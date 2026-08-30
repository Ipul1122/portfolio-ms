import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F4F0EA] border-t border-[#E2DDD5] pt-14 pb-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[#E2DDD5]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#1E1E1E] text-[#FDFBF7] flex items-center justify-center font-serif font-bold text-sm">
                MS
              </div>
              <span className="font-serif font-bold text-lg text-[#1E1E1E] tracking-wide">
                M. Syaiful
              </span>
            </div>
            <p className="text-xs text-[#6E6A67] font-mono max-w-sm">
              Engineering architectural clarity, high-performance systems, and human-crafted digital experiences.
            </p>
          </div>

          {/* Time & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="p-3 px-4 rounded-2xl bg-[#FDFBF7] border border-[#E2DDD5] text-xs font-mono">
              <div className="text-[#6E6A67] text-[10px] uppercase tracking-wider mb-0.5">
                Jakarta Local Time (WIB)
              </div>
              <div className="text-[#1E1E1E] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentTime || '07:00:00 AM (GMT+7)'}</span>
              </div>
            </div>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              magnetic={true}
              className="gap-2 bg-[#FDFBF7]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C25E3E]" />
            </Button>
          </div>
        </div>

        {/* Bottom Credits & Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E6A67]">
          <div>
            © {new Date().getFullYear()} M. Syaiful. Crafted with Warm Minimalist Design.
          </div>

          <div className="flex items-center gap-5">
            <a href="#home" className="hover:text-[#C25E3E] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C25E3E] transition-colors">About</a>
            <a href="#skill" className="hover:text-[#C25E3E] transition-colors">Skill</a>
            <a href="#experience" className="hover:text-[#C25E3E] transition-colors">Experience</a>
            <a href="#gallery" className="hover:text-[#C25E3E] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#C25E3E] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
