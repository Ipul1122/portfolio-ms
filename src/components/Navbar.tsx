import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLink = (hash: string, label: string) => {
    if (isHome) {
      return (
        <a
          href={hash}
          className="text-gray-600 hover:text-primary transition duration-300 font-medium"
          onClick={(e) => {
            e.preventDefault();
            const targetId = hash.replace('#', '');
            const element = document.getElementById(targetId);
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
            setIsMobileMenuOpen(false);
          }}
        >
          {label}
        </a>
      );
    } else {
      return (
        <Link
          to={`/${hash}`}
          className="text-gray-600 hover:text-primary transition duration-300 font-medium"
        >
          {label}
        </Link>
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur' : 'bg-transparent'
      }`}
      id="header"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition duration-300">
            <div className="bg-primary text-white font-bold text-lg px-3 py-1.5 rounded-lg">MS</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLink('#about', 'About')}
            {navLink('#skills', 'Skills')}
            {navLink('#work', 'Portfolio')}
            
            <Link
              to="/bisnis"
              className={`hover:text-primary transition duration-300 font-medium flex items-center gap-1 ${
                location.pathname === '/bisnis' ? 'text-primary font-bold' : 'text-gray-600'
              }`}
            >
             
            </Link>

            {isHome ? (
              <a
                href="#contact"
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                Contact
              </a>
            ) : (
              <Link
                to="/#contact"
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-medium"
              >
                Contact
              </Link>
            )}
          </div>

          <button
            id="menu-btn"
            className="md:hidden focus:outline-none text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden nav-blur ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="menu-mobile">
        <div className="container mx-auto px-6 py-4 space-y-2">
          {isHome ? (
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </a>
          ) : (
            <Link to="/#about" className="block py-2 text-gray-600 hover:text-primary transition">
              About
            </Link>
          )}

          {isHome ? (
            <a
              href="#skills"
              className="block py-2 text-gray-600 hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('skills');
                if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Skills
            </a>
          ) : (
            <Link to="/#skills" className="block py-2 text-gray-600 hover:text-primary transition">
              Skills
            </Link>
          )}

          {isHome ? (
            <a
              href="#work"
              className="block py-2 text-gray-600 hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('work');
                if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Portfolio
            </a>
          ) : (
            <Link to="/#work" className="block py-2 text-gray-600 hover:text-primary transition">
              Portfolio
            </Link>
          )}

          <Link
            to="/bisnis"
            className="block py-2 text-primary font-bold hover:text-secondary transition bg-gray-50 px-4 rounded-lg -mx-4"
          >
            Layanan & Produk Bisnis
          </Link>

          {isHome ? (
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-primary transition"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </a>
          ) : (
            <Link to="/#contact" className="block py-2 text-gray-600 hover:text-primary transition">
              Contact
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
