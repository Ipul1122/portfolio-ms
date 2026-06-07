import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phone = '6285693672730';
    const template = t('contactWaGreeting');
    const waMessage = template
      .replace('[name]', name)
      .replace('[email]', email)
      .replace('[message]', message);
    const encodedMessage = encodeURIComponent(waMessage);
    const waURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(waURL, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('contact-', '')]: value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-hidden fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">{t('contactHeading')}</h2>
            <p className="text-xl text-gray-400 font-light">{t('contactSubheading')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-hidden fade-up">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white font-heading">{t('contactEmail')}</h3>
                  <p className="text-gray-400 font-light">msyaifulloh2024@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white font-heading">{t('contactPhone')}</h3>
                  <p className="text-gray-400 font-light">+62 856 9367 2730</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white font-heading">{t('contactLocation')}</h3>
                  <p className="text-gray-400 font-light">DKI Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input 
                id="contact-name" 
                type="text" 
                placeholder={t('contactPlaceholderName')}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-white/40 focus:ring-1 focus:ring-white/20 outline-none transition duration-300" 
                required 
              />
              <input 
                id="contact-email" 
                type="email" 
                placeholder={t('contactPlaceholderEmail')}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-white/40 focus:ring-1 focus:ring-white/20 outline-none transition duration-300" 
                required 
              />
              <textarea 
                id="contact-message" 
                placeholder={t('contactPlaceholderMessage')}
                rows={4} 
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-white/40 focus:ring-1 focus:ring-white/20 outline-none transition resize-none duration-300" 
                required
              ></textarea>
              <button type="submit" className="w-full px-8 py-3.5 bg-white text-black border border-transparent rounded hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold tracking-wide">
                {t('contactBtnSend')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
