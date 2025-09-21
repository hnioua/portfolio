import React, { useState, useRef, useEffect } from "react";
import {
  Briefcase,
  Building,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const ProfessionalTimeline = ({ currentLanguage = "fr" }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: "Expérience Professionnelle",
      subtitle: "Stages & projets en développement & BI",
      achievements: "Réalisations Clés",
      technologies: "Technologies",
      skills: "Compétences",
    },
    en: {
      title: "Professional Experience",
      subtitle: "Internships & projects in development & BI",
      achievements: "Key Achievements",
      technologies: "Technologies",
      skills: "Skills",
    },
  };

  // Données professionnelles simplifiées
  const timelineData = {
    fr: [
      {
        id: 1,
        title: "Développement Plateforme BI",
        organization: "ADS Rabat",
        location: "Rabat",
        period: "Avr - Juil 2024",
        duration: "3 mois",
        description:
          "Plateforme numérique d'intégration sociale des femmes avec visualisation BI et processus ETL.",
        achievements: [
          "Plateforme BI pour intégration sociale",
          "Processus ETL multichanaux",
        ],
        technologies: ["Next.js", "Node.js", "Power BI", "MySQL", "Python"],
        skills: ["Business Intelligence", "ETL", "Full-stack"],
      },
      {
        id: 2,
        title: "Application Web Éducative",
        organization: "AREF Souss Massa",
        location: "Agadir",
        period: "Avr - Juin 2023",
        duration: "2 mois",
        description:
          "Application de collecte et visualisation des données d'institutions pionnières.",
        achievements: [
          "Application de gestion de données éducatives",
          "Tableaux de bord interactifs",
        ],
        technologies: ["React.js", "Node.js", "Express", "SQL"],
        skills: ["Web Development", "Data Visualization", "Backend"],
      },
      {
        id: 3,
        title: "Gestion Stagiaires Web",
        organization: "Transparence Informatique",
        location: "Agadir",
        period: "Juil - Août 2022",
        duration: "1 mois",
        description:
          "Application web de gestion et suivi des stagiaires avec interface admin.",
        achievements: [
          "Application complète de gestion",
          "Interface d'administration",
        ],
        technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
        skills: ["Frontend", "Backend", "Database Design"],
      },
    ],
    en: [
      {
        id: 1,
        title: "BI Platform Development",
        organization: "ADS Rabat",
        location: "Rabat",
        period: "Apr - Jul 2024",
        duration: "3 months",
        description:
          "Digital platform for women's social integration with BI visualization and ETL processes.",
        achievements: [
          "BI platform for social integration",
          "Multichannel ETL processes",
        ],
        technologies: ["Next.js", "Node.js", "Power BI", "MySQL", "Python"],
        skills: ["Business Intelligence", "ETL", "Full-stack"],
      },
      {
        id: 2,
        title: "Educational Web Application",
        organization: "AREF Souss Massa",
        location: "Agadir",
        period: "Apr - Jun 2023",
        duration: "2 months",
        description:
          "Data collection and visualization application for pioneering institutions.",
        achievements: [
          "Educational data management app",
          "Interactive dashboards",
        ],
        technologies: ["React.js", "Node.js", "Express", "SQL"],
        skills: ["Web Development", "Data Visualization", "Backend"],
      },
      {
        id: 3,
        title: "Trainee Management Web App",
        organization: "Transparence Informatique",
        location: "Agadir",
        period: "Jul - Aug 2022",
        duration: "1 month",
        description:
          "Web application for trainee management and tracking with admin interface.",
        achievements: [
          "Complete management application",
          "Administration interface",
        ],
        technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
        skills: ["Frontend", "Backend", "Database Design"],
      },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentData = timelineData[currentLanguage] || timelineData.fr;
  const currentContent = content[currentLanguage] || content.fr;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background optimisé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/10 sm:bg-green-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/10 sm:bg-green-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header optimisé mobile */}
        <div
          className={`text-center mb-8 sm:mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-4 sm:mb-6">
            {currentContent.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-300 font-semibold">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Timeline optimisée mobile */}
        <div className="relative">
          {/* Ligne de timeline - cachée sur très petit écran */}
          <div className="hidden sm:block absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-600 to-green-400 opacity-30" />

          <div className="space-y-4 sm:space-y-8">
            {currentData.map((item, index) => {
              const isExpanded = expandedItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-start space-x-3 sm:space-x-6 transition-all duration-800 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot optimisé */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center border-2 sm:border-4 border-black shadow-lg">
                      <Briefcase
                        size={20}
                        className="text-white sm:w-6 sm:h-6"
                      />
                    </div>
                  </div>

                  {/* Card optimisée mobile */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`bg-black/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        isExpanded ? "border-green-500" : "border-gray-800"
                      }`}
                      onClick={() =>
                        setExpandedItem(isExpanded ? null : item.id)
                      }
                    >
                      {/* Header compact mobile */}
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1 min-w-0 pr-2">
                          {/* Badge expérience */}
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-800 text-green-200">
                              {currentLanguage === "fr"
                                ? "Stage"
                                : "Internship"}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-green-400 leading-tight mb-2">
                            {item.title}
                          </h3>

                          {/* Infos compactes mobile */}
                          <div className="space-y-1 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Building size={14} />
                              <span className="truncate">
                                {item.organization}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <MapPin size={14} />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Calendar size={12} />
                                <span>{item.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Toggle button */}
                        <div className="flex flex-col items-center">
                          {isExpanded ? (
                            <ChevronUp size={20} className="text-gray-500" />
                          ) : (
                            <ChevronDown size={20} className="text-gray-500" />
                          )}
                          <span className="text-xs text-gray-600 mt-1">
                            {item.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description toujours visible */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Technologies visibles par défaut */}
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {item.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-md text-xs font-medium bg-green-500/20 text-green-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {item.technologies.length > 4 && (
                            <span className="px-2 py-1 rounded-md text-xs text-gray-400">
                              +{item.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Contenu étendu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {isExpanded && (
                          <div className="space-y-4 pt-3 border-t border-gray-700">
                            {/* Achievements */}
                            <div>
                              <h4 className="text-base font-bold text-green-400 mb-2">
                                {currentContent.achievements}
                              </h4>
                              <ul className="space-y-1">
                                {item.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-2"
                                  >
                                    <CheckCircle
                                      size={14}
                                      className="text-green-400 mt-0.5 flex-shrink-0"
                                    />
                                    <span className="text-gray-300 text-sm">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* All Technologies */}
                            <div>
                              <h4 className="text-base font-bold text-green-400 mb-2">
                                {currentContent.technologies}
                              </h4>
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 rounded-md text-xs font-medium bg-green-500/20 text-green-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Skills */}
                            <div>
                              <h4 className="text-base font-bold text-green-400 mb-2">
                                {currentContent.skills}
                              </h4>
                              <div className="flex flex-wrap gap-1 sm:gap-2">
                                {item.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-1 rounded-md text-xs font-medium bg-green-900 text-green-200"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;
