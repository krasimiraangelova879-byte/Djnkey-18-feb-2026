import React from 'react';
import { djInfo } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={djInfo.heroImage}
          alt="DJ NKEY"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center" style={{ marginTop: '25vh' }}>
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in" style={{ paddingTop: '1cm' }}>
          
          {/* Welcome */}
          <div className="space-y-4">
            <p className="text-primary-accent text-lg md:text-xl font-medium tracking-wide uppercase">
              {t('hero.welcome')}
            </p>

            <h1 className="hero-heading dj-nkey-text">
              {djInfo.name}
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t('hero.tagline')}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="cta-button large bg-primary-accent text-black hover:bg-primary-accent-hover hover:scale-105"
            >
              {t('hero.bookNow')}
            </button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/60 hover:text-primary-accent transition-all duration-300 animate-bounce cursor-pointer"
        aria-label={t('hero.scrollDown')}
      >
        <ChevronDown size={40} />
      </button>

    </section>
  );
};

export default Hero;
