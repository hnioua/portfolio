import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// -------------------- IMPORT ICONS --------------------
// FontAwesome Brands (technologies / logos)
import {
  faPython,
  faNode,
  faReact,
  faLaravel,
  faHtml5,
  faCss3,
  faPhp,
  faGit,
  faGithub,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

// FontAwesome Solid (icônes génériques)
import {
  faLayerGroup,
  faBrain,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

// -------------------- Mapping des icônes --------------------
const skillIconsMap = {
  HTML: faHtml5,
  CSS: faCss3,
  JavaScript: "/assets/icons/javascript.webp",
  "AJAX / XML":
    "https://img.icons8.com/?size=100&id=81831&format=png&color=000000",
  PHP: faPhp,
  "React.js": faReact,
  Laravel: faLaravel,
  "Next.js":
    "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
  "Node.js": faNode,
  "Express.js":
    "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000",
  Arduino: "/assets/icons/arduino.webp",
  Python: faPython,
  Pandas: "/assets/icons/Pandas.webp",
  NumPy: "/assets/icons/NumPy.webp",
  Matplotlib: "/assets/icons/Matplotlib.webp",
  "Data Cleaning":
    "https://img.icons8.com/?size=100&id=JxWi9dUG32DK&format=png&color=000000",
  // "PCA / VFD / AFC / AFD": faLayerGroup,
  Regression:
    "https://img.icons8.com/?size=100&id=xCl8pA8G18Wt&format=png&color=000000",
  Classification:
    "https://img.icons8.com/?size=100&id=d0mvB0b7Ml0f&format=png&color=000000",
  Clustering:
    "https://img.icons8.com/?size=100&id=3GBKWaSF5bSo&format=png&color=008000",
  "Scikit-learn": faBrain,
  TensorFlow: "/assets/icons/Tensorflow.webp",
  "Power BI": "/assets/icons/powerbi.webp",
  Tableau: "/assets/icons/tableau.webp",
  ETL: faRepeat,
  Git: faGit,
  GitHub: faGithub,
  Docker: faDocker,
  Java: "/assets/icons/java.webp",
  PostgreSQL: "/assets/icons/Postgresql.webp",
  Firebase: "/assets/icons/firebase.webp",
  "VS Code": "/assets/icons/vscode.webp",
  Postman: "/assets/icons/postman.webp",
  PowerAMC: "/assets/icons/poweramc.webp",
  Kotlin: "/assets/icons/kotlin.webp",
  MySQL: "/assets/icons/mysql.webp",
  AndroidStudio: "/assets/icons/androidstodio.webp",
};

// -------------------- Mapping des couleurs --------------------
const skillColorsMap = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  "AJAX / XML": "#6E6E6E",
  PHP: "#777BB4",
  "React.js": "#61DAFB",
  Laravel: "#FF2D20",
  "Node.js": "#339933",
  Arduino: "#00979D",
  Python: "#3776AB",
  Pandas: "#150458",
  NumPy: "#013243",
  Matplotlib: "#11557C",
  "Data Cleaning": "#D32F2F",
  // "PCA / VFD / AFC / AFD": "#6A1B9A",
  Regression: "#1976D2",
  Classification: "#388E3C",
  Clustering: "#FBC02D",
  "Scikit-learn": "#F7931E",
  TensorFlow: "#FF6F00",
  "Power BI": "#F2C80F",
  Tableau: "#E97627",
  ETL: "#009688",
  Git: "#F05032",
  Docker: "#2496ED",
  Java: "#007396",
  PostgreSQL: "#336791",
  Firebase: "#FFCA28",
  "VS Code": "#007ACC",
  Postman: "#FF6C37",
  PowerAMC: "#0052CC",
  Kotlin: "#0095D5",
  MySQL: "#4479A1",
  AndroidStudio: "#3DDC84",
  "Next.js": "#000000",
};

// -------------------- Composant SkillIcon --------------------
const SkillIcon = ({ name, size = "text-5xl", onClick }) => {
  const icon = skillIconsMap[name];
  const color = skillColorsMap[name] || "white";

  if (!icon) return null;

  const commonClasses = `${size} w-12 h-12 sm:w-12 sm:h-12`;

  return (
    <button
      onClick={onClick}
      className="focus:outline-none hover:scale-110 transition-transform"
      aria-label={name}
      title={name}
    >
      {typeof icon === "string" ? (
        <img
          src={icon}
          alt={name}
          className={`${commonClasses} object-contain`}
        />
      ) : (
        <FontAwesomeIcon
          icon={icon}
          className={commonClasses}
          style={{ color }}
        />
      )}
    </button>
  );
};

// -------------------- Composant SkillsGrid --------------------
const SkillsGrid = ({ currentLanguage }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Compétences",
      subtitle: "Maîtrise des technologies modernes et Data Analysis",
    },
    en: {
      title: "Technical Skills",
      subtitle: "Mastery of modern technologies and Data Analysis",
    },
  };

  const categories = [
    { id: "all", label: { fr: "Toutes", en: "All" } },
    { id: "web", label: { fr: "Web & Dev", en: "Web & Dev" } },
    { id: "ml", label: { fr: "Machine Learning", en: "Machine Learning" } },
    { id: "bi", label: { fr: "BI & Visualisation", en: "BI & Visualization" } },
    {
      id: "data",
      label: { fr: "Analyse & Cleaning", en: "Data Analysis & Cleaning" },
    },
    { id: "hardware", label: { fr: "Robotique", en: "Hardware & Robotics" } },
  ];

  const skills = [
    { name: "HTML", category: "web" },
    { name: "CSS", category: "web" },
    { name: "JavaScript", category: "web" },
    { name: "AJAX / XML", category: "web" },
    { name: "PHP", category: "web" },
    { name: "React.js", category: "web" },
    { name: "Laravel", category: "web" },
    { name: "Next.js", category: "web" },
    { name: "Node.js", category: "web" },
    { name: "Express.js", category: "web" },
    { name: "Git", category: "web" },
    { name: "GitHub", category: "web" },
    { name: "Docker", category: "web" },
    { name: "Arduino", category: "hardware" },
    { name: "Python", category: "data" },
    { name: "Pandas", category: "data" },
    { name: "NumPy", category: "data" },
    { name: "Matplotlib", category: "data" },
    { name: "Data Cleaning", category: "data" },
    // { name: "PCA / VFD / AFC / AFD", category: "data" },
    { name: "Regression", category: "ml" },
    { name: "Classification", category: "ml" },
    { name: "Clustering", category: "ml" },
    { name: "Scikit-learn", category: "ml" },
    { name: "TensorFlow", category: "ml" },
    { name: "Power BI", category: "bi" },
    { name: "Tableau", category: "bi" },
    { name: "ETL", category: "bi" },
    { name: "Java", category: "web" },
    { name: "PostgreSQL", category: "data" },
    { name: "Firebase", category: "bi" },
    { name: "VS Code", category: "web" },
    { name: "Postman", category: "web" },
    { name: "PowerAMC", category: "web" },
    { name: "Kotlin", category: "web" },
    { name: "MySQL", category: "data" },
    { name: "AndroidStudio", category: "hardware" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const handleIconClick = (skillName) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden py-12 sm:py-20"
    >
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-green-400 mb-4">
            {content[currentLanguage].title}
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            {content[currentLanguage].subtitle}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <div className="sm:hidden w-full">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label={content[currentLanguage].title}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label[currentLanguage]}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden sm:flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeCategory === cat.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-green-500/20"
                }`}
              >
                {cat.label[currentLanguage]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center text-center"
            >
              <SkillIcon
                name={skill.name}
                onClick={() => handleIconClick(skill.name)}
              />
              <span
                className={`${
                  selectedSkill === skill.name
                    ? "block sm:block"
                    : "hidden sm:block"
                } text-white font-medium text-xs sm:text-base mt-4`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
