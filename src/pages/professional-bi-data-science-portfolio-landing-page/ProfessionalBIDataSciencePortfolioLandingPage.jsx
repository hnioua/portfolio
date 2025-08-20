import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/AppIcon';

// Import components
import HeroSection from './components/HeroSection';
import ProblemStatement from './components/ProblemStatement';
import SolutionShowcase from './components/SolutionShowcase';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectPortfolio from './components/ProjectPortfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const ProfessionalBIDataSciencePortfolioLandingPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇲🇦' }
  ];

  const navigation = {
    fr: [
      { name: 'Accueil', href: '#accueil' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Expérience', href: '#experience' },
      { name: 'Projets', href: '#projets' },
      { name: 'Contact', href: '#contact' }
    ],
    en: [
      { name: 'Home', href: '#accueil' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projets' },
      { name: 'Contact', href: '#contact' }
    ],
    ar: [
      { name: 'الرئيسية', href: '#accueil' },
      { name: 'الخبرة', href: '#expertise' },
      { name: 'التجربة', href: '#experience' },
      { name: 'المشاريع', href: '#projets' },
      { name: 'اتصل', href: '#contact' }
    ]
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['accueil', 'expertise', 'experience', 'projets', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle language change
  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setShowLanguageMenu(false);
    
    // Update document direction for Arabic
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = langCode;
  };

  const currentLang = languages?.find(lang => lang?.code === currentLanguage);

  return (
    <div className={`min-h-screen bg-white ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50 portfolio-transition
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
            : 'bg-transparent'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('#accueil')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">AH</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-slate-800">Abdessamad Hnioua</h1>
                <p className="text-xs text-slate-600">BI & Data Science Expert</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation?.[currentLanguage]?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => scrollToSection(item?.href)}
                  className={`
                    text-sm font-medium portfolio-transition relative
                    ${activeSection === item?.href?.substring(1)
                      ? 'text-primary' : isScrolled ?'text-slate-700 hover:text-primary' : 'text-slate-800 hover:text-primary'
                    }
                  `}
                >
                  {item?.name}
                  {activeSection === item?.href?.substring(1) && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className={`
                    flex items-center space-x-2 px-3 py-2 rounded-lg portfolio-transition
                    ${isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/20'}
                  `}
                >
                  <span className="text-lg">{currentLang?.flag}</span>
                  <span className={`text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}>
                    {currentLang?.code?.toUpperCase()}
                  </span>
                  <Icon name="ChevronDown" size={16} className={isScrolled ? 'text-slate-500' : 'text-slate-600'} />
                </button>

                <AnimatePresence>
                  {showLanguageMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50"
                    >
                      {languages?.map((lang) => (
                        <button
                          key={lang?.code}
                          onClick={() => handleLanguageChange(lang?.code)}
                          className={`
                            w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-slate-50 portfolio-transition
                            ${currentLanguage === lang?.code ? 'bg-primary/5 text-primary' : 'text-slate-700'}
                          `}
                        >
                          <span className="text-lg">{lang?.flag}</span>
                          <span className="font-medium">{lang?.name}</span>
                          {currentLanguage === lang?.code && (
                            <Icon name="Check" size={16} className="text-primary ml-auto" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 portfolio-transition">
                <Icon name="Menu" size={20} className={isScrolled ? 'text-slate-700' : 'text-slate-800'} />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection 
          currentLanguage={currentLanguage} 
          onScrollToSection={scrollToSection}
        />

        {/* Problem Statement */}
        <ProblemStatement currentLanguage={currentLanguage} />

        {/* Solution Showcase */}
        <SolutionShowcase currentLanguage={currentLanguage} />

        {/* Skills Grid */}
        <SkillsGrid currentLanguage={currentLanguage} />

        {/* Experience Timeline */}
        <ExperienceTimeline currentLanguage={currentLanguage} />

        {/* Project Portfolio */}
        <ProjectPortfolio currentLanguage={currentLanguage} />

        {/* Contact Form */}
        <ContactForm currentLanguage={currentLanguage} />
      </main>
      {/* Footer */}
      <Footer currentLanguage={currentLanguage} />
      {/* Loading Overlay (if needed) */}
      <AnimatePresence>
        {/* Add loading state if needed */}
      </AnimatePresence>
    </div>
  );
};

export default ProfessionalBIDataSciencePortfolioLandingPage;