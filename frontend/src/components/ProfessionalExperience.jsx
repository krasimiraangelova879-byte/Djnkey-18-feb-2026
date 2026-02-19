import React from 'react';
import { experiences } from '../data/mock';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProfessionalExperience = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-dark-section">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading text-white">
            {t('experience.title')}
          </h2>
          <p className="body-large text-white/70">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="relative overflow-hidden rounded-lg mb-16">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8">
            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-primary-accent">10+</div>
              <div className="text-white uppercase text-sm font-semibold">
                {t('experience.years')}
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-primary-accent">500+</div>
              <div className="text-white uppercase text-sm font-semibold">
                {t('experience.events')}
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-primary-accent">50+</div>
              <div className="text-white uppercase text-sm font-semibold">
                {t('experience.clubs')}
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-primary-accent">1000+</div>
              <div className="text-white uppercase text-sm font-semibold">
                {t('experience.clients')}
              </div>
            </div>
          </div>
        </div>

        {/* Experience List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => {

            const title =
              language === 'bg'
                ? exp.title
                : exp.titleEn || exp.title;

            const venue =
              language === 'bg'
                ? exp.venue
                : exp.venueEn || exp.venue;

            const description =
              language === 'bg'
                ? exp.description
                : exp.descriptionEn || exp.description;

            return (
              <div
                key={exp.id}
                className="bg-card-bg rounded-lg p-6 hover:bg-card-bg-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center">
                    <MapPin size={20} className="text-primary-accent" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {title}
                    </h3>

                    {venue && (
                      <p className="text-white/70 text-sm mb-1">
                        {venue}
                      </p>
                    )}

                    {description && (
                      <p className="text-white/50 text-sm">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="py-8 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              {t('experience.skillsTitle')}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/40 p-6 rounded-lg text-center border border-white/10">
                <div className="text-3xl mb-2">🎧</div>
                <div className="text-white font-medium">
                  {t('experience.skill1')}
                </div>
              </div>

              <div className="bg-black/40 p-6 rounded-lg text-center border border-white/10">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-white font-medium">
                  {t('experience.skill2')}
                </div>
              </div>

              <div className="bg-black/40 p-6 rounded-lg text-center border border-white/10">
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-white font-medium">
                  {t('experience.skill3')}
                </div>
              </div>

              <div className="bg-black/40 p-6 rounded-lg text-center border border-white/10">
                <div className="text-3xl mb-2">🎤</div>
                <div className="text-white font-medium">
                  {t('experience.skill4')}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalExperience;
