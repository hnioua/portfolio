import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ExperienceShowcase = ({ currentLanguage }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Catégories simplifiées
  const filterCategories = [
    { id: "all", label: "Tous", icon: "Grid3X3" },
    { id: "web", label: "Web", icon: "Globe" },
    { id: "mobile", label: "Mobile", icon: "Smartphone" },
    { id: "data", label: "Data/IA", icon: "Brain" },
    { id: "iot", label: "IoT", icon: "Cpu" },
  ];

  // Projets simplifiés avec données essentielles
  const projects = [
    {
      id: 1,
      title: "Plateforme Taalim Work",
      categories: ["web"],
      client: "TaalimWork",
      duration: "2 mois",
      status: "Production",
      description:
        "Plateforme éducative pour commandes de cahiers personnalisés avec gestion pédagogique complète.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      features: [
        "Interface responsive",
        "Commandes personnalisées",
        "Gestion emplois du temps",
        "Paiement intégré",
      ],
      image: "/assets/images/project/PC.webp",
      images: [
        "/assets/images/project/PC.webp",
        "/assets/images/project/PageHomePc.webp",
      ],
      demoUrl: "https://www.taalim.work/",
      githubUrl: null,
    },
    {
      id: 2,
      title: "Compilateur C en ligne",
      categories: ["web"],
      client: "Projet personnel",
      duration: "3 mois",
      status: "Production",
      description:
        "Éditeur et compilateur C en ligne avec collaboration temps réel et interface moderne.",
      technologies: ["React", "Node.js", "GCC", "WebSocket"],
      features: [
        "Compilation temps réel",
        "Collaboration en live",
        "Gestion de projets",
        "Interface administrative",
      ],
      image: "/assets/images/project/C1.webp",
      images: [
        "/assets/images/project/C1.webp",
        "/assets/images/project/CompilerOutput.webp",
      ],
      demoUrl: "https://online-compiler-font-end.vercel.app/",
      githubUrl: "https://github.com/hnioua/Online-Compiler",
    },
    {
      id: 3,
      title: "Plateforme Gissr - Autonomisation Femmes",
      categories: ["web", "data"],
      client: "ADS Rabat",
      duration: "3 mois",
      status: "Production",
      description:
        "Plateforme d'accompagnement pour l'autonomisation économique des femmes avec suivi BI.",
      technologies: ["Next.js", "MySQL", "PowerBI", "Python"],
      features: [
        "Gestion formations",
        "Suivi projets",
        "Tableaux de bord",
        "Ressources pédagogiques",
      ],
      image: "/assets/images/project/admin.webp",
      images: [
        "/assets/images/project/admin.webp",
        "/assets/images/project/pageHome.webp",
      ],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 4,
      title: "Institutions Pionnières - AREF",
      categories: ["web"],
      client: "AREF Souss Massa",
      duration: "2 mois",
      status: "Production",
      description:
        "Plateforme régionale pour le suivi et l'évaluation du projet des Institutions pionnières dans 53 écoles primaires de la région Souss Massa.",
      technologies: ["React.js", "Node.js", "MySQL", "PowerAMC"],
      features: [
        "Gestion académies et écoles",
        "Suivi projets pionniers",
        "Tableaux de bord multi-niveaux",
        "Gestion utilisateurs et rôles",
      ],
      image: "/assets/images/project/3.webp",
      images: [
        "/assets/images/project/3.webp",
        "/assets/images/project/1.webp",
        "/assets/images/project/4.webp",
      ],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 5,
      title: "GREEN SHIELD - Robot Sécurité",
      categories: ["iot", "data"],
      client: "Challenge Robovation 2025",
      duration: "En cours",
      status: "Prototype",
      description:
        "Robot autonome pour sécurité en foule avec IA, détection incendie et énergie solaire.",
      technologies: ["Arduino", "ESP32", "Firebase", "React"],
      features: [
        "Reconnaissance faciale",
        "Détection incendie",
        "Énergie solaire",
        "Dashboard temps réel",
      ],
      image: "/assets/images/project/GreenS2.webp",
      images: [
        "/assets/images/project/GreenS2.webp",
        "/assets/images/project/GreenS3.webp",
      ],
      demoUrl: null,
      githubUrl: null,
    },
    {
      id: 5,
      title: "Analyse Génétique Cancer Côlon",
      categories: ["data"],
      client: "Université Cadi Ayyad",
      duration: "4 mois",
      status: "Recherche",
      description:
        "Machine Learning pour identification de biomarqueurs dans le cancer colorectal (99.5% précision).",
      technologies: ["Python", "Scikit-learn", "TensorFlow"],
      features: [
        "Sélection de gènes",
        "Random Forest optimisé",
        "Validation croisée",
        "Classification précise",
      ],
      image: "/assets/images/project/Article.webp",
      images: [
        "/assets/images/project/Article.webp",
        "/assets/images/project/approche.webp",
      ],
      demoUrl:
        "https://colab.research.google.com/github/hnioua/Gene-Expression-Analysis-in-Colorectal-Cancer-Using-Machine-Learning/blob/main/MR_Analyse_de_l'Expression_des_G%C3%A8nes_du_Cancer_du_C%C3%B4lon_Hnioua_Abdessamad.ipynb",
      githubUrl:
        "https://github.com/hnioua/Gene-Expression-Analysis-in-Colorectal-Cancer-Using-Machine-Learning",
    },
    {
      id: 6,
      title: "OCR Robuste - Images Dégradées",
      categories: ["data"],
      client: "FST Marrakech",
      duration: "4 mois",
      status: "Académique",
      description:
        "Solution OCR avancée avec CNN pour reconnaissance de texte sur images de faible qualité.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Tesseract"],
      features: [
        "Prétraitement avancé",
        "CNN MobileNetV2",
        "Transfer Learning",
        "97.8% précision",
      ],
      image: "/assets/images/project/OCR1.webp",
      images: [
        "/assets/images/project/OCR1.webp",
        "/assets/images/project/OCR2.webp",
      ],
      demoUrl: null,
      githubUrl:
        "https://github.com/hnioua/OCR-Text-Recognition-in-Challenging-Conditions",
    },
  ];

  // Filtrage optimisé avec useMemo
  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories?.includes(activeFilter)
        );
  }, [activeFilter, projects]);

  // Gestion Modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; // Prevent scroll

    // Masquer le bouton scroll-to-top s'il existe
    const scrollButton = document.querySelector("[data-scroll-to-top]");
    if (scrollButton) {
      scrollButton.style.display = "none";
    }

    // Masquer le header s'il existe
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";

    // Restaurer le bouton scroll-to-top s'il existe
    const scrollButton = document.querySelector("[data-scroll-to-top]");
    if (scrollButton) {
      scrollButton.style.display = "block";
    }

    // Restaurer le header s'il existe
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "block";
    }
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-12 sm:py-20">
      {/* Background optimisé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/10 sm:bg-green-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/10 sm:bg-green-500/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header optimisé mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-4 sm:mb-6">
            Projets & Expérience
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Portfolio de solutions innovantes avec impact mesurable
          </p>
        </motion.div>

        {/* Filtres optimisés mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
        >
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-green-500 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span className="whitespace-nowrap">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Grille projets optimisée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image avec aspect ratio fixe */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Production"
                        ? "bg-green-500 text-white"
                        : project.status === "Prototype"
                        ? "bg-yellow-500 text-black"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Contenu optimisé */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies - responsive */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Boutons optimisés mobile */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openProjectModal(project)}
                    iconName="Eye"
                    iconPosition="left"
                    className="flex-1 min-w-0 text-xs sm:text-sm"
                  >
                    Détails
                  </Button>

                  {project.demoUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      iconName="ExternalLink"
                      iconPosition="left"
                      className="text-xs sm:text-sm"
                    >
                      Demo
                    </Button>
                  )}

                  {project.githubUrl ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      iconName="Github"
                      iconPosition="left"
                      className="text-xs sm:text-sm"
                    >
                      Code
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Lock"
                      iconPosition="left"
                      disabled
                      className="cursor-not-allowed opacity-60 text-xs sm:text-sm"
                    >
                      Privé
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal optimisé mobile */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <div
              className="bg-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header sticky */}
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 p-4 sm:p-6 flex justify-between items-center">
                <h3 className="text-lg sm:text-2xl font-bold text-white pr-4 line-clamp-2">
                  {selectedProject.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeProjectModal}
                  iconName="X"
                  className="shrink-0"
                />
              </div>

              <div className="p-4 sm:p-6 space-y-6">
                {/* Image avec navigation */}
                <div className="relative">
                  <div className="aspect-video sm:aspect-[16/10] overflow-hidden rounded-xl mb-4">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all"
                        >
                          <Icon name="ChevronLeft" size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all"
                        >
                          <Icon name="ChevronRight" size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Indicateurs */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-green-500 scale-125"
                              : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Informations projet */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white mb-2 flex items-center">
                        <Icon name="Info" size={18} className="mr-2" />
                        Détails
                      </h4>
                      <div className="space-y-2 text-gray-300 text-sm">
                        <p>
                          <span className="text-green-400">Client:</span>{" "}
                          {selectedProject.client}
                        </p>
                        <p>
                          <span className="text-green-400">Durée:</span>{" "}
                          {selectedProject.duration}
                        </p>
                        <p>
                          <span className="text-green-400">Statut:</span>{" "}
                          {selectedProject.status}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-2">Description</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white mb-2">
                        Fonctionnalités
                      </h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        {selectedProject.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start">
                            <Icon
                              name="Check"
                              size={16}
                              className="text-green-400 mr-2 mt-0.5 shrink-0"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-700">
                  {selectedProject.demoUrl && (
                    <Button
                      variant="default"
                      onClick={() =>
                        window.open(selectedProject.demoUrl, "_blank")
                      }
                      iconName="ExternalLink"
                      iconPosition="left"
                      className="flex-1 sm:flex-none"
                    >
                      Voir Demo
                    </Button>
                  )}

                  {selectedProject.githubUrl ? (
                    <Button
                      variant="outline"
                      onClick={() =>
                        window.open(selectedProject.githubUrl, "_blank")
                      }
                      iconName="Github"
                      iconPosition="left"
                      className="flex-1 sm:flex-none"
                    >
                      Code Source
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      iconName="Lock"
                      iconPosition="left"
                      className="cursor-not-allowed opacity-60 flex-1 sm:flex-none"
                    >
                      Code Privé
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceShowcase;
