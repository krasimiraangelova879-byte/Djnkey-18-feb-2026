import React from "react";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const bioBg = [
    "Здравейте! Аз съм Николай Нанчев – DJ и водещ на събития. Професионалният ми път започва през 2013 г., воден от ясна мисия – да създавам настроение и искрена емоция чрез музика.",
    "С над 10 години опит зад пулта, стотици участия и хиляди доволни гости, изграждам атмосфера, която се помни. Залагам на прецизен музикален подбор, отличен усет към публиката и стилен, динамичен микс, съобразен с характера на всяко събитие.",
    "Имам богат опит както в клубове и барове, така и в музикалното оформление и воденето на частни събития – корпоративни партита, рождени дни, абитуриентски балове, сватби и други специални поводи.",
    "Вярвам, че всяко събитие има своята енергия – моята задача е да я уловя и превърна в незабравимо изживяване."
  ];

  const bioEn = [
    "Hello! I'm Nikolay Nanchev – DJ and event host. My journey as a DJ began in 2013, driven by a clear mission – to create atmosphere and genuine emotion through music.",
    "With over 10 years of experience behind the decks, hundreds of performances and thousands of happy guests, I build unforgettable atmospheres. I focus on precise music selection, strong audience awareness and stylish, dynamic mixing tailored to each event.",
    "I have experience in clubs and bars, as well as in musical arrangement and hosting of private events – corporate parties, birthdays, graduation balls, weddings and more.",
    "I believe every event has its own energy – my job is to capture it and turn it into a memorable experience."
  ];

  const bio = language === "bg" ? bioBg : bioEn;

  return (
    <section id="about" className="section-padding bg-dark-section">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

        <h2 className="section-heading text-white mb-10 text-center">
          {language === "bg" ? "Кой е DJ NKEY?" : "Who is DJ NKEY?"}
        </h2>

        <div className="space-y-6 text-white/80 text-lg leading-relaxed">
          {bio.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
