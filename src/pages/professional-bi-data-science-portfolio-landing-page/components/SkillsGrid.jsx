import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faNode,
  faReact,
  faLaravel,
  faHtml5,
  faCss3,
  faJs,
  faPhp,
  faGit,
  faGithub,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCalculator,
  faChartLine,
  faTrash,
  faLayerGroup,
  faServer,
  faBrain,
  faBolt,
  faChartSimple,
  faRepeat,
  faCheckSquare,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

// Mapping des icônes pour les compétences
const skillIconsMap = {
  HTML: faHtml5,
  CSS: faCss3,
  JavaScript: faJs,
  "AJAX / XML": faServer,
  PHP: faPhp,
  "React.js": faReact,
  Laravel: faLaravel,
  "Next.js": faReact,
  "Node.js": faNode,
  "Express.js": faServer,
  Arduino: faServer,
  Python: faPython,
  Pandas: faDatabase,
  NumPy: faCalculator,
  Matplotlib: faChartLine,
  "Data Cleaning": faTrash,
  "PCA / VFD / AFC / AFD": faLayerGroup,
  "Regression Techniques": faChartLine,
  "Classification Techniques": faCheckSquare,
  Clustering: faLayerGroup,
  "Scikit-learn": faBrain,
  TensorFlow: faBolt,
  "Power BI": faChartBar,
  Tableau: faChartSimple,
  ETL: faRepeat,
  Git: faGit,
  GitHub: faGithub,
  Docker: faDocker,
};

// Composant SkillIcon
const SkillIcon = ({ name, className = "text-green-400 text-xl" }) => {
  const icon = skillIconsMap[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className={className} />;
};

const SkillsGrid = ({ currentLanguage }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Compétences Techniques",
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
    // Web & Dev
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

    // Hardware
    { name: "Arduino", category: "hardware" },

    // Data
    { name: "Python", category: "data" },
    { name: "Pandas", category: "data" },
    { name: "NumPy", category: "data" },
    { name: "Matplotlib", category: "data" },
    { name: "Data Cleaning", category: "data" },
    { name: "PCA / VFD / AFC / AFD", category: "data" },

    // Machine Learning
    { name: "Regression Techniques", category: "ml" },
    { name: "Classification Techniques", category: "ml" },
    { name: "Clustering", category: "ml" },
    { name: "Scikit-learn", category: "ml" },
    { name: "TensorFlow", category: "ml" },

    // BI
    { name: "Power BI", category: "bi" },
    { name: "Tableau", category: "bi" },
    { name: "ETL", category: "bi" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

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
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden py-20"
    >
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
            {content[currentLanguage].title}
          </h2>
          <p className="text-lg text-gray-300">
            {content[currentLanguage].subtitle}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition
                ${
                  activeCategory === cat.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-green-500/20"
                }`}
            >
              {cat.label[currentLanguage]}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-4 py-2 bg-gray-800/60 rounded-xl border border-gray-700 hover:scale-105 hover:shadow-lg transition"
            >
              <SkillIcon name={skill.name} />
              <span className="text-white font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
