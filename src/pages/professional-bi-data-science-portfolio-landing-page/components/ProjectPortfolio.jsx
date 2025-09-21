import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ExperienceShowcase = ({ currentLanguage }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* -------------------- Catégories -------------------- */
  const filterCategories = [
    { id: "all", label: "Tous les Projets", icon: "Grid3X3" },
    { id: "web", label: "Développement Web", icon: "Globe" },
    { id: "mobile", label: "Applications Mobiles", icon: "Smartphone" },
    { id: "data", label: "Analyse de Données", icon: "BarChart3" },
    { id: "bi", label: "Business Intelligence", icon: "PieChart" },
    { id: "ia", label: "Intelligence Artificielle", icon: "Brain" },
    { id: "iot", label: "Internet des Objets (IoT)", icon: "Cpu" },
  ];

  /* -------------------- Projets -------------------- */
  const projects = [
    {
      id: 1,
      title: "Plateforme Taalim Work",
      categories: ["web"], // ✅ remplacé category → categories
      client: "TaalimWork",
      duration: "2 mois",
      team: "2 développeurs",
      status: "Production",
      description:
        "Développement complet d’une plateforme éducative permettant aux enseignants de commander des cahiers de textes personnalisés et de gérer leurs besoins pédagogiques en ligne.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker"],
      features: [
        "Interface utilisateur responsive",
        "Commande en ligne de cahiers personnalisés",
        "Gestion des emplois du temps et contenus",
        "Paiement et suivi des commandes",
        "Déploiement cloud avec Docker",
      ],
      metrics: {
        clients: "100+ enseignants utilisateurs",
        delivery: "≤ 3 jours par commande",
        performances: "+35% rapidité grâce à la mise en cache",
      },
      challenges:
        "Assurer la personnalisation des cahiers et optimiser la performance pour un grand nombre d’utilisateurs.",
      solution:
        "Architecture full-stack (React/Node.js), PostgreSQL optimisé et déploiement scalable via Docker.",
      images: [
        "/assets/images/project/PC.webp",
        "/assets/images/project/PageHomePc.webp",
      ],
      demoUrl: "https://www.taalim.work/",
      githubUrl: "null",
    },
    {
      id: 2,
      title: "Éditeur / Compilateur C en ligne",
      categories: ["web", "développement"],
      client: "Projet personnel",
      duration: "3 mois",
      team: "3 développeur",
      status: "Production",
      description:
        "Éditeur et compilateur en ligne du langage C, conçu pour être simple, rapide et professionnel. La plateforme permet de coder directement depuis un navigateur, de compiler et d’exécuter des programmes C avec une expérience fluide et moderne.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Mysql",
        "GCC",
        "Websocket",
      ],
      features: [
        "Gestion intuitive des fichiers C (création, édition, sauvegarde)",
        "Compilation et exécution de code en temps réel",
        "Partage simplifié des projets avec d’autres développeurs",
        "Compte utilisateur pour sauvegarder et retrouver ses projets",
        "Interface administrateur complète pour gérer utilisateurs et projets",
        "Collaboration en temps réel",
        "Formulaire de contact intégré",
      ],

      challenges:
        "Intégrer la compilation sécurisée de code C en ligne et gérer l’isolation des processus pour éviter tout abus.",
      solution:
        "Utilisation d’un backend Node.js couplé à GCC dans des conteneurs Docker isolés, avec une interface moderne en React et une base de données MongoDB pour gérer les projets et utilisateurs.",
      images: [
        "/assets/images/project/C1.webp",
        "/assets/images/project/CompilerOutput.webp",
      ],
      demoUrl: "https://online-compiler-font-end.vercel.app/", // ✅ à remplacer par ton lien de déploiement
      githubUrl: "https://github.com/hnioua/Online-Compiler", // ✅ repo GitHub
    },
    {
      id: 3,
      title:
        "La plateforme du programme Gissr pour l’autonomisation et le leadership",
      categories: ["web", "bi"], // ✅ multi-catégories
      client: "Agence de Développement Social (ADS) Rabat",
      duration: "3 mois",
      team: "3 développeurs",
      status: "Production",
      description:
        "Mise en place d’une plateforme numérique pour accompagner le programme « جسر التمكين والريادة » visant à soutenir l’autonomisation économique des femmes et offrir un accompagnement adapté.",
      technologies: [
        "Next.js",
        "MySQL",
        "Tailwind Css",
        "PowerBi",
        "Python(Pandas)",
        "ETL",
      ],
      features: [
        "Espace d’information sur le programme",
        "Calendrier et gestion des sessions de formation",
        "Espace de suivi et d’accompagnement des projets",
        "Ressources pédagogiques téléchargeables",
        "Formulaire de contact et assistance en ligne",
      ],
      challenges:
        "Assurer l’accessibilité de la plateforme pour un public varié et coordonner les partenaires institutionnels.",
      solution:
        "Développement web intuitif et responsive, intégrant des outils de suivi et évaluation avec base de données centralisée.",
      images: [
        "/assets/images/project/admin.webp",
        "/assets/images/project/pageHome.webp",
        "/assets/images/project/Profil.webp",
      ],
      demoUrl: "null",
      githubUrl: "null",
    },
    {
      id: 4,
      title:
        "Conception et Développement d’une Application Web d’Institutions Pionnières",
      categories: ["web"], // ✅ remplacé category → categories
      client:
        "Académie Régionale de l'Éducation et de la Formation (AREF) Souss Massa",
      duration: "2 mois",
      team: "1 stagiaire développeur",
      status: "Projet de fin d’études - DUT",
      description:
        "Développement d’une plateforme régionale pour le suivi et l’évaluation du projet des Institutions pionnières dans 53 écoles primaires de la région Souss Massa. Cette plateforme vise à accompagner la mise en œuvre de la feuille de route éducative 2022-2026 et à renforcer la qualité de l’enseignement primaire.",
      technologies: [
        "React.js",
        "React Bootstrap",
        "Node.js",
        "Express.js",
        "MySQL",
        "PowerAMC",
      ],
      features: [
        "Gestion des académies, directions et écoles",
        "Suivi des projets pionniers assignés aux établissements",
        "Tableaux de bord pour académies, directions et écoles",
        "Gestion des utilisateurs et des rôles (administrateurs, directeurs, enseignants)",
        "Ajout, modification et suivi des projets et des élèves",
        "Ressources et documentation intégrées",
      ],
      challenges:
        "Coordonner les différents acteurs éducatifs (académie, directions, écoles) et assurer la centralisation fiable des données pour un suivi pédagogique efficace.",
      solution:
        "Mise en place d’une application web centralisée, intuitive et responsive, avec une base de données relationnelle et des interfaces adaptées aux différents niveaux d’administration (académie, directions, écoles).",
      images: [
        "/assets/images/project/3.webp",
        "/assets/images/project/1.webp",
        "/assets/images/project/4.webp",
      ],
      demoUrl: "null", // Projet académique, pas de démo publique
      githubUrl: "null",
    },
    {
      id: 2,
      title:
        "Methodology for Gene Expression Analysis in Colon Cancer: Biomarker Identification and Pathway Analysis",
      categories: ["data", "ia", "scientific"], // ⚡ remplacé "ml" par "ia"
      client:
        "Faculty of Sciences and Technology, Cadi Ayyad University, Marrakech",
      duration: "4 mois",
      team: "Abdessamad Hnioua (Master IAII) & Dr. Oumayma Banouar",
      status: "Étude scientifique (2025)",
      description:
        "Cette recherche applique des techniques d’apprentissage supervisé pour analyser les données d’expression génétique liées au cancer du côlon. L’objectif est d’identifier un nombre minimal de gènes permettant une classification précise entre tissus normaux et tumoraux tout en réduisant la dimensionnalité du dataset.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Google Colab",
      ],
      features: [
        "Prétraitement des données avec normalisation Z-score",
        "Sélection de gènes basée sur un seuil de corrélation (0.70)",
        "Équilibrage des classes via Random Oversampling",
        "Entraînement de modèles ML (Random Forest, SVM, Logistic Regression, KNN, Decision Tree)",
        "Évaluation avec précision, rappel, F-score, AUC et matrices de confusion",
      ],
      metrics: {
        dataset: "804 échantillons (60 gènes, Kaggle)",
        bestModel: "Random Forest",
        selectedGenes: "RNF43, DAO, UGP2",
        accuracy: "99.5%",
        f1Score: "0.995",
      },
      challenges:
        "Réduire la dimensionnalité sans perte de performance et gérer l’équilibre des classes.",
      solution:
        "Application de la sélection de caractéristiques multi-modèles, validation croisée à 5 plis, et évaluation par plusieurs métriques pour garantir la robustesse.",
      images: [
        "/assets/images/project/Article.webp",
        "/assets/images/project/approche.webp",
      ],
      demoUrl:
        "https://colab.research.google.com/github/hnioua/Gene-Expression-Analysis-in-Colorectal-Cancer-Using-Machine-Learning/blob/main/MR_Analyse_de_l'Expression_des_G%C3%A8nes_du_Cancer_du_C%C3%B4lon_Hnioua_Abdessamad.ipynb",
      githubUrl:
        "https://github.com/hnioua/Gene-Expression-Analysis-in-Colorectal-Cancer-Using-Machine-Learning/blob/main/MR_Analyse_de_l'Expression_des_G%C3%A8nes_du_Cancer_du_C%C3%B4lon_Hnioua_Abdessamad.ipynb", // ⚡ GitHub public
      pdfUrl: "/assets/docs/colon_cancer_article.pdf", // ⚡ ton article PDF
    },
    {
      id: 5,
      title: "GREEN SHIELD – Assistance Policière en Milieu de Foule (APMF)",
      categories: ["ia", "robotique", "iot"],
      client:
        "Challenge Robovation 2025 – en pré-incubation (Cité d’Innovation Marrakech)",
      duration: "Prototype en cours (depuis 2025)",
      team: "1 porteur de projet (Hnioua Abdessamad)",
      status: "Pré-incubation / Prototype",
      description:
        "Robot mobile autonome destiné à la sécurité en milieu de foule. Il intègre la reconnaissance faciale, la détection d’anomalies, des capteurs de fumée et température, ainsi qu’un système d’extinction automatisé. Fonctionnant à 100 % à l’énergie solaire, il assure assistance et communication sécurisée en temps réel.",
      technologies: [
        "Arduino",
        "ESP32-CAM",
        "Capteurs DHT11 / flamme / ultrasons",
        "Firebase",
        "React.js",
        "Node.js",
        "IA (reconnaissance faciale & gestuelle)",
      ],
      features: [
        "Détection d’incendie et activation automatique d’une pompe à eau",
        "Reconnaissance faciale et détection des personnes en détresse",
        "Communication chiffrée en temps réel avec plateforme centrale",
        "Dashboard web de supervision (visualisation des données et vidéo)",
        "Fonctionnement 100 % énergie solaire renouvelable",
      ],
      challenges:
        "Sécuriser les grands rassemblements (Coupe du Monde 2030, événements touristiques) tout en garantissant une autonomie énergétique et une fiabilité en milieu réel.",
      solution:
        "Un robot intelligent, autonome et écologique combinant robotique, IA et IoT, développé en partenariat avec la Cité d’Innovation Marrakech. Le prototype a obtenu la 3e place au Challenge Robovation 2025.",
      images: [
        "/assets/images/project/GreenS2.webp",
        "/assets/images/project/GreenS3.webp",
        "/assets/images/project/GreenS1.webp",
        "/assets/images/project/dashArduino.webp",
      ],
      demoUrl: "null",
      githubUrl: "null",
    },
    {
      id: 6,
      title:
        "Extraction du Texte à partir d’Images à Faible Résolution (OCR robuste)",
      categories: ["ia", "vision", "dl"],
      client:
        "Faculté des Sciences et Techniques – Module Traitement d’Images et Vision par Ordinateur",
      duration: "Année universitaire 2024/2025",
      team: "Zakariae Laaliji & Abdessamad Hnioua (Master IAII)",
      status: "Projet académique validé (2025)",
      description:
        "Développement d’une solution OCR robuste pour extraire du texte à partir d’images dégradées (faible résolution, bruit, flou, compression). Le projet combine des techniques avancées de traitement d’images et des modèles de Deep Learning afin d’améliorer la reconnaissance optique de caractères dans des conditions difficiles.",
      technologies: [
        "Python",
        "OpenCV",
        "TensorFlow / Keras",
        "MobileNetV2 (Transfer Learning)",
        "Keras Tuner",
        "Tesseract OCR",
        "Google Colab",
      ],
      features: [
        "Prétraitement d’images : réduction du bruit (Gaussien, sel & poivre), amélioration du contraste, égalisation d’histogramme",
        "Simulation de dégradations (compression JPEG, flou, redimensionnement)",
        "Segmentation et équilibrage du dataset (SMOTE)",
        "Encodage One-Hot pour lettres et chiffres",
        "Architecture CNN basée sur MobileNetV2 avec transfert d’apprentissage",
        "Optimisation des hyperparamètres avec Keras Tuner",
        "Évaluation via précision, rappel, F1-score et matrice de confusion",
      ],
      metrics: {
        dataset: "Images dégradées synthétiquement (32×32 et 64×64)",
        bestModel: "MobileNetV2 optimisé",
        accuracy: "97.8%",
        f1Score: "0.976",
        robustness: "Résistant au bruit et aux variations de luminosité",
      },
      challenges:
        "Améliorer la robustesse de l’OCR face aux images dégradées et optimiser le modèle CNN avec un dataset limité.",
      solution:
        "Combinaison de prétraitements avancés (bruit, flou, compression) et d’un modèle CNN optimisé par transfert d’apprentissage (MobileNetV2), validé avec une approche systématique et multi-métriques.",
      images: [
        "/assets/images/project/OCR1.webp",
        "/assets/images/project/OCR2.webp",
        "/assets/images/project/6.webp",
      ],
      demoUrl: "null",
      githubUrl:
        "https://github.com/hnioua/OCR-Text-Recognition-in-Challenging-Conditions",
      pdfUrl: "/assets/docs/Rapport_Traitement_d_images.pdf",
    },
  ];

  /* -------------------- Filtrage -------------------- */
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.categories && project.categories.includes(activeFilter)
        );

  /* -------------------- Gestion Modal -------------------- */
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };
  const closeProjectModal = () => setSelectedProject(null);

  const nextImage = () =>
    selectedProject &&
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);

  const prevImage = () =>
    selectedProject &&
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden py-20 font-sans">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-green-400 mb-6">
            Expérience & Projets
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
            Portfolio de projets réalisés avec impact mesurable, démontrant
            expertise technique et solutions innovantes.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Liste des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Image principale */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Production"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-heading text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 font-sans">
                  {project.description}
                </p>

                {/* Techno affichées */}
                <div className="flex flex-wrap gap-2 mb-4">
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

                {/* Boutons */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openProjectModal(project)}
                    iconName="Eye"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Détails
                  </Button>

                  {project.demoUrl && project.demoUrl !== "null" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      iconName="ExternalLink"
                      iconPosition="left"
                    >
                      Demo
                    </Button>
                  )}

                  {project.githubUrl && project.githubUrl !== "null" ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      iconName="Github"
                      iconPosition="left"
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
                      className="cursor-not-allowed opacity-60"
                    >
                      Privé
                    </Button>
                  )}

                  {project.pdfUrl && (
                    <Button
                      variant="default"
                      onClick={() => window.open(project.pdfUrl, "_blank")}
                      iconName="FileDown"
                      iconPosition="left"
                      className="flex-1"
                    >
                      Télécharger Article
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal projet */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm font-sans">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-900 border-b border-gray-700 p-4">
                <h3 className="text-2xl font-heading text-white">
                  {selectedProject.title}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeProjectModal}
                  iconName="X"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Slider images */}
                <div>
                  <div className="relative w-auto h-52 sm:h-60 mb-4">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain rounded-xl mx-auto"
                    />

                    {/* Boutons slider */}
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </div>

                  {/* Indicateurs */}
                  <div className="flex justify-center gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full ${
                          idx === currentImageIndex
                            ? "bg-green-500"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Infos projet */}
                  <div className="space-y-2 text-gray-300 text-sm mt-4">
                    <div>
                      <Icon name="Building" size={16} /> Client:{" "}
                      {selectedProject.client}
                    </div>
                    <div>
                      <Icon name="Clock" size={16} /> Durée:{" "}
                      {selectedProject.duration}
                    </div>
                    <div>
                      <Icon name="Users" size={16} /> Équipe:{" "}
                      {selectedProject.team}
                    </div>
                  </div>
                </div>

                {/* Détails */}
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-heading text-white mb-2">
                      Description
                    </h4>
                    <p>{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="font-heading text-white mb-2">
                      Fonctionnalités
                    </h4>
                    <ul className="list-disc list-inside">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-heading text-white mb-2">
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

                  {/* Boutons modal */}
                  <div className="flex gap-2 mt-4">
                    {selectedProject.demoUrl &&
                      selectedProject.demoUrl !== "null" && (
                        <Button
                          variant="default"
                          onClick={() =>
                            window.open(selectedProject.demoUrl, "_blank")
                          }
                          iconName="ExternalLink"
                          iconPosition="left"
                          className="flex-1"
                        >
                          Voir Demo
                        </Button>
                      )}

                    {selectedProject.githubUrl &&
                    selectedProject.githubUrl !== "null" ? (
                      <Button
                        variant="outline"
                        onClick={() =>
                          window.open(selectedProject.githubUrl, "_blank")
                        }
                        iconName="Github"
                        iconPosition="left"
                        className="flex-1"
                      >
                        Code Source
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        disabled
                        iconName="Lock"
                        iconPosition="left"
                        className="cursor-not-allowed opacity-60 flex-1"
                      >
                        Privé
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceShowcase;
