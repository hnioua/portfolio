import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

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
    ar: {
      title: "المهارات التقنية",
      subtitle: "إتقان التقنيات الحديثة وتحليل البيانات",
    },
  };

  const categories = [
    { id: "all", label: { fr: "Toutes", en: "All", ar: "الكل" } },
    {
      id: "web",
      label: { fr: "Web & Dev", en: "Web & Dev", ar: "الويب والتطوير" },
    },
    {
      id: "ml",
      label: {
        fr: "Machine Learning",
        en: "Machine Learning",
        ar: "التعلم الآلي",
      },
    },
    {
      id: "bi",
      label: {
        fr: "BI & Visualisation",
        en: "BI & Visualization",
        ar: "ذكاء الأعمال والتصور",
      },
    },
    {
      id: "data",
      label: {
        fr: "Analyse & Cleaning",
        en: "Data Analysis & Cleaning",
        ar: "تحليل وتنظيف البيانات",
      },
    },
  ];

  const skills = [
    // Web & Dev
    {
      name: "HTML",
      category: "web",
      icon: "Html5",
      description: "HTML5 structuring web pages",
    },
    {
      name: "CSS",
      category: "web",
      icon: "Css3",
      description: "CSS3 styling and responsive design",
    },
    {
      name: "JavaScript",
      category: "web",
      icon: "JsSquare",
      description: "Dynamic web applications",
    },
    {
      name: "AJAX / XML",
      category: "web",
      icon: "FileCode",
      description: "Asynchronous data handling",
    },
    {
      name: "PHP",
      category: "web",
      icon: "Php",
      description: "Server-side programming",
    },
    {
      name: "React.js",
      category: "web",
      icon: "React",
      description: "Front-end component-based UI",
    },
    {
      name: "Laravel",
      category: "web",
      icon: "Laravel",
      description: "PHP framework for web apps",
    },
    {
      name: "Next.js",
      category: "web",
      icon: "NextJs",
      description: "React SSR framework",
    },
    {
      name: "Node.js",
      category: "web",
      icon: "NodeJs",
      description: "Backend with JS",
    },
    {
      name: "Express.js",
      category: "web",
      icon: "Server",
      description: "Node.js web framework",
    },

    // Hardware / Robotique
    {
      name: "Arduino",
      category: "hardware",
      icon: "Cpu",
      description: "Microcontroller programming & robotics",
    },

    // Data & Analysis
    {
      name: "Python",
      category: "data",
      icon: "Python",
      description: "Data processing & ML",
    },
    {
      name: "Pandas",
      category: "data",
      icon: "Database",
      description: "DataFrames & cleaning",
    },
    {
      name: "NumPy",
      category: "data",
      icon: "Calculator",
      description: "Numerical computing",
    },
    {
      name: "Matplotlib",
      category: "data",
      icon: "ChartLine",
      description: "Data visualization",
    },
    {
      name: "Data Cleaning",
      category: "data",
      icon: "Trash2",
      description: "Missing values, normalization, encoding",
    },
    {
      name: "PCA / VFD / AFC / AFD",
      category: "data",
      icon: "Layers",
      description: "Dimensionality reduction & feature analysis",
    },

    // Machine Learning
    {
      name: "Regression Techniques",
      category: "ml",
      icon: "TrendingUp",
      description: "Linear & logistic regression models",
    },
    {
      name: "Classification Techniques",
      category: "ml",
      icon: "CheckSquare",
      description: "Decision trees, SVM, KNN, etc.",
    },
    {
      name: "Clustering",
      category: "ml",
      icon: "Cluster",
      description: "K-Means, Hierarchical clustering",
    },
    {
      name: "Scikit-learn",
      category: "ml",
      icon: "Brain",
      description: "Machine Learning library",
    },
    {
      name: "TensorFlow",
      category: "ml",
      icon: "Zap",
      description: "Deep Learning models",
    },

    // BI & Visualization
    {
      name: "Power BI",
      category: "bi",
      icon: "BarChart3",
      description: "Interactive dashboards",
    },
    {
      name: "Tableau",
      category: "bi",
      icon: "TrendingUp",
      description: "Data visualization & storytelling",
    },
    {
      name: "ETL",
      category: "bi",
      icon: "Repeat",
      description: "Data extraction & transformation",
    },
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
            {content[currentLanguage].title}
          </h2>
          <p className="text-lg text-gray-300">
            {content[currentLanguage].subtitle}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Skills Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-500/20 mr-3">
                  <Icon
                    name={skill.icon}
                    size={24}
                    className="text-green-400"
                  />
                </div>
                <h3 className="text-lg font-bold text-green-400">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
