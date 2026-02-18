import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MusicStyle from "./components/MusicStyle";
import ProfessionalExperience from "./components/ProfessionalExperience";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LanguageProvider>
          <CustomCursor />
          <Header />
          <LanguageSwitcher />
          <main>
            <Hero />
            <About />
            <MusicStyle />
            <ProfessionalExperience />
            <WhyChoose />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
