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

      {/* Navigation Header */}
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
            {/* Logo */}
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
                <p className="text-xs text-green-300">
                  BI & Data Science Expert
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
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

            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                    isScrolled ? "hover:bg-gray-800" : "hover:bg-green-900/30"
                  }`}
                >
                  <span className="text-lg">{currentLang.flag}</span>
                  <span className="text-sm font-medium text-green-300">
                    {currentLang.code.toUpperCase()}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className="text-green-400"
                  />
                </button>

                <AnimatePresence>
                  {showLanguageMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg border border-green-700 py-2 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-green-900/50 transition-colors duration-300 ${
                            currentLanguage === lang.code
                              ? "bg-green-700/30 text-green-400"
                              : "text-green-300"
                          }`}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                          {currentLanguage === lang.code && (
                            <Icon
                              name="Check"
                              size={16}
                              className="text-green-400 ml-auto"
                            />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main>
        <HeroSection
          currentLanguage={currentLanguage}
          onScrollToSection={scrollToSection}
        />
        <SkillsGrid currentLanguage={currentLanguage} />
        <ExperienceTimeline currentLanguage={currentLanguage} />
        <ExperienceStage currentLanguage={currentLanguage} />
        <ProjectPortfolio currentLanguage={currentLanguage} />
        <ContactForm currentLanguage={currentLanguage} />
      </main>

      {/* Footer */}
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default ProfessionalBIDataSciencePortfolioLandingPage;
