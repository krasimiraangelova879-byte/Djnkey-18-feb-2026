import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="fixed top-24 right-6 z-40 flex gap-2 bg-black/80 backdrop-blur-md p-2 rounded-full shadow-lg">
      <button
        onClick={() => changeLanguage('bg')}
        className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-200 hover:scale-110 ${
          language === 'bg' ? 'ring-4 ring-primary-accent' : 'ring-2 ring-white/30'
        }`}
        aria-label="Bulgarian"
        title="Български"
      >
        <div className="w-full h-full flex flex-col">
          <div className="h-1/3 bg-white"></div>
          <div className="h-1/3 bg-green-600"></div>
          <div className="h-1/3 bg-red-600"></div>
        </div>
      </button>
      
      <button
        onClick={() => changeLanguage('en')}
        className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-200 hover:scale-110 ${
          language === 'en' ? 'ring-4 ring-primary-accent' : 'ring-2 ring-white/30'
        }`}
        aria-label="English"
        title="English"
      >
        <svg viewBox="0 0 60 30" className="w-full h-full">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
