import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ExperienceTimeline = ({ currentLanguage }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: 'Parcours Professionnel & Académique',
      subtitle: 'Une progression constante vers l\'excellence en BI & Data Science',
      description: 'Formation solide et expérience pratique dans des organismes de référence au Maroc'
    },
    en: {
      title: 'Professional & Academic Journey',
      subtitle: 'Constant progression towards excellence in BI & Data Science',
      description: 'Solid training and practical experience in leading organizations in Morocco'
    },
    ar: {
      title: 'المسار المهني والأكاديمي',
      subtitle: 'تقدم مستمر نحو التميز في ذكاء الأعمال وعلوم البيانات',
      description: 'تدريب قوي وخبرة عملية في المؤسسات الرائدة في المغرب'
    }
  };

  const timelineData = {
    fr: [
      {
        id: 1,
        type: 'experience',
        title: 'Analyste BI Senior',
        organization: 'AREF Souss Massa',
        location: 'Agadir, Maroc',
        period: '2022 - Présent',
        duration: '2+ ans',
        logo: '/assets/images/aref-logo.png',
        description: 'Responsable de l\'architecture BI et de l\'analyse des données éducatives pour la région Souss Massa',
        achievements: [
          'Conception et développement de 15+ dashboards Power BI pour le suivi des performances éducatives',
          'Mise en place d\'un système ETL automatisé traitant 500K+ enregistrements quotidiens',
          'Réduction de 75% du temps de génération des rapports mensuels',
          'Formation de 25+ utilisateurs aux outils BI et à l\'analyse de données',
          'Amélioration de 40% de la précision des prévisions d\'effectifs scolaires'
        ],
        technologies: ['Power BI', 'SQL Server', 'Python', 'Excel VBA', 'SSIS'],
        skills: ['Business Intelligence', 'Data Analysis', 'ETL', 'Reporting', 'Formation'],
        color: 'blue'
      },
      {
        id: 2,
        type: 'experience',
        title: 'Data Scientist Junior',
        organization: 'ADS Rabat',
        location: 'Rabat, Maroc',
        period: '2020 - 2022',
        duration: '2 ans',
        logo: '/assets/images/ads-logo.png',
        description: 'Développement de solutions d\'analyse prédictive et de machine learning pour l\'administration publique',
        achievements: [
          'Création de modèles ML pour la prédiction des tendances démographiques (précision 92%)',
          'Développement d\'un système de détection d\'anomalies dans les données administratives',
          'Automatisation de 80% des processus de nettoyage et validation des données',
          'Collaboration avec 5+ départements pour l\'intégration de solutions data',
          'Publication de 3 rapports d\'analyse stratégique pour la direction générale'
        ],
        technologies: ['Python', 'R', 'Scikit-learn', 'Pandas', 'PostgreSQL', 'Tableau'],
        skills: ['Machine Learning', 'Data Mining', 'Statistical Analysis', 'Predictive Modeling'],
        color: 'green'
      },
      {
        id: 3,
        type: 'education',
        title: 'Master en Data Science',
        organization: 'FST Marrakech',
        location: 'Marrakech, Maroc',
        period: '2018 - 2020',
        duration: '2 ans',
        logo: '/assets/images/fst-logo.png',
        description: 'Formation approfondie en science des données, machine learning et intelligence artificielle',
        achievements: [
          'Diplômé avec Mention Très Bien (17.2/20)',
          'Projet de fin d\'études : Système IoT de détection d\'incendies avec ML',
          'Stage de recherche de 6 mois au laboratoire d\'IA',
          'Participation à 3 conférences internationales sur l\'IA',
          'Publication d\'un article de recherche sur les réseaux de neurones'
        ],
        technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Arduino', 'IoT'],
        skills: ['Deep Learning', 'Computer Vision', 'IoT', 'Research', 'Academic Writing'],
        color: 'purple'
      },
      {
        id: 4,
        type: 'education',
        title: 'DUT Informatique',
        organization: 'EST Oujda',
        location: 'Oujda, Maroc',
        period: '2016 - 2018',
        duration: '2 ans',
        logo: '/assets/images/est-logo.png',
        description: 'Formation technique en développement informatique et bases de données',
        achievements: [
          'Diplômé avec Mention Très Bien (16.8/20)',
          'Major de promotion en programmation et bases de données',
          'Projet de fin d\'études : Application de gestion scolaire avec PHP/MySQL',
          'Stage de 2 mois dans une entreprise de développement logiciel',
          'Certification en administration de bases de données'
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Java', 'C++'],
        skills: ['Web Development', 'Database Design', 'Software Engineering', 'Project Management'],
        color: 'orange'
      },
      {
        id: 5,
        type: 'education',
        title: 'Licence Sciences Mathématiques',
        organization: 'EST Safi',
        location: 'Safi, Maroc',
        period: '2014 - 2016',
        duration: '2 ans',
        logo: '/assets/images/est-safi-logo.png',
        description: 'Formation fondamentale en mathématiques appliquées et statistiques',
        achievements: [
          'Spécialisation en statistiques et probabilités',
          'Projet de recherche sur les méthodes d\'optimisation',
          'Participation aux olympiades de mathématiques',
          'Tutorat de 15+ étudiants en mathématiques',
          'Mention Bien (15.5/20)'
        ],
        technologies: ['MATLAB', 'R', 'Excel', 'SPSS', 'Mathematica'],
        skills: ['Statistics', 'Probability', 'Mathematical Modeling', 'Optimization', 'Teaching'],
        color: 'red'
      }
    ],
    en: [
      {
        id: 1,
        type: 'experience',
        title: 'Senior BI Analyst',
        organization: 'AREF Souss Massa',
        location: 'Agadir, Morocco',
        period: '2022 - Present',
        duration: '2+ years',
        logo: '/assets/images/aref-logo.png',
        description: 'Responsible for BI architecture and educational data analysis for the Souss Massa region',
        achievements: [
          'Designed and developed 15+ Power BI dashboards for educational performance monitoring',
          'Implemented automated ETL system processing 500K+ daily records',
          '75% reduction in monthly report generation time',
          'Trained 25+ users on BI tools and data analysis',
          '40% improvement in school enrollment forecast accuracy'
        ],
        technologies: ['Power BI', 'SQL Server', 'Python', 'Excel VBA', 'SSIS'],
        skills: ['Business Intelligence', 'Data Analysis', 'ETL', 'Reporting', 'Training'],
        color: 'blue'
      },
      {
        id: 2,
        type: 'experience',
        title: 'Junior Data Scientist',
        organization: 'ADS Rabat',
        location: 'Rabat, Morocco',
        period: '2020 - 2022',
        duration: '2 years',
        logo: '/assets/images/ads-logo.png',
        description: 'Development of predictive analytics and machine learning solutions for public administration',
        achievements: [
          'Created ML models for demographic trend prediction (92% accuracy)',
          'Developed anomaly detection system for administrative data',
          'Automated 80% of data cleaning and validation processes',
          'Collaborated with 5+ departments for data solution integration',
          'Published 3 strategic analysis reports for general management'
        ],
        technologies: ['Python', 'R', 'Scikit-learn', 'Pandas', 'PostgreSQL', 'Tableau'],
        skills: ['Machine Learning', 'Data Mining', 'Statistical Analysis', 'Predictive Modeling'],
        color: 'green'
      },
      {
        id: 3,
        type: 'education',
        title: 'Master in Data Science',
        organization: 'FST Marrakech',
        location: 'Marrakech, Morocco',
        period: '2018 - 2020',
        duration: '2 years',
        logo: '/assets/images/fst-logo.png',
        description: 'In-depth training in data science, machine learning and artificial intelligence',
        achievements: [
          'Graduated with Highest Honors (17.2/20)',
          'Final project: IoT fire detection system with ML',
          '6-month research internship at AI laboratory',
          'Participated in 3 international AI conferences',
          'Published research paper on neural networks'
        ],
        technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Arduino', 'IoT'],
        skills: ['Deep Learning', 'Computer Vision', 'IoT', 'Research', 'Academic Writing'],
        color: 'purple'
      },
      {
        id: 4,
        type: 'education',
        title: 'DUT Computer Science',
        organization: 'EST Oujda',
        location: 'Oujda, Morocco',
        period: '2016 - 2018',
        duration: '2 years',
        logo: '/assets/images/est-logo.png',
        description: 'Technical training in software development and databases',
        achievements: [
          'Graduated with Highest Honors (16.8/20)',
          'Top of class in programming and databases',
          'Final project: School management application with PHP/MySQL',
          '2-month internship at software development company',
          'Database administration certification'
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Java', 'C++'],
        skills: ['Web Development', 'Database Design', 'Software Engineering', 'Project Management'],
        color: 'orange'
      },
      {
        id: 5,
        type: 'education',
        title: 'Bachelor in Mathematical Sciences',
        organization: 'EST Safi',
        location: 'Safi, Morocco',
        period: '2014 - 2016',
        duration: '2 years',
        logo: '/assets/images/est-safi-logo.png',
        description: 'Fundamental training in applied mathematics and statistics',
        achievements: [
          'Specialization in statistics and probability',
          'Research project on optimization methods',
          'Participated in mathematics olympiads',
          'Tutored 15+ students in mathematics',
          'Good Honors (15.5/20)'
        ],
        technologies: ['MATLAB', 'R', 'Excel', 'SPSS', 'Mathematica'],
        skills: ['Statistics', 'Probability', 'Mathematical Modeling', 'Optimization', 'Teaching'],
        color: 'red'
      }
    ],
    ar: [
      {
        id: 1,
        type: 'experience',
        title: 'محلل ذكاء أعمال أول',
        organization: 'الأكاديمية الجهوية للتربية والتكوين سوس ماسة',
        location: 'أكادير، المغرب',
        period: '2022 - الحاضر',
        duration: '2+ سنوات',
        logo: '/assets/images/aref-logo.png',
        description: 'مسؤول عن هندسة ذكاء الأعمال وتحليل البيانات التعليمية لجهة سوس ماسة',
        achievements: [
          'تصميم وتطوير أكثر من 15 لوحة معلومات Power BI لمراقبة الأداء التعليمي',
          'تنفيذ نظام ETL آلي يعالج أكثر من 500 ألف سجل يومياً',
          'تقليل 75% من وقت إنتاج التقارير الشهرية',
          'تدريب أكثر من 25 مستخدماً على أدوات ذكاء الأعمال وتحليل البيانات',
          'تحسين 40% في دقة توقعات أعداد الطلاب'
        ],
        technologies: ['Power BI', 'SQL Server', 'Python', 'Excel VBA', 'SSIS'],
        skills: ['ذكاء الأعمال', 'تحليل البيانات', 'ETL', 'التقارير', 'التدريب'],
        color: 'blue'
      },
      {
        id: 2,
        type: 'experience',
        title: 'عالم بيانات مبتدئ',
        organization: 'وكالة التنمية الرقمية الرباط',
        location: 'الرباط، المغرب',
        period: '2020 - 2022',
        duration: 'سنتان',
        logo: '/assets/images/ads-logo.png',
        description: 'تطوير حلول التحليل التنبؤي والتعلم الآلي للإدارة العامة',
        achievements: [
          'إنشاء نماذج التعلم الآلي للتنبؤ بالاتجاهات الديموغرافية (دقة 92%)',
          'تطوير نظام كشف الشذوذ في البيانات الإدارية',
          'أتمتة 80% من عمليات تنظيف والتحقق من البيانات',
          'التعاون مع أكثر من 5 إدارات لتكامل حلول البيانات',
          'نشر 3 تقارير تحليل استراتيجي للإدارة العامة'
        ],
        technologies: ['Python', 'R', 'Scikit-learn', 'Pandas', 'PostgreSQL', 'Tableau'],
        skills: ['التعلم الآلي', 'تنقيب البيانات', 'التحليل الإحصائي', 'النمذجة التنبؤية'],
        color: 'green'
      },
      {
        id: 3,
        type: 'education',
        title: 'ماجستير في علوم البيانات',
        organization: 'كلية العلوم والتقنيات مراكش',
        location: 'مراكش، المغرب',
        period: '2018 - 2020',
        duration: 'سنتان',
        logo: '/assets/images/fst-logo.png',
        description: 'تدريب متعمق في علوم البيانات والتعلم الآلي والذكاء الاصطناعي',
        achievements: [
          'تخرج بامتياز مع مرتبة الشرف (17.2/20)',
          'مشروع التخرج: نظام IoT لكشف الحرائق مع التعلم الآلي',
          'تدريب بحثي لمدة 6 أشهر في مختبر الذكاء الاصطناعي',
          'المشاركة في 3 مؤتمرات دولية حول الذكاء الاصطناعي',
          'نشر ورقة بحثية حول الشبكات العصبية'
        ],
        technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Arduino', 'IoT'],
        skills: ['التعلم العميق', 'رؤية الحاسوب', 'إنترنت الأشياء', 'البحث', 'الكتابة الأكاديمية'],
        color: 'purple'
      },
      {
        id: 4,
        type: 'education',
        title: 'دبلوم جامعي في علوم الحاسوب',
        organization: 'المدرسة العليا للتكنولوجيا وجدة',
        location: 'وجدة، المغرب',
        period: '2016 - 2018',
        duration: 'سنتان',
        logo: '/assets/images/est-logo.png',
        description: 'تدريب تقني في تطوير البرمجيات وقواعد البيانات',
        achievements: [
          'تخرج بامتياز مع مرتبة الشرف (16.8/20)',
          'الأول في الدفعة في البرمجة وقواعد البيانات',
          'مشروع التخرج: تطبيق إدارة مدرسية بـ PHP/MySQL',
          'تدريب لمدة شهرين في شركة تطوير البرمجيات',
          'شهادة في إدارة قواعد البيانات'
        ],
        technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Java', 'C++'],
        skills: ['تطوير الويب', 'تصميم قواعد البيانات', 'هندسة البرمجيات', 'إدارة المشاريع'],
        color: 'orange'
      },
      {
        id: 5,
        type: 'education',
        title: 'إجازة في العلوم الرياضية',
        organization: 'المدرسة العليا للتكنولوجيا آسفي',
        location: 'آسفي، المغرب',
        period: '2014 - 2016',
        duration: 'سنتان',
        logo: '/assets/images/est-safi-logo.png',
        description: 'تدريب أساسي في الرياضيات التطبيقية والإحصاء',
        achievements: [
          'تخصص في الإحصاء والاحتمالات',
          'مشروع بحثي حول طرق التحسين',
          'المشاركة في أولمبياد الرياضيات',
          'تدريس أكثر من 15 طالباً في الرياضيات',
          'مرتبة الشرف الجيد (15.5/20)'
        ],
        technologies: ['MATLAB', 'R', 'Excel', 'SPSS', 'Mathematica'],
        skills: ['الإحصاء', 'الاحتمالات', 'النمذجة الرياضية', 'التحسين', 'التدريس'],
        color: 'red'
      }
    ]
  };

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', accent: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', accent: 'bg-purple-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', accent: 'bg-orange-100' },
    red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', accent: 'bg-red-100' }
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
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-8">
            {timelineData?.[currentLanguage]?.map((item, index) => {
              const colors = colorClasses?.[item?.color];
              const isExpanded = expandedItem === item?.id;
              const isExperience = item?.type === 'experience';

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
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white
                      ${colors?.accent} portfolio-shadow-card
                    `}>
                      <Icon 
                        name={isExperience ? 'Briefcase' : 'GraduationCap'} 
                        size={24} 
                        className={colors?.icon}
                      />
                    </div>
                  </div>
                  {/* Content Card */}
                  <div className="flex-1 min-w-0">
                    <motion.div
                      className={`
                        bg-white rounded-2xl p-6 portfolio-shadow-card border-2 cursor-pointer
                        ${isExpanded ? colors?.border : 'border-slate-200'}
                        hover:portfolio-shadow-card portfolio-transition
                      `}
                      onClick={() => setExpandedItem(isExpanded ? null : item?.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-slate-800 truncate">
                              {item?.title}
                            </h3>
                            <span className={`
                              px-2 py-1 rounded-full text-xs font-semibold
                              ${isExperience ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}
                            `}>
                              {isExperience ? 
                                (currentLanguage === 'fr' ? 'Expérience' : 
                                 currentLanguage === 'en' ? 'Experience' : 'خبرة') :
                                (currentLanguage === 'fr' ? 'Formation' : 
                                 currentLanguage === 'en' ? 'Education' : 'تعليم')
                              }
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600 mb-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="Building" size={16} />
                              <span className="font-medium">{item?.organization}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="MapPin" size={16} />
                              <span>{item?.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
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
                          name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
                          size={20} 
                          className="text-slate-400 portfolio-transition"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {item?.description}
                      </p>

                      {/* Expanded Content */}
                      <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {isExpanded && (
                          <div className="space-y-6 pt-4 border-t border-slate-200">
                            {/* Achievements */}
                            <div>
                              <h4 className="text-lg font-bold text-slate-800 mb-3">
                                {currentLanguage === 'fr' ? 'Réalisations Clés' :
                                 currentLanguage === 'en' ? 'Key Achievements' : 'الإنجازات الرئيسية'}
                              </h4>
                              <ul className="space-y-2">
                                {item?.achievements?.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start space-x-3">
                                    <Icon name="CheckCircle" size={16} className={`${colors?.icon} mt-1 flex-shrink-0`} />
                                    <span className="text-slate-700 text-sm leading-relaxed">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-lg font-bold text-slate-800 mb-3">
                                {currentLanguage === 'fr' ? 'Technologies' :
                                 currentLanguage === 'en' ? 'Technologies' : 'التقنيات'}
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
                              <h4 className="text-lg font-bold text-slate-800 mb-3">
                                {currentLanguage === 'fr' ? 'Compétences Développées' :
                                 currentLanguage === 'en' ? 'Skills Developed' : 'المهارات المطورة'}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item?.skills?.map((skill, idx) => (
                                  <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700"
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Années d\'Expérience' :
                 currentLanguage === 'en' ? 'Years of Experience' : 'سنوات الخبرة'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Diplômes Obtenus' :
                 currentLanguage === 'en' ? 'Degrees Earned' : 'الشهادات المحصلة'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Mentions Très Bien' :
                 currentLanguage === 'en' ? 'Highest Honors' : 'مراتب الشرف العليا'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-slate-600 font-medium">
                {currentLanguage === 'fr' ? 'Projets Réalisés' :
                 currentLanguage === 'en' ? 'Projects Completed' : 'المشاريع المكتملة'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;