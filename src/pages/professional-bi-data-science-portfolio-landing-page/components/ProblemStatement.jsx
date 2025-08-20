import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemStatement = ({ currentLanguage }) => {
  const [hoveredProblem, setHoveredProblem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: 'Les Défis de la Transformation Digitale',
      subtitle: 'Pourquoi les entreprises peinent-elles à exploiter leurs données ?',
      description: `Dans un monde où les données sont le nouveau pétrole, 
      de nombreuses organisations marocaines et internationales font face à des défis majeurs 
      qui les empêchent de tirer parti de leur patrimoine informationnel.`
    },
    en: {
      title: 'Digital Transformation Challenges',
      subtitle: 'Why do companies struggle to leverage their data?',
      description: `In a world where data is the new oil, 
      many Moroccan and international organizations face major challenges 
      that prevent them from capitalizing on their information assets.`
    },
    ar: {
      title: 'تحديات التحول الرقمي',
      subtitle: 'لماذا تكافح الشركات لاستغلال بياناتها؟',
      description: `في عالم تعتبر فيه البيانات النفط الجديد، 
      تواجه العديد من المنظمات المغربية والدولية تحديات كبيرة 
      تمنعها من الاستفادة من أصولها المعلوماتية.`
    }
  };

  const problems = {
    fr: [
      {
        id: 1,
        icon: 'Database',
        title: 'Sources de Données Dispersées',
        description: 'Données éparpillées dans différents systèmes sans intégration',
        consequences: [
          'Vision fragmentée de l\'activité',
          'Décisions basées sur des informations partielles',
          'Perte de temps dans la collecte manuelle',
          'Risques d\'erreurs et d\'incohérences'
        ],
        impact: '67% des entreprises perdent 3h/jour',
        color: 'red'
      },
      {
        id: 2,
        icon: 'Clock',
        title: 'Rapports Manuels Chronophages',
        description: 'Processus de reporting manuel et répétitif',
        consequences: [
          'Retards dans la prise de décision',
          'Ressources humaines mobilisées sur des tâches répétitives',
          'Rapports obsolètes dès leur création',
          'Manque de réactivité face aux changements'
        ],
        impact: '45% du temps des analystes gaspillé',
        color: 'orange'
      },
      {
        id: 3,
        icon: 'TrendingDown',
        title: 'Insights Manqués',
        description: 'Opportunités d\'affaires non détectées dans les données',
        consequences: [
          'Perte d\'avantage concurrentiel',
          'Opportunités de croissance ratées',
          'Problèmes détectés trop tard',
          'ROI des investissements data non optimisé'
        ],
        impact: '23% de revenus potentiels perdus',
        color: 'purple'
      },
      {
        id: 4,
        icon: 'Shield',
        title: 'Gouvernance des Données Faible',
        description: 'Manque de contrôle sur la qualité et la sécurité des données',
        consequences: [
          'Données de mauvaise qualité',
          'Risques de sécurité et de conformité',
          'Manque de traçabilité',
          'Difficultés de mise à l\'échelle'
        ],
        impact: '31% des projets data échouent',
        color: 'blue'
      }
    ],
    en: [
      {
        id: 1,
        icon: 'Database',
        title: 'Scattered Data Sources',
        description: 'Data scattered across different systems without integration',
        consequences: [
          'Fragmented business view',
          'Decisions based on partial information',
          'Time wasted on manual collection',
          'Risk of errors and inconsistencies'
        ],
        impact: '67% of companies lose 3h/day',
        color: 'red'
      },
      {
        id: 2,
        icon: 'Clock',
        title: 'Time-Consuming Manual Reports',
        description: 'Manual and repetitive reporting processes',
        consequences: [
          'Delays in decision making',
          'Human resources tied up in repetitive tasks',
          'Reports obsolete upon creation',
          'Lack of responsiveness to changes'
        ],
        impact: '45% of analyst time wasted',
        color: 'orange'
      },
      {
        id: 3,
        icon: 'TrendingDown',
        title: 'Missed Insights',
        description: 'Business opportunities undetected in data',
        consequences: [
          'Loss of competitive advantage',
          'Missed growth opportunities',
          'Problems detected too late',
          'Unoptimized ROI on data investments'
        ],
        impact: '23% of potential revenue lost',
        color: 'purple'
      },
      {
        id: 4,
        icon: 'Shield',
        title: 'Weak Data Governance',
        description: 'Lack of control over data quality and security',
        consequences: [
          'Poor data quality',
          'Security and compliance risks',
          'Lack of traceability',
          'Scaling difficulties'
        ],
        impact: '31% of data projects fail',
        color: 'blue'
      }
    ],
    ar: [
      {
        id: 1,
        icon: 'Database',
        title: 'مصادر البيانات المتناثرة',
        description: 'البيانات متناثرة عبر أنظمة مختلفة بدون تكامل',
        consequences: [
          'رؤية مجزأة للأعمال',
          'قرارات مبنية على معلومات جزئية',
          'وقت ضائع في الجمع اليدوي',
          'مخاطر الأخطاء وعدم الاتساق'
        ],
        impact: '67% من الشركات تخسر 3 ساعات/يوم',
        color: 'red'
      },
      {
        id: 2,
        icon: 'Clock',
        title: 'التقارير اليدوية المستهلكة للوقت',
        description: 'عمليات إعداد التقارير اليدوية والمتكررة',
        consequences: [
          'تأخير في اتخاذ القرارات',
          'الموارد البشرية مقيدة بالمهام المتكررة',
          'التقارير قديمة عند إنشائها',
          'نقص في الاستجابة للتغييرات'
        ],
        impact: '45% من وقت المحللين مهدور',
        color: 'orange'
      },
      {
        id: 3,
        icon: 'TrendingDown',
        title: 'الرؤى المفقودة',
        description: 'الفرص التجارية غير المكتشفة في البيانات',
        consequences: [
          'فقدان الميزة التنافسية',
          'فرص النمو المفقودة',
          'المشاكل المكتشفة متأخراً',
          'عائد الاستثمار غير محسن'
        ],
        impact: '23% من الإيرادات المحتملة مفقودة',
        color: 'purple'
      },
      {
        id: 4,
        icon: 'Shield',
        title: 'حوكمة البيانات الضعيفة',
        description: 'نقص في السيطرة على جودة وأمان البيانات',
        consequences: [
          'جودة بيانات ضعيفة',
          'مخاطر الأمان والامتثال',
          'نقص في التتبع',
          'صعوبات في التوسع'
        ],
        impact: '31% من مشاريع البيانات تفشل',
        color: 'blue'
      }
    ]
  };

  const colorClasses = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      accent: 'bg-red-100'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      accent: 'bg-orange-100'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      accent: 'bg-purple-100'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      accent: 'bg-blue-100'
    }
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
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {content?.[currentLanguage]?.description}
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems?.[currentLanguage]?.map((problem, index) => {
            const colors = colorClasses?.[problem?.color];
            
            return (
              <motion.div
                key={problem?.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredProblem(problem?.id)}
                onMouseLeave={() => setHoveredProblem(null)}
              >
                <div className={`
                  relative bg-white rounded-2xl p-6 h-full border-2 portfolio-transition cursor-pointer
                  ${hoveredProblem === problem?.id ? colors?.border : 'border-slate-200'}
                  hover:portfolio-shadow-card
                `}>
                  {/* Icon */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    ${colors?.accent}
                  `}>
                    <Icon 
                      name={problem?.icon} 
                      size={24} 
                      className={colors?.icon}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    {problem?.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {problem?.description}
                  </p>

                  {/* Impact Badge */}
                  <div className={`
                    inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                    ${colors?.bg} ${colors?.icon}
                  `}>
                    <Icon name="AlertTriangle" size={12} className="mr-1" />
                    {problem?.impact}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: hoveredProblem === problem?.id ? 1 : 0,
                      scale: hoveredProblem === problem?.id ? 1 : 0.95
                    }}
                    transition={{ duration: 0.2 }}
                    className={`
                      absolute inset-0 rounded-2xl p-6 pointer-events-none
                      ${colors?.bg} border-2 ${colors?.border}
                    `}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-slate-800 mb-3">
                        {currentLanguage === 'fr' ? 'Conséquences :' :
                         currentLanguage === 'en' ? 'Consequences:' : 'العواقب:'}
                      </h4>
                      <ul className="space-y-2">
                        {problem?.consequences?.map((consequence, idx) => (
                          <li key={idx} className="flex items-start text-xs text-slate-700">
                            <Icon name="ArrowRight" size={12} className={`mr-2 mt-0.5 ${colors?.icon} flex-shrink-0`} />
                            <span>{consequence}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {currentLanguage === 'fr' ? 'Et si vous pouviez transformer ces défis en opportunités ?' :
               currentLanguage === 'en' ? 'What if you could transform these challenges into opportunities?' :
               'ماذا لو كان بإمكانك تحويل هذه التحديات إلى فرص؟'}
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              {currentLanguage === 'fr' ? 'Découvrez comment une approche structurée de la BI et de la Data Science peut révolutionner votre organisation.' :
               currentLanguage === 'en'? 'Discover how a structured approach to BI and Data Science can revolutionize your organization.' : 'اكتشف كيف يمكن لنهج منظم في ذكاء الأعمال وعلوم البيانات أن يحدث ثورة في مؤسستك.'}
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
              <Icon name="ArrowDown" size={20} />
              <span>
                {currentLanguage === 'fr' ? 'Voir la solution' :
                 currentLanguage === 'en'? 'See the solution' : 'انظر الحل'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;