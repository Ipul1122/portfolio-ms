import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bisnis from './pages/Bisnis';
import ProjectKami from './pages/ProjectKami';
import KebijakanPrivasi from './pages/KebijakanPrivasi';
import SyaratKetentuan from './pages/SyaratKetentuan';

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

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bisnis" element={<Bisnis />} />
            <Route path="/project-kami" element={<ProjectKami />} />
            <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
            <Route path="/syarat-dan-ketentuan" element={<SyaratKetentuan />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
