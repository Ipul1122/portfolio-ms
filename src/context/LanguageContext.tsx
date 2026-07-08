import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '../data/translations';
import type { TranslationDict } from '../data/translations';

export type Language = 'id' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDict) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to parse language from path
  const getLanguageFromPath = (path: string): Language => {
    const segments = path.split('/').filter(Boolean);
    const firstSegment = segments[0];
    if (firstSegment === 'id' || firstSegment === 'en') {
      return firstSegment as Language;
    }
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'id' || saved === 'en') ? (saved as Language) : 'id';
  };

  const [language, setLanguageState] = useState<Language>(() => getLanguageFromPath(location.pathname));

  // Sync state with URL pathname changes (e.g. back/forward navigation)
  useEffect(() => {
    const lang = getLanguageFromPath(location.pathname);
    setLanguageState(lang);
  }, [location.pathname]);

  // Dynamically update document title, HTML lang, meta description, and canonical link
  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'id') {
      document.title = 'Muhammad Syaifulloh (MSyaifulloh) - Web Developer & UI/UX Designer';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Portfolio resmi Muhammad Syaifulloh (M Syaifulloh). Web Developer profesional spesialis Laravel, PHP, dan React. Lihat karya dan hubungi MSyaifulloh di sini.');
      }
    } else {
      document.title = 'Muhammad Syaifulloh (MSyaifulloh) - Web Developer & UI/UX Designer Portfolio';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Official portfolio of Muhammad Syaifulloh. Professional Web Developer specializing in Laravel, PHP, and React. View projects and contact me.');
      }
    }

    // Set canonical link for indexing
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', 'https://msyaifulloh.my.id' + location.pathname);
  }, [language, location.pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);

    // Swap the language prefix and subpath in the URL
    const segments = location.pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    if (firstSegment === 'id' || firstSegment === 'en') {
      segments[0] = lang;
      
      // Map section subpath if present
      const secondSegment = segments[1];
      if (secondSegment) {
        if (lang === 'en') {
          if (secondSegment === 'tentang-saya') segments[1] = 'about-me';
          else if (secondSegment === 'pengalaman') segments[1] = 'experience';
          else if (secondSegment === 'portofolio') segments[1] = 'work';
          else if (secondSegment === 'kontak') segments[1] = 'contact';
        } else if (lang === 'id') {
          if (secondSegment === 'about-me' || secondSegment === 'about') segments[1] = 'tentang-saya';
          else if (secondSegment === 'experience') segments[1] = 'pengalaman';
          else if (secondSegment === 'work') segments[1] = 'portofolio';
          else if (secondSegment === 'contact') segments[1] = 'kontak';
        }
      }
    } else {
      segments.unshift(lang);
    }

    // Map the hash based on the target language (for backward compatibility/fallback)
    let currentHash = location.hash;
    if (lang === 'en') {
      if (currentHash === '#tentang-saya') {
        currentHash = '#about-me';
      }
    } else if (lang === 'id') {
      if (currentHash === '#about-me' || currentHash === '#about') {
        currentHash = '#tentang-saya';
      }
    }

    const newPath = '/' + segments.join('/') + location.search + currentHash;
    navigate(newPath);
  };

  const t = (key: keyof TranslationDict): string => {
    return translations[language][key] || translations['id'][key] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
