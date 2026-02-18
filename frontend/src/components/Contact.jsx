import React, { useState } from 'react';
import { djInfo } from '../data/mock';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Успешно изпратено!",
      description: "Вашето запитване беше получено. Ще се свържем с вас скоро.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-light-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading text-white">Свържете Се</h2>
          <p className="body-large text-white/70">
            Имате въпроси или искате да резервирате? Свържете се с мен!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="card-heading text-white mb-6">Информация за Контакт</h3>
              
              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg hover:bg-card-bg-hover transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-accent" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide mb-1">Имейл</div>
                  <a href={`mailto:${djInfo.email}`} className="text-white hover:text-primary-accent transition-colors duration-200 text-lg">
                    {djInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg hover:bg-card-bg-hover transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-accent" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide mb-1">Телефон</div>
                  <a href={`tel:${djInfo.phone}`} className="text-white hover:text-primary-accent transition-colors duration-200 text-lg">
                    {djInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card-bg rounded-lg hover:bg-card-bg-hover transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-purple-500" size={24} />
                </div>
                <div>
                  <div className="text-white/60 text-sm uppercase tracking-wide mb-1">Viber</div>
                  <a 
                    href={`viber://chat?number=%2B${djInfo.viber.replace(/[\s+]/g, '')}`}
                    className="text-white hover:text-purple-500 transition-colors duration-200 text-lg"
                  >
                    {djInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-bg p-8 rounded-lg">
            <h3 className="card-heading text-white mb-6">Изпратете Запитване</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                  Име *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-accent transition-colors duration-200"
                  placeholder="Вашето име"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                  Имейл *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-accent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 mb-2 text-sm font-medium">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-accent transition-colors duration-200"
                  placeholder="+359 888 123 456"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                  Съобщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-accent transition-colors duration-200 resize-none"
                  placeholder="Разкажете ми за вашето събитие..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="cta-button w-full bg-primary-accent text-black hover:bg-primary-accent-hover flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Изпрати Запитване
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
