import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bisnis from './pages/Bisnis';
import ProjectKami from './pages/ProjectKami';
import KebijakanPrivasi from './pages/KebijakanPrivasi';
import SyaratKetentuan from './pages/SyaratKetentuan';
import { LanguageProvider } from './context/LanguageContext';

// Helper component to handle scrolling to hash element on route change
const ScrollToHashElement: React.FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find element by id
      const element = document.getElementById(hash.replace('#', ''));
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

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
  return <Navigate to={`/${lang}`} replace />;
};

// Redirect component for specific sub-paths
const PathRedirect: React.FC<{ target: string }> = ({ target }) => {
  const saved = localStorage.getItem('portfolio_lang');
  const lang = (saved === 'id' || saved === 'en') ? saved : 'id';
  const location = useLocation();
  return <Navigate to={`/${lang}/${target}${location.search}${location.hash}`} replace />;
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
        </div>
      </LanguageProvider>
    </Router>
  );
};

export default App;

