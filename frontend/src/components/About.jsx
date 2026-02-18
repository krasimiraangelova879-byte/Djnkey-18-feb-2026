import React from 'react';
import { djInfo } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { User, Briefcase, Music2 } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  
  const getBioText = () => {
    if (language === 'bg') {
      return djInfo.bio.split('\n\n');
    }
    return [t('about.bio1'), t('about.bio2'), t('about.bio3'), t('about.bio4')];
  };

  return (
    <section id="about" className="section-padding bg-dark-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 space-y-6">
          <h2 className="section-heading text-white">{t('about.title')}</h2>
          <div className="text-left space-y-5 text-white/80 leading-relaxed text-lg">
            {getBioText().map((paragraph, index) => (
              <p key={index} className="body-large">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="service-card bg-card-bg p-8 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-accent/20 flex items-center justify-center">
              <User size={32} className="text-primary-accent" />
            </div>
            <h3 className="card-heading text-white mb-3">
              {t('about.card1Title')}
            </h3>
            <p className="body-medium text-white/70">
              {t('about.card1Desc')}
            </p>
          </div>

          <div className="service-card bg-card-bg p-8 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-accent/20 flex items-center justify-center">
              <Music2 size={32} className="text-primary-accent" />
            </div>
            <h3 className="card-heading text-white mb-3">
              {t('about.card2Title')}
            </h3>
            <p className="body-medium text-white/70">
              {t('about.card2Desc')}
            </p>
          </div>

          <div className="service-card bg-card-bg p-8 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-accent/20 flex items-center justify-center">
              <Briefcase size={32} className="text-primary-accent" />
            </div>
            <h3 className="card-heading text-white mb-3">
              {t('about.card3Title')}
            </h3>
            <p className="body-medium text-white/70">
              {t('about.card3Desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
