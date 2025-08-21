import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ExperienceShowcase = ({ currentLanguage }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    { id: "all", label: "Tous les Projets", icon: "Grid3X3" },
    { id: "web", label: "Développement Web", icon: "Globe" },
    { id: "mobile", label: "Applications Mobile", icon: "Smartphone" },
    { id: "data", label: "Analyse de Données", icon: "BarChart3" },
    { id: "bi", label: "Business Intelligence", icon: "PieChart" },
  ];

  const projects = [
    // ton array projects ici (comme avant)
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden py-20">
      {/* Particles / Glow Background */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
            Expérience & Projets
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Portfolio de projets réalisés avec impact mesurable, démontrant
            expertise technique et solutions innovantes.
          </p>
        </motion.div>

        {/* Filters */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    iconName="Github"
                    iconPosition="left"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-900 border-b border-gray-700 p-4">
                <h3 className="text-2xl font-bold text-white">
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
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <div className="space-y-2 text-gray-300 text-sm">
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

                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Description
                    </h4>
                    <p>{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Fonctionnalités
                    </h4>
                    <ul className="list-disc list-inside">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
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
                  <div className="flex gap-2 mt-4">
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
