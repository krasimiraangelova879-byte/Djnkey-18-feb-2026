import React from 'react';
import { whyChooseReasons } from '../data/mock';
import { Check, Star } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section id="why-choose" className="section-padding bg-light-section relative overflow-hidden">
      {/* Background Image with Overlay */}
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
          <h2 className="section-heading text-white">Защо да изберете DJ NKEY</h2>
          <p className="body-large text-white/70">
            Вашето събитие заслужава най-доброто - професионализъм, качество и страст към музиката
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {whyChooseReasons.map((reason, index) => (
            <div 
              key={reason.id}
              className="bg-card-bg p-8 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-accent/20 flex items-center justify-center group-hover:bg-primary-accent/30 transition-colors duration-300">
                  <Check size={24} className="text-primary-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-accent transition-colors duration-200 pt-2">
                  {reason.title}
                </h3>
              </div>
              <p className="text-white/70 pl-16">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-accent/10 to-primary-accent/5 rounded-lg p-8 md:p-12 border border-primary-accent/20">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-primary-accent fill-primary-accent" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
              "DJ NKEY направи нашата сватба незабравима! Професионализмът и музикалната селекция бяха на най-високо ниво. Всички гости танцуваха цяла нощ!"
            </blockquote>
            <div className="pt-4">
              <div className="text-lg font-semibold text-primary-accent">Мария и Иван</div>
              <div className="text-white/60">Сватба, София</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Готови ли сте за незабравимо събитие?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Свържете се с мен днес и нека направим вашето събитие специално
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button large bg-primary-accent text-black hover:bg-primary-accent-hover hover:scale-105"
          >
            Резервирай Сега
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
