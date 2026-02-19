import React from 'react';
import { socialLinks } from '../data/mock';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold dj-nkey-logo">DJ NKEY</h3>
            <p className="text-white/70">
              {t('footer.description')}
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col items-center justify-start gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-xs aspect-[3/4]">
              <img 
                src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/r7oucc49_IMG_1957.JPG"
                alt="DJ NKEY Performance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-xs">
              <img 
                src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/4mlzqmx2_IMG_77777777.jpg"
                alt="DJ NKEY Award Certificate"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                {t('footer.quickLinks')}
              </h4>

              <ul className="space-y-3">
                <li>
                  <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-primary-accent transition-colors duration-200">
                    {t('nav.about')}
                  </button>
                </li>

                <li>
                  <button onClick={() => document.getElementById('music-style').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-primary-accent transition-colors duration-200">
                    {t('nav.musicStyle')}
                  </button>
                </li>

                <li>
                  <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-primary-accent transition-colors duration-200">
                    {t('nav.experience')}
                  </button>
                </li>

                <li>
                  <button onClick={() => document.getElementById('why-choose').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-primary-accent transition-colors duration-200">
                    {t('nav.whyChoose')}
                  </button>
                </li>

                <li>
                  <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-primary-accent transition-colors duration-200">
                    {t('nav.gallery')}
                  </button>
                </li>

                <li>
                  <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/70 hover:text-primary-accent transition-colors duration-200">
                    {t('nav.contact')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                {t('footer.followMe')}
              </h4>

              <div className="flex gap-4">

                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 overflow-hidden">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/cdw9dkj8_Image%2012.02.26%20at%201.31.png"
                    alt="Facebook"
                    className="w-full h-full object-cover"
                  />
                </a>

                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Instagram size={20} className="text-white" />
                </a>

                <a href={socialLinks.soundcloud} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 overflow-hidden p-1">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_rhythm-palace-2/artifacts/fehv4o3b_Image%2012.02.26%20at%201.30.png"
                    alt="SoundCloud"
                    className="w-full h-full object-contain"
                  />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>
            &copy; {currentYear} DJ NKEY. {t('footer.copyright')}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
