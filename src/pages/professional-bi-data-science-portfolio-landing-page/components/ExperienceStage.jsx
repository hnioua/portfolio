import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const ExperienceTimeline = ({ currentLanguage }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Expérience Professionnelle",
      subtitle: "Stages & Projets réalisés dans des organismes de référence",
      description:
        "Parcours pratique en développement web, BI et intégration de données",
    },
    en: {
      title: "Professional Experience",
      subtitle: "Internships & Projects carried out in leading organizations",
      description:
        "Hands-on journey in web development, BI, and data integration",
    },
    ar: {
      title: "الخبرات المهنية",
      subtitle: "تدريب ومشاريع في مؤسسات مرجعية",
      description: "مسار عملي في تطوير الويب وذكاء الأعمال ودمج البيانات",
    },
  };

  const timelineData = {
    fr: [
      {
        id: 1,
        type: "experience",
        title: "Développement d’une plateforme numérique",
        organization: "Agence de Développement Social (ADS)",
        location: "Rabat, Maroc",
        period: "Avril 2024 – Juillet 2024",
        duration: "3 mois",
        description:
          "Développement d’une plateforme numérique pour l’intégration sociale des femmes avec visualisation via des outils BI. Mise en œuvre de processus ETL pour l’intégration des données multicanales.",
        achievements: [
          "Développement d’une plateforme numérique pour l’intégration sociale des femmes",
          "Mise en œuvre de processus ETL pour l’intégration des données multicanales",
        ],
        technologies: [
          "NextJs",
          "NodeJs",
          "Express",
          "Excel",
          "Power BI",
          "MySQL",
          "Python (Pandas)",
        ],
        skills: ["Business Intelligence", "ETL", "Fullstack Development"],
        color: "green",
      },
      {
        id: 2,
        type: "experience",
        title: "Projet de développement",
        organization:
          "Académie Régionale de l’Éducation et de la Formation Souss Massa-Agadir",
        location: "Agadir, Maroc",
        period: "Avril 2023 – Juin 2023",
        duration: "2 mois",
        description:
          "Développement d’une application web pour la collecte, la gestion et la visualisation des données d’institutions pionnières.",
        achievements: [
          "Développement d’une application web pour la collecte, la gestion et la visualisation des données",
        ],
        technologies: [
          "ReactJs",
          "React-Bootstrap",
          "SQL",
          "NodeJs",
          "Express",
        ],
        skills: [
          "Web Development",
          "Data Visualization",
          "Backend Development",
        ],
        color: "green",
      },
      {
        id: 3,
        type: "experience",
        title: "Stage d’initiation",
        organization: "Transparence Informatique",
        location: "Agadir, Maroc",
        period: "Juillet 2022 – Août 2022",
        duration: "1 mois",
        description:
          "Développement d’une application web de gestion des stagiaires.",
        achievements: [
          "Développement d’une application web de gestion des stagiaires",
        ],
        technologies: ["HTML", "CSS", "SQL", "PHP", "JavaScript"],
        skills: ["Frontend", "Backend", "Database Design"],
        color: "green",
      },
    ],
  };

  const colorClasses = {
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-600",
      accent: "bg-green-100",
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-6">
            {content?.[currentLanguage]?.title}
          </h2>
          <p className="text-xl text-green-300 font-semibold mb-4">
            {content?.[currentLanguage]?.subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {content?.[currentLanguage]?.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-600 to-green-400 opacity-30" />

          <div className="space-y-8">
            {timelineData?.[currentLanguage]?.map((item, index) => {
              const colors = colorClasses?.[item?.color];
              const isExpanded = expandedItem === item?.id;

              return (
                <motion.div
                  key={item?.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-black ${colors?.accent} shadow-lg`}
                    >
                      <Icon
                        name="Briefcase"
                        size={24}
                        className={colors?.icon}
                      />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      className={`bg-black rounded-2xl p-6 shadow-lg border-2 cursor-pointer ${
                        isExpanded ? colors?.border : "border-gray-800"
                      } hover:shadow-xl transition`}
                      onClick={() =>
                        setExpandedItem(isExpanded ? null : item?.id)
                      }
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-green-400 truncate">
                              {item?.title}
                            </h3>
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-800 text-green-200">
                              {currentLanguage === "fr"
                                ? "Expérience"
                                : currentLanguage === "en"
                                ? "Experience"
                                : "خبرة"}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 mb-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="Building" size={16} />
                              <span className="font-medium">
                                {item?.organization}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="MapPin" size={16} />
                              <span>{item?.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Icon name="Calendar" size={14} />
                              <span>{item?.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Clock" size={14} />
                              <span>{item?.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Icon
                          name={isExpanded ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className="text-gray-500 transition"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item?.description}
                      </p>

                      {/* Expanded */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? "auto" : 0,
                          opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {isExpanded && (
                          <div className="space-y-6 pt-4 border-t border-gray-700">
                            {/* Achievements */}
                            <div>
                              <h4 className="text-lg font-bold text-green-400 mb-3">
                                {currentLanguage === "fr"
                                  ? "Réalisations Clés"
                                  : currentLanguage === "en"
                                  ? "Key Achievements"
                                  : "الإنجازات الرئيسية"}
                              </h4>
                              <ul className="space-y-2">
                                {item?.achievements?.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-3"
                                  >
                                    <Icon
                                      name="CheckCircle"
                                      size={16}
                                      className={`${colors?.icon} mt-1 flex-shrink-0`}
                                    />
                                    <span className="text-gray-300 text-sm leading-relaxed">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-lg font-bold text-green-400 mb-3">
                                {currentLanguage === "fr"
                                  ? "Technologies"
                                  : currentLanguage === "en"
                                  ? "Technologies"
                                  : "التقنيات"}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item?.technologies?.map((tech, idx) => (
                                  <span
                                    key={tech}
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors?.bg} ${colors?.icon}`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Skills */}
                            <div>
                              <h4 className="text-lg font-bold text-green-400 mb-3">
                                {currentLanguage === "fr"
                                  ? "Compétences Développées"
                                  : currentLanguage === "en"
                                  ? "Skills Developed"
                                  : "المهارات المطورة"}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item?.skills?.map((skill, idx) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-green-900 text-green-200"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
