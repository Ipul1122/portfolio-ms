import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) via CDN
    if (window.AOS) {
      window.AOS.init({
        duration: 750,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#FDFBF7] text-[#1E1E1E] selection:bg-[#C25E3E] selection:text-[#FDFBF7] font-sans antialiased overflow-x-hidden">
        {/* Sticky / Floating Navigation */}
        <Navbar />

        {/* Main Single Page Application Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
