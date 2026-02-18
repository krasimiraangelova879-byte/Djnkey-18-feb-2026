import React from 'react';
import { gallery } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

const GalleryModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-7xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-primary-accent rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-md"
          aria-label="Close gallery"
        >
          <X size={28} className="text-white" />
        </button>

        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('gallery.title')}</h2>
          <p className="text-white/70 text-lg">{t('gallery.subtitle')}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 auto-rows-auto">
          {gallery.map((item) => (
            <div 
              key={item.id}
              className="relative overflow-hidden rounded-lg group cursor-pointer bg-black/20 flex items-center justify-center"
              style={{ minHeight: '250px', maxHeight: '350px' }}
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-scale-down group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Close button at bottom */}
        <div className="text-center mt-12">
          <button
            onClick={onClose}
            className="cta-button bg-primary-accent text-black hover:bg-primary-accent-hover"
          >
            {t('gallery.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
