import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bisnis from './pages/Bisnis';
import ProjectKami from './pages/ProjectKami';
import KebijakanPrivasi from './pages/KebijakanPrivasi';
import SyaratKetentuan from './pages/SyaratKetentuan';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import WhatsappFloat from './components/WhatsappFloat';

// Helper component to handle scrolling to section on route change (both pathname and hash)
const ScrollToHashElement: React.FC = () => {
  const { hash, pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Parse the subpath from the URL pathname (e.g. "/id/tentang-saya" => "tentang-saya")
    const segments = pathname.split('/').filter(Boolean);
    const subPath = segments[1];

    let targetId = '';

    if (subPath) {
      // Check if subpath is a registered section and resolve to target element ID
      if (subPath === 'tentang-saya' || subPath === 'about-me' || subPath === 'about') {
        targetId = language === 'id' ? 'tentang-saya' : 'about-me';
      } else if (subPath === 'pengalaman' || subPath === 'experience') {
        targetId = 'experience';
      } else if (subPath === 'skills') {
        targetId = 'skills';
      } else if (subPath === 'portofolio' || subPath === 'work') {
        targetId = 'work';
      } else if (subPath === 'kontak' || subPath === 'contact') {
        targetId = 'contact';
      }
    } else if (hash) {
      // Fallback to hash support if present
      let hashId = hash.replace('#', '');
      if (hashId === 'about' || hashId === 'about-me') {
        targetId = language === 'id' ? 'tentang-saya' : 'about-me';
      } else if (hashId === 'tentang-saya') {
        targetId = language === 'en' ? 'about-me' : 'tentang-saya';
      } else {
        targetId = hashId;
      }
    }

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    } else {
      // Only scroll to top if we're not on a different subpage (like /bisnis, /project-kami, etc.)
      const isSubPage = ['bisnis', 'project-kami', 'kebijakan-privasi', 'syarat-dan-ketentuan'].includes(subPath || '');
      if (!isSubPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [hash, pathname, language]);

  return null;
};

// Layout component to validate the language code
const LanguageLayout: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  if (lang !== 'id' && lang !== 'en') {
    const saved = localStorage.getItem('portfolio_lang');
    const defaultLang = (saved === 'id' || saved === 'en') ? saved : 'id';
    return <Navigate to={`/${defaultLang}`} replace />;
  }
  return <Outlet />;
};

// Redirect component for root path
const RootRedirect: React.FC = () => {
  const saved = localStorage.getItem('portfolio_lang');
  const lang = (saved === 'id' || saved === 'en') ? saved : 'id';
  const location = useLocation();

  // If path is a section path, redirect to lang subpath
  const segments = location.pathname.split('/').filter(Boolean);
  const requestedPath = segments[0]; // e.g. "tentang-saya" or "about-me"
  
  let targetPath = '';
  if (requestedPath) {
    if (requestedPath === 'tentang-saya' || requestedPath === 'about-me' || requestedPath === 'about') {
      targetPath = lang === 'id' ? 'tentang-saya' : 'about-me';
    } else if (requestedPath === 'pengalaman' || requestedPath === 'experience') {
      targetPath = lang === 'id' ? 'pengalaman' : 'experience';
    } else if (requestedPath === 'skills') {
      targetPath = 'skills';
    } else if (requestedPath === 'portofolio' || requestedPath === 'work') {
      targetPath = lang === 'id' ? 'portofolio' : 'work';
    } else if (requestedPath === 'kontak' || requestedPath === 'contact') {
      targetPath = lang === 'id' ? 'kontak' : 'contact';
    } else if (['bisnis', 'project-kami', 'kebijakan-privasi', 'syarat-dan-ketentuan'].includes(requestedPath)) {
      targetPath = requestedPath;
    }
  }

  let currentHash = location.hash;
  if (lang === 'en' && currentHash === '#tentang-saya') {
    currentHash = '#about-me';
  } else if (lang === 'id' && (currentHash === '#about-me' || currentHash === '#about')) {
    currentHash = '#tentang-saya';
  }

  const destination = targetPath ? `/${lang}/${targetPath}` : `/${lang}`;
  return <Navigate to={`${destination}${location.search}${currentHash}`} replace />;
};

// Redirect component for specific sub-paths
const PathRedirect: React.FC<{ target: string }> = ({ target }) => {
  const saved = localStorage.getItem('portfolio_lang');
  const lang = (saved === 'id' || saved === 'en') ? saved : 'id';
  const location = useLocation();

  let currentHash = location.hash;
  if (lang === 'en' && currentHash === '#tentang-saya') {
    currentHash = '#about-me';
  } else if (lang === 'id' && (currentHash === '#about-me' || currentHash === '#about')) {
    currentHash = '#tentang-saya';
  }

  return <Navigate to={`/${lang}/${target}${location.search}${currentHash}`} replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToHashElement />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/:lang" element={<LanguageLayout />}>
                <Route index element={<Home />} />
                {/* Section subpaths that render the main Home page */}
                <Route path="tentang-saya" element={<Home />} />
                <Route path="about-me" element={<Home />} />
                <Route path="pengalaman" element={<Home />} />
                <Route path="experience" element={<Home />} />
                <Route path="skills" element={<Home />} />
                <Route path="portofolio" element={<Home />} />
                <Route path="work" element={<Home />} />
                <Route path="kontak" element={<Home />} />
                <Route path="contact" element={<Home />} />

                <Route path="bisnis" element={<Bisnis />} />
                <Route path="project-kami" element={<ProjectKami />} />
                <Route path="kebijakan-privasi" element={<KebijakanPrivasi />} />
                <Route path="syarat-dan-ketentuan" element={<SyaratKetentuan />} />
              </Route>
              
              {/* Redirect root and other root-level paths */}
              <Route path="/" element={<RootRedirect />} />
              <Route path="/bisnis" element={<PathRedirect target="bisnis" />} />
              <Route path="/project-kami" element={<PathRedirect target="project-kami" />} />
              <Route path="/kebijakan-privasi" element={<PathRedirect target="kebijakan-privasi" />} />
              <Route path="/syarat-dan-ketentuan" element={<PathRedirect target="syarat-dan-ketentuan" />} />
              {/* Fallback for any other route */}
              <Route path="*" element={<RootRedirect />} />
            </Routes>
          </div>
          <Footer />
          <WhatsappFloat />
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;

