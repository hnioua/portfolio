import React, { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
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
      case "GraduationCap":
        return <GraduationCap {...iconProps} />;
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
      title: "Parcours Professionnel & Académique",
      subtitle:
        "Une progression constante vers l'excellence en BI & Data Science",
      description:
        "Formation solide et expérience pratique dans des organismes de référence au Maroc",
    },
    en: {
      title: "Professional & Academic Journey",
      subtitle: "Constant progression towards excellence in BI & Data Science",
      description:
        "Solid training and practical experience in leading organizations in Morocco",
    },
    ar: {
      title: "المسار المهني والأكاديمي",
      subtitle: "تقدم مستمر نحو التميز في ذكاء الأعمال وعلوم البيانات",
      description: "تدريب قوي وخبرة عملية في المؤسسات الرائدة في المغرب",
    },
  };

  const timelineData = {
    fr: [
      {
        id: 1,
        type: "education",
        title: "Master Intelligence Artificielle et Ingénierie Informatique",
        organization: "Université Cadi Ayyad, FST Marrakech",
        location: "Marrakech, Maroc",
        period: "2024 - Présent",
        duration: "En cours",
        logo: "/assets/images/fst-logo.png",
        description:
          "Spécialisation en Data Science et aide à la décision, Intelligence artificielle, machine learning, traitement d'images",
        achievements: [
          "Spécialisation en Data Science et aide à la décision",
          "Intelligence artificielle, machine learning, traitement d'images",
        ],
        technologies: [
          "Python",
          "TensorFlow",
          "Keras",
          "OpenCV",
          "Scikit-learn",
        ],
        skills: [
          "Data Science",
          "AI",
          "Machine Learning",
          "Image Processing",
          "Decision Support",
        ],
        color: "green",
      },
      {
        id: 2,
        type: "education",
        title: "Licence Professionnelle en Informatique Décisionnelle",
        organization: "Université Mohammed Premier, EST Oujda",
        location: "Oujda, Maroc",
        period: "2023 - 2024",
        duration: "1 ans",
        logo: "/assets/images/est-logo.png",
        description:
          "Mention très bien, Cours principaux: Business Intelligence, Data Warehouse, Analyse de données",
        achievements: [
          "Mention très bien",
          "Cours principaux: Business Intelligence, Data Warehouse, Analyse de données",
        ],
        technologies: ["SQL", "Power BI", "Excel", "Python"],
        skills: ["Business Intelligence", "Data Analysis", "Data Warehousing"],
        color: "green",
      },
      {
        id: 3,
        type: "education",
        title: "Diplôme Universitaire de Technologie en Génie Informatique",
        organization: "Université Cadi Ayyad, EST Safi",
        location: "Safi, Maroc",
        period: "2021 - 2023",
        duration: "2 ans",
        logo: "/assets/images/est-safi-logo.png",
        description: "Mention assez bien, Formation technique en informatique",
        achievements: [
          "Mention assez bien",
          "Formation technique en informatique",
        ],
        technologies: ["PHP", "MySQL", "JavaScript", "C++"],
        skills: ["Programming", "Database Design", "Software Development"],
        color: "green",
      },
    ],
    en: [
      {
        id: 1,
        type: "education",
        title: "Master in Artificial Intelligence and Computer Engineering",
        organization: "Cadi Ayyad University, FST Marrakech",
        location: "Marrakech, Morocco",
        period: "2024 - Present",
        duration: "Ongoing",
        logo: "/assets/images/fst-logo.png",
        description:
          "Specialization in Data Science, Decision Support, Artificial Intelligence, Machine Learning, and Image Processing",
        achievements: [
          "Specialization in Data Science and Decision Support",
          "Artificial Intelligence, Machine Learning, Image Processing",
        ],
        technologies: [
          "Python",
          "TensorFlow",
          "Keras",
          "OpenCV",
          "Scikit-learn",
        ],
        skills: [
          "Data Science",
          "AI",
          "Machine Learning",
          "Image Processing",
          "Decision Support",
        ],
        color: "green",
      },
      {
        id: 2,
        type: "education",
        title: "Professional Bachelor's Degree in Business Intelligence",
        organization: "Mohammed Premier University, EST Oujda",
        location: "Oujda, Morocco",
        period: "2023 - 2024",
        duration: "1 year",
        logo: "/assets/images/est-logo.png",
        description:
          "Graduated with honors. Main courses: Business Intelligence, Data Warehouse, Data Analysis",
        achievements: [
          "Graduated with honors",
          "Main courses: Business Intelligence, Data Warehouse, Data Analysis",
        ],
        technologies: ["SQL", "Power BI", "Excel", "Python"],
        skills: ["Business Intelligence", "Data Analysis", "Data Warehousing"],
        color: "green",
      },
      {
        id: 3,
        type: "education",
        title: "University Diploma of Technology in Computer Engineering",
        organization: "Cadi Ayyad University, EST Safi",
        location: "Safi, Morocco",
        period: "2021 - 2023",
        duration: "2 years",
        logo: "/assets/images/est-safi-logo.png",
        description:
          "Graduated with merit. Technical training in computer science",
        achievements: [
          "Graduated with merit",
          "Technical training in computer science",
        ],
        technologies: ["PHP", "MySQL", "JavaScript", "C++"],
        skills: ["Programming", "Database Design", "Software Development"],
        color: "green",
      },
    ],
    ar: [
      {
        id: 1,
        type: "education",
        title: "ماجستير في الذكاء الاصطناعي وهندسة الحاسوب",
        organization: "جامعة القاضي عياض، كلية العلوم والتقنيات مراكش",
        location: "مراكش، المغرب",
        period: "2024 - الحاضر",
        duration: "جاري",
        logo: "/assets/images/fst-logo.png",
        description:
          "تخصص في علوم البيانات ودعم القرار والذكاء الاصطناعي والتعلم الآلي ومعالجة الصور",
        achievements: [
          "تخصص في علوم البيانات ودعم القرار",
          "الذكاء الاصطناعي والتعلم الآلي ومعالجة الصور",
        ],
        technologies: [
          "Python",
          "TensorFlow",
          "Keras",
          "OpenCV",
          "Scikit-learn",
        ],
        skills: [
          "علوم البيانات",
          "الذكاء الاصطناعي",
          "التعلم الآلي",
          "معالجة الصور",
          "دعم القرار",
        ],
        color: "green",
      },
      {
        id: 2,
        type: "education",
        title: "إجازة مهنية في المعلوماتية القرارية",
        organization: "جامعة محمد الأول، المدرسة العليا للتكنولوجيا وجدة",
        location: "وجدة، المغرب",
        period: "2023 - 2024",
        duration: "سنة واحدة",
        logo: "/assets/images/est-logo.png",
        description:
          "تخرج بامتياز. المواد الرئيسية: ذكاء الأعمال، مستودع البيانات، تحليل البيانات",
        achievements: [
          "تخرج بامتياز",
          "المواد الرئيسية: ذكاء الأعمال، مستودع البيانات، تحليل البيانات",
        ],
        technologies: ["SQL", "Power BI", "Excel", "Python"],
        skills: ["ذكاء الأعمال", "تحليل البيانات", "مستودع البيانات"],
        color: "green",
      },
      {
        id: 3,
        type: "education",
        title: "دبلوم جامعي في التكنولوجيا - هندسة المعلوماتية",
        organization: "جامعة القاضي عياض، المدرسة العليا للتكنولوجيا آسفي",
        location: "آسفي، المغرب",
        period: "2021 - 2023",
        duration: "سنتان",
        logo: "/assets/images/est-safi-logo.png",
        description: "تخرج بتقدير جيد. تدريب تقني في علوم الحاسوب",
        achievements: ["تخرج بتقدير جيد", "تدريب تقني في علوم الحاسوب"],
        technologies: ["PHP", "MySQL", "JavaScript", "C++"],
        skills: ["البرمجة", "تصميم قواعد البيانات", "تطوير البرمجيات"],
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
      {/* Cyber Glow Background */}
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
              const isExperience = item.type === "experience";

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
                      {renderIcon(
                        isExperience ? "Briefcase" : "GraduationCap",
                        24,
                        colors.icon
                      )}
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
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                isExperience
                                  ? "bg-green-800 text-green-200"
                                  : "bg-green-700 text-green-100"
                              }`}
                            >
                              {isExperience
                                ? currentLanguage === "fr"
                                  ? "Expérience"
                                  : currentLanguage === "en"
                                  ? "Experience"
                                  : "خبرة"
                                : currentLanguage === "fr"
                                ? "Formation"
                                : currentLanguage === "en"
                                ? "Education"
                                : "تعليم"}
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
                                  : currentLanguage === "en"
                                  ? "Key Achievements"
                                  : "الإنجازات الرئيسية"}
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
                                {currentLanguage === "fr"
                                  ? "Technologies"
                                  : currentLanguage === "en"
                                  ? "Technologies"
                                  : "التقنيات"}
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
