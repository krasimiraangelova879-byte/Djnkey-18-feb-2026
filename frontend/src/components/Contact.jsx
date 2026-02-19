import React, { useState } from 'react';
import { djInfo } from '../data/mock';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: t('contact.successTitle'),
      description: t('contact.successMessage'),
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-light-section">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading text-white">
            {t('contact.title')}
          </h2>
          <p className="body-large text-white/70">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="card-heading text-white mb-6">
                {t('contact.title')}
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-accent" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide mb-1">
                    {t('contact.email')}
                  </div>
                  <a href={`mailto:${djInfo.email}`} className="text-white hover:text-primary-accent transition-colors duration-200 text-lg">
                    {djInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-accent" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide mb-1">
                    {t('contact.phone')}
                  </div>
                  <a href={`tel:${djInfo.phone}`} className="text-white hover:text-primary-accent transition-colors duration-200 text-lg">
                    {djInfo.phone}
                  </a>
                </div>
              </div>

              {/* Viber */}
              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-purple-500" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide mb-1">
                    {t('contact.viber')}
                  </div>
                  <a 
                    href={`viber://chat?number=%2B${djInfo.viber.replace(/[\s+]/g, '')}`}
                    className="text-white hover:text-purple-500 transition-colors duration-200 text-lg"
                  >
                    {djInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-bg p-8 rounded-lg">
            <h3 className="card-heading text-white mb-6">
              {t('contact.formTitle')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.emailLabel')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.phoneLabel')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white"
                  placeholder={t('contact.phonePlaceholder')}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">
                  {t('contact.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="cta-button w-full bg-primary-accent text-black hover:bg-primary-accent-hover flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {t('contact.submit')}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
