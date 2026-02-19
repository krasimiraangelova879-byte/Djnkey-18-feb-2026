import React from 'react';
import { musicStyles } from '../data/mock';
import { Music, Radio, Disc3, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Music: Music,
  Radio: Radio,
  Disc3: Disc3,
  Headphones: Headphones
};

const MusicStyle = () => {
  const { t, language } = useLanguage();

  return (
    <section id="music-style" className="section-padding bg-light-section relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/d7zr4jqk_IMG_1952.jpg"
          alt="DJ NKEY Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-light-section via-light-section/95 to-light-section"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading text-white">
            {t('musicStyle.title')}
          </h2>
          <p className="body-large text-white/70">
            {t('musicStyle.subtitle')}
          </p>
        </div>

        {/* Music Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicStyles.map((style) => {
            const IconComponent = iconMap[style.icon];

            // 🔥 SAFE FALLBACK SYSTEM
            const title =
              language === 'en'
                ? style.titleEn || style.title
                : style.title;

            const description =
              language === 'en'
                ? style.descriptionEn || style.description
                : style.description;

            return (
              <div 
                key={style.id}
                className="service-card bg-card-bg p-8 rounded-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/30 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent 
                      size={32} 
                      className="text-primary-accent" 
                    />
                  )}
                </div>

                <h3 className="card-heading text-white mb-3 group-hover:text-primary-accent transition-colors duration-200">
                  {title}
                </h3>

                <p className="body-medium text-white/70">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Mix Section */}
        <div className="mt-16 max-w-4xl mx-auto bg-card-bg rounded-lg p-8 md:p-12">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary-accent/20 flex items-center justify-center">
              <Disc3 size={40} className="text-primary-accent animate-spin-slow" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {t('musicStyle.discoverMusic')}
            </h3>

            <p className="body-large text-white/70">
              {t('musicStyle.discoverDesc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="https://soundcloud.com/djnkey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button bg-primary-accent text-black hover:bg-primary-accent-hover flex items-center gap-2"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/fehv4o3b_Image%2012.02.26%20at%201.30.png"
                  alt="SoundCloud"
                  className="w-5 h-5 object-contain"
                />
                {t('musicStyle.listenSoundcloud')}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MusicStyle;
