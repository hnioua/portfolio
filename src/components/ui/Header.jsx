import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const navigationItems = [
    { id: 'accueil', label: { fr: 'Accueil', en: 'Home', ar: 'الرئيسية' } },
    { id: 'expertise', label: { fr: 'Expertise', en: 'Expertise', ar: 'الخبرة' } },
    { id: 'experience', label: { fr: 'Expérience', en: 'Experience', ar: 'التجربة' } },
    { id: 'projets', label: { fr: 'Projets', en: 'Projects', ar: 'المشاريع' } },
    { id: 'temoignages', label: { fr: 'Témoignages', en: 'Testimonials', ar: 'الشهادات' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact', ar: 'اتصل' } }
  ];

  const languages = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'ar', label: 'AR', flag: '🇲🇦' }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') || 'fr';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      const sections = navigationItems?.map(item => document.getElementById(item?.id))?.filter(Boolean);
      const currentSection = sections?.find(section => {
        const rect = section?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('portfolio-language', langCode);
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-nav border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-slate-800">Abdessamad</h1>
                  <p className="text-sm text-slate-500 font-mono">BI & Data Science</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.id)}
                  className={`text-sm font-medium portfolio-transition hover:text-primary ${
                    activeSection === item?.id
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {item?.label?.[currentLanguage]}
                </button>
              ))}
            </nav>

            {/* Desktop Language Switcher & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <select
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e?.target?.value)}
                  className="appearance-none bg-transparent border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:border-primary focus:border-primary focus:outline-none portfolio-transition cursor-pointer"
                >
                  {languages?.map((lang) => (
                    <option key={lang?.code} value={lang?.code}>
                      {lang?.flag} {lang?.label}
                    </option>
                  ))}
                </select>
                <Icon 
                  name="ChevronDown" 
                  size={16} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400"
                />
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection('contact')}
                iconName="Download"
                iconPosition="left"
                className="portfolio-shadow-cta"
              >
                {currentLanguage === 'fr' ? 'Télécharger CV' : 
                 currentLanguage === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 portfolio-transition"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
          <div 
            className="h-full bg-primary portfolio-transition"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold text-slate-800">Menu</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 portfolio-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <nav className="p-6 space-y-4">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg portfolio-transition ${
                    activeSection === item?.id
                      ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-medium">{item?.label?.[currentLanguage]}</span>
                </button>
              ))}
            </nav>

            <div className="p-6 border-t border-slate-200 space-y-4">
              {/* Language Switcher */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {currentLanguage === 'fr' ? 'Langue' : 
                   currentLanguage === 'en' ? 'Language' : 'اللغة'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {languages?.map((lang) => (
                    <button
                      key={lang?.code}
                      onClick={() => handleLanguageChange(lang?.code)}
                      className={`p-2 rounded-lg text-sm font-medium portfolio-transition ${
                        currentLanguage === lang?.code
                          ? 'bg-primary text-white' :'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {lang?.flag} {lang?.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <Button
                variant="default"
                fullWidth
                onClick={() => scrollToSection('contact')}
                iconName="Download"
                iconPosition="left"
                className="portfolio-shadow-cta"
              >
                {currentLanguage === 'fr' ? 'Télécharger CV' : 
                 currentLanguage === 'en' ? 'Download CV' : 'تحميل السيرة الذاتية'}
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 right-6 z-30 lg:hidden">
        <Button
          variant="default"
          size="icon"
          onClick={() => scrollToSection('contact')}
          className="w-14 h-14 rounded-full portfolio-shadow-cta animate-bounce-subtle"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    </>
  );
};

export default Header;