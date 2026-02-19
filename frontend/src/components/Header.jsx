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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight dj-nkey-logo">
            DJ NKEY
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="nav-link text-white">
              {t('nav.about')}
            </button>

            <button onClick={() => scrollToSection('music-style')} className="nav-link text-white">
              {t('nav.musicStyle')}
            </button>

            <button onClick={() => scrollToSection('experience')} className="nav-link text-white">
              {t('nav.experience')}
            </button>

            <button onClick={() => scrollToSection('why-choose')} className="nav-link text-white">
              {t('nav.whyChoose')}
            </button>

            {/* 🔥 GALLERY PAGE LINK */}
            <Link to="/gallery" className="nav-link text-white">
              {t('nav.gallery')}
            </Link>

            <button onClick={() => scrollToSection('contact')} className="cta-button bg-primary-accent text-black">
              {t('nav.contact')}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
