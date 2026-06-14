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

  const inputStyle: React.CSSProperties = {
    background: 'rgba(25, 25, 31, 0.5)',
    border: '1px solid rgba(163, 166, 255, 0.08)',
    color: '#f9f5fd',
    borderRadius: '12px',
  };

  const inputFocusClass = 'focus:border-[rgba(163,166,255,0.3)] focus:ring-1 focus:ring-[rgba(163,166,255,0.15)]';

  return (
    <section id="contact" className="py-24 border-t" style={{ background: '#0e0e13', borderColor: 'rgba(163, 166, 255, 0.04)' }}>
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-hidden fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">{t('contactHeading')}</h2>
            <p className="text-xl font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>{t('contactSubheading')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-hidden fade-up">
            <div className="space-y-8">
              {[
                { icon: 'fas fa-envelope', title: t('contactEmail'), value: 'msyaifulloh2024@gmail.com' },
                { icon: 'fas fa-phone', title: t('contactPhone'), value: '+62 856 9367 2730' },
                { icon: 'fas fa-map-marker-alt', title: t('contactLocation'), value: 'DKI Jakarta, Indonesia' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(163, 166, 255, 0.08)', border: '1px solid rgba(163, 166, 255, 0.1)' }}
                  >
                    <i className={item.icon} style={{ color: '#a3a6ff' }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 font-heading" style={{ color: '#f9f5fd' }}>{item.title}</h3>
                    <p className="font-light" style={{ color: 'rgba(249, 245, 253, 0.45)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                id="contact-name"
                type="text"
                placeholder={t('contactPlaceholderName')}
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-5 py-3.5 outline-none transition duration-300 ${inputFocusClass}`}
                style={inputStyle}
                required
              />
              <input
                id="contact-email"
                type="email"
                placeholder={t('contactPlaceholderEmail')}
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-5 py-3.5 outline-none transition duration-300 ${inputFocusClass}`}
                style={inputStyle}
                required
              />
              <textarea
                id="contact-message"
                placeholder={t('contactPlaceholderMessage')}
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-5 py-3.5 outline-none transition resize-none duration-300 ${inputFocusClass}`}
                style={inputStyle}
                required
              />
              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300"
                style={{
                  background: '#6366f1',
                  color: '#f9f5fd',
                  boxShadow: '0 0 16px rgba(99, 102, 241, 0.25)',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.boxShadow = '0 0 28px rgba(99, 102, 241, 0.45)';
                  (e.target as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.boxShadow = '0 0 16px rgba(99, 102, 241, 0.25)';
                  (e.target as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
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
