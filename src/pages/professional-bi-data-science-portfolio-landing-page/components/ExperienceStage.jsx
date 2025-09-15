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

const ExperienceTimeline = ({ currentLanguage = "fr" }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Définition des couleurs
  const colorClasses = {
    green: {
      accent: "bg-gradient-to-br from-green-500 to-green-600",
      icon: "text-white",
      border: "border-green-500",
      bg: "bg-green-500/20",
    },
  };

  // Fonction pour rendre les icônes
  const renderIcon = (iconName, size = 20, className = "") => {
    const iconProps = { size, className };

    switch (iconName) {
      case "Briefcase":
        return <Briefcase {...iconProps} />;
      case "Building":
        return <Building {...iconProps} />;
      case "MapPin":
        return <MapPin {...iconProps} />;
      case "Calendar":
        return <Calendar {...iconProps} />;
      case "Clock":
        return <Clock {...iconProps} />;
      case "CheckCircle":
        return <CheckCircle {...iconProps} />;
      case "ChevronUp":
        return <ChevronUp {...iconProps} />;
      case "ChevronDown":
        return <ChevronDown {...iconProps} />;
      default:
        return <div {...iconProps} />;
    }
  };

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
  };

  const timelineData = {
    fr: [
      {
        id: 1,
        type: "experience",
        title: "Développement d'une plateforme numérique",
        organization: "Agence de Développement Social (ADS)",
        location: "Rabat, Maroc",
        period: "Avril 2024 – Juillet 2024",
        duration: "3 mois",
        description:
          "Développement d'une plateforme numérique pour l'intégration sociale des femmes avec visualisation via des outils BI. Mise en œuvre de processus ETL pour l'intégration des données multicanales.",
        achievements: [
          "Développement d'une plateforme numérique pour l'intégration sociale des femmes",
          "Mise en œuvre de processus ETL pour l'intégration des données multicanales",
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
          "Académie Régionale de l'Éducation et de la Formation Souss Massa-Agadir",
        location: "Agadir, Maroc",
        period: "Avril 2023 – Juin 2023",
        duration: "2 mois",
        description:
          "Développement d'une application web pour la collecte, la gestion et la visualisation des données d'institutions pionnières.",
        achievements: [
          "Développement d'une application web pour la collecte, la gestion et la visualisation des données",
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
        title: "Stage d'initiation",
        organization: "Transparence Informatique",
        location: "Agadir, Maroc",
        period: "Juillet 2022 – Août 2022",
        duration: "1 mois",
        description:
          "Développement d'une application web de gestion des stagiaires.",
        achievements: [
          "Développement d'une application web de gestion des stagiaires",
        ],
        technologies: ["HTML", "CSS", "SQL", "PHP", "JavaScript"],
        skills: ["Frontend", "Backend", "Database Design"],
        color: "green",
      },
    ],
    en: [
      {
        id: 1,
        type: "experience",
        title: "Digital Platform Development",
        organization: "Social Development Agency (ADS)",
        location: "Rabat, Morocco",
        period: "April 2024 – July 2024",
        duration: "3 months",
        description:
          "Development of a digital platform for women's social integration with visualization through BI tools. Implementation of ETL processes for multichannel data integration.",
        achievements: [
          "Development of a digital platform for women's social integration",
          "Implementation of ETL processes for multichannel data integration",
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
        title: "Development Project",
        organization:
          "Regional Academy of Education and Training Souss Massa-Agadir",
        location: "Agadir, Morocco",
        period: "April 2023 – June 2023",
        duration: "2 months",
        description:
          "Development of a web application for data collection, management, and visualization of pioneering institutions.",
        achievements: [
          "Development of a web application for data collection, management, and visualization",
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
        title: "Introduction Internship",
        organization: "Transparence Informatique",
        location: "Agadir, Morocco",
        period: "July 2022 – August 2022",
        duration: "1 month",
        description: "Development of a web application for trainee management.",
        achievements: [
          "Development of a web application for trainee management",
        ],
        technologies: ["HTML", "CSS", "SQL", "PHP", "JavaScript"],
        skills: ["Frontend", "Backend", "Database Design"],
        color: "green",
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Vérification que currentLanguage existe dans les données
  const currentData = timelineData[currentLanguage] || timelineData.fr;
  const currentContent = content[currentLanguage] || content.fr;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-green-400/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl text-green-300 font-semibold mb-4">
            {currentContent.subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-600 to-green-400 opacity-30" />

          <div className="space-y-8">
            {currentData.map((item, index) => {
              const colors = colorClasses[item.color];
              const isExpanded = expandedItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-start space-x-6 transition-all duration-800 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-black ${colors.accent} shadow-lg`}
                    >
                      {renderIcon("Briefcase", 24, colors.icon)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`bg-black rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${
                        isExpanded ? colors.border : "border-gray-800"
                      }`}
                      onClick={() =>
                        setExpandedItem(isExpanded ? null : item.id)
                      }
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-green-400 truncate">
                              {item.title}
                            </h3>
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-800 text-green-200">
                              {currentLanguage === "fr"
                                ? "Expérience"
                                : "Experience"}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 mb-2">
                            <div className="flex items-center space-x-2">
                              {renderIcon("Building", 16)}
                              <span className="font-medium">
                                {item.organization}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {renderIcon("MapPin", 16)}
                              <span>{item.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              {renderIcon("Calendar", 14)}
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {renderIcon("Clock", 14)}
                              <span>{item.duration}</span>
                            </div>
                          </div>
                        </div>
                        {renderIcon(
                          isExpanded ? "ChevronUp" : "ChevronDown",
                          20,
                          "text-gray-500 transition-transform"
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Expanded Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {isExpanded && (
                          <div className="space-y-6 pt-4 border-t border-gray-700">
                            {/* Achievements */}
                            <div>
                              <h4 className="text-lg font-bold text-green-400 mb-3">
                                {currentLanguage === "fr"
                                  ? "Réalisations Clés"
                                  : "Key Achievements"}
                              </h4>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start space-x-3"
                                  >
                                    {renderIcon(
                                      "CheckCircle",
                                      16,
                                      `${colors.icon} mt-1 flex-shrink-0`
                                    )}
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
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.icon}`}
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
                                  : "Skills Developed"}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill) => (
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

export default ExperienceTimeline;
