import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhatsappFloat: React.FC = () => {
  const { t } = useLanguage();
  const phone = '6285693672730';
  const message = t('whatsappMessage');
  const encodedMessage = encodeURIComponent(message);
  const waURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group flex items-center">
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out whitespace-nowrap bg-black/85 backdrop-blur-md text-xs font-semibold py-2 px-3.5 rounded-full border border-emerald-500/20 text-emerald-400 shadow-2xl flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {t('whatsappTooltip')}
      </span>

      {/* Button */}
      <a
        href={waURL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:bg-[#20ba59] active:scale-95 cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-35 animate-ping" />

        {/* Custom SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.83.002-2.623-1.01-5.09-2.855-6.94C16.638 1.986 14.191.966 11.6.966c-5.438 0-9.862 4.414-9.866 9.832-.001 1.762.477 3.48 1.384 5.002l-.952 3.483 3.578-.938zm10.741-6.195c-.3-.15-1.774-.875-2.046-.974-.272-.1-.47-.15-.667.15-.197.3-.762.974-.934 1.173-.172.2-.344.225-.644.075-.3-.15-1.265-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.462.13-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.667-1.605-.914-2.198-.24-.577-.487-.5-.667-.51-.173-.008-.371-.01-.57-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.272.495 1.708.634.717.228 1.37.195 1.887.118.577-.087 1.774-.725 2.022-1.425.247-.7.247-1.3.173-1.425-.074-.125-.272-.2-.572-.35z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsappFloat;
