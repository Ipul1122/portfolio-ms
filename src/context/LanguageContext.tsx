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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);

    // Swap the language prefix in the URL
    const segments = location.pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    if (firstSegment === 'id' || firstSegment === 'en') {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }
    const newPath = '/' + segments.join('/') + location.search + location.hash;
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
