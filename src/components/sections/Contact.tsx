import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Copy, Check, Send, Sparkles, Mail, MapPin, ArrowUpRight, Code, Share2, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const emailAddress = 'syaiful.work@gmail.com';
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C25E3E', '#8B5E3C', '#E2DDD5', '#1E1E1E'],
        });
      } catch (err) {}
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 px-5 sm:px-8 bg-[#FDFBF7]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD5]">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 text-[#C25E3E] font-mono text-xs uppercase tracking-widest mb-2">
              <span className="w-6 h-[1px] bg-[#C25E3E]" />
              <span>04 / Direct Transmission</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1E1E1E]">
              Get In Touch & Collaborate
            </h2>
          </div>
          <p data-aos="fade-left" className="text-[#6E6A67] text-sm max-w-xs mt-4 md:mt-0 font-mono">
            Have a project in mind, an architectural challenge, or a role to discuss?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Direct Communication Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            {/* Quick Copy Card */}
            <Card className="bg-[#F4F0EA] border-[#E2DDD5] shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C25E3E] uppercase tracking-wider mb-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Dispatch</span>
                </div>
                <CardTitle className="text-xl sm:text-2xl break-all">{emailAddress}</CardTitle>
                <CardDescription className="text-xs">
                  Fastest route for technical consulting, architecture audits, and full-time inquiries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleCopyEmail}
                  variant={copied ? 'secondary' : 'default'}
                  size="default"
                  magnetic={true}
                  className="w-full gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Availability Badge Card */}
            <div className="p-6 rounded-3xl bg-[#F4F0EA]/60 border border-[#E2DDD5] space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-serif font-bold text-[#1E1E1E] text-sm">
                  Active Consulting Status
                </span>
              </div>
              <p className="text-xs text-[#6E6A67] leading-relaxed">
                Currently open to select technical advisory, architecture consulting contracts, and senior engineering roles for 2026.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#6E6A67] border-t border-[#E2DDD5]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C25E3E]" />
                  Jakarta, ID (GMT+7)
                </span>
                <span>Response &lt; 24h</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#6E6A67]">
                Connect Across Channels
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'GitHub', icon: Code, href: 'https://github.com' },
                  { name: 'LinkedIn', icon: Share2, href: 'https://linkedin.com' },
                  { name: 'Journal / Blog', icon: Globe, href: 'https://twitter.com' },
                ].map((s) => (
                  <Button
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    size="sm"
                    magnetic={true}
                    className="gap-1.5 bg-[#FDFBF7]"
                  >
                    <s.icon className="w-3.5 h-3.5 text-[#C25E3E]" />
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#6E6A67]" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Minimalist Contact Form (7 cols) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <Card className="bg-[#F4F0EA] border-[#E2DDD5] shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C25E3E] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Transmission Channel</span>
                </div>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the details below and I will get back to you promptly.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <div className="py-10 text-center flex flex-col items-center justify-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#C25E3E]/10 text-[#C25E3E] flex items-center justify-center">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1E1E1E]">
                      Transmission Received
                    </h3>
                    <p className="text-sm text-[#6E6A67] max-w-sm leading-relaxed">
                      Thank you for reaching out, {formData.name || 'friend'}. I will review your requirements and reply within one business day.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
                      }}
                      variant="outline"
                      size="sm"
                      className="mt-3"
                    >
                      <span>Transmit Another Message</span>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-2">
                          Your Name *
                        </label>
                        <Input
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="e.g. john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-2">
                        Subject / Domain
                      </label>
                      <Input
                        placeholder="e.g. Architecture Consulting / Full-Stack Project"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6A67] mb-2">
                        Project Details / Inquiry *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell me about your project goals, scope, timeline, or engineering challenge..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="terracotta"
                      size="lg"
                      magnetic={true}
                      className="w-full gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
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
