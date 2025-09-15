import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faNode,
  faReact,
  faLaravel,
  faDocker,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// Mapping des icônes Tech
const techIconsMap = {
  Python: faPython,
  Node: faNode,
  React: faReact,
  Laravel: faLaravel,
  Docker: faDocker,
  Git: faGit,
  GitHub: faGithub,
};

// Composant TechIcon
const TechIcon = ({ name, className = "text-green-400 text-3xl" }) => {
  const icon = techIconsMap[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className={className} />;
};

// Composant Button
const Button = ({ children, className = "", onClick, ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const HeroSection = ({ onScrollToSection, currentLanguage = "fr" }) => {
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = {
    fr: [
      "Full Stack Developer",
      "React · Node.js · Laravel",
      "Data Scientist & Business Analyst",
    ],
    en: [
      "Full Stack Developer",
      "React · Node.js · Laravel",
      "Data Scientist & Business Analyst",
    ],
  };

  useEffect(() => {
    let currentIndex = 0;
    let titleIndex = 0;

    const typeWriter = () => {
      const currentTitles = titles[currentLanguage];
      const currentTitle = currentTitles[titleIndex];

      if (currentIndex < currentTitle.length) {
        setTypewriterText(currentTitle.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 70);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          currentIndex = 0;
          titleIndex = (titleIndex + 1) % currentTitles.length;
          setCurrentTitleIndex(titleIndex);
          setTypewriterText("");
          setTimeout(typeWriter, 500);
        }, 2000);
      }
    };

    typeWriter();
  }, [currentLanguage]);

  const contentByLang = {
    fr: {
      greeting: "👋 Bonjour, je suis",
      name: "Abdessamad Hnioua",
      description:
        "Passionné par le développement web moderne et l'analyse de données. J'aide les entreprises à créer des solutions digitales performantes et à transformer leurs données en valeur stratégique avec les technologies",
      techStack: "Tech Stack:",
      downloadCV: "Télécharger CV",
      contact: "Me Contacter",
      discover: "Découvrir",
    },
    en: {
      greeting: "👋 Hello, I'm",
      name: "Abdessamad Hnioua",
      description:
        "Passionate about modern web development and data analysis. I help companies create high-performance digital solutions and turn their data into strategic value with",
      techStack: "Tech Stack:",
      downloadCV: "Download CV",
      contact: "Contact Me",
      discover: "Discover",
    },
  };

  const techHighlights = [
    "React",
    "Node",
    "Laravel",
    "Python",
    "Docker",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background & Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-56 h-56 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-base">
              {contentByLang[currentLanguage].greeting}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-green-400">Abdessamad</span>{" "}
              <span className="text-green-300">Hnioua</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-300 font-medium min-h-[2.5rem] flex items-center">
              <span className="text-green-400">
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
              </span>
            </h2>
            <p className="text-gray-400 text-justify text-base max-w-md leading-relaxed">
              {contentByLang[currentLanguage].description}{" "}
              {techHighlights.map((tech, index) => (
                <span key={index}>
                  <span className="text-green-400 font-medium">{tech}</span>
                  {index < techHighlights.length - 1 && ", "}
                  {index === techHighlights.length - 2 &&
                    (currentLanguage === "fr" ? " et " : " and ")}
                </span>
              ))}
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:scale-105 transition">
                {contentByLang[currentLanguage].downloadCV}
              </Button>
              <Button
                onClick={() => onScrollToSection("contact")}
                className="bg-green-500 text-white hover:bg-green-600 shadow-lg hover:scale-105 transition"
              >
                {contentByLang[currentLanguage].contact}
              </Button>
            </div>

            {/* Tech Stack Slider */}
            <div className="pt-4 overflow-hidden relative">
              <p className="text-gray-400 mb-2 font-medium">
                {contentByLang[currentLanguage].techStack}
              </p>
              <motion.div
                className="flex gap-6 text-3xl w-max"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              >
                {[...techHighlights, ...techHighlights].map((tech, index) => (
                  <TechIcon key={index} name={tech} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative translate-x-[-40px] lg:translate-x-[-80px]">
              <div className="relative w-64 h-64 rounded-full border-4 border-dashed border-green-400 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/profil2.jpg"
                  alt="Abdessamad Hnioua Profile"
                  className="w-60 h-60 rounded-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-green-400/40"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-6 rounded-full border border-green-500/30"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
