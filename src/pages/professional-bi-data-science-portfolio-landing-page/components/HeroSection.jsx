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

/* -------------------- Mapping des icônes Tech -------------------- */
const techIconsMap = {
  Python: faPython,
  Node: faNode,
  React: faReact,
  Laravel: faLaravel,
  Docker: faDocker,
  Git: faGit,
  GitHub: faGithub,
};

/* -------------------- Composant TechIcon -------------------- */
const TechIcon = ({ name, className = "text-green-400 text-3xl" }) => {
  const icon = techIconsMap[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className={className} />;
};

/* -------------------- Composant Button -------------------- */
const Button = ({ children, className = "", onClick, ...props }) => (
  <button
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

/* -------------------- Composant HeroSection -------------------- */
const HeroSection = ({ onScrollToSection, currentLanguage = "fr" }) => {
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  /* Titres multilingues */
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

  /* -------------------- Effet machine à écrire -------------------- */
  useEffect(() => {
    let currentIndex = 0;
    let titleIndex = 0;
    let timeoutId;

    const currentTitles = titles[currentLanguage];

    const typeWriter = () => {
      const currentTitle = currentTitles[titleIndex];

      if (currentIndex < currentTitle.length) {
        setTypewriterText(currentTitle.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 70);
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(() => {
          setIsTyping(true);
          currentIndex = 0;
          titleIndex = (titleIndex + 1) % currentTitles.length;
          setTypewriterText("");
          timeoutId = setTimeout(typeWriter, 500);
        }, 2000);
      }
    };

    // Lancer le typewriter
    typeWriter();

    // Cleanup pour éviter les bugs quand la langue change
    return () => clearTimeout(timeoutId);
  }, [currentLanguage]);

  /* Contenu multi-langue */
  const contentByLang = {
    fr: {
      greeting: "👋 Bonjour, je suis",
      name: "Abdessamad Hnioua",
      description:
        "Passionné par le développement web moderne et l'analyse de données. J'aide les entreprises à créer des solutions digitales performantes et à transformer leurs données en valeur stratégique avec les technologies",
      techStack: "Tech Stack:",
      downloadCV: "Télécharger CV",
      contact: "Me Contacter",
    },
    en: {
      greeting: "👋 Hello, I'm",
      name: "Abdessamad Hnioua",
      description:
        "Passionate about modern web development and data analysis. I help companies create high-performance digital solutions and turn their data into strategic value with",
      techStack: "Tech Stack:",
      downloadCV: "Download CV",
      contact: "Contact Me",
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
      {/* -------------------- Background global -------------------- */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-56 h-56 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      {/* -------------------- Contenu principal -------------------- */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-16 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* ---- Colonne gauche (texte + CTA + slider) ---- */}
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

            {/* Machine à écrire */}
            <h2 className="text-xl lg:text-2xl text-gray-300 font-medium min-h-[2.5rem] flex items-center">
              <span className="text-green-400">{typewriterText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-green-400 ml-1"
              >
                |
              </motion.span>
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

          {/* ---- Colonne droite (photo profil + cercles animés) ---- */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative lg:translate-x-[-80px]">
              {/* Arrière-plan avec effet de tour - plus grand */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-teal-400/10 rounded-full blur-xl"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
              />

              {/* Deuxième couche d'arrière-plan */}
              <motion.div
                className="absolute -inset-12 bg-gradient-to-br from-green-300/5 via-emerald-400/5 to-teal-300/5 rounded-full blur-2xl"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear",
                }}
              />

              {/* Container principal de l'image - FIXE */}
              <div className="relative w-80 h-80 rounded-full border-4 border-dashed border-green-400 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-2xl mx-auto">
                {/* Image de profil - STATIQUE ET CLAIRE */}
                <img
                  src="/assets/images/Profil2.png"
                  alt="Abdessamad Hnioua Profile"
                  className="w-72 h-72 rounded-full object-cover z-10 relative"
                />
                {/* Cercles rotatifs - tournent autour de l'image fixe */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-400/40 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-green-500/30 pointer-events-none"
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-12 rounded-full border border-emerald-400/20 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                />

                {/* Effet de brillance qui tourne autour */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Particules flottantes autour */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-8 left-6 w-2 h-2 bg-emerald-400 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-12 left-8 w-1 h-1 bg-teal-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* -------------------- Effets digitaux (Pulse + Background) -------------------- */}
      {/* Cercle animé pulse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/10 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Background digital animé */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {/* Grille numérique */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#16a34a40_1px,transparent_1px),linear-gradient(to_bottom,#16a34a40_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Particules */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            initial={{ x: Math.random() * 400 - 200, y: 200, opacity: 0 }}
            animate={{ y: -200, opacity: [0, 1, 0] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Lignes digitales */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-40 bg-green-500/30"
            style={{ left: `${Math.random() * 100}%` }}
            initial={{ top: "100%" }}
            animate={{ top: "-40px" }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
