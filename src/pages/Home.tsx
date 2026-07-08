import React, { useEffect, useState } from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ExperienceSection from '../sections/ExperienceSection';
import WorkSection from '../sections/WorkSection';
import ContactSection from '../sections/ContactSection';
import { useLanguage } from '../context/LanguageContext';

const ScrollNavFloat: React.FC = () => {
  const { language } = useLanguage();
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const aboutId = language === 'id' ? 'tentang-saya' : 'about-me';
  const sectionIds = ['home', aboutId, 'experience', 'skills', 'work', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      setCanScrollUp(currentY > 10);
      setCanScrollDown(currentY < maxScroll - 10);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionPath = (id: string) => {
    if (id === 'tentang-saya' || id === 'about-me') return id;
    if (id === 'experience') return language === 'id' ? 'pengalaman' : 'experience';
    if (id === 'skills') return 'skills';
    if (id === 'work') return language === 'id' ? 'portofolio' : 'work';
    if (id === 'contact') return language === 'id' ? 'kontak' : 'contact';
    return '';
  };

  const handleScrollToNext = () => {
    const currentY = window.scrollY;
    const headerOffset = 80;
    
    const sectionPositions = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      return {
        id,
        top: el.getBoundingClientRect().top + window.pageYOffset - headerOffset
      };
    }).filter((pos): pos is { id: string; top: number } => pos !== null);
    
    // Find the first section that starts below the current scroll line (+ 15px buffer)
    const nextSection = sectionPositions.find(pos => pos.top > currentY + 15);
    
    if (nextSection) {
      window.scrollTo({ top: nextSection.top, behavior: 'smooth' });
      const path = getSectionPath(nextSection.id);
      window.history.pushState(null, '', path ? `/${language}/${path}` : `/${language}`);
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
      // Clear section subpath at the absolute bottom
      window.history.pushState(null, '', `/${language}`);
    }
  };

  const handleScrollToPrev = () => {
    const currentY = window.scrollY;
    const headerOffset = 80;
    
    const sectionPositions = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      return {
        id,
        top: el.getBoundingClientRect().top + window.pageYOffset - headerOffset
      };
    }).filter((pos): pos is { id: string; top: number } => pos !== null);
    
    // Find the sections that are above the current scroll line (- 15px buffer)
    const prevSection = [...sectionPositions].reverse().find(pos => pos.top < currentY - 15);
    
    if (prevSection) {
      window.scrollTo({ top: prevSection.top, behavior: 'smooth' });
      const path = getSectionPath(prevSection.id);
      window.history.pushState(null, '', path ? `/${language}/${path}` : `/${language}`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Clear section subpath at the absolute top
      window.history.pushState(null, '', `/${language}`);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[9999] flex flex-col gap-2 bg-black/60 backdrop-blur-md border border-indigo-500/20 rounded-full p-1.5 shadow-2xl transition-all duration-300 hover:border-indigo-500/40">
      {/* Up Button */}
      <button
        onClick={handleScrollToPrev}
        disabled={!canScrollUp}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          canScrollUp
            ? 'bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white hover:scale-105 active:scale-95'
            : 'text-gray-600 bg-gray-900/10 cursor-not-allowed opacity-40'
        }`}
        title="Scroll Up"
        aria-label="Scroll Up"
      >
        <i className="fas fa-chevron-up text-sm animate-bounce-subtle" />
      </button>

      {/* Down Button */}
      <button
        onClick={handleScrollToNext}
        disabled={!canScrollDown}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          canScrollDown
            ? 'bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white hover:scale-105 active:scale-95'
            : 'text-gray-600 bg-gray-900/10 cursor-not-allowed opacity-40'
        }`}
        title="Scroll Down"
        aria-label="Scroll Down"
      >
        <i className="fas fa-chevron-down text-sm animate-bounce-subtle" />
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-hidden').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
      <ScrollNavFloat />
    </div>
  );
};

export default Home;
