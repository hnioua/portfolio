import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const HeroSection = ({ onScrollToSection, currentLanguage }) => {
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const titles = {
    fr: "Full Stack Dev | React · Node.js · Laravel | Data Scientist & Business Analyst",
    en: "Full Stack Dev | React · Node.js · Laravel | Data Scientist & Business Analyst",
    ar: "مطور فول ستاك | React · Node.js · Laravel | عالم بيانات و محلل أعمال",
  };

  useEffect(() => {
    let currentIndex = 0;
    const typeWriter = () => {
      const title = titles[currentLanguage];
      if (currentIndex < title.length) {
        setTypewriterText(title.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 70);
      } else {
        setIsTyping(false);
      }
    };
    setTypewriterText("");
    setIsTyping(true);
    typeWriter();
  }, [currentLanguage]);

  const contentByLang = {
    fr: {
      name: "Abdessamad Hnioua",
      description:
        "Passionné par le développement web moderne et l'analyse de données. J’aide les entreprises à créer des solutions digitales performantes et à transformer leurs données en valeur stratégique.",
      downloadCV: "Télécharger CV",
      contact: "Me Contacter",
      discover: "Découvrir",
    },
    en: {
      name: "Abdessamad Hnioua",
      description:
        "Passionate about modern web development and data analysis. I help companies create high-performance digital solutions and turn their data into strategic value.",
      downloadCV: "Download CV",
      contact: "Contact Me",
      discover: "Discover",
    },
    ar: {
      name: "عبدالصمد حنيوا",
      description:
        "شغوف بتطوير الويب الحديث وتحليل البيانات. أساعد الشركات على إنشاء حلول رقمية عالية الأداء وتحويل بياناتهم إلى قيمة استراتيجية.",
      downloadCV: "تحميل السيرة الذاتية",
      contact: "اتصل بي",
      discover: "اكتشف",
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Cyber Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      {/* Floating Tech Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-green-400/50 rounded-full"
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
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Name */}
          <h2 className="text-xl text-green-400 font-semibold mb-2">
            {contentByLang[currentLanguage].name}
          </h2>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-4">
            {typewriterText}
            {isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400"
              >
                |
              </motion.span>
            )}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-6">
            {contentByLang[currentLanguage].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:scale-105 transition">
              {contentByLang[currentLanguage].downloadCV}
            </Button>
            <Button
              onClick={() => onScrollToSection("contact")}
              className="bg-green-500 text-wthie-400 hover:bg-green-500/10 shadow-lg hover:scale-105 transition"
            >
              {contentByLang[currentLanguage].contact}
            </Button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.img
          src="/assets/images/profil2.jpg"
          alt="Profil"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-green-400 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
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
          <span className="text-sm text-gray-400 font-medium">
            {contentByLang[currentLanguage].discover}
          </span>
          <Icon name="ChevronDown" size={20} className="text-green-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
