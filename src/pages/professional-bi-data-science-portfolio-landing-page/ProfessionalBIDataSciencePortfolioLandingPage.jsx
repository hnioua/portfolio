import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../components/AppIcon";

// Import components
import HeroSection from "./components/HeroSection";
import ProblemStatement from "./components/ProblemStatement";
import SolutionShowcase from "./components/SolutionShowcase";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ExperienceStage from "./components/ExperienceStage";
import ProjectPortfolio from "./components/ProjectPortfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const ProfessionalBIDataSciencePortfolioLandingPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("fr");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const navigation = {
    fr: [
      { name: "Accueil", href: "#accueil" },
      { name: "Expertise", href: "#expertise" },
      { name: "Expérience", href: "#experience" },
      { name: "Projets", href: "#projets" },
      { name: "Contact", href: "#contact" },
    ],
    en: [
      { name: "Home", href: "#accueil" },
      { name: "Expertise", href: "#expertise" },
      { name: "Experience", href: "#experience" },
      { name: "Projects", href: "#projets" },
      { name: "Contact", href: "#contact" },
    ],
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "accueil",
        "expertise",
        "experience",
        "projets",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Language change
  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setShowLanguageMenu(false);
    document.documentElement.lang = langCode;
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <div className="relative min-h-screen text-green-400 overflow-hidden">
      {/* Background Digital */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 animate-pulse"></div>
      </div>

      {/* -------------------- Navigation Header -------------------- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-green-700"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ---------- Logo ---------- */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("#accueil")}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_#22c55e]">
                <span className="text-black font-bold text-sm">AH</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-green-400 drop-shadow-[0_0_6px_#22c55e]">
                  Abdessamad Hnioua
                </h1>
              </div>
            </motion.div>

            {/* ---------- Desktop Navigation ---------- */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation[currentLanguage].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium relative transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-green-400"
                      : isScrolled
                      ? "text-green-300 hover:text-green-400"
                      : "text-green-200 hover:text-green-400"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* ---------- Language Selector ---------- */}
            <div className="flex items-center space-x-4">
              {/* ---------- Dropdown Language Menu ---------- */}
              <div className="flex items-center bg-gray-800 rounded-full p-1 w-28">
                {/* EN Button */}
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`flex-1 text-sm font-medium rounded-full py-1 transition-colors duration-300 ${
                    currentLanguage === "en"
                      ? "bg-green-500 text-white"
                      : "text-green-300 hover:bg-green-900/30"
                  }`}
                >
                  EN
                </button>

                {/* FR Button */}
                <button
                  onClick={() => handleLanguageChange("fr")}
                  className={`flex-1 text-sm font-medium rounded-full py-1 transition-colors duration-300 ${
                    currentLanguage === "fr"
                      ? "bg-green-500 text-white"
                      : "text-green-300 hover:bg-green-900/30"
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main>
        <section id="accueil">
          <HeroSection
            currentLanguage={currentLanguage}
            onScrollToSection={scrollToSection}
          />
        </section>

        <section id="expertise">
          <SkillsGrid currentLanguage={currentLanguage} />
        </section>

        <section id="experience">
          <ExperienceTimeline currentLanguage={currentLanguage} />
          <ExperienceStage currentLanguage={currentLanguage} />
        </section>

        <section id="projets">
          <ProjectPortfolio currentLanguage={currentLanguage} />
        </section>

        <section id="contact">
          <ContactForm currentLanguage={currentLanguage} />
        </section>
      </main>

      {/* Footer */}
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default ProfessionalBIDataSciencePortfolioLandingPage;
