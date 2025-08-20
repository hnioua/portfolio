import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectPortfolio = ({ currentLanguage }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const content = {
    fr: {
      title: 'Portfolio de Projets Réalisés',
      subtitle: 'Solutions concrètes et résultats mesurables',
      description: 'Découvrez une sélection de projets qui démontrent mon expertise en BI, Data Science et développement'
    },
    en: {
      title: 'Completed Projects Portfolio',
      subtitle: 'Concrete solutions and measurable results',
      description: 'Discover a selection of projects that demonstrate my expertise in BI, Data Science and development'
    },
    ar: {
      title: 'محفظة المشاريع المنجزة',
      subtitle: 'حلول ملموسة ونتائج قابلة للقياس',
      description: 'اكتشف مجموعة مختارة من المشاريع التي تظهر خبرتي في ذكاء الأعمال وعلوم البيانات والتطوير'
    }
  };

  const projects = {
    fr: [
      {
        id: 1,
        title: 'Système IoT de Détection d\'Incendies',
        category: 'Machine Learning & IoT',
        description: 'Système intelligent de détection précoce d\'incendies utilisant des capteurs IoT et des algorithmes de machine learning pour la prédiction et l\'alerte automatique.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        technologies: ['Python', 'TensorFlow', 'Arduino', 'IoT', 'OpenCV', 'Firebase'],
        features: [
          'Détection en temps réel avec précision de 94%',
          'Intégration de capteurs de température, fumée et flamme',
          'Algorithmes de machine learning pour réduction des fausses alarmes',
          'Interface web responsive pour monitoring',
          'Système d\'alertes SMS et email automatiques'
        ],
        results: {
          accuracy: '94%',
          responseTime: '< 30s',
          falseAlarms: '-78%'
        },
        demoUrl: 'https://fire-detection-demo.com',
        githubUrl: 'https://github.com/abdessamad/fire-detection-iot',
        status: 'Déployé',
        duration: '6 mois',
        team: '4 personnes',
        color: 'red'
      },
      {
        id: 2,
        title: 'Dashboard BI Performance Éducative',
        category: 'Business Intelligence',
        description: 'Tableau de bord interactif Power BI pour le suivi des performances éducatives de la région Souss Massa avec analyses prédictives et KPIs automatisés.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['Power BI', 'SQL Server', 'Python', 'DAX', 'Power Query', 'Excel'],
        features: [
          'Dashboards interactifs multi-niveaux (région, province, établissement)',
          'Analyses prédictives des effectifs scolaires',
          'KPIs automatisés avec alertes en temps réel',
          'Rapports automatisés mensuels et trimestriels',
          'Interface mobile-responsive pour directeurs'
        ],
        results: {
          timeReduction: '75%',
          accuracy: '92%',
          userSatisfaction: '89%'
        },
        demoUrl: 'https://powerbi-education-demo.com',
        githubUrl: null,
        status: 'En production',
        duration: '8 mois',
        team: '3 personnes',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Système OCR Intelligent',
        category: 'Computer Vision & NLP',
        description: 'Solution de reconnaissance optique de caractères avec traitement automatique des documents administratifs et extraction d\'informations structurées.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
        technologies: ['Python', 'OpenCV', 'Tesseract', 'spaCy', 'FastAPI', 'PostgreSQL'],
        features: [
          'Reconnaissance multi-langues (Français, Arabe, Anglais)',
          'Extraction automatique d\'entités nommées',
          'Classification intelligente des documents',
          'API REST pour intégration système',
          'Interface web pour validation manuelle'
        ],
        results: {
          accuracy: '96%',
          processingSpeed: '2.3s/doc',
          automation: '85%'
        },
        demoUrl: 'https://ocr-system-demo.com',
        githubUrl: 'https://github.com/abdessamad/intelligent-ocr',
        status: 'Déployé',
        duration: '4 mois',
        team: '2 personnes',
        color: 'green'
      },
      {
        id: 4,
        title: 'Analyse Prédictive Eurostat',
        category: 'Data Science & Analytics',
        description: 'Analyse approfondie des données Eurostat avec modèles prédictifs pour les tendances économiques et démographiques européennes.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['R', 'Python', 'Tableau', 'Scikit-learn', 'Pandas', 'Plotly'],
        features: [
          'Modèles de prédiction démographique et économique',
          'Visualisations interactives des tendances',
          'Analyses de corrélation multi-variables',
          'Rapports automatisés avec insights',
          'Dashboard exécutif avec KPIs clés'
        ],
        results: {
          accuracy: '88%',
          insights: '45+',
          dataPoints: '2.5M+'
        },
        demoUrl: 'https://eurostat-analysis-demo.com',
        githubUrl: 'https://github.com/abdessamad/eurostat-analysis',
        status: 'Complété',
        duration: '5 mois',
        team: '1 personne',
        color: 'purple'
      },
      {
        id: 5,
        title: 'Plateforme ETL Automatisée',
        category: 'Data Engineering',
        description: 'Pipeline ETL robuste pour l\'intégration et la transformation de données multi-sources avec monitoring et gestion d\'erreurs avancée.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
        technologies: ['Apache Airflow', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'Grafana'],
        features: [
          'Orchestration automatisée des workflows',
          'Intégration multi-sources (APIs, bases de données, fichiers)',
          'Monitoring en temps réel avec alertes',
          'Gestion avancée des erreurs et reprises',
          'Interface de monitoring avec métriques'
        ],
        results: {
          dataProcessed: '500K+/jour',
          uptime: '99.7%',
          errorReduction: '67%'
        },
        demoUrl: null,
        githubUrl: 'https://github.com/abdessamad/automated-etl',
        status: 'En production',
        duration: '7 mois',
        team: '3 personnes',
        color: 'orange'
      },
      {
        id: 6,
        title: 'Application de Gestion Scolaire',
        category: 'Web Development',
        description: 'Application web complète pour la gestion des établissements scolaires avec modules élèves, enseignants, notes et communication.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'Chart.js'],
        features: [
          'Gestion complète des élèves et enseignants',
          'Système de notation et bulletins automatisés',
          'Module de communication parents-école',
          'Tableaux de bord avec statistiques',
          'Système de sauvegarde automatique'
        ],
        results: {
          users: '500+',
          schools: '12',
          satisfaction: '92%'
        },
        demoUrl: 'https://school-management-demo.com',
        githubUrl: 'https://github.com/abdessamad/school-management',
        status: 'Déployé',
        duration: '6 mois',
        team: '2 personnes',
        color: 'cyan'
      }
    ],
    en: [
      {
        id: 1,
        title: 'IoT Fire Detection System',
        category: 'Machine Learning & IoT',
        description: 'Intelligent early fire detection system using IoT sensors and machine learning algorithms for prediction and automatic alerts.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        technologies: ['Python', 'TensorFlow', 'Arduino', 'IoT', 'OpenCV', 'Firebase'],
        features: [
          'Real-time detection with 94% accuracy',
          'Integration of temperature, smoke and flame sensors',
          'Machine learning algorithms for false alarm reduction',
          'Responsive web interface for monitoring',
          'Automatic SMS and email alert system'
        ],
        results: {
          accuracy: '94%',
          responseTime: '< 30s',
          falseAlarms: '-78%'
        },
        demoUrl: 'https://fire-detection-demo.com',
        githubUrl: 'https://github.com/abdessamad/fire-detection-iot',
        status: 'Deployed',
        duration: '6 months',
        team: '4 people',
        color: 'red'
      },
      {
        id: 2,
        title: 'Educational Performance BI Dashboard',
        category: 'Business Intelligence',
        description: 'Interactive Power BI dashboard for monitoring educational performance in Souss Massa region with predictive analytics and automated KPIs.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['Power BI', 'SQL Server', 'Python', 'DAX', 'Power Query', 'Excel'],
        features: [
          'Multi-level interactive dashboards (region, province, school)',
          'Predictive analytics for school enrollment',
          'Automated KPIs with real-time alerts',
          'Automated monthly and quarterly reports',
          'Mobile-responsive interface for directors'
        ],
        results: {
          timeReduction: '75%',
          accuracy: '92%',
          userSatisfaction: '89%'
        },
        demoUrl: 'https://powerbi-education-demo.com',
        githubUrl: null,
        status: 'In production',
        duration: '8 months',
        team: '3 people',
        color: 'blue'
      },
      {
        id: 3,
        title: 'Intelligent OCR System',
        category: 'Computer Vision & NLP',
        description: 'Optical character recognition solution with automatic processing of administrative documents and structured information extraction.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
        technologies: ['Python', 'OpenCV', 'Tesseract', 'spaCy', 'FastAPI', 'PostgreSQL'],
        features: [
          'Multi-language recognition (French, Arabic, English)',
          'Automatic named entity extraction',
          'Intelligent document classification',
          'REST API for system integration',
          'Web interface for manual validation'
        ],
        results: {
          accuracy: '96%',
          processingSpeed: '2.3s/doc',
          automation: '85%'
        },
        demoUrl: 'https://ocr-system-demo.com',
        githubUrl: 'https://github.com/abdessamad/intelligent-ocr',
        status: 'Deployed',
        duration: '4 months',
        team: '2 people',
        color: 'green'
      },
      {
        id: 4,
        title: 'Eurostat Predictive Analysis',
        category: 'Data Science & Analytics',
        description: 'In-depth analysis of Eurostat data with predictive models for European economic and demographic trends.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['R', 'Python', 'Tableau', 'Scikit-learn', 'Pandas', 'Plotly'],
        features: [
          'Demographic and economic prediction models',
          'Interactive trend visualizations',
          'Multi-variable correlation analyses',
          'Automated reports with insights',
          'Executive dashboard with key KPIs'
        ],
        results: {
          accuracy: '88%',
          insights: '45+',
          dataPoints: '2.5M+'
        },
        demoUrl: 'https://eurostat-analysis-demo.com',
        githubUrl: 'https://github.com/abdessamad/eurostat-analysis',
        status: 'Completed',
        duration: '5 months',
        team: '1 person',
        color: 'purple'
      },
      {
        id: 5,
        title: 'Automated ETL Platform',
        category: 'Data Engineering',
        description: 'Robust ETL pipeline for multi-source data integration and transformation with advanced monitoring and error handling.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
        technologies: ['Apache Airflow', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'Grafana'],
        features: [
          'Automated workflow orchestration',
          'Multi-source integration (APIs, databases, files)',
          'Real-time monitoring with alerts',
          'Advanced error handling and retries',
          'Monitoring interface with metrics'
        ],
        results: {
          dataProcessed: '500K+/day',
          uptime: '99.7%',
          errorReduction: '67%'
        },
        demoUrl: null,
        githubUrl: 'https://github.com/abdessamad/automated-etl',
        status: 'In production',
        duration: '7 months',
        team: '3 people',
        color: 'orange'
      },
      {
        id: 6,
        title: 'School Management Application',
        category: 'Web Development',
        description: 'Complete web application for school management with student, teacher, grade and communication modules.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'Chart.js'],
        features: [
          'Complete student and teacher management',
          'Grading system and automated report cards',
          'Parent-school communication module',
          'Dashboards with statistics',
          'Automatic backup system'
        ],
        results: {
          users: '500+',
          schools: '12',
          satisfaction: '92%'
        },
        demoUrl: 'https://school-management-demo.com',
        githubUrl: 'https://github.com/abdessamad/school-management',
        status: 'Deployed',
        duration: '6 months',
        team: '2 people',
        color: 'cyan'
      }
    ],
    ar: [
      {
        id: 1,
        title: 'نظام IoT لكشف الحرائق',
        category: 'التعلم الآلي وإنترنت الأشياء',
        description: 'نظام ذكي للكشف المبكر عن الحرائق باستخدام أجهزة استشعار IoT وخوارزميات التعلم الآلي للتنبؤ والتنبيه التلقائي.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        technologies: ['Python', 'TensorFlow', 'Arduino', 'IoT', 'OpenCV', 'Firebase'],
        features: [
          'كشف في الوقت الفعلي بدقة 94%',
          'تكامل أجهزة استشعار الحرارة والدخان واللهب',
          'خوارزميات التعلم الآلي لتقليل الإنذارات الكاذبة',
          'واجهة ويب متجاوبة للمراقبة',
          'نظام تنبيهات SMS والبريد الإلكتروني التلقائي'
        ],
        results: {
          accuracy: '94%',
          responseTime: '< 30 ثانية',
          falseAlarms: '-78%'
        },
        demoUrl: 'https://fire-detection-demo.com',
        githubUrl: 'https://github.com/abdessamad/fire-detection-iot',
        status: 'منشور',
        duration: '6 أشهر',
        team: '4 أشخاص',
        color: 'red'
      },
      {
        id: 2,
        title: 'لوحة معلومات ذكاء الأعمال للأداء التعليمي',
        category: 'ذكاء الأعمال',
        description: 'لوحة معلومات Power BI تفاعلية لمراقبة الأداء التعليمي في منطقة سوس ماسة مع التحليلات التنبؤية ومؤشرات الأداء الآلية.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['Power BI', 'SQL Server', 'Python', 'DAX', 'Power Query', 'Excel'],
        features: [
          'لوحات معلومات تفاعلية متعددة المستويات (منطقة، مقاطعة، مدرسة)',
          'التحليلات التنبؤية لتسجيل الطلاب',
          'مؤشرات الأداء الآلية مع التنبيهات في الوقت الفعلي',
          'التقارير الآلية الشهرية والفصلية',
          'واجهة متجاوبة للهاتف المحمول للمديرين'
        ],
        results: {
          timeReduction: '75%',
          accuracy: '92%',
          userSatisfaction: '89%'
        },
        demoUrl: 'https://powerbi-education-demo.com',
        githubUrl: null,
        status: 'في الإنتاج',
        duration: '8 أشهر',
        team: '3 أشخاص',
        color: 'blue'
      },
      {
        id: 3,
        title: 'نظام OCR الذكي',
        category: 'رؤية الحاسوب ومعالجة اللغة الطبيعية',
        description: 'حل التعرف البصري على الأحرف مع المعالجة التلقائية للوثائق الإدارية واستخراج المعلومات المنظمة.',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
        technologies: ['Python', 'OpenCV', 'Tesseract', 'spaCy', 'FastAPI', 'PostgreSQL'],
        features: [
          'التعرف متعدد اللغات (الفرنسية، العربية، الإنجليزية)',
          'استخراج الكيانات المسماة التلقائي',
          'تصنيف الوثائق الذكي',
          'REST API لتكامل النظام',
          'واجهة ويب للتحقق اليدوي'
        ],
        results: {
          accuracy: '96%',
          processingSpeed: '2.3 ثانية/وثيقة',
          automation: '85%'
        },
        demoUrl: 'https://ocr-system-demo.com',
        githubUrl: 'https://github.com/abdessamad/intelligent-ocr',
        status: 'منشور',
        duration: '4 أشهر',
        team: 'شخصان',
        color: 'green'
      },
      {
        id: 4,
        title: 'التحليل التنبؤي لـ Eurostat',
        category: 'علوم البيانات والتحليلات',
        description: 'تحليل متعمق لبيانات Eurostat مع النماذج التنبؤية للاتجاهات الاقتصادية والديموغرافية الأوروبية.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        technologies: ['R', 'Python', 'Tableau', 'Scikit-learn', 'Pandas', 'Plotly'],
        features: [
          'نماذج التنبؤ الديموغرافي والاقتصادي',
          'تصورات الاتجاهات التفاعلية',
          'تحليلات الارتباط متعددة المتغيرات',
          'التقارير الآلية مع الرؤى',
          'لوحة معلومات تنفيذية مع مؤشرات الأداء الرئيسية'
        ],
        results: {
          accuracy: '88%',
          insights: '45+',
          dataPoints: '2.5 مليون+'
        },
        demoUrl: 'https://eurostat-analysis-demo.com',
        githubUrl: 'https://github.com/abdessamad/eurostat-analysis',
        status: 'مكتمل',
        duration: '5 أشهر',
        team: 'شخص واحد',
        color: 'purple'
      },
      {
        id: 5,
        title: 'منصة ETL الآلية',
        category: 'هندسة البيانات',
        description: 'خط أنابيب ETL قوي لتكامل وتحويل البيانات متعددة المصادر مع المراقبة المتقدمة ومعالجة الأخطاء.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
        technologies: ['Apache Airflow', 'Python', 'PostgreSQL', 'Docker', 'Redis', 'Grafana'],
        features: [
          'تنسيق سير العمل الآلي',
          'التكامل متعدد المصادر (APIs، قواعد البيانات، الملفات)',
          'المراقبة في الوقت الفعلي مع التنبيهات',
          'معالجة الأخطاء المتقدمة والمحاولات',
          'واجهة المراقبة مع المقاييس'
        ],
        results: {
          dataProcessed: '500 ألف+/يوم',
          uptime: '99.7%',
          errorReduction: '67%'
        },
        demoUrl: null,
        githubUrl: 'https://github.com/abdessamad/automated-etl',
        status: 'في الإنتاج',
        duration: '7 أشهر',
        team: '3 أشخاص',
        color: 'orange'
      },
      {
        id: 6,
        title: 'تطبيق إدارة المدارس',
        category: 'تطوير الويب',
        description: 'تطبيق ويب كامل لإدارة المدارس مع وحدات الطلاب والمعلمين والدرجات والتواصل.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'Chart.js'],
        features: [
          'إدارة كاملة للطلاب والمعلمين',
          'نظام الدرجات وبطاقات التقرير الآلية',
          'وحدة التواصل بين الوالدين والمدرسة',
          'لوحات المعلومات مع الإحصائيات',
          'نظام النسخ الاحتياطي التلقائي'
        ],
        results: {
          users: '500+',
          schools: '12',
          satisfaction: '92%'
        },
        demoUrl: 'https://school-management-demo.com',
        githubUrl: 'https://github.com/abdessamad/school-management',
        status: 'منشور',
        duration: '6 أشهر',
        team: 'شخصان',
        color: 'cyan'
      }
    ]
  };

  const colorClasses = {
    red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', accent: 'bg-red-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', accent: 'bg-blue-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', accent: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', accent: 'bg-purple-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', accent: 'bg-orange-100' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'text-cyan-600', accent: 'bg-cyan-100' }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects?.[currentLanguage]?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentLanguage]);

  const currentProject = projects?.[currentLanguage]?.[activeProject];
  const colors = colorClasses?.[currentProject?.color];

  return (
    <section id="projets" ref={sectionRef} className="py-20 bg-slate-50">
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

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Project Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-4"
          >
            {projects?.[currentLanguage]?.map((project, index) => {
              const projectColors = colorClasses?.[project?.color];
              const isActive = activeProject === index;
              
              return (
                <motion.div
                  key={project?.id}
                  className={`
                    relative p-4 rounded-xl cursor-pointer portfolio-transition border-2
                    ${isActive ? `${projectColors?.bg} ${projectColors?.border}` : 'bg-white border-slate-200 hover:bg-slate-50'}
                  `}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                      ${isActive ? projectColors?.accent : 'bg-slate-100'}
                    `}>
                      <span className={`text-sm font-bold ${isActive ? projectColors?.icon : 'text-slate-600'}`}>
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`
                        text-sm font-bold mb-1 line-clamp-2
                        ${isActive ? 'text-slate-800' : 'text-slate-700'}
                      `}>
                        {project?.title}
                      </h3>
                      <p className={`
                        text-xs mb-2
                        ${isActive ? projectColors?.icon : 'text-slate-500'}
                      `}>
                        {project?.category}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Icon name="Clock" size={12} />
                        <span>{project?.duration}</span>
                        <Icon name="Users" size={12} />
                        <span>{project?.team}</span>
                      </div>
                    </div>
                  </div>
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="projectActiveIndicator"
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${project?.color}-500 to-${project?.color}-600 rounded-r-full`}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-3xl portfolio-shadow-card overflow-hidden">
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={currentProject?.image}
                  alt={currentProject?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`
                        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                        ${colors?.bg} ${colors?.icon}
                      `}>
                        {currentProject?.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {currentProject?.demoUrl && (
                        <a
                          href={currentProject?.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 portfolio-transition"
                        >
                          <Icon name="ExternalLink" size={16} />
                        </a>
                      )}
                      {currentProject?.githubUrl && (
                        <a
                          href={currentProject?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/30 portfolio-transition"
                        >
                          <Icon name="Github" size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {currentProject?.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {currentProject?.description}
                    </p>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-4
                    ${currentProject?.status === 'Déployé' || currentProject?.status === 'Deployed' || currentProject?.status === 'منشور' ? 'bg-green-100 text-green-700' :
                      currentProject?.status === 'En production'|| currentProject?.status === 'In production' || currentProject?.status === 'في الإنتاج' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}
                  `}>
                    {currentProject?.status}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    {currentLanguage === 'fr' ? 'Fonctionnalités Principales' :
                     currentLanguage === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
                  </h4>
                  <ul className="space-y-2">
                    {currentProject?.features?.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <Icon name="CheckCircle" size={16} className={`${colors?.icon} mt-1 flex-shrink-0`} />
                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    {currentLanguage === 'fr' ? 'Technologies Utilisées' :
                     currentLanguage === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject?.technologies?.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${colors?.bg} ${colors?.icon}`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    {currentLanguage === 'fr' ? 'Résultats Obtenus' :
                     currentLanguage === 'en' ? 'Results Achieved' : 'النتائج المحققة'}
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentProject?.results)?.map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`text-center p-4 rounded-xl ${colors?.bg}`}
                      >
                        <div className={`text-xl font-bold ${colors?.icon} mb-1`}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-600 font-medium capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-2 mt-8"
        >
          {projects?.[currentLanguage]?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`
                w-3 h-3 rounded-full portfolio-transition
                ${activeProject === index ? 'bg-primary' : 'bg-slate-300 hover:bg-slate-400'}
              `}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;