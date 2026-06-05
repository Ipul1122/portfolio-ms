import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400 mt-auto">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Muhammad Syaifulloh. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/kebijakan-privasi" className="hover:text-white transition">
              Kebijakan Privasi
            </Link>
            <Link to="/syarat-dan-ketentuan" className="hover:text-white transition">
              Syarat dan Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
