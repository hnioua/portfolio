import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const SolutionShowcase = ({ currentLanguage }) => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Solutions BI & Data Science Sur-Mesure",
      subtitle: "Transformez vos défis data en avantages concurrentiels",
      description: `Une approche holistique combinant expertise technique, 
      compréhension métier et technologies de pointe pour maximiser la valeur de vos données.`,
    },
    en: {
      title: "Tailored BI & Data Science Solutions",
      subtitle: "Transform your data challenges into competitive advantages",
      description: `A holistic approach combining technical expertise, 
      business understanding, and cutting-edge technologies to maximize your data value.`,
    },
    ar: {
      title: "حلول ذكاء الأعمال وعلوم البيانات المخصصة",
      subtitle: "حول تحديات البيانات إلى مزايا تنافسية",
      description: `نهج شامل يجمع بين الخبرة التقنية، 
      فهم الأعمال، والتقنيات المتطورة لتعظيم قيمة بياناتك.`,
    },
  };

  const expertiseAreas = {
    fr: [
      {
        id: "bi-analytics",
        title: "BI & Analytics",
        icon: "BarChart3",
        description: "Tableaux de bord interactifs et analyses prédictives",
        color: "blue",
        features: [
          "Dashboards Power BI & Tableau avancés",
          "Analyses prédictives et forecasting",
          "KPIs métier et alertes automatisées",
          "Rapports self-service pour utilisateurs",
        ],
        technologies: ["Power BI", "Tableau", "QlikView", "Looker"],
        results: [
          { metric: "85%", label: "Réduction temps de reporting" },
          { metric: "67%", label: "Amélioration prise de décision" },
          { metric: "45%", label: "Augmentation ROI projets" },
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        icon: "Brain",
        description: "Modèles prédictifs et intelligence artificielle",
        color: "purple",
        features: [
          "Modèles de classification et régression",
          "Détection d'anomalies et fraudes",
          "Recommandation et personnalisation",
          "NLP et traitement du langage naturel",
        ],
        technologies: ["Python", "Scikit-learn", "TensorFlow", "PyTorch"],
        results: [
          { metric: "92%", label: "Précision des modèles" },
          { metric: "78%", label: "Réduction des erreurs" },
          { metric: "156%", label: "ROI sur automatisation" },
        ],
      },
      {
        id: "data-engineering",
        title: "Data Engineering",
        icon: "Database",
        description: "Architecture et pipelines de données robustes",
        color: "green",
        features: [
          "ETL/ELT et pipelines automatisés",
          "Data warehouses et data lakes",
          "Intégration multi-sources",
          "Gouvernance et qualité des données",
        ],
        technologies: ["SQL Server", "PostgreSQL", "Apache Spark", "Airflow"],
        results: [
          { metric: "73%", label: "Réduction temps traitement" },
          { metric: "95%", label: "Qualité des données" },
          { metric: "60%", label: "Coûts infrastructure optimisés" },
        ],
      },
    ],
    en: [
      {
        id: "bi-analytics",
        title: "BI & Analytics",
        icon: "BarChart3",
        description: "Interactive dashboards and predictive analytics",
        color: "blue",
        features: [
          "Advanced Power BI & Tableau dashboards",
          "Predictive analytics and forecasting",
          "Business KPIs and automated alerts",
          "Self-service reports for users",
        ],
        technologies: ["Power BI", "Tableau", "QlikView", "Looker"],
        results: [
          { metric: "85%", label: "Reporting time reduction" },
          { metric: "67%", label: "Decision-making improvement" },
          { metric: "45%", label: "Project ROI increase" },
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        icon: "Brain",
        description: "Predictive models and artificial intelligence",
        color: "purple",
        features: [
          "Classification and regression models",
          "Anomaly and fraud detection",
          "Recommendation and personalization",
          "NLP and natural language processing",
        ],
        technologies: ["Python", "Scikit-learn", "TensorFlow", "PyTorch"],
        results: [
          { metric: "92%", label: "Model accuracy" },
          { metric: "78%", label: "Error reduction" },
          { metric: "156%", label: "Automation ROI" },
        ],
      },
      {
        id: "data-engineering",
        title: "Data Engineering",
        icon: "Database",
        description: "Robust data architecture and pipelines",
        color: "green",
        features: [
          "Automated ETL/ELT pipelines",
          "Data warehouses and data lakes",
          "Multi-source integration",
          "Data governance and quality",
        ],
        technologies: ["SQL Server", "PostgreSQL", "Apache Spark", "Airflow"],
        results: [
          { metric: "73%", label: "Processing time reduction" },
          { metric: "95%", label: "Data quality" },
          { metric: "60%", label: "Optimized infrastructure costs" },
        ],
      },
    ],
    ar: [
      {
        id: "bi-analytics",
        title: "ذكاء الأعمال والتحليلات",
        icon: "BarChart3",
        description: "لوحات معلومات تفاعلية وتحليلات تنبؤية",
        color: "blue",
        features: [
          "لوحات Power BI و Tableau متقدمة",
          "التحليلات التنبؤية والتنبؤ",
          "مؤشرات الأداء والتنبيهات الآلية",
          "تقارير الخدمة الذاتية للمستخدمين",
        ],
        technologies: ["Power BI", "Tableau", "QlikView", "Looker"],
        results: [
          { metric: "85%", label: "تقليل وقت التقارير" },
          { metric: "67%", label: "تحسين اتخاذ القرارات" },
          { metric: "45%", label: "زيادة عائد الاستثمار" },
        ],
      },
      {
        id: "machine-learning",
        title: "التعلم الآلي",
        icon: "Brain",
        description: "النماذج التنبؤية والذكاء الاصطناعي",
        color: "purple",
        features: [
          "نماذج التصنيف والانحدار",
          "كشف الشذوذ والاحتيال",
          "التوصية والتخصيص",
          "معالجة اللغة الطبيعية",
        ],
        technologies: ["Python", "Scikit-learn", "TensorFlow", "PyTorch"],
        results: [
          { metric: "92%", label: "دقة النماذج" },
          { metric: "78%", label: "تقليل الأخطاء" },
          { metric: "156%", label: "عائد الاستثمار في الأتمتة" },
        ],
      },
      {
        id: "data-engineering",
        title: "هندسة البيانات",
        icon: "Database",
        description: "هندسة البيانات وخطوط الأنابيب القوية",
        color: "green",
        features: [
          "خطوط ETL/ELT الآلية",
          "مستودعات وبحيرات البيانات",
          "التكامل متعدد المصادر",
          "حوكمة وجودة البيانات",
        ],
        technologies: ["SQL Server", "PostgreSQL", "Apache Spark", "Airflow"],
        results: [
          { metric: "73%", label: "تقليل وقت المعالجة" },
          { metric: "95%", label: "جودة البيانات" },
          { metric: "60%", label: "تكاليف البنية المحسنة" },
        ],
      },
    ],
  };

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-600",
      accent: "bg-blue-100",
      gradient: "from-blue-500 to-cyan-500",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "text-purple-600",
      accent: "bg-purple-100",
      gradient: "from-purple-500 to-pink-500",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-600",
      accent: "bg-green-100",
      gradient: "from-green-500 to-emerald-500",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExpertise(
        (prev) => (prev + 1) % expertiseAreas?.[currentLanguage]?.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentLanguage]);

  const currentExpertise = expertiseAreas?.[currentLanguage]?.[activeExpertise];
  const colors = colorClasses?.[currentExpertise?.color];

  return (
    <section id="expertise" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {content?.[currentLanguage]?.title}
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">
            {content?.[currentLanguage]?.subtitle}
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {content?.[currentLanguage]?.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Expertise Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {expertiseAreas?.[currentLanguage]?.map((area, index) => {
              const areaColors = colorClasses?.[area?.color];
              const isActive = activeExpertise === index;

              return (
                <motion.div
                  key={area?.id}
                  className={`
                    relative p-6 rounded-2xl cursor-pointer portfolio-transition border-2
                    ${
                      isActive
                        ? `${areaColors?.bg} ${areaColors?.border}`
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }
                  `}
                  onClick={() => setActiveExpertise(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      ${isActive ? areaColors?.accent : "bg-white"}
                    `}
                    >
                      <Icon
                        name={area?.icon}
                        size={24}
                        className={
                          isActive ? areaColors?.icon : "text-slate-600"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`
                        text-lg font-bold mb-2
                        ${isActive ? "text-slate-800" : "text-slate-700"}
                      `}
                      >
                        {area?.title}
                      </h3>
                      <p
                        className={`
                        text-sm leading-relaxed
                        ${isActive ? "text-slate-600" : "text-slate-500"}
                      `}
                      >
                        {area?.description}
                      </p>
                    </div>
                  </div>
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${areaColors?.gradient} rounded-r-full`}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Expertise Details */}
          <motion.div
            key={activeExpertise}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl portfolio-shadow-card p-8">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colors?.accent}`}
                >
                  <Icon
                    name={currentExpertise?.icon}
                    size={32}
                    className={colors?.icon}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {currentExpertise?.title}
                  </h3>
                  <p className="text-slate-600">
                    {currentExpertise?.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">
                  {currentLanguage === "fr"
                    ? "Fonctionnalités Clés"
                    : currentLanguage === "en"
                    ? "Key Features"
                    : "الميزات الرئيسية"}
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentExpertise?.features?.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className={`${colors?.icon} mt-1 flex-shrink-0`}
                      />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-800 mb-4">
                  {currentLanguage === "fr"
                    ? "Technologies Utilisées"
                    : currentLanguage === "en"
                    ? "Technologies Used"
                    : "التقنيات المستخدمة"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentExpertise?.technologies?.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${colors?.bg} ${colors?.icon}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-4">
                  {currentLanguage === "fr"
                    ? "Résultats Mesurables"
                    : currentLanguage === "en"
                    ? "Measurable Results"
                    : "النتائج القابلة للقياس"}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {currentExpertise?.results?.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`text-center p-4 rounded-xl ${colors?.bg}`}
                    >
                      <div
                        className={`text-2xl font-bold ${colors?.icon} mb-1`}
                      >
                        {result?.metric}
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {result?.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {currentLanguage === "fr"
                ? "Méthodologie Éprouvée"
                : currentLanguage === "en"
                ? "Proven Methodology"
                : "منهجية مثبتة"}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {currentLanguage === "fr"
                ? "Un processus structuré en 5 étapes pour garantir le succès de vos projets data"
                : currentLanguage === "en"
                ? "A structured 5-step process to ensure the success of your data projects"
                : "عملية منظمة من 5 خطوات لضمان نجاح مشاريع البيانات الخاصة بك"}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
            {[
              {
                icon: "Search",
                label:
                  currentLanguage === "fr"
                    ? "Analyse"
                    : currentLanguage === "en"
                    ? "Analysis"
                    : "التحليل",
              },
              {
                icon: "Settings",
                label:
                  currentLanguage === "fr"
                    ? "Conception"
                    : currentLanguage === "en"
                    ? "Design"
                    : "التصميم",
              },
              {
                icon: "Code",
                label:
                  currentLanguage === "fr"
                    ? "Développement"
                    : currentLanguage === "en"
                    ? "Development"
                    : "التطوير",
              },
              {
                icon: "TestTube",
                label:
                  currentLanguage === "fr"
                    ? "Tests"
                    : currentLanguage === "en"
                    ? "Testing"
                    : "الاختبار",
              },
              {
                icon: "Rocket",
                label:
                  currentLanguage === "fr"
                    ? "Déploiement"
                    : currentLanguage === "en"
                    ? "Deployment"
                    : "النشر",
              },
            ]?.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-3">
                    <Icon name={step?.icon} size={24} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {step?.label}
                  </span>
                </motion.div>
                {index < 4 && (
                  <Icon
                    name="ArrowRight"
                    size={20}
                    className="text-slate-400 hidden md:block"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionShowcase;
