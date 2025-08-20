import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const HeroSection = ({ currentLanguage, onScrollToSection }) => {
  const [typewriterText, setTypewriterText] = useState("");
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const titles = {
    fr: "Analyste BI & Data Science",
    en: "BI & Data Science Analyst",
    ar: "محلل ذكاء الأعمال وعلوم البيانات",
  };

  const subtitles = {
    fr: [
      "Transformez vos données en insights stratégiques",
      "Expert en Intelligence Artificielle et Machine Learning",
      "Spécialiste ETL et Visualisation de données",
    ],
    en: [
      "Transform your data into strategic insights",
      "Expert in Artificial Intelligence and Machine Learning",
      "ETL and Data Visualization Specialist",
    ],
    ar: [
      "حول بياناتك إلى رؤى استراتيجية",
      "خبير في الذكاء الاصطناعي والتعلم الآلي",
      "متخصص في ETL وتصور البيانات",
    ],
  };

  const heroContent = {
    fr: {
      headline:
        "Transformez vos Données Brutes en Insights Métier Exploitables",
      description: `Expert BI & Data Science avec 5+ années d'expérience dans les organismes gouvernementaux et le secteur privé. Spécialisé dans l'ETL, l'analyse prédictive et l'IA/ML pour optimiser les processus métier et la prise de décision stratégique.`,
      downloadCV: "Télécharger CV",
      contactMe: "Me Contacter",
      availability: "Ouvert aux Opportunités",
    },
    en: {
      headline: "Transform Raw Data Into Actionable Business Insights",
      description: `BI & Data Science expert with 5+ years of experience in government agencies and private sector. 
      Specialized in ETL, predictive analytics, and AI/ML to optimize business processes and strategic decision-making.`,
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      availability: "Open to Opportunities",
    },
    ar: {
      headline: "حول البيانات الخام إلى رؤى عملية قابلة للتنفيذ",
      description: `خبير في ذكاء الأعمال وعلوم البيانات مع أكثر من 5 سنوات من الخبرة في الوكالات الحكومية والقطاع الخاص. 
      متخصص في ETL والتحليل التنبؤي والذكاء الاصطناعي لتحسين العمليات التجارية واتخاذ القرارات الاستراتيجية.`,
      downloadCV: "تحميل السيرة الذاتية",
      contactMe: "اتصل بي",
      availability: "متاح للفرص",
    },
  };

  const trustMetrics = {
    fr: [
      { value: "5+", label: "Années d’Expérience" },
      { value: "20+", label: "Projets Réalisés" },
      { value: "15+", label: "Technologies Maîtrisées" },
    ],
    en: [
      { value: "5+", label: "Years Experience" },
      { value: "20+", label: "Projects Completed" },
      { value: "15+", label: "Technologies Mastered" },
    ],
    ar: [
      { value: "5+", label: "سنوات الخبرة" },
      { value: "20+", label: "المشاريع المكتملة" },
      { value: "15+", label: "التقنيات المتقنة" },
    ],
  };

  useEffect(() => {
    const title = titles?.[currentLanguage];
    let currentIndex = 0;

    const typeWriter = () => {
      if (currentIndex < title?.length) {
        setTypewriterText(title?.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 100);
      } else {
        setIsTyping(false);
      }
    };

    setTypewriterText("");
    setIsTyping(true);
    currentIndex = 0;
    typeWriter();
  }, [currentLanguage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex(
        (prev) => (prev + 1) % subtitles?.[currentLanguage]?.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentLanguage]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/abdessamad-hnioua-cv.pdf";
    link.download = "Abdessamad_Hnioua_CV.pdf";
    link?.click();
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-200/40 to-green-400/40 rounded-full blur-3xl" />
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)]?.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700">
                {heroContent?.[currentLanguage]?.availability}
              </span>
            </motion.div>

            {/* Animated Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 leading-tight"
              >
                <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                  {typewriterText}
                </span>
                {isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-green-600"
                  >
                    |
                  </motion.span>
                )}
              </motion.h1>

              {/* Rotating Subtitle */}
              <motion.div
                key={currentSubtitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-8 flex items-center"
              >
                <p className="text-lg text-green-600 font-medium">
                  {subtitles?.[currentLanguage]?.[currentSubtitleIndex]}
                </p>
              </motion.div>
            </div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 leading-tight">
                {heroContent?.[currentLanguage]?.headline}
              </h2>
              <p className="text-lg text-green-700 leading-relaxed max-w-2xl">
                {heroContent?.[currentLanguage]?.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={handleDownloadCV}
                iconName="Download"
                iconPosition="left"
                className="bg-green-600 hover:bg-green-700 text-white portfolio-shadow-cta hover:scale-105 portfolio-transition"
              >
                {heroContent?.[currentLanguage]?.downloadCV}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => onScrollToSection("contact")}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-green-600 text-green-600 hover:bg-green-50 portfolio-shadow-cta hover:scale-105 portfolio-transition"
              >
                {heroContent?.[currentLanguage]?.contactMe}
              </Button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-green-200"
            >
              {trustMetrics?.[currentLanguage]?.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                  >
                    {metric?.value}
                  </motion.div>
                  <div className="text-sm text-green-700 font-medium">
                    {metric?.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Profile Card */}
            <div className="relative bg-white rounded-3xl p-8 portfolio-shadow-card">
              {/* Profile Image */}
              <div className="relative mb-6">
                {/* Cercle avec bordure dégradée */}
                <div className="w-48 h-48 mx-auto rounded-full p-[4px] bg-gradient-to-br from-green-500 to-green-700">
                  {/* Image profil */}
                  <img
                    src="/assets/images/profil2.jpg"
                    alt="Profil"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center space-y-2 mb-6">
                <h3 className="text-xl font-bold text-green-800">
                  Abdessamad Hnioua
                </h3>
                <p className="text-green-600 font-medium">
                  BI & Data Science Expert
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-green-700">
                  <Icon name="MapPin" size={16} />
                  <span>Marrakech, Morocco</span>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="space-y-3">
                {[
                  "Python & R",
                  "Power BI & Tableau",
                  "Machine Learning",
                  "ETL Processes",
                ]?.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                    className="space-y-1"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-green-800 font-medium">
                        {skill}
                      </span>
                      <span className="text-green-600 font-semibold">
                        {95 - index * 5}%
                      </span>
                    </div>
                    <div className="w-full bg-green-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${95 - index * 5}%` }}
                        transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                        className="bg-gradient-to-r from-green-500 to-green-700 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => onScrollToSection("expertise")}
        >
          <span className="text-sm text-green-600 font-medium">
            {currentLanguage === "fr"
              ? "Découvrir"
              : currentLanguage === "en"
              ? "Discover"
              : "اكتشف"}
          </span>
          <Icon name="ChevronDown" size={20} className="text-green-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
