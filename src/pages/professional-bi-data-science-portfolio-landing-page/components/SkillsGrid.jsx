import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsGrid = ({ currentLanguage }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: 'Compétences Techniques Avancées',
      subtitle: 'Maîtrise complète de l\'écosystème BI & Data Science',
      description: 'Plus de 5 années d\'expérience pratique avec les technologies les plus demandées du marché'
    },
    en: {
      title: 'Advanced Technical Skills',
      subtitle: 'Complete mastery of BI & Data Science ecosystem',
      description: 'Over 5 years of hands-on experience with the most in-demand market technologies'
    },
    ar: {
      title: 'المهارات التقنية المتقدمة',
      subtitle: 'إتقان كامل لنظام ذكاء الأعمال وعلوم البيانات',
      description: 'أكثر من 5 سنوات من الخبرة العملية مع التقنيات الأكثر طلباً في السوق'
    }
  };

  const categories = {
    fr: [
      { id: 'all', label: 'Toutes', icon: 'Grid3X3' },
      { id: 'bi', label: 'BI Tools', icon: 'BarChart3' },
      { id: 'ml', label: 'ML/AI', icon: 'Brain' },
      { id: 'dev', label: 'Développement', icon: 'Code' },
      { id: 'databases', label: 'Bases de Données', icon: 'Database' }
    ],
    en: [
      { id: 'all', label: 'All', icon: 'Grid3X3' },
      { id: 'bi', label: 'BI Tools', icon: 'BarChart3' },
      { id: 'ml', label: 'ML/AI', icon: 'Brain' },
      { id: 'dev', label: 'Development', icon: 'Code' },
      { id: 'databases', label: 'Databases', icon: 'Database' }
    ],
    ar: [
      { id: 'all', label: 'الكل', icon: 'Grid3X3' },
      { id: 'bi', label: 'أدوات ذكاء الأعمال', icon: 'BarChart3' },
      { id: 'ml', label: 'التعلم الآلي/الذكاء الاصطناعي', icon: 'Brain' },
      { id: 'dev', label: 'التطوير', icon: 'Code' },
      { id: 'databases', label: 'قواعد البيانات', icon: 'Database' }
    ]
  };

  const skills = [
    {
      id: 1,
      name: 'Power BI',
      category: 'bi',
      proficiency: 95,
      experience: '4+ years',
      icon: 'BarChart3',
      color: 'yellow',
      projects: 15,
      description: {
        fr: 'Création de dashboards interactifs et rapports avancés',
        en: 'Creating interactive dashboards and advanced reports',
        ar: 'إنشاء لوحات معلومات تفاعلية وتقارير متقدمة'
      }
    },
    {
      id: 2,
      name: 'Python',
      category: 'dev',
      proficiency: 92,
      experience: '5+ years',
      icon: 'Code',
      color: 'green',
      projects: 25,
      description: {
        fr: 'Développement d\'applications data et modèles ML',
        en: 'Data application development and ML models',
        ar: 'تطوير تطبيقات البيانات ونماذج التعلم الآلي'
      }
    },
    {
      id: 3,
      name: 'Tableau',
      category: 'bi',
      proficiency: 88,
      experience: '3+ years',
      icon: 'TrendingUp',
      color: 'blue',
      projects: 12,
      description: {
        fr: 'Visualisations avancées et storytelling data',
        en: 'Advanced visualizations and data storytelling',
        ar: 'التصورات المتقدمة وسرد البيانات'
      }
    },
    {
      id: 4,
      name: 'Machine Learning',
      category: 'ml',
      proficiency: 90,
      experience: '4+ years',
      icon: 'Brain',
      color: 'purple',
      projects: 18,
      description: {
        fr: 'Modèles prédictifs et algorithmes d\'apprentissage',
        en: 'Predictive models and learning algorithms',
        ar: 'النماذج التنبؤية وخوارزميات التعلم'
      }
    },
    {
      id: 5,
      name: 'SQL Server',
      category: 'databases',
      proficiency: 94,
      experience: '5+ years',
      icon: 'Database',
      color: 'red',
      projects: 20,
      description: {
        fr: 'Gestion de bases de données et optimisation',
        en: 'Database management and optimization',
        ar: 'إدارة قواعد البيانات والتحسين'
      }
    },
    {
      id: 6,
      name: 'R',
      category: 'dev',
      proficiency: 85,
      experience: '3+ years',
      icon: 'Calculator',
      color: 'indigo',
      projects: 10,
      description: {
        fr: 'Analyses statistiques et modélisation',
        en: 'Statistical analysis and modeling',
        ar: 'التحليل الإحصائي والنمذجة'
      }
    },
    {
      id: 7,
      name: 'TensorFlow',
      category: 'ml',
      proficiency: 87,
      experience: '3+ years',
      icon: 'Zap',
      color: 'orange',
      projects: 8,
      description: {
        fr: 'Deep Learning et réseaux de neurones',
        en: 'Deep Learning and neural networks',
        ar: 'التعلم العميق والشبكات العصبية'
      }
    },
    {
      id: 8,
      name: 'PostgreSQL',
      category: 'databases',
      proficiency: 89,
      experience: '4+ years',
      icon: 'Server',
      color: 'cyan',
      projects: 16,
      description: {
        fr: 'Base de données relationnelle avancée',
        en: 'Advanced relational database',
        ar: 'قاعدة البيانات العلائقية المتقدمة'
      }
    },
    {
      id: 9,
      name: 'Apache Spark',
      category: 'dev',
      proficiency: 83,
      experience: '2+ years',
      icon: 'Flame',
      color: 'pink',
      projects: 6,
      description: {
        fr: 'Traitement de données à grande échelle',
        en: 'Large-scale data processing',
        ar: 'معالجة البيانات على نطاق واسع'
      }
    },
    {
      id: 10,
      name: 'Scikit-learn',
      category: 'ml',
      proficiency: 91,
      experience: '4+ years',
      icon: 'Target',
      color: 'emerald',
      projects: 22,
      description: {
        fr: 'Bibliothèque ML pour Python',
        en: 'ML library for Python',
        ar: 'مكتبة التعلم الآلي لـ Python'
      }
    },
    {
      id: 11,
      name: 'QlikView',
      category: 'bi',
      proficiency: 80,
      experience: '2+ years',
      icon: 'Eye',
      color: 'teal',
      projects: 7,
      description: {
        fr: 'Plateforme de BI associative',
        en: 'Associative BI platform',
        ar: 'منصة ذكاء الأعمال الترابطية'
      }
    },
    {
      id: 12,
      name: 'MongoDB',
      category: 'databases',
      proficiency: 78,
      experience: '2+ years',
      icon: 'FileText',
      color: 'lime',
      projects: 9,
      description: {
        fr: 'Base de données NoSQL documentaire',
        en: 'Document-based NoSQL database',
        ar: 'قاعدة بيانات NoSQL القائمة على الوثائق'
      }
    }
  ];

  const colorClasses = {
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: 'text-yellow-600', accent: 'bg-yellow-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', accent: 'bg-green-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', accent: 'bg-purple-100' },
    red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', accent: 'bg-red-100' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600', accent: 'bg-indigo-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', accent: 'bg-orange-100' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'text-cyan-600', accent: 'bg-cyan-100' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', icon: 'text-pink-600', accent: 'bg-pink-100' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600', accent: 'bg-emerald-100' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600', accent: 'bg-teal-100' },
    lime: { bg: 'bg-lime-50', border: 'border-lime-200', icon: 'text-lime-600', accent: 'bg-lime-100' }
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills?.filter(skill => skill?.category === activeCategory);

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
    <section ref={sectionRef} className="py-20 bg-slate-50">
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
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {content?.[currentLanguage]?.description}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories?.[currentLanguage]?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-full font-medium portfolio-transition
                ${activeCategory === category?.id
                  ? 'bg-primary text-white portfolio-shadow-cta'
                  : 'bg-white text-slate-600 hover:text-slate-800 hover:bg-slate-100 border border-slate-200'
                }
              `}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills?.map((skill, index) => {
              const colors = colorClasses?.[skill?.color];
              
              return (
                <motion.div
                  key={skill?.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`
                    relative bg-white rounded-2xl p-6 h-full border-2 portfolio-transition cursor-pointer
                    ${colors?.border} hover:portfolio-shadow-card hover:scale-105
                  `}>
                    {/* Skill Icon & Name */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors?.accent}`}>
                        <Icon name={skill?.icon} size={24} className={colors?.icon} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{skill?.name}</h3>
                        <p className="text-sm text-slate-500">{skill?.experience}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {skill?.description?.[currentLanguage]}
                    </p>

                    {/* Proficiency Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">
                          {currentLanguage === 'fr' ? 'Maîtrise' :
                           currentLanguage === 'en' ? 'Proficiency' : 'الإتقان'}
                        </span>
                        <span className={`text-sm font-bold ${colors?.icon}`}>
                          {skill?.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill?.proficiency}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${colors?.icon?.replace('text-', 'from-')} to-primary`}
                        />
                      </div>
                    </div>

                    {/* Projects Count */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="FolderOpen" size={16} className="text-slate-400" />
                        <span className="text-sm text-slate-600">
                          {skill?.projects} {currentLanguage === 'fr' ? 'projets' :
                                          currentLanguage === 'en' ? 'projects' : 'مشاريع'}
                        </span>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${colors?.icon?.replace('text-', 'bg-')} animate-pulse`} />
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`
                        absolute inset-0 rounded-2xl flex items-center justify-center
                        ${colors?.bg} border-2 ${colors?.border}
                      `}
                    >
                      <div className="text-center p-4">
                        <Icon name="ExternalLink" size={24} className={colors?.icon} />
                        <p className="text-sm font-medium text-slate-700 mt-2">
                          {currentLanguage === 'fr' ? 'Voir les projets' :
                           currentLanguage === 'en' ? 'View projects' : 'عرض المشاريع'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12+</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Technologies Maîtrisées' :
                 currentLanguage === 'en' ? 'Technologies Mastered' : 'التقنيات المتقنة'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Projets Réalisés' :
                 currentLanguage === 'en' ? 'Projects Completed' : 'المشاريع المكتملة'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Années d\'Expérience' :
                 currentLanguage === 'en' ? 'Years of Experience' : 'سنوات الخبرة'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Taux de Satisfaction' :
                 currentLanguage === 'en' ? 'Satisfaction Rate' : 'معدل الرضا'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;