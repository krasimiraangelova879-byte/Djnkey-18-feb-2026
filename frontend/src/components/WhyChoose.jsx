import React from 'react';
import { whyChooseReasons } from '../data/mock';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyChoose = () => {
  const { t, language } = useLanguage();

  return (
    <section id="why-choose" className="section-padding bg-light-section relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/lme2t81r_IMG_1951.jpg"
          alt="DJ NKEY Professional Setup"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-light-section via-light-section/95 to-light-section"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading text-white">
            {t('whyChoose.title')}
          </h2>
          {t('whyChoose.subtitle') && (
            <p className="text-white/70">
              {t('whyChoose.subtitle')}
            </p>
          )}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {whyChooseReasons.map((reason, index) => {
            const title =
              language === 'bg'
                ? reason.title
                : reason.titleEn || reason.title;

            const description =
              language === 'bg'
                ? reason.description
                : reason.descriptionEn || reason.description;

            return (
              <div 
                key={reason.id}
                className="bg-card-bg p-8 rounded-lg hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/30 transition-colors duration-300">
                    <Check size={24} className="text-primary-accent" />
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-accent transition-colors duration-200 pt-2">
                    {title}
                  </h3>
                </div>

                <p className="text-white/70 pl-16">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-3xl mx-auto bg-[#1a1a1c] rounded-xl p-6 md:p-8">

          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">

              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {t('whyChoose.testimonialAuthor')?.charAt(0)}
                </span>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <Star size={12} className="text-white fill-white" />
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold text-lg">
                  {t('whyChoose.testimonialAuthor')}
                </h4>
                {t('whyChoose.testimonialCredentials') && (
                  <p className="text-white/50 text-sm">
                    {t('whyChoose.testimonialCredentials')}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-orange-500 fill-orange-500" />
              ))}
            </div>
            {t('whyChoose.testimonialDate') && (
              <span className="text-white/50 text-sm">
                {t('whyChoose.testimonialDate')}
              </span>
            )}
          </div>

          <div className="border-2 border-blue-500/60 rounded-lg p-5 bg-[#0d0d0e]">
            <p className="text-white/90 leading-relaxed text-base whitespace-pre-line">
              {t('whyChoose.testimonialQuote')}
            </p>
          </div>

          <div className="mt-4 text-center">
            <span className="text-white/40 text-sm">google.reviews</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('whyChoose.ctaTitle')}
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            {t('whyChoose.ctaSubtitle')}
          </p>

          <button 
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="cta-button large bg-primary-accent text-black hover:bg-primary-accent-hover hover:scale-105"
          >
            {t('whyChoose.ctaButton')}
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
