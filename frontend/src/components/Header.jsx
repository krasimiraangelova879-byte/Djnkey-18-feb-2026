import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight dj-nkey-logo text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              DJ NKEY
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="nav-link text-white hover:text-primary-accent transition">
                {t('nav.about')}
              </button>

              <button onClick={() => scrollToSection('music-style')} className="nav-link text-white hover:text-primary-accent transition">
                {t('nav.musicStyle')}
              </button>

              <button onClick={() => scrollToSection('experience')} className="nav-link text-white hover:text-primary-accent transition">
                {t('nav.experience')}
              </button>

              <button onClick={() => scrollToSection('why-choose')} className="nav-link text-white hover:text-primary-accent transition">
                {t('nav.whyChoose')}
              </button>

              <Link to="/gallery" className="nav-link text-white hover:text-primary-accent transition">
                {t('nav.gallery')}
              </Link>

              <button onClick={() => scrollToSection('contact')} className="cta-button bg-primary-accent text-black hover:scale-105 transition">
                {t('nav.contact')}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 z-50"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 space-y-4 animate-fadeIn">
            
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-primary-accent"
            >
              {t('nav.about')}
            </button>

            <button 
              onClick={() => scrollToSection('music-style')}
              className="block w-full text-left text-white hover:text-primary-accent"
            >
              {t('nav.musicStyle')}
            </button>

            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-white hover:text-primary-accent"
            >
              {t('nav.experience')}
            </button>

            <button 
              onClick={() => scrollToSection('why-choose')}
              className="block w-full text-left text-white hover:text-primary-accent"
            >
              {t('nav.whyChoose')}
            </button>

            <Link 
              to="/gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white hover:text-primary-accent"
            >
              {t('nav.gallery')}
            </Link>

            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-primary-accent font-semibold"
            >
              {t('nav.contact')}
            </button>

          </div>
        )}
      </header>
    </>
  );
};

export default Header;
