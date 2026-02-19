import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (sectionId) => {
    setIsMobileMenuOpen(false);

    // If we are NOT on homepage, first navigate home
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight dj-nkey-logo"
          >
            DJ NKEY
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => goToSection("about")} className="nav-link text-white">
              {t("nav.about")}
            </button>

            <button onClick={() => goToSection("music-style")} className="nav-link text-white">
              {t("nav.musicStyle")}
            </button>

            <button onClick={() => goToSection("experience")} className="nav-link text-white">
              {t("nav.experience")}
            </button>

            <button onClick={() => goToSection("why-choose")} className="nav-link text-white">
              {t("nav.whyChoose")}
            </button>

            {/* Gallery Page */}
            <Link to="/gallery" className="nav-link text-white">
              {t("nav.gallery")}
            </Link>

            <button
              onClick={() => goToSection("contact")}
              className="cta-button bg-primary-accent text-black"
            >
              {t("nav.contact")}
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md py-6 space-y-4">
            <button onClick={() => goToSection("about")} className="block w-full text-left px-4 text-white">
              {t("nav.about")}
            </button>

            <button onClick={() => goToSection("music-style")} className="block w-full text-left px-4 text-white">
              {t("nav.musicStyle")}
            </button>

            <button onClick={() => goToSection("experience")} className="block w-full text-left px-4 text-white">
              {t("nav.experience")}
            </button>

            <button onClick={() => goToSection("why-choose")} className="block w-full text-left px-4 text-white">
              {t("nav.whyChoose")}
            </button>

            <Link
              to="/gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 text-white"
            >
              {t("nav.gallery")}
            </Link>

            <button
              onClick={() => goToSection("contact")}
              className="block w-full text-left px-4 text-primary-accent"
            >
              {t("nav.contact")}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
