import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import GalleryModal from './GalleryModal';

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const openGallery = () => {
    setIsGalleryOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tight dj-nkey-logo hover:scale-105 transition-transform duration-200">
              DJ NKEY
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="nav-link text-white hover:text-primary-accent transition-colors duration-200"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('music-style')}
                className="nav-link text-white hover:text-primary-accent transition-colors duration-200"
              >
                {t('nav.musicStyle')}
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="nav-link text-white hover:text-primary-accent transition-colors duration-200"
              >
                {t('nav.experience')}
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')}
                className="nav-link text-white hover:text-primary-accent transition-colors duration-200"
              >
                {t('nav.whyChoose')}
              </button>
              <button 
                onClick={openGallery}
                className="nav-link text-white hover:text-primary-accent transition-colors duration-200"
              >
                {t('nav.gallery')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button bg-primary-accent text-black hover:bg-primary-accent-hover"
              >
                {t('nav.contact')}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-primary-accent transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-6 space-y-4 bg-black/95 backdrop-blur-md">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-accent hover:bg-white/5 transition-all duration-200"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('music-style')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-accent hover:bg-white/5 transition-all duration-200"
              >
                {t('nav.musicStyle')}
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-accent hover:bg-white/5 transition-all duration-200"
              >
                {t('nav.experience')}
              </button>
              <button 
                onClick={() => scrollToSection('why-choose')}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-accent hover:bg-white/5 transition-all duration-200"
              >
                {t('nav.whyChoose')}
              </button>
              <button 
                onClick={openGallery}
                className="block w-full text-left px-4 py-3 text-white hover:text-primary-accent hover:bg-white/5 transition-all duration-200"
              >
                {t('nav.gallery')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-primary-accent hover:bg-white/5 transition-all duration-200 font-semibold"
              >
                {t('nav.contact')}
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Gallery Modal */}
      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </>
  );
};

export default Header;
