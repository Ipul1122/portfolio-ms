import React, { useState, useEffect, useRef } from 'react';
import { animate, scrambleText } from 'animejs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import {
  Check,
  Send,
  Sparkles,
  MapPin,
  ArrowUpRight,
  Code,
  Share2,
  MessageSquare,
  Mail,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';

export const Contact: React.FC = () => {
  const { lang, t } = useLanguage();
  const emailAddress = 'msyaifulloh2024@gmail.com';
  const whatsappNumber = '6285693672730';
  const linkedinUrl = 'https://www.linkedin.com/in/muhammad-syaifulloh-99a233305/';
  const githubUrl = 'https://github.com/Ipul1122';

  const [selectedTopic, setSelectedTopic] = useState<string>('Full-Stack Web Project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Web Project',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Anime.js scramble refs
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  const topicOptions = [
    {
      id: 'fullstack',
      label: lang === 'ID' ? 'Proyek Fullstack Web' : 'Full-Stack Web Project',
      value: 'Full-Stack Web Project (Laravel / React)',
    },
    {
      id: 'architecture',
      label: lang === 'ID' ? 'Audit Arsitektur Sistem' : 'System Architecture Audit',
      value: 'System Architecture & Database Audit',
    },
    {
      id: 'mentoring',
      label: lang === 'ID' ? 'Mentoring & Asistensi' : 'Mentoring / Teaching',
      value: 'Programming Mentoring / Code Review',
    },
    {
      id: 'collaboration',
      label: lang === 'ID' ? 'Peluang Kerja / Karir' : 'Hiring & Collaboration',
      value: 'Career Opportunity / Collaboration',
    },
  ];

  const handleSelectTopic = (topic: { label: string; value: string }) => {
    setSelectedTopic(topic.label);
    setFormData((prev) => ({ ...prev, subject: topic.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#C25E3E', '#8B5E3C', '#E2DDD5', '#1E1E1E', '#10B981'],
        });
      } catch (err) {}
    }, 850);
  };

  const runHeaderScramble = () => {
    if (badgeRef.current) {
      animate(badgeRef.current, {
        innerHTML: scrambleText({
          text: t('contact.overline'),
          chars: 'uppercase',
          cursor: '_',
          duration: 1400,
        }),
      });
    }

    if (headingRef.current) {
      animate(headingRef.current, {
        innerHTML: scrambleText({
          text: t('contact.title'),
          chars: 'a-zA-Z0-9 &',
          cursor: true,
          duration: 1800,
        }),
      });
    }

    if (descRef.current) {
      animate(descRef.current, {
        innerHTML: scrambleText({
          text: t('contact.desc'),
          chars: 'a-zA-Z0-9 ',
          cursor: false,
          duration: 1600,
        }),
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            runHeaderScramble();
            hasAnimatedRef.current = true;
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasAnimatedRef.current) {
      runHeaderScramble();
    }
  }, [lang]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 px-5 sm:px-8 lg:px-12 bg-[#FDFBF7] border-t border-[#E2DDD5] scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#E2DDD5]">
          <div className="max-w-2xl">
            {/* Overline Badge */}
            <div
              className="flex items-center gap-2 mb-3 cursor-pointer group w-fit"
              onClick={runHeaderScramble}
              title="Click to replay anime.js scramble"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C25E3E] group-hover:scale-125 transition-transform" />
              <span
                ref={badgeRef}
                className="font-mono text-xs uppercase tracking-[0.2em] text-[#78716C] font-semibold group-hover:text-[#C25E3E] transition-colors"
              >
                {t('contact.overline')}
              </span>
            </div>

            {/* Main Heading */}
            <h2
              ref={headingRef}
              onClick={runHeaderScramble}
              className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] leading-[1.15] tracking-tight cursor-pointer"
            >
              {t('contact.title')}
            </h2>
          </div>

          {/* Description */}
          <div className="mt-4 md:mt-0 max-w-sm">
            <p
              ref={descRef}
              className="text-xs sm:text-sm text-[#78716C] font-mono leading-relaxed"
            >
              {t('contact.desc')}
            </p>
          </div>
        </div>

        {/* Two-Column Grid: G-Maps Embed & Direct Channels (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (6 cols): Google Maps Card & Channels */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Google Maps Embed Card */}
            <Card className="bg-[#F4F0EA] border-[#E2DDD5] shadow-warm-sm hover:shadow-warm-md transition-all rounded-3xl overflow-hidden flex flex-col flex-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C25E3E] uppercase tracking-wider font-semibold">
                    <Navigation className="w-4 h-4" />
                    <span>{lang === 'ID' ? 'Peta Lokasi & Teritorial' : 'Location Map'}</span>
                  </div>
                  <Badge variant="terracotta" className="text-[10px] font-mono">
                    Jakarta Barat, ID
                  </Badge>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-[#1E1E1E]">
                  Masjid Nurul Haq & Sekitarnya
                </CardTitle>
                <CardDescription className="text-xs text-[#6E6A67]">
                  {lang === 'ID'
                    ? 'Tersedia untuk pertemuan tatap muka di wilayah Jakarta Barat & sekitarnya, maupun kolaborasi jarak jauh (remote).'
                    : 'Available for on-site meetings across West Jakarta area & remote collaborations worldwide.'}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 flex-1 flex flex-col">
                {/* Responsive Map Embed Container */}
                <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] bg-[#1E1E1E] overflow-hidden border-y border-[#E2DDD5]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d554.2545224745683!2d106.7989057953049!3d-6.163920722507781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1788072660676!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Google Maps Location - Jakarta Barat"
                    className="w-full h-full min-h-[280px] sm:min-h-[320px] filter contrast-[1.03]"
                  />
                </div>

                {/* Map Footer Bar */}
                <div className="p-4 sm:p-5 bg-[#FDFBF7] flex items-center justify-between gap-3 text-xs font-mono text-[#6E6A67]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C25E3E]" />
                    <span>-6.16392, 106.79891 (WIB)</span>
                  </div>

                  <a
                    href="https://maps.google.com/?q=-6.163920722507781,106.7989057953049"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#C25E3E] hover:text-[#1E1E1E] font-semibold transition-colors"
                  >
                    <span>{lang === 'ID' ? 'Buka di Maps' : 'Open in Maps'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Direct Instant Channels Card */}
            <div className="p-5 rounded-3xl bg-[#F4F0EA]/80 border border-[#E2DDD5] shadow-warm-sm space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E6A67] font-semibold flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#C25E3E]" />
                <span>{lang === 'ID' ? 'Jalur Kontak Cepat' : 'Direct Instant Channels'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    lang === 'ID'
                      ? 'Halo Syaiful, saya tertarik untuk berdiskusi tentang proyek web / kolaborasi...'
                      : 'Hello Syaiful, I would like to discuss a web project / collaboration...'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    magnetic={true}
                    className="w-full justify-between bg-[#FDFBF7] text-[#1E1E1E] border-[#E2DDD5] hover:border-emerald-600 hover:text-emerald-700 text-xs font-mono cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#6E6A67]" />
                  </Button>
                </a>

                {/* Email Mailto */}
                <a
                  href={`mailto:${emailAddress}?subject=Project%20Inquiry%20from%20Portfolio`}
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    magnetic={true}
                    className="w-full justify-between bg-[#FDFBF7] text-[#1E1E1E] border-[#E2DDD5] hover:border-[#C25E3E] hover:text-[#C25E3E] text-xs font-mono cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#C25E3E]" />
                      <span>Email</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#6E6A67]" />
                  </Button>
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    magnetic={true}
                    className="w-full justify-between bg-[#FDFBF7] text-[#1E1E1E] border-[#E2DDD5] hover:border-[#1E1E1E] text-xs font-mono cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-[#1E1E1E]" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#6E6A67]" />
                  </Button>
                </a>

                {/* LinkedIn */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    magnetic={true}
                    className="w-full justify-between bg-[#FDFBF7] text-[#1E1E1E] border-[#E2DDD5] hover:border-[#0A66C2] hover:text-[#0A66C2] text-xs font-mono cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#6E6A67]" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Direct Message Form */}
          <div className="lg:col-span-6 flex flex-col">
            <Card className="bg-[#F4F0EA] border-[#E2DDD5] shadow-warm-md rounded-3xl overflow-hidden flex flex-col flex-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C25E3E] uppercase tracking-wider font-semibold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'ID' ? 'Formulir Transmisi Pesan' : 'Direct Message Form'}</span>
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-sans font-bold text-[#1E1E1E]">
                  {lang === 'ID' ? 'Kirim Pesan atau Pertanyaan' : 'Send a Message'}
                </CardTitle>
                <CardDescription className="text-xs text-[#6E6A67] leading-relaxed">
                  {lang === 'ID'
                    ? 'Isi formulir di bawah ini untuk mengirimkan rincian kebutuhan Anda secara langsung.'
                    : 'Fill out the details below and I will review and get back to you promptly.'}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center space-y-4 my-auto">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-sans text-2xl font-bold text-[#1E1E1E]">
                      {lang === 'ID' ? 'Pesan Berhasil Terkirim!' : 'Transmission Received!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6A67] max-w-sm leading-relaxed">
                      {lang === 'ID'
                        ? `Terima kasih atas pesan Anda, ${formData.name || 'Rekan'}. Saya akan segera meninjau dan merespons dalam waktu 1x24 jam.`
                        : `Thank you for reaching out, ${formData.name || 'friend'}. I will review your requirements and reply within one business day.`}
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: 'Full-Stack Web Project',
                          message: '',
                        });
                      }}
                      variant="outline"
                      size="sm"
                      className="mt-4 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FDFBF7] text-[#1E1E1E] border-[#E2DDD5] hover:border-[#C25E3E] hover:text-[#C25E3E] cursor-pointer"
                    >
                      <span>{lang === 'ID' ? 'Kirim Pesan Lainnya' : 'Transmit Another Message'}</span>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                    {/* Quick Topic Chips */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-2 font-semibold">
                        {lang === 'ID' ? 'Pilih Topik Pembahasan' : 'Select Topic / Domain'}
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {topicOptions.map((topic) => {
                          const isSelected = selectedTopic === topic.label;
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => handleSelectTopic(topic)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'bg-[#1E1E1E] text-[#FDFBF7] shadow-sm font-semibold'
                                  : 'bg-[#FDFBF7] text-[#6E6A67] hover:text-[#1E1E1E] border border-[#E2DDD5]'
                              }`}
                            >
                              {topic.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-1.5 font-semibold">
                          {t('contact.nameLabel')} *
                        </label>
                        <Input
                          required
                          placeholder={lang === 'ID' ? 'contoh: John Doe' : 'e.g. John Doe'}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-[#FDFBF7] border-[#E2DDD5] focus:border-[#C25E3E] focus:ring-1 focus:ring-[#C25E3E] rounded-2xl text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-1.5 font-semibold">
                          {t('contact.emailLabel')} *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder={lang === 'ID' ? 'contoh: john@company.com' : 'e.g. john@company.com'}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-[#FDFBF7] border-[#E2DDD5] focus:border-[#C25E3E] focus:ring-1 focus:ring-[#C25E3E] rounded-2xl text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-1.5 font-semibold">
                        {lang === 'ID' ? 'Subjek Pesan' : 'Subject'}
                      </label>
                      <Input
                        placeholder={lang === 'ID' ? 'Subjek proyek atau pertanyaan...' : 'Project subject or topic...'}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-[#FDFBF7] border-[#E2DDD5] focus:border-[#C25E3E] focus:ring-1 focus:ring-[#C25E3E] rounded-2xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-1.5 font-semibold">
                        {t('contact.messageLabel')} *
                      </label>
                      <Textarea
                        required
                        rows={4}
                        placeholder={
                          lang === 'ID'
                            ? 'Jelaskan tujuan proyek, perkiraan timeline, atau tantangan teknis yang ingin didiskusikan...'
                            : 'Tell me about your project goals, scope, timeline, or engineering challenge...'
                        }
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#FDFBF7] border-[#E2DDD5] focus:border-[#C25E3E] focus:ring-1 focus:ring-[#C25E3E] rounded-2xl resize-none text-xs"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="terracotta"
                      size="lg"
                      magnetic={true}
                      className="w-full gap-2 rounded-2xl text-xs font-mono uppercase tracking-wider cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <span>{lang === 'ID' ? 'Mengirimkan...' : 'Transmitting...'}</span>
                      ) : (
                        <>
                          <span>{t('contact.sendBtn')}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
