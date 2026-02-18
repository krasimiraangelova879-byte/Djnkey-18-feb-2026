import React from 'react';
import { experiences } from '../data/mock';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const ProfessionalExperience = () => {
  return (
    <section id="experience" className="section-padding bg-dark-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading text-white">Професионален опит</h2>
          <p className="body-large text-white/70">
            Изпълнения в топ заведения в София, България и чужбина
          </p>
        </div>

        {/* Stats Section */}
        <div className="relative overflow-hidden rounded-lg mb-16">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/qcon6riz_IMG_1957.JPG"
              alt="DJ Performance Background"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-section/90 via-dark-section/85 to-dark-section/90"></div>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8">
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary-accent drop-shadow-lg">10+</div>
              <div className="text-white uppercase tracking-wide text-sm font-semibold">Години Опит</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary-accent drop-shadow-lg">500+</div>
              <div className="text-white uppercase tracking-wide text-sm font-semibold">Събития</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary-accent drop-shadow-lg">50+</div>
              <div className="text-white uppercase tracking-wide text-sm font-semibold">Клуба</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl md:text-6xl font-bold text-primary-accent drop-shadow-lg">1000+</div>
              <div className="text-white uppercase tracking-wide text-sm font-semibold">Доволни Клиенти</div>
            </div>
          </div>
        </div>

        {/* Experience List - Venues Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="bg-card-bg rounded-lg p-6 hover:bg-card-bg-hover transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/30 transition-colors duration-300">
                      <MapPin size={20} className="text-primary-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-accent transition-colors duration-200 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-1">{exp.venue}</p>
                    {exp.description && (
                      <p className="text-white/50 text-sm">{exp.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications/Skills */}
        <div className="mt-16 pt-12 border-t border-white/10 relative overflow-hidden rounded-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/yifh3dui_IMG_1947.jpg"
              alt="DJ Equipment Background"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-section/80 via-dark-section/90 to-dark-section/80"></div>
          </div>
          
          <div className="relative z-10 py-8 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Умения и Сертификати
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/60 transition-colors duration-200 border border-white/10">
                <div className="text-3xl mb-2">🎧</div>
                <div className="text-white font-medium">Професионално DJ Оборудване</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/60 transition-colors duration-200 border border-white/10">
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-white font-medium">Музикално Производство</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/60 transition-colors duration-200 border border-white/10">
                <div className="text-3xl mb-2">🎚️</div>
                <div className="text-white font-medium">Звукова Техника</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-black/60 transition-colors duration-200 border border-white/10">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-white font-medium">Светлинни Ефекти</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
